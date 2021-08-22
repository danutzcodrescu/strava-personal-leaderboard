/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getWeatherForSegment
// ====================================================

export interface getWeatherForSegment_weather_by_pk {
  __typename: 'weather';
  temperature: number | null;
  wind_dir: number | null;
  wind_speed: number | null;
  conditions: string;
}

export interface getWeatherForSegment {
  /**
   * fetch data from the table: "weather" using primary key columns
   */
  weather_by_pk: getWeatherForSegment_weather_by_pk | null;
}

export interface getWeatherForSegmentVariables {
  weatherId: any;
}
