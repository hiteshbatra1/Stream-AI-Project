"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <nav className="w-full px-6 py-6 md:px-10 flex justify-center md:justify-start bg-gray-900">
        <div className="w-32 md:w-40 h-auto">
          <span className="text-blue-400  text-2xl font-bold">StreamAI</span>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-20 md:pb-32">
        <h1 className="text-2xl md:text-3xl font-extrabold text-foreground text-center">
          Welcome to StreamAI
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground font-semibold text-center px-2">
          Sign in below with GitHub account
        </p>

        <Button
          variant={"default"}
          className={
            "w-full max-w-sm mt-6 md:mt-8 px-6 md:px-7 py-6 md:py-7 flex flex-row justify-center items-center cursor-pointer text-sm md:text-base"
          }
          onClick={() =>
            signIn.social({
              provider: "github",
              callbackURL: "/",
            })
          }
        >
          <Image src={"/github.svg"} alt="Github" width={24} height={24} />
          <span className="font-bold ml-2">Sign in with Github</span>
        </Button>
      </main>

      <footer className="w-full px-6 py-6 md:px-10 flex justify-center bg-gray-900">
        <div className="text-center">
          <span className="text-white text-sm md:text-lg font-bold">
            © 2026 StreamAI. Created by{" "}
            <span className="text-blue-400">
              <Link href="https://www.linkedin.com/in/hitesh-batra-h">
                Hitesh Batra
              </Link>
            </span>
            . All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default page;
