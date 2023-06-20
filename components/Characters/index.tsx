"use client";

import useSWR from "swr";
import { fetcher } from "~/utils/fetcher";
import { Card } from "../Card";
import { Wrapper, Title } from "./styles";
import { GridColumn, GridContainer, GridRow } from "../Common";

export default function Characters({ text }: { text: string }) {
  const { data, error, isLoading } = useSWR(
    "/api/marvel?nameStartsWith=sp",
    fetcher
  );

  if (error) return <div>falhou em carregar</div>;
  if (isLoading) return <div>carregando...</div>;

  return (
    <div className="container mx-auto px-4">
      <Title>Search Results</Title>

      <GridContainer>
        <GridRow>
          {data.results.map((item: any, idx: any) => (
            <GridColumn sm="6" lg="4" key={idx}>
              <Card title={item.name} thumbnail={item.thumbnail} />
            </GridColumn>
          ))}
        </GridRow>
      </GridContainer>

      <Wrapper>
        {data.results.map((item: any, idx: any) => (
          <Card key={idx} title={item.name} thumbnail={item.thumbnail} />
        ))}
      </Wrapper>
    </div>
  );
}
