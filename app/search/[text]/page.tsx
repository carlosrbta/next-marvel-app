"use client";

import Characters from "~/components/Characters";
import Layout from "~/components/Layout";

export default function Page({ params }: { params: { text: string } }) {
  return (
    <Layout>
      <Characters text={params.text} />
    </Layout>
  );
}
