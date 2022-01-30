import { Heading, HeadingProps, Text, TextProps } from '@chakra-ui/react';
import * as React from 'react';

export function TitleTypography({ children, ...props }: HeadingProps) {
  return (
    <Heading
      as="h3"
      mt={4}
      display="flex"
      justifyContent="space-between"
      fontSize="1.3rem"
      alignContent="center"
      {...props}
    >
      {children}
    </Heading>
  );
}

export function SubtitleTypography(props: TextProps) {
  return (
    <Text
      fontWeight="350"
      fontSize="0.8em"
      color="gray.500"
      display="block"
      {...props}
    >
      {props.children}
    </Text>
  );
}

interface PeriodProps {
  children: React.ReactElement[];
}

export function PeriodTypography({ children }: PeriodProps) {
  return (
    <Text mt={4}>
      {children[0]}
      <SubtitleTypography
        as="span"
        display="inline"
        fontSize="1rem"
        fontWeight="bold"
        color="primary.main"
      >
        {children[1]}
      </SubtitleTypography>
    </Text>
  );
}

export function ValueTypography({ children, ...rest }: TextProps) {
  return (
    <Text fontSize="1.2em" fontWeight="350" {...rest}>
      {children}
    </Text>
  );
}
