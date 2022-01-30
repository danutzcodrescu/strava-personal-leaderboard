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

// TODO check these fills and how color is passed
function Icon(conditions: string, color: string) {
  switch (conditions) {
    case 'Rain':
    case 'Rain, Overcast':
      return <FontAwesomeIcon icon={faCloudShowersHeavy} fill="pink" />;
    case 'Overcast':
      return <FontAwesomeIcon icon={faCloud} fill="pink" />;
    case 'Partially cloudy':
      return <FontAwesomeIcon icon={faCloudSun} fill="pink" />;
    case 'Rain, Partially cloudy':
      return <FontAwesomeIcon icon={faCloudSunRain} fill="pink" size="lg" />;
    case 'Clear':
      return <FontAwesomeIcon icon={faSun} color={color} size="2x" />;
  }
}

interface Props {
  conditions: string;
}

export function WeatherIcon({ conditions }: Props) {
  const [main] = useToken('colors', ['primary.main']);
  return Icon(conditions, main)!;
}
