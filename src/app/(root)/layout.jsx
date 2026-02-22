import { auth } from "@/lib/auth";
import { currentUser } from "@/modules/authentication/actions";
import ChatSideBar from "@/modules/chat/components/chat-sidebar";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = await currentUser();

  if (!session) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <ChatSideBar user={user} />
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
};

export default layout;
