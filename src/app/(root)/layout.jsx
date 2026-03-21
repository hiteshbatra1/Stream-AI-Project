import { auth } from "@/lib/auth";
import { currentUser } from "@/modules/authentication/actions";
import { getAllChats } from "@/modules/chat/actions";
import RootLayoutClient from "@/modules/chat/components/root-layout-client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = await currentUser();

  const { data: chats } = await getAllChats();

  if (!session) {
    return redirect("/sign-in");
  }

  return (
    <RootLayoutClient user={user} chats={chats}>
      {children}
    </RootLayoutClient>
  );
};

export default layout;
