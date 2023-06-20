"use client";

import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "~/utils/fetcher";
import {
  SimpleGrid,
  Card,
  CardBody,
  Stack,
  Image,
  Heading,
  Skeleton,
} from "@chakra-ui/react";
import NotFound from "./NotFound";
import ErrorResult from "./ErrorResult";

export default function Characters({ text }: { text: string }) {
  const { data, error, isLoading } = useSWR(
    `/api/marvel?nameStartsWith=${text}`,
    fetcher
  );

  if (error) return <ErrorResult />;

  if (isLoading)
    return (
      <SimpleGrid minChildWidth="200px" spacing="20px">
        {[1, 2, 3, 4].map((item: any, idx: any) => (
          <Skeleton isLoaded={false} key={idx}>
            <Card maxW="sm" variant={"elevated"}>
              <CardBody>
                <Image
                  src={""}
                  alt={"item.name"}
                  borderRadius="ms"
                  boxSize="250px"
                  objectFit="cover"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="sm">{"item.name"}</Heading>
                </Stack>
              </CardBody>
            </Card>
          </Skeleton>
        ))}
      </SimpleGrid>
    );

  if (!isLoading && data.results.length === 0) {
    return <NotFound />;
  }

  return (
    <SimpleGrid minChildWidth="200px" spacing="20px">
      {data.results.map((item: any, idx: any) => (
        <Link href={`/characters/${item.id}`} key={idx}>
          <Card maxW="sm" variant={"elevated"}>
            <CardBody>
              <Image
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt={item.name}
                borderRadius="ms"
                boxSize="250px"
                objectFit="cover"
              />
              <Stack mt="6" spacing="3">
                <Heading noOfLines={1} size="sm">
                  {item.name}
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
}
