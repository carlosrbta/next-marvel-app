"use client";

import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "~/utils/fetcher";
import {
  SimpleGrid,
  Text,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";

export default function Character({ id }: { id: number }) {
  const { data, error, isLoading } = useSWR(`/api/marvel?id=${id}`, fetcher);

  if (error) return <div>falhou em carregar</div>;
  if (isLoading) return <div>carregando...</div>;

  console.log(data);

  return (
    <Card maxW="sm" variant={"elevated"}>
      <CardBody>
        <Image
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={data.name}
          borderRadius="ms"
          boxSize="250px"
          objectFit="cover"
        />
        <Stack mt="6" spacing="3">
          <Heading size="sm">{data.name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
}
