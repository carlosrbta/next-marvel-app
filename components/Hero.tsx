"use client";

import { FormEvent, ChangeEvent, useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    if (search) router.push("search/" + search);
  };

  return (
    <Stack
      as={Box}
      textAlign={"center"}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        as={"form"}
        spacing={"12px"}
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormControl>
          <Input
            size="lg"
            borderWidth={1}
            id={"search"}
            placeholder={"Search by name or part of the hero's name."}
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
        </FormControl>
      </Stack>
    </Stack>
  );
}
