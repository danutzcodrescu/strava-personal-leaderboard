import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { WeatherIcon } from './WeatherIcon';
import { WindData } from './WindData';

interface Props {
  windSpeed?: number | null;
  windDir?: number | null;
  temperature?: number | null;
  conditions?: string | null;
}

export function WeatherData(props: Props) {
  return (
    <Box
      position="absolute"
      left="15px"
      bottom="15px"
      backgroundColor="black"
      borderRadius="25px"
      height="45px"
      zIndex="modal"
      color="white"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap="2"
      paddingY={2}
      px={3}
      fontSize="0.7rem"
      fontWeight="bold"
    >
      {props.temperature ? (
        <Box fontSize="1rem">
          {Math.round(props.temperature)}
          &deg;
        </Box>
      ) : null}
      {props.conditions ? <WeatherIcon conditions={props.conditions} /> : null}

      {props.windSpeed || props.windDir ? (
        <WindData windDirection={props.windDir!} windSpeed={props.windSpeed!} />
      ) : null}
    </Box>
  );
}
