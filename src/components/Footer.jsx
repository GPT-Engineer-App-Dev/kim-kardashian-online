import { Box, Text, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="black" py={8} color="white">
      <Container maxW="container.lg" centerContent>
        <Text>&copy; 2023 Kim Kardashian. All rights reserved.</Text>
      </Container>
    </Box>
  );
};

export default Footer;
