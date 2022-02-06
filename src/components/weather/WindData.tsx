import { Box } from '@chakra-ui/react';
import * as React from 'react';

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
      fontSize="0.7rem"
      fontWeight="bold"
      border="3px solid"
      borderColor="white"
      borderRadius="50%"
      position="relative"
      marginRight="0"
      _before={{
        content: '""',
        display: 'block',
        width: '0',
        height: '18px',
        borderWidth: '9px 5px',
        borderStyle: 'solid',
        borderColor: `white transparent transparent transparent`,
        position: 'absolute',
        top: '-4px',
        left: '8px',
        transform: `rotate(${props.windDirection}deg)`,
      }}
    >
      {props.windSpeed?.toFixed(0)}
    </Box>
  );
}
