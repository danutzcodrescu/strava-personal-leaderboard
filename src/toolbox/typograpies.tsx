import { Theme, Typography, TypographyProps } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import * as React from 'react';

interface Props extends TypographyProps {}

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontWeight: 'bold',
      fontSize: '1.4rem',
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
);

export function TitleTypography(props: Props) {
  const classes = useStyles();
  return (
    <Typography {...props} variant="h3" className={classes.title}></Typography>
  );
}

export function SubtitleTypography(props: Props) {
  return <Typography {...props} color="textSecondary"></Typography>;
}

interface PeriodProps {
  children: React.ReactElement[];
}

const usePeriodStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.spacing(2),
    },
  })
);

export function PeriodTypography({ children }: PeriodProps) {
  const classes = usePeriodStyles();
  return (
    <Typography color="secondary" className={classes.title}>
      {children[0]}
      {/* @ts-ignore */}
      <SubtitleTypography component="span">{children[1]}</SubtitleTypography>
    </Typography>
  );
}
