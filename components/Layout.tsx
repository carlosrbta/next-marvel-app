import { Box, Container, Flex, Spacer } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Flex alignItems="center" bg="#000" color="#FFFFFF">
        <Container maxW="container.lg" my={{ base: 0, md: 4 }}>
          <Box>Marvel App</Box>
          <Spacer />
        </Container>
      </Flex>
      <Container maxW="container.lg" my={{ base: 0, md: 4 }}>
        {children}
      </Container>
    </Box>
  );
}
