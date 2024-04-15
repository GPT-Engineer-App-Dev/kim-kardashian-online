import { Box, Container, Heading, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <Box>
      <Navbar />

      <Container maxW="container.lg" my={12}>
        <Heading size="xl" mb={8}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          <Box>
            <Image src="https://example.com/kuwtk.jpg" alt="Keeping Up with the Kardashians" mb={4} />
            <Heading size="lg" mb={2}>
              Keeping Up with the Kardashians
            </Heading>
            <Text mb={4}>The hit reality TV series that made Kim a household name, running for 20 seasons.</Text>
            <Link href="https://example.com/kuwtk">Learn more</Link>
          </Box>

          <Box>
            <Image src="https://example.com/skims.jpg" alt="SKIMS" mb={4} />
            <Heading size="lg" mb={2}>
              SKIMS
            </Heading>
            <Text mb={4}>Kim's hugely successful shapewear and loungewear brand valued at over $3 billion.</Text>
            <Link href="https://skims.com">Shop now</Link>
          </Box>

          <Box>
            <Image src="https://example.com/kkwbeauty.jpg" alt="KKW Beauty" mb={4} />
            <Heading size="lg" mb={2}>
              KKW Beauty
            </Heading>
            <Text mb={4}>Kim's cosmetics company featuring her signature makeup and fragrances.</Text>
            <Link href="https://kkwbeauty.com">Shop now</Link>
          </Box>

          <Box>
            <Image src="https://example.com/kimkardashianhollywood.jpg" alt="Kim Kardashian: Hollywood" mb={4} />
            <Heading size="lg" mb={2}>
              Kim Kardashian: Hollywood
            </Heading>
            <Text mb={4}>Highly addictive mobile game that allows fans to experience Kim's celebrity lifestyle.</Text>
            <Link href="https://example.com/kimkardashianhollywood">Play now</Link>
          </Box>

          <Box>
            <Image src="https://example.com/endorsements.jpg" alt="Endorsements" mb={4} />
            <Heading size="lg" mb={2}>
              Endorsements
            </Heading>
            <Text mb={4}>Kim has endorsed many top brands and products over the years.</Text>
            <Link href="https://example.com/endorsements">See deals</Link>
          </Box>
        </SimpleGrid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Projects;
