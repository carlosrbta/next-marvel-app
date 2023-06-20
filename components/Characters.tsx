"use client";

import useSWR from "swr";
import { fetcher } from "~/utils/fetcher";
import { SimpleGrid, Box } from "@chakra-ui/react";

export default function Characters({ text }: { text: string }) {
  const { data, error, isLoading } = useSWR(
    "/api/marvel?nameStartsWith=sp",
    fetcher
  );

  if (error) return <div>falhou em carregar</div>;
  if (isLoading) return <div>carregando...</div>;

  return (
    <SimpleGrid minChildWidth="120px" spacing="40px">
      {data.results.map((item: any, idx: any) => (
        <Box bg="tomato" height="80px" key={idx}></Box>
      ))}
    </SimpleGrid>
  );
}
