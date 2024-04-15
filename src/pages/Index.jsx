import { Box, VStack, HStack, Heading, Text, Image, Link, Container, Divider } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navbar */}
      <Box bg="white" py={4} borderBottomWidth={1} borderColor="gray.200">
        <Container maxW="container.lg">
          <HStack justify="space-between">
            <Heading fontFamily="serif">Kim Kardashian</Heading>
            <HStack spacing={8}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact</Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Hero */}
      <Box>
        <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraW0lMjBrYXJkYXNoaWFuJTIwZ2xhbW91ciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzE3MTMxNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Kim Kardashian" objectFit="cover" w="100%" h={["300px", "400px", "500px"]} />
        <Container maxW="container.lg" mt={8}>
          <Heading size="2xl" fontFamily="serif" textAlign="center">
            Beauty. Style. Influence.
          </Heading>
        </Container>
      </Box>

      {/* Bio */}
      <Container maxW="container.lg" my={12}>
        <VStack spacing={6} align="start">
          <Heading size="xl">About Kim</Heading>
          <Text fontSize="lg">Kim Kardashian is a reality TV star, influencer and entrepreneur. She rose to fame on the TV series Keeping Up with the Kardashians and has launched successful beauty and fashion brands. Kim is known for her glamorous style and is one of the most followed celebrities on social media.</Text>
        </VStack>
      </Container>

      {/* Social Links */}
      <Container maxW="container.lg" my={12}>
        <VStack spacing={6}>
          <Heading size="xl">Follow Kim</Heading>
          <HStack spacing={8}>
            <Link href="https://www.instagram.com/kimkardashian" isExternal>
              <FaInstagram size={32} />
            </Link>
            <Link href="https://twitter.com/KimKardashian" isExternal>
              <FaTwitter size={32} />
            </Link>
            <Link href="https://www.facebook.com/KimKardashian" isExternal>
              <FaFacebook size={32} />
            </Link>
            <Link href="https://www.tiktok.com/@kimkardashian" isExternal>
              <FaTiktok size={32} />
            </Link>
          </HStack>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="black" py={8} color="white">
        <Container maxW="container.lg" centerContent>
          <Text>&copy; 2023 Kim Kardashian. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
