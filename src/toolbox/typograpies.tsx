import { Typography, TypographyProps } from '@mui/material';
import * as React from 'react';

interface Props extends TypographyProps {}

const StyledTypography = (props: TypographyProps) => (
  <Typography
    color="secondary"
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 2,
    }}
  >
    {props.children}
  </Typography>
);

export function TitleTypography({ children, ...props }: Props) {
  return (
    <StyledTypography {...props} variant="h3">
      {children}
    </StyledTypography>
  );
}

export function SubtitleTypography(props: Props) {
  return <Typography {...props} color="textSecondary"></Typography>;
}

interface PeriodProps {
  children: React.ReactElement[];
}

export function PeriodTypography({ children }: PeriodProps) {
  return (
    <Typography
      color="secondary"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 2,
      }}
    >
      {children[0]}
      {/* @ts-ignore */}
      <SubtitleTypography component="span">{children[1]}</SubtitleTypography>
    </Typography>
  );
}
