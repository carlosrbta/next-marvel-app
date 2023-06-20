"use client";

import Characters from "~/components/Characters";
import { Navbar } from "~/components/Navbar";

export default function Page({ params }: { params: { text: string } }) {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <Characters text={params.text} />
    </main>
  );
}
