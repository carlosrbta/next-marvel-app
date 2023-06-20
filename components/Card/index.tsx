import React, { useMemo } from "react";
import { Container, Image, Title } from "./styles";

export const Card = ({ title, thumbnail }) => {
  const image = useMemo(() => {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }, [thumbnail]);

  return (
    <Container>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
    </Container>
  );
};
