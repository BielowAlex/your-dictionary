import React from "react";
import { Hero } from "@/components";
import { Tutorial } from "@/components/features/Tutorial";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Hero />
      <Tutorial />
    </main>
  );
}
