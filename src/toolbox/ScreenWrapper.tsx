import { Box } from '@mui/material';
import * as React from 'react';
import { StyledPaper } from '../components/activity/styles/Activity.styles';

interface Props {
  children: any;
}

export function ScreenWrapper({ children }: Props) {
  return (
    <Box display="flex" justifyContent="center" my={7}>
      {/* @ts-ignore */}
      <Box component={StyledPaper} variant="outlined" px={4.5} py={6.5}>
        {children}
      </Box>
    </Box>
  );
}
