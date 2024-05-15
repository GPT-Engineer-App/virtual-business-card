import { Box, Button, Input, FormControl, FormLabel, Heading } from "@chakra-ui/react";

function Login() {
  return (
    <Box maxW="md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
      <Heading mb={6}>Login</Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" mb={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="teal" type="submit" width="full">
        Login
      </Button>
    </Box>
  );
}

export default Login;
