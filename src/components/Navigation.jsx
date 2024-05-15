import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
          Home
        </Link>
        <Link as={RouterLink} to="/signup" color="white" ml={4}>
          Sign Up
        </Link>
        <Link as={RouterLink} to="/login" color="white" ml={4}>
          Login
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;
