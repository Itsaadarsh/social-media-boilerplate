import { Box } from '@chakra-ui/layout';
import React from 'react';

interface WrapperProps {
  varient: 'small' | 'regular';
}

export const Wrapper: React.FC<WrapperProps> = ({ children, varient = 'regular' }) => {
  return (
    <Box maxW={varient === 'regular' ? '800px' : '400px'} w='100%' mx='auto' mt={8}>
      {children}
    </Box>
  );
};
