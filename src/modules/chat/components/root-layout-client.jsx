"use client";

import React, { useEffect, useState } from "react";
import ChatSideBar from "./chat-sidebar";
import Header from "./header";
import { useSidebarStore } from "../hooks/use-sidebar";
import { Button } from "@/components/ui/button";

const RootLayoutClient = ({ user, chats, children }) => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebarStore();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Close sidebar when switching to desktop
    if (!isMobile && isOpen) {
      closeSidebar();
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobile, isOpen, closeSidebar]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar - hidden on mobile, visible on md and up */}
      <div className="hidden md:block md:w-64 h-screen overflow-hidden border-r border-border">
        <ChatSideBar user={user} chats={chats} />
      </div>

      {/* Mobile overlay when sidebar is open */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile sidebar - positioned fixed when open */}
      {isMobile && (
        <div
          className={`fixed left-0 top-0 h-screen w-64 z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ChatSideBar user={user} chats={chats} />
        </div>
      )}

      {/* Main content area */}
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        <Header
          onMenuClick={isMobile ? toggleSidebar : undefined}
          showMenu={isMobile}
        />
        <div className="flex-1 overflow-auto w-full">{children}</div>
      </main>
    </div>
  );
};

export default RootLayoutClient;
