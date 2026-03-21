"use client";

import { ModeToggle } from "@/components/ui/mode-toogle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from "react";

const Header = ({ onMenuClick, showMenu }) => {
  return (
    <div className="flex h-14 w-full flex-row justify-between items-center border-b border-border bg-sidebar px-4 py-2 gap-4">
      {showMenu && (
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}
      <div className="flex-1" />
      <ModeToggle />
    </div>
  );
};

export default Header;
