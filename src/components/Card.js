import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing={4} bgColor='white' alignItems='flex-start' borderRadius='2xl'>
      <Image src={imageSrc} borderRadius='2xl'/>
      <VStack padding='4' alignItems='flex-start' spacing={4} >
        <Heading size='md' color='black'>{title}</Heading>
        <Text color='grey'>{description}</Text>
        <HStack spacing={2} color='black' alignItems='center'>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
