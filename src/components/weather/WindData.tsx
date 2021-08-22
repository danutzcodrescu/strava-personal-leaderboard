import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

const useWindStyles = makeStyles((theme: Theme) => ({
  wind: {
    width: '27px',
    height: '27px',
    lineHeight: '25px',
    textAlign: 'center',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    border: `3px solid ${theme.palette.background.default}`,
    borderRadius: '50%',
    position: 'relative',
    marginRight: '0',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0',
      height: '18px',
      borderWidth: '9px 5px',
      borderStyle: 'solid',
      borderColor: `${theme.palette.background.default} transparent transparent transparent`,
      position: 'absolute',
      top: '-4px',
      left: '8px',
      transform: (props: Props) => `rotate(${props.windDirection}deg)`,
    },
  },
}));

interface Props {
  windSpeed: number | null;
  windDirection: number;
}

export function WindData(props: Props) {
  const classes = useWindStyles(props);
  return <div className={classes.wind}>{Math.round(props.windSpeed || 0)}</div>;
}
