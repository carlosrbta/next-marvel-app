"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Wrapper } from "./styles";
import { SearchBar } from "../SearchBar";

export const Hero = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    if (search) router.push("search/" + search);
  };

  return (
    <Wrapper>
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search by name or part of the hero's name."
        handleSubmit={handleSubmit}
      />
    </Wrapper>
  );
};
