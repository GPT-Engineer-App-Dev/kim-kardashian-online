import { Box, VStack, Heading, Text, Image, Container } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <Box>
      <Navbar />

      <Container maxW="container.lg" my={12}>
        <VStack spacing={6} align="start">
          <Heading size="xl">About Kim Kardashian</Heading>

          <Text fontSize="lg">Kim Kardashian is a multi-talented entrepreneur, reality TV star, and influencer. Born and raised in Los Angeles, California, Kim first gained public attention as a friend and stylist of Paris Hilton. However, she soon became a star in her own right with the premiere of the hit E! reality series "Keeping Up with the Kardashians" in 2007.</Text>

          <Image src="https://images.unsplash.com/photo-1547637205-fde0c9011f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxraW0lMjBrYXJkYXNoaWFuJTIwZ2xhbW91cnxlbnwwfHx8fDE3MTMxNzE0NTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kim Kardashian glamour shot" objectFit="cover" w="100%" />

          <Text fontSize="lg">Over the past decade, Kim has built a massive business empire, launching successful ventures in the beauty, fashion, and tech industries. In 2017, she founded KKW Beauty, a cosmetics line that generated over $100 million in revenue within its first year. Kim has also released multiple fragrances, a shapewear line called SKIMS, and a mobile game, "Kim Kardashian: Hollywood", which has been downloaded over 60 million times.</Text>

          <Image src="https://images.unsplash.com/photo-1580656054050-0e5732f6da49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw1fHxraW0lMjBrYXJkYXNoaWFuJTIwYnVzaW5lc3N8ZW58MHx8fHwxNzEzMTcxNDc2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kim Kardashian business portrait" objectFit="cover" w="100%" />

          <Text fontSize="lg">In addition to her thriving career, Kim is also a dedicated mother of four. She has been married twice, most notably to rapper Kanye West from 2014 to 2022. Throughout her journey in the spotlight, Kim has faced her share of challenges and controversies. However, she has consistently shown resilience and an unwavering commitment to her family and her passions.</Text>

          <Text fontSize="lg">With over 300 million followers on Instagram, Kim is one of the most influential celebrities in the world. She has leveraged her massive platform to advocate for important causes, such as criminal justice reform and raising awareness for the Armenian genocide. As she continues to expand her empire and make her mark on the world, there's no doubt that Kim Kardashian's star will only continue to rise.</Text>
        </VStack>
      </Container>

      <Footer />
    </Box>
  );
};

export default About;
