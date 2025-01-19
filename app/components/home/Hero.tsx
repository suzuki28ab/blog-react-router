import { Box, Heading, Text, useColorModeValue } from "@yamada-ui/react";

export const Hero = () => {
  return (
    <Box
      as="section"
      position="relative"
      bg={useColorModeValue('brand.50', 'brand.100')}
      py={{ base: 16, md: 28 }}
      px={{ base: 4, md: 8 }}
      textAlign="center"
    >
      <Heading
        fontSize={{ base: '3xl', md: '5xl' }}
        mb={4}
        color="brand.300"
      >
        Welcome to My Blog
      </Heading>
      <Text
        maxW="600px"
        mx="auto"
        color="gray.600"
        fontSize={{ base: 'md', md: 'lg' }}
      >
        日々勉強したことを記録していきます。
      </Text>
    </Box>
  );
};
