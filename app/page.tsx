"use client";

import { Hero } from "~/components/Hero";
import { Navbar } from "~/components/Navbar";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}
