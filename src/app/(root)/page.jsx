import { Button } from "@/components/ui/button";
import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-button";
import ChatMessageView from "@/modules/chat/components/chat-message-view";

import React from "react";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ChatMessageView user={user} />
    </div>
  );
}
