import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Heading, Text, Container, VStack, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function App() {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={10} align="start">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h1" size="2xl">
            Hi, I'm Simarjeet Arora
          </Heading>
          <Text fontSize="xl" mt={4}>
            A passionate React developer building minimal & animated portfolios.
          </Text>
          <Button mt={6} colorScheme="teal" size="md">
            Contact Me
          </Button>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <Text>
            Explore some of my projects on{" "}
            <Link href="https://github.com/your-username" color="teal.500" isExternal>
              GitHub
            </Link>
            .
          </Text>
        </MotionBox>
      </VStack>
    </Container>
  );
}

export default App
