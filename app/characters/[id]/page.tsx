"use client";

import Character from "~/components/Character";
import Layout from "~/components/Layout";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <Layout>
      <Character id={params.id} />
    </Layout>
  );
}
