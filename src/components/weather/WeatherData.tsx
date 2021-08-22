import { Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { WeatherIcon } from './WeatherIcon';
import { WindData } from './WindData';

const useWeatherStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'absolute',
    left: '15px',
    bottom: '15px',
    backgroundColor: theme.palette.text.primary,
    borderRadius: '25px',
    height: '45px',
    zIndex: theme.zIndex.modal,
    color: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(0, 1.5),
    fontSize: '0.7rem',
    fontWeight: 'bold',
  },
}));

interface Props {
  windSpeed?: number | null;
  windDir?: number | null;
  temperature?: number | null;
  conditions?: string | null;
}

export function WeatherData(props: Props) {
  const classes = useWeatherStyles();
  return (
    <div className={classes.container}>
      {props.temperature ? (
        <Box fontSize="1rem">
          {props.temperature.toFixed(0)}
          &deg;
        </Box>
      ) : null}
      {props.conditions ? <WeatherIcon conditions={props.conditions} /> : null}

      {props.windSpeed || props.windDir ? (
        <WindData windDirection={props.windDir!} windSpeed={props.windSpeed!} />
      ) : null}
    </div>
  );
}
