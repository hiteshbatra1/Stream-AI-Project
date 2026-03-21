"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-12 md:py-32">
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-2 gap-y-4">
        <h1 className="text-2xl md:text-3xl font-extrabold text-foreground text-center">
          Welcome to
        </h1>
        <div className="w-32 md:w-40 h-auto">
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={200}
            height={200}
            priority
          />
        </div>
      </div>

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
    </section>
  );
};

export default page;
