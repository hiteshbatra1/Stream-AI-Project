import { Button } from "@/components/ui/button";
import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-button";

import React from "react";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <UserButton user={user} />
    </div>
  );
}
