import { Box, HStack, Heading, Link, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="white" py={4} borderBottomWidth={1} borderColor="gray.200">
      <Container maxW="container.lg">
        <HStack justify="space-between">
          <Heading fontFamily="serif">Kim Kardashian</Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/">
              Home
            </Link>
            <Link as={RouterLink} to="/about">
              About
            </Link>
            <Link as={RouterLink} to="/projects">
              Projects
            </Link>
            <Link as={RouterLink} to="/projects">
              Projects
            </Link>
            <Link as={RouterLink} to="/gallery">
              Gallery
            </Link>
            <Link as={RouterLink} to="/gallery">
              Gallery
            </Link>
            <Link as={RouterLink} to="/contact">
              Contact
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
