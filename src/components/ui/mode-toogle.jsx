"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Button } from "@/components/ui/button";
import { Sunrise, Sunset } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        <Sunset className="size-5" />
      ) : (
        <Sunrise size={"size-5"} />
      )}
    </Button>
  );
}
