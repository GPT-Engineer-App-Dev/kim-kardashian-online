import React from 'react';
import { Box, SimpleGrid, Image } from '@chakra-ui/react';

const Gallery = () => {
  const images = [
    'https://example.com/kim1.jpg',
    'https://example.com/kim2.jpg',
    'https://example.com/kim3.jpg',
    'https://example.com/kim4.jpg',
    'https://example.com/kim5.jpg',
    'https://example.com/kim6.jpg',
    'https://example.com/kim7.jpg',
    'https://example.com/kim8.jpg',
    'https://example.com/kim9.jpg',
    'https://example.com/kim10.jpg',
    'https://example.com/kim11.jpg',
    'https://example.com/kim12.jpg',
  ];

  return (
    <Box p={4}>
      <SimpleGrid columns={[2, 3, 4]} spacing={4}>
        {images.map((url, index) => (
          <Image 
            key={index}
            src={url}
            alt={`Kim Kardashian ${index + 1}`}
            objectFit="cover"
            cursor="pointer"
            onClick={() => window.open(url, '_blank')}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;