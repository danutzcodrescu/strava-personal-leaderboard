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
import { Theme, useTheme } from '@mui/material';

function Icon(conditions: string, theme: Theme) {
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
      return (
        <FontAwesomeIcon
          icon={faSun}
          color={theme.palette.warning.main}
          size="2x"
        />
      );
  }
}

interface Props {
  conditions: string;
}

export function WeatherIcon({ conditions }: Props) {
  const theme = useTheme();
  return Icon(conditions, theme)!;
}
