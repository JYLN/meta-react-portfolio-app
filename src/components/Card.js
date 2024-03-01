import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack backgroundColor='white' color='black' borderRadius='xl'>
      <Image src={imageSrc} borderRadius='xl' />

      <VStack spacing={4} p={4} alignItems='flex-start'>
        <Heading as='h3' size='md'>
          {title}
        </Heading>
        <Text color='#65758c' fontSize='lg'>
          {description}
        </Text>
        <HStack alignItems='center'>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size='1x' />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
