import React from "react";
import Link from "next/link";
import { Header, List, ListItem, Logo, LogoWrapper, Nav } from "./styles";

const leftItems = ["Home"];
const rightItems = [""];

export const Navbar = () => {
  return (
    <>
      <Header>
        <Nav className="container mx-auto px-4">
          <List>
            {leftItems.map((item, idx) => (
              <ListItem key={idx}>{item}</ListItem>
            ))}
          </List>
          <LogoWrapper>
            <Link href="/">
              <Logo />
            </Link>
          </LogoWrapper>
          <List>
            {rightItems.map((item, idx) => (
              <ListItem key={idx}>{item}</ListItem>
            ))}
          </List>
        </Nav>
      </Header>
    </>
  );
};
