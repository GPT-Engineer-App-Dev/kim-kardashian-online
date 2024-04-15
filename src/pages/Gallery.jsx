import React from 'react';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';

const Gallery = () => {
  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {}
        <Image src="image1.jpg" alt="Kim Kardashian" />
        {}
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;