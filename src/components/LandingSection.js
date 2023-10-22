import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Engy!";
const bio1 = "A frontend developer and A Super Model";
const bio2 = "specialised in React!";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#231942"
  >
    <VStack spacing={14}>
      <VStack spacing={3}>
        <Avatar src='https://i.pravatar.cc/?img=9' size='2xl' />
        <Heading size='md' fontFamily=''>{greeting}</Heading>
      </VStack>
      <VStack spacing={2}>
        <Heading size='2xl'>{bio1}</Heading>
        <Heading size='2xl'>{bio2}</Heading>
      </VStack>
      
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
