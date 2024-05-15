import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <IconButton aria-label="Toggle color mode" icon={colorModeIcon} onClick={toggleColorMode} alignSelf="flex-end" mb={4} />
      <VStack spacing={8}>
        <Box boxSize="150px" borderRadius="full" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MTU2Njk5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
        </Box>
        <Heading as="h1" size="2xl">
          John Doe
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Full Stack Developer | JavaScript Enthusiast | Open Source Contributor
        </Text>
        <HStack spacing={4}>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://twitter.com/johndoe" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
        </HStack>
        <Button colorScheme="teal" size="lg">
          Contact Me
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
