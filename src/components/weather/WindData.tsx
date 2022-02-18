import { Box, Icon } from '@chakra-ui/react';
import * as React from 'react';
import { ArrowDown, ArrowUp } from '../shared/Icons';

interface Props {
  windSpeed: number | null;
  windDirection: number;
}

export function WindData(props: Props) {
  return (
    <Box
      width="27px"
      height="27px"
      lineHeight="25px"
      textAlign="center"
      fontSize="0.5rem"
      fontWeight="bold"
      border="3px solid"
      borderColor="white"
      borderRadius="50%"
      position="relative"
      marginRight="0"
    >
      <Box
        color="white"
        position="absolute"
        zIndex="modal"
        transform={`rotate(${props.windDirection}deg)`}
        width="100%"
        height="100%"
        display="grid"
        placeItems="flex-start center"
        fontSize="2em"
      >
        <Icon as={ArrowDown} />
      </Box>
      {props.windSpeed?.toFixed(0)}
    </Box>
  );
}
