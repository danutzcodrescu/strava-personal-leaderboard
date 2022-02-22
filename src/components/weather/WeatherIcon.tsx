/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCloudShowersHeavy,
  faCloud,
  faCloudSun,
  faCloudSunRain,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { useToken } from '@chakra-ui/react';

function Icon(conditions: string, color: string, gray: string) {
  switch (conditions) {
    case 'Rain':
    case 'Rain, Overcast':
      return (
        <FontAwesomeIcon icon={faCloudShowersHeavy} color={gray} size="2x" />
      );
    case 'Overcast':
      return <FontAwesomeIcon icon={faCloud} color={gray} size="2x" />;
    case 'Partially cloudy':
      return <FontAwesomeIcon icon={faCloudSun} size="2x" />;
    case 'Rain, Partially cloudy':
      return <FontAwesomeIcon icon={faCloudSunRain} size="2x" />;
    case 'Clear':
      return <FontAwesomeIcon icon={faSun} color={color} size="2x" />;
  }
}

interface Props {
  conditions: string;
}

export function WeatherIcon({ conditions }: Props) {
  const [main, gray] = useToken('colors', ['primary.main', 'gray.400']);
  return Icon(conditions, main, gray)!;
}
