import { Box, Container, Flex, Spacer } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxW="container.sm" my={{ base: 0, md: 4 }}>
      <Flex alignItems="center">
        <Box>Marvel App</Box>
        <Spacer />
      </Flex>
      <Box my={{ base: 0, md: 4 }}>{children}</Box>
    </Container>
  );
}
