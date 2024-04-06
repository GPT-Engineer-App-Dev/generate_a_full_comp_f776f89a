import React from "react";
import { Box, Button, Container, Text, VStack, Input, useToast, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

// Theme configuration for Chakra UI
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.800",
        color: "white",
      },
    },
  },
});

const Index = () => {
  const toast = useToast();

  const handleApiMockRequest = async () => {
    // Mock API request - in a real-world scenario, you would use fetch or axios to make API calls
    toast({
      title: "API Request",
      description: "Pretend we are sending an API request...",
      status: "info",
      duration: 3000,
      isClosable: true,
    });

    // Simulate an API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "API Response",
      description: "Pretend we received a successful response from an AI API!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider theme={theme}>
      <Box position="relative" height="100vh" width="100vw" overflow="hidden">
        {/* Mock Video Background */}
        <Box as="video" autoPlay loop muted width="100%" height="100%" objectFit="cover" position="absolute" top="0" left="0" zIndex="-1">
          {/* Replace with an actual video source */}
          <source src="path_to_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
        <Container position="relative" zIndex="1" centerContent>
          <VStack spacing="4" marginTop="20vh">
            <Text fontSize="6xl" fontWeight="bold">
              Cutting Edge AI
            </Text>
            <Text fontSize="xl" textAlign="center">
              Explore the latest in artificial intelligence technology
            </Text>
            <Input placeholder="Search AI topics..." size="lg" />
            <Button leftIcon={<FaPlay />} colorScheme="blue" size="lg" onClick={handleApiMockRequest}>
              Start Learning
            </Button>
            <Button leftIcon={<FaInfoCircle />} variant="ghost" size="lg" onClick={() => alert("More Info")}>
              More Information
            </Button>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
