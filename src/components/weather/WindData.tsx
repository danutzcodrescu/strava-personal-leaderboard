import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

const useWindStyles = makeStyles((theme: Theme) => ({
  wind: {
    borderRadius: '100%',
    border: `2px solid ${theme.palette.background.default}`,
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  direction: {
    position: 'absolute',
    zIndex: theme.zIndex.modal,
    width: '10px',
    height: '10px',
    borderRadius: '100%',
    backgroundColor: theme.palette.error.main,
  },
}));

interface Props {
  windSpeed: number;
  windDirection: number;
}

export function WindData(props: Props) {
  const classes = useWindStyles();
  console.log(props.windDirection);
  return (
    <div className={classes.wind}>
      {props.windSpeed}
      <span
        className={classes.direction}
        // style={{
        //   left: `${19 + 19 * Math.sin(props.windDirection)}px`,
        //   top: `${19 + 19 * Math.cos(props.windDirection)}px`,
        // }}
      ></span>
    </div>
  );
}
