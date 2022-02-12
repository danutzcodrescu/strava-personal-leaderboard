import { fetcher } from '../toolbox/client';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  numeric: any;
  point: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<Scalars['Float']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "activities" */
export type Activities = {
  __typename?: 'activities';
  achievement_count?: Maybe<Scalars['Int']>;
  average_heartrate?: Maybe<Scalars['numeric']>;
  average_speed: Scalars['numeric'];
  average_watts?: Maybe<Scalars['numeric']>;
  device_watts: Scalars['Boolean'];
  distance: Scalars['numeric'];
  elapsed_time: Scalars['Int'];
  elev_high: Scalars['numeric'];
  elev_low: Scalars['numeric'];
  end_point: Scalars['point'];
  external_id: Scalars['bigint'];
  /** An object relationship */
  gear: Gears;
  gear_id: Scalars['String'];
  has_heartrate: Scalars['Boolean'];
  kilojoules?: Maybe<Scalars['numeric']>;
  location_city?: Maybe<Scalars['String']>;
  location_country?: Maybe<Scalars['String']>;
  location_state?: Maybe<Scalars['String']>;
  /** An object relationship */
  map: Maps;
  map_id: Scalars['String'];
  max_heartrate?: Maybe<Scalars['numeric']>;
  max_speed: Scalars['numeric'];
  moving_time: Scalars['Int'];
  name: Scalars['String'];
  pr_count?: Maybe<Scalars['Int']>;
  /** An array relationship */
  segment_efforts: Array<Segment_Efforts>;
  /** An aggregate relationship */
  segment_efforts_aggregate: Segment_Efforts_Aggregate;
  start_date_local: Scalars['timestamptz'];
  start_point: Scalars['point'];
  total_elevation_gain: Scalars['numeric'];
  type: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
  /** An object relationship */
  weather?: Maybe<Weather>;
  weather_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "activities" */
export type ActivitiesSegment_EffortsArgs = {
  distinct_on?: InputMaybe<Array<Segment_Efforts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Efforts_Order_By>>;
  where?: InputMaybe<Segment_Efforts_Bool_Exp>;
};

/** columns and relationships of "activities" */
export type ActivitiesSegment_Efforts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segment_Efforts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Efforts_Order_By>>;
  where?: InputMaybe<Segment_Efforts_Bool_Exp>;
};

/** aggregated selection of "activities" */
export type Activities_Aggregate = {
  __typename?: 'activities_aggregate';
  aggregate?: Maybe<Activities_Aggregate_Fields>;
  nodes: Array<Activities>;
};

/** aggregate fields of "activities" */
export type Activities_Aggregate_Fields = {
  __typename?: 'activities_aggregate_fields';
  avg?: Maybe<Activities_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Activities_Max_Fields>;
  min?: Maybe<Activities_Min_Fields>;
  stddev?: Maybe<Activities_Stddev_Fields>;
  stddev_pop?: Maybe<Activities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Activities_Stddev_Samp_Fields>;
  sum?: Maybe<Activities_Sum_Fields>;
  var_pop?: Maybe<Activities_Var_Pop_Fields>;
  var_samp?: Maybe<Activities_Var_Samp_Fields>;
  variance?: Maybe<Activities_Variance_Fields>;
};

/** aggregate fields of "activities" */
export type Activities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Activities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "activities" */
export type Activities_Aggregate_Order_By = {
  avg?: InputMaybe<Activities_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Activities_Max_Order_By>;
  min?: InputMaybe<Activities_Min_Order_By>;
  stddev?: InputMaybe<Activities_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Activities_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Activities_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Activities_Sum_Order_By>;
  var_pop?: InputMaybe<Activities_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Activities_Var_Samp_Order_By>;
  variance?: InputMaybe<Activities_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "activities" */
export type Activities_Arr_Rel_Insert_Input = {
  data: Array<Activities_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Activities_On_Conflict>;
};

/** aggregate avg on columns */
export type Activities_Avg_Fields = {
  __typename?: 'activities_avg_fields';
  achievement_count?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_speed?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  elev_high?: Maybe<Scalars['Float']>;
  elev_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  kilojoules?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  max_speed?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_count?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "activities" */
export type Activities_Avg_Order_By = {
  achievement_count?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_speed?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  elev_high?: InputMaybe<Order_By>;
  elev_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  kilojoules?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  max_speed?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_count?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "activities". All fields are combined with a logical 'AND'. */
export type Activities_Bool_Exp = {
  _and?: InputMaybe<Array<Activities_Bool_Exp>>;
  _not?: InputMaybe<Activities_Bool_Exp>;
  _or?: InputMaybe<Array<Activities_Bool_Exp>>;
  achievement_count?: InputMaybe<Int_Comparison_Exp>;
  average_heartrate?: InputMaybe<Numeric_Comparison_Exp>;
  average_speed?: InputMaybe<Numeric_Comparison_Exp>;
  average_watts?: InputMaybe<Numeric_Comparison_Exp>;
  device_watts?: InputMaybe<Boolean_Comparison_Exp>;
  distance?: InputMaybe<Numeric_Comparison_Exp>;
  elapsed_time?: InputMaybe<Int_Comparison_Exp>;
  elev_high?: InputMaybe<Numeric_Comparison_Exp>;
  elev_low?: InputMaybe<Numeric_Comparison_Exp>;
  end_point?: InputMaybe<Point_Comparison_Exp>;
  external_id?: InputMaybe<Bigint_Comparison_Exp>;
  gear?: InputMaybe<Gears_Bool_Exp>;
  gear_id?: InputMaybe<String_Comparison_Exp>;
  has_heartrate?: InputMaybe<Boolean_Comparison_Exp>;
  kilojoules?: InputMaybe<Numeric_Comparison_Exp>;
  location_city?: InputMaybe<String_Comparison_Exp>;
  location_country?: InputMaybe<String_Comparison_Exp>;
  location_state?: InputMaybe<String_Comparison_Exp>;
  map?: InputMaybe<Maps_Bool_Exp>;
  map_id?: InputMaybe<String_Comparison_Exp>;
  max_heartrate?: InputMaybe<Numeric_Comparison_Exp>;
  max_speed?: InputMaybe<Numeric_Comparison_Exp>;
  moving_time?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pr_count?: InputMaybe<Int_Comparison_Exp>;
  segment_efforts?: InputMaybe<Segment_Efforts_Bool_Exp>;
  start_date_local?: InputMaybe<Timestamptz_Comparison_Exp>;
  start_point?: InputMaybe<Point_Comparison_Exp>;
  total_elevation_gain?: InputMaybe<Numeric_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
  weather?: InputMaybe<Weather_Bool_Exp>;
  weather_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "activities" */
export enum Activities_Constraint {
  /** unique or primary key constraint */
  ActivitiesIdKey1 = 'activities_id_key1',
  /** unique or primary key constraint */
  ActivitiesPkey = 'activities_pkey',
}

/** input type for incrementing numeric columns in table "activities" */
export type Activities_Inc_Input = {
  achievement_count?: InputMaybe<Scalars['Int']>;
  average_heartrate?: InputMaybe<Scalars['numeric']>;
  average_speed?: InputMaybe<Scalars['numeric']>;
  average_watts?: InputMaybe<Scalars['numeric']>;
  distance?: InputMaybe<Scalars['numeric']>;
  elapsed_time?: InputMaybe<Scalars['Int']>;
  elev_high?: InputMaybe<Scalars['numeric']>;
  elev_low?: InputMaybe<Scalars['numeric']>;
  external_id?: InputMaybe<Scalars['bigint']>;
  kilojoules?: InputMaybe<Scalars['numeric']>;
  max_heartrate?: InputMaybe<Scalars['numeric']>;
  max_speed?: InputMaybe<Scalars['numeric']>;
  moving_time?: InputMaybe<Scalars['Int']>;
  pr_count?: InputMaybe<Scalars['Int']>;
  total_elevation_gain?: InputMaybe<Scalars['numeric']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "activities" */
export type Activities_Insert_Input = {
  achievement_count?: InputMaybe<Scalars['Int']>;
  average_heartrate?: InputMaybe<Scalars['numeric']>;
  average_speed?: InputMaybe<Scalars['numeric']>;
  average_watts?: InputMaybe<Scalars['numeric']>;
  device_watts?: InputMaybe<Scalars['Boolean']>;
  distance?: InputMaybe<Scalars['numeric']>;
  elapsed_time?: InputMaybe<Scalars['Int']>;
  elev_high?: InputMaybe<Scalars['numeric']>;
  elev_low?: InputMaybe<Scalars['numeric']>;
  end_point?: InputMaybe<Scalars['point']>;
  external_id?: InputMaybe<Scalars['bigint']>;
  gear?: InputMaybe<Gears_Obj_Rel_Insert_Input>;
  gear_id?: InputMaybe<Scalars['String']>;
  has_heartrate?: InputMaybe<Scalars['Boolean']>;
  kilojoules?: InputMaybe<Scalars['numeric']>;
  location_city?: InputMaybe<Scalars['String']>;
  location_country?: InputMaybe<Scalars['String']>;
  location_state?: InputMaybe<Scalars['String']>;
  map?: InputMaybe<Maps_Obj_Rel_Insert_Input>;
  map_id?: InputMaybe<Scalars['String']>;
  max_heartrate?: InputMaybe<Scalars['numeric']>;
  max_speed?: InputMaybe<Scalars['numeric']>;
  moving_time?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  pr_count?: InputMaybe<Scalars['Int']>;
  segment_efforts?: InputMaybe<Segment_Efforts_Arr_Rel_Insert_Input>;
  start_date_local?: InputMaybe<Scalars['timestamptz']>;
  start_point?: InputMaybe<Scalars['point']>;
  total_elevation_gain?: InputMaybe<Scalars['numeric']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']>;
  weather?: InputMaybe<Weather_Obj_Rel_Insert_Input>;
  weather_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Activities_Max_Fields = {
  __typename?: 'activities_max_fields';
  achievement_count?: Maybe<Scalars['Int']>;
  average_heartrate?: Maybe<Scalars['numeric']>;
  average_speed?: Maybe<Scalars['numeric']>;
  average_watts?: Maybe<Scalars['numeric']>;
  distance?: Maybe<Scalars['numeric']>;
  elapsed_time?: Maybe<Scalars['Int']>;
  elev_high?: Maybe<Scalars['numeric']>;
  elev_low?: Maybe<Scalars['numeric']>;
  external_id?: Maybe<Scalars['bigint']>;
  gear_id?: Maybe<Scalars['String']>;
  kilojoules?: Maybe<Scalars['numeric']>;
  location_city?: Maybe<Scalars['String']>;
  location_country?: Maybe<Scalars['String']>;
  location_state?: Maybe<Scalars['String']>;
  map_id?: Maybe<Scalars['String']>;
  max_heartrate?: Maybe<Scalars['numeric']>;
  max_speed?: Maybe<Scalars['numeric']>;
  moving_time?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pr_count?: Maybe<Scalars['Int']>;
  start_date_local?: Maybe<Scalars['timestamptz']>;
  total_elevation_gain?: Maybe<Scalars['numeric']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
  weather_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "activities" */
export type Activities_Max_Order_By = {
  achievement_count?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_speed?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  elev_high?: InputMaybe<Order_By>;
  elev_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  gear_id?: InputMaybe<Order_By>;
  kilojoules?: InputMaybe<Order_By>;
  location_city?: InputMaybe<Order_By>;
  location_country?: InputMaybe<Order_By>;
  location_state?: InputMaybe<Order_By>;
  map_id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  max_speed?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pr_count?: InputMaybe<Order_By>;
  start_date_local?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  weather_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Activities_Min_Fields = {
  __typename?: 'activities_min_fields';
  achievement_count?: Maybe<Scalars['Int']>;
  average_heartrate?: Maybe<Scalars['numeric']>;
  average_speed?: Maybe<Scalars['numeric']>;
  average_watts?: Maybe<Scalars['numeric']>;
  distance?: Maybe<Scalars['numeric']>;
  elapsed_time?: Maybe<Scalars['Int']>;
  elev_high?: Maybe<Scalars['numeric']>;
  elev_low?: Maybe<Scalars['numeric']>;
  external_id?: Maybe<Scalars['bigint']>;
  gear_id?: Maybe<Scalars['String']>;
  kilojoules?: Maybe<Scalars['numeric']>;
  location_city?: Maybe<Scalars['String']>;
  location_country?: Maybe<Scalars['String']>;
  location_state?: Maybe<Scalars['String']>;
  map_id?: Maybe<Scalars['String']>;
  max_heartrate?: Maybe<Scalars['numeric']>;
  max_speed?: Maybe<Scalars['numeric']>;
  moving_time?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pr_count?: Maybe<Scalars['Int']>;
  start_date_local?: Maybe<Scalars['timestamptz']>;
  total_elevation_gain?: Maybe<Scalars['numeric']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
  weather_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "activities" */
export type Activities_Min_Order_By = {
  achievement_count?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_speed?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  elev_high?: InputMaybe<Order_By>;
  elev_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  gear_id?: InputMaybe<Order_By>;
  kilojoules?: InputMaybe<Order_By>;
  location_city?: InputMaybe<Order_By>;
  location_country?: InputMaybe<Order_By>;
  location_state?: InputMaybe<Order_By>;
  map_id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  max_speed?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pr_count?: InputMaybe<Order_By>;
  start_date_local?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  weather_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "activities" */
export type Activities_Mutation_Response = {
  __typename?: 'activities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Activities>;
};

/** input type for inserting object relation for remote table "activities" */
export type Activities_Obj_Rel_Insert_Input = {
  data: Activities_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Activities_On_Conflict>;
};

/** on conflict condition type for table "activities" */
export type Activities_On_Conflict = {
  constraint: Activities_Constraint;
  update_columns?: Array<Activities_Update_Column>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** Ordering options when selecting data from "activities". */
export type Activities_Order_By = {
  achievement_count?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_speed?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  device_watts?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  elev_high?: InputMaybe<Order_By>;
  elev_low?: InputMaybe<Order_By>;
  end_point?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  gear?: InputMaybe<Gears_Order_By>;
  gear_id?: InputMaybe<Order_By>;
  has_heartrate?: InputMaybe<Order_By>;
  kilojoules?: InputMaybe<Order_By>;
  location_city?: InputMaybe<Order_By>;
  location_country?: InputMaybe<Order_By>;
  location_state?: InputMaybe<Order_By>;
  map?: InputMaybe<Maps_Order_By>;
  map_id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  max_speed?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pr_count?: InputMaybe<Order_By>;
  segment_efforts_aggregate?: InputMaybe<Segment_Efforts_Aggregate_Order_By>;
  start_date_local?: InputMaybe<Order_By>;
  start_point?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  weather?: InputMaybe<Weather_Order_By>;
  weather_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: activities */
export type Activities_Pk_Columns_Input = {
  external_id: Scalars['bigint'];
};

/** select columns of table "activities" */
export enum Activities_Select_Column {
  /** column name */
  AchievementCount = 'achievement_count',
  /** column name */
  AverageHeartrate = 'average_heartrate',
  /** column name */
  AverageSpeed = 'average_speed',
  /** column name */
  AverageWatts = 'average_watts',
  /** column name */
  DeviceWatts = 'device_watts',
  /** column name */
  Distance = 'distance',
  /** column name */
  ElapsedTime = 'elapsed_time',
  /** column name */
  ElevHigh = 'elev_high',
  /** column name */
  ElevLow = 'elev_low',
  /** column name */
  EndPoint = 'end_point',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  GearId = 'gear_id',
  /** column name */
  HasHeartrate = 'has_heartrate',
  /** column name */
  Kilojoules = 'kilojoules',
  /** column name */
  LocationCity = 'location_city',
  /** column name */
  LocationCountry = 'location_country',
  /** column name */
  LocationState = 'location_state',
  /** column name */
  MapId = 'map_id',
  /** column name */
  MaxHeartrate = 'max_heartrate',
  /** column name */
  MaxSpeed = 'max_speed',
  /** column name */
  MovingTime = 'moving_time',
  /** column name */
  Name = 'name',
  /** column name */
  PrCount = 'pr_count',
  /** column name */
  StartDateLocal = 'start_date_local',
  /** column name */
  StartPoint = 'start_point',
  /** column name */
  TotalElevationGain = 'total_elevation_gain',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WeatherId = 'weather_id',
}

/** input type for updating data in table "activities" */
export type Activities_Set_Input = {
  achievement_count?: InputMaybe<Scalars['Int']>;
  average_heartrate?: InputMaybe<Scalars['numeric']>;
  average_speed?: InputMaybe<Scalars['numeric']>;
  average_watts?: InputMaybe<Scalars['numeric']>;
  device_watts?: InputMaybe<Scalars['Boolean']>;
  distance?: InputMaybe<Scalars['numeric']>;
  elapsed_time?: InputMaybe<Scalars['Int']>;
  elev_high?: InputMaybe<Scalars['numeric']>;
  elev_low?: InputMaybe<Scalars['numeric']>;
  end_point?: InputMaybe<Scalars['point']>;
  external_id?: InputMaybe<Scalars['bigint']>;
  gear_id?: InputMaybe<Scalars['String']>;
  has_heartrate?: InputMaybe<Scalars['Boolean']>;
  kilojoules?: InputMaybe<Scalars['numeric']>;
  location_city?: InputMaybe<Scalars['String']>;
  location_country?: InputMaybe<Scalars['String']>;
  location_state?: InputMaybe<Scalars['String']>;
  map_id?: InputMaybe<Scalars['String']>;
  max_heartrate?: InputMaybe<Scalars['numeric']>;
  max_speed?: InputMaybe<Scalars['numeric']>;
  moving_time?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  pr_count?: InputMaybe<Scalars['Int']>;
  start_date_local?: InputMaybe<Scalars['timestamptz']>;
  start_point?: InputMaybe<Scalars['point']>;
  total_elevation_gain?: InputMaybe<Scalars['numeric']>;
  type?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Int']>;
  weather_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Activities_Stddev_Fields = {
  __typename?: 'activities_stddev_fields';
  achievement_count?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_speed?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  elev_high?: Maybe<Scalars['Float']>;
  elev_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  kilojoules?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  max_speed?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_count?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "activities" */
export type Activities_Stddev_Order_By = {
  achievement_count?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_speed?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  elev_high?: InputMaybe<Order_By>;
  elev_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  kilojoules?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  max_speed?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_count?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Activities_Stddev_Pop_Fields = {
  __typename?: 'activities_stddev_pop_fields';
  achievement_count?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_speed?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  elev_high?: Maybe<Scalars['Float']>;
  elev_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  kilojoules?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  max_speed?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_count?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "activities" */
export type Activities_Stddev_Pop_Order_By = {
  achievement_count?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_speed?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  elev_high?: InputMaybe<Order_By>;
  elev_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  kilojoules?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  max_speed?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_count?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Activities_Stddev_Samp_Fields = {
  __typename?: 'activities_stddev_samp_fields';
  achievement_count?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_speed?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  elev_high?: Maybe<Scalars['Float']>;
  elev_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  kilojoules?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  max_speed?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_count?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "activities" */
export type Activities_Stddev_Samp_Order_By = {
  achievement_count?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_speed?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  elev_high?: InputMaybe<Order_By>;
  elev_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  kilojoules?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  max_speed?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_count?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Activities_Sum_Fields = {
  __typename?: 'activities_sum_fields';
  achievement_count?: Maybe<Scalars['Int']>;
  average_heartrate?: Maybe<Scalars['numeric']>;
  average_speed?: Maybe<Scalars['numeric']>;
  average_watts?: Maybe<Scalars['numeric']>;
  distance?: Maybe<Scalars['numeric']>;
  elapsed_time?: Maybe<Scalars['Int']>;
  elev_high?: Maybe<Scalars['numeric']>;
  elev_low?: Maybe<Scalars['numeric']>;
  external_id?: Maybe<Scalars['bigint']>;
  kilojoules?: Maybe<Scalars['numeric']>;
  max_heartrate?: Maybe<Scalars['numeric']>;
  max_speed?: Maybe<Scalars['numeric']>;
  moving_time?: Maybe<Scalars['Int']>;
  pr_count?: Maybe<Scalars['Int']>;
  total_elevation_gain?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "activities" */
export type Activities_Sum_Order_By = {
  achievement_count?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_speed?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  elev_high?: InputMaybe<Order_By>;
  elev_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  kilojoules?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  max_speed?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_count?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "activities" */
export enum Activities_Update_Column {
  /** column name */
  AchievementCount = 'achievement_count',
  /** column name */
  AverageHeartrate = 'average_heartrate',
  /** column name */
  AverageSpeed = 'average_speed',
  /** column name */
  AverageWatts = 'average_watts',
  /** column name */
  DeviceWatts = 'device_watts',
  /** column name */
  Distance = 'distance',
  /** column name */
  ElapsedTime = 'elapsed_time',
  /** column name */
  ElevHigh = 'elev_high',
  /** column name */
  ElevLow = 'elev_low',
  /** column name */
  EndPoint = 'end_point',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  GearId = 'gear_id',
  /** column name */
  HasHeartrate = 'has_heartrate',
  /** column name */
  Kilojoules = 'kilojoules',
  /** column name */
  LocationCity = 'location_city',
  /** column name */
  LocationCountry = 'location_country',
  /** column name */
  LocationState = 'location_state',
  /** column name */
  MapId = 'map_id',
  /** column name */
  MaxHeartrate = 'max_heartrate',
  /** column name */
  MaxSpeed = 'max_speed',
  /** column name */
  MovingTime = 'moving_time',
  /** column name */
  Name = 'name',
  /** column name */
  PrCount = 'pr_count',
  /** column name */
  StartDateLocal = 'start_date_local',
  /** column name */
  StartPoint = 'start_point',
  /** column name */
  TotalElevationGain = 'total_elevation_gain',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WeatherId = 'weather_id',
}

/** aggregate var_pop on columns */
export type Activities_Var_Pop_Fields = {
  __typename?: 'activities_var_pop_fields';
  achievement_count?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_speed?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  elev_high?: Maybe<Scalars['Float']>;
  elev_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  kilojoules?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  max_speed?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_count?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "activities" */
export type Activities_Var_Pop_Order_By = {
  achievement_count?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_speed?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  elev_high?: InputMaybe<Order_By>;
  elev_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  kilojoules?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  max_speed?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_count?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Activities_Var_Samp_Fields = {
  __typename?: 'activities_var_samp_fields';
  achievement_count?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_speed?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  elev_high?: Maybe<Scalars['Float']>;
  elev_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  kilojoules?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  max_speed?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_count?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "activities" */
export type Activities_Var_Samp_Order_By = {
  achievement_count?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_speed?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  elev_high?: InputMaybe<Order_By>;
  elev_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  kilojoules?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  max_speed?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_count?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Activities_Variance_Fields = {
  __typename?: 'activities_variance_fields';
  achievement_count?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_speed?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  elev_high?: Maybe<Scalars['Float']>;
  elev_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  kilojoules?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  max_speed?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_count?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "activities" */
export type Activities_Variance_Order_By = {
  achievement_count?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_speed?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  elev_high?: InputMaybe<Order_By>;
  elev_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  kilojoules?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  max_speed?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_count?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "gears" */
export type Gears = {
  __typename?: 'gears';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  brand_name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  distance: Scalars['numeric'];
  external_id: Scalars['String'];
  frame_type?: Maybe<Scalars['String']>;
  model_name?: Maybe<Scalars['String']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint'];
};

/** columns and relationships of "gears" */
export type GearsActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** columns and relationships of "gears" */
export type GearsActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** aggregated selection of "gears" */
export type Gears_Aggregate = {
  __typename?: 'gears_aggregate';
  aggregate?: Maybe<Gears_Aggregate_Fields>;
  nodes: Array<Gears>;
};

/** aggregate fields of "gears" */
export type Gears_Aggregate_Fields = {
  __typename?: 'gears_aggregate_fields';
  avg?: Maybe<Gears_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gears_Max_Fields>;
  min?: Maybe<Gears_Min_Fields>;
  stddev?: Maybe<Gears_Stddev_Fields>;
  stddev_pop?: Maybe<Gears_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gears_Stddev_Samp_Fields>;
  sum?: Maybe<Gears_Sum_Fields>;
  var_pop?: Maybe<Gears_Var_Pop_Fields>;
  var_samp?: Maybe<Gears_Var_Samp_Fields>;
  variance?: Maybe<Gears_Variance_Fields>;
};

/** aggregate fields of "gears" */
export type Gears_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gears_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gears" */
export type Gears_Aggregate_Order_By = {
  avg?: InputMaybe<Gears_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Gears_Max_Order_By>;
  min?: InputMaybe<Gears_Min_Order_By>;
  stddev?: InputMaybe<Gears_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Gears_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Gears_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Gears_Sum_Order_By>;
  var_pop?: InputMaybe<Gears_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Gears_Var_Samp_Order_By>;
  variance?: InputMaybe<Gears_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "gears" */
export type Gears_Arr_Rel_Insert_Input = {
  data: Array<Gears_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Gears_On_Conflict>;
};

/** aggregate avg on columns */
export type Gears_Avg_Fields = {
  __typename?: 'gears_avg_fields';
  distance?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "gears" */
export type Gears_Avg_Order_By = {
  distance?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gears". All fields are combined with a logical 'AND'. */
export type Gears_Bool_Exp = {
  _and?: InputMaybe<Array<Gears_Bool_Exp>>;
  _not?: InputMaybe<Gears_Bool_Exp>;
  _or?: InputMaybe<Array<Gears_Bool_Exp>>;
  activities?: InputMaybe<Activities_Bool_Exp>;
  brand_name?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  distance?: InputMaybe<Numeric_Comparison_Exp>;
  external_id?: InputMaybe<String_Comparison_Exp>;
  frame_type?: InputMaybe<String_Comparison_Exp>;
  model_name?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "gears" */
export enum Gears_Constraint {
  /** unique or primary key constraint */
  GearsIdKey = 'gears_id_key',
  /** unique or primary key constraint */
  GearsPkey = 'gears_pkey',
}

/** input type for incrementing numeric columns in table "gears" */
export type Gears_Inc_Input = {
  distance?: InputMaybe<Scalars['numeric']>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "gears" */
export type Gears_Insert_Input = {
  activities?: InputMaybe<Activities_Arr_Rel_Insert_Input>;
  brand_name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['numeric']>;
  external_id?: InputMaybe<Scalars['String']>;
  frame_type?: InputMaybe<Scalars['String']>;
  model_name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Gears_Max_Fields = {
  __typename?: 'gears_max_fields';
  brand_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['numeric']>;
  external_id?: Maybe<Scalars['String']>;
  frame_type?: Maybe<Scalars['String']>;
  model_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "gears" */
export type Gears_Max_Order_By = {
  brand_name?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  frame_type?: InputMaybe<Order_By>;
  model_name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Gears_Min_Fields = {
  __typename?: 'gears_min_fields';
  brand_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['numeric']>;
  external_id?: Maybe<Scalars['String']>;
  frame_type?: Maybe<Scalars['String']>;
  model_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "gears" */
export type Gears_Min_Order_By = {
  brand_name?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  frame_type?: InputMaybe<Order_By>;
  model_name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "gears" */
export type Gears_Mutation_Response = {
  __typename?: 'gears_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gears>;
};

/** input type for inserting object relation for remote table "gears" */
export type Gears_Obj_Rel_Insert_Input = {
  data: Gears_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Gears_On_Conflict>;
};

/** on conflict condition type for table "gears" */
export type Gears_On_Conflict = {
  constraint: Gears_Constraint;
  update_columns?: Array<Gears_Update_Column>;
  where?: InputMaybe<Gears_Bool_Exp>;
};

/** Ordering options when selecting data from "gears". */
export type Gears_Order_By = {
  activities_aggregate?: InputMaybe<Activities_Aggregate_Order_By>;
  brand_name?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  frame_type?: InputMaybe<Order_By>;
  model_name?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gears */
export type Gears_Pk_Columns_Input = {
  external_id: Scalars['String'];
};

/** select columns of table "gears" */
export enum Gears_Select_Column {
  /** column name */
  BrandName = 'brand_name',
  /** column name */
  Description = 'description',
  /** column name */
  Distance = 'distance',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  FrameType = 'frame_type',
  /** column name */
  ModelName = 'model_name',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "gears" */
export type Gears_Set_Input = {
  brand_name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['numeric']>;
  external_id?: InputMaybe<Scalars['String']>;
  frame_type?: InputMaybe<Scalars['String']>;
  model_name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Gears_Stddev_Fields = {
  __typename?: 'gears_stddev_fields';
  distance?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "gears" */
export type Gears_Stddev_Order_By = {
  distance?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Gears_Stddev_Pop_Fields = {
  __typename?: 'gears_stddev_pop_fields';
  distance?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "gears" */
export type Gears_Stddev_Pop_Order_By = {
  distance?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Gears_Stddev_Samp_Fields = {
  __typename?: 'gears_stddev_samp_fields';
  distance?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "gears" */
export type Gears_Stddev_Samp_Order_By = {
  distance?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Gears_Sum_Fields = {
  __typename?: 'gears_sum_fields';
  distance?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "gears" */
export type Gears_Sum_Order_By = {
  distance?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "gears" */
export enum Gears_Update_Column {
  /** column name */
  BrandName = 'brand_name',
  /** column name */
  Description = 'description',
  /** column name */
  Distance = 'distance',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  FrameType = 'frame_type',
  /** column name */
  ModelName = 'model_name',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type Gears_Var_Pop_Fields = {
  __typename?: 'gears_var_pop_fields';
  distance?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "gears" */
export type Gears_Var_Pop_Order_By = {
  distance?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Gears_Var_Samp_Fields = {
  __typename?: 'gears_var_samp_fields';
  distance?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "gears" */
export type Gears_Var_Samp_Order_By = {
  distance?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Gears_Variance_Fields = {
  __typename?: 'gears_variance_fields';
  distance?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "gears" */
export type Gears_Variance_Order_By = {
  distance?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "maps" */
export type Maps = {
  __typename?: 'maps';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  external_id: Scalars['String'];
  map: Scalars['String'];
  /** An array relationship */
  segments: Array<Segments>;
  /** An aggregate relationship */
  segments_aggregate: Segments_Aggregate;
  summary?: Maybe<Scalars['String']>;
};

/** columns and relationships of "maps" */
export type MapsActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** columns and relationships of "maps" */
export type MapsActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** columns and relationships of "maps" */
export type MapsSegmentsArgs = {
  distinct_on?: InputMaybe<Array<Segments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segments_Order_By>>;
  where?: InputMaybe<Segments_Bool_Exp>;
};

/** columns and relationships of "maps" */
export type MapsSegments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segments_Order_By>>;
  where?: InputMaybe<Segments_Bool_Exp>;
};

/** aggregated selection of "maps" */
export type Maps_Aggregate = {
  __typename?: 'maps_aggregate';
  aggregate?: Maybe<Maps_Aggregate_Fields>;
  nodes: Array<Maps>;
};

/** aggregate fields of "maps" */
export type Maps_Aggregate_Fields = {
  __typename?: 'maps_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Maps_Max_Fields>;
  min?: Maybe<Maps_Min_Fields>;
};

/** aggregate fields of "maps" */
export type Maps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Maps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "maps". All fields are combined with a logical 'AND'. */
export type Maps_Bool_Exp = {
  _and?: InputMaybe<Array<Maps_Bool_Exp>>;
  _not?: InputMaybe<Maps_Bool_Exp>;
  _or?: InputMaybe<Array<Maps_Bool_Exp>>;
  activities?: InputMaybe<Activities_Bool_Exp>;
  external_id?: InputMaybe<String_Comparison_Exp>;
  map?: InputMaybe<String_Comparison_Exp>;
  segments?: InputMaybe<Segments_Bool_Exp>;
  summary?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "maps" */
export enum Maps_Constraint {
  /** unique or primary key constraint */
  MapsIdKey = 'maps_id_key',
  /** unique or primary key constraint */
  MapsPkey = 'maps_pkey',
}

/** input type for inserting data into table "maps" */
export type Maps_Insert_Input = {
  activities?: InputMaybe<Activities_Arr_Rel_Insert_Input>;
  external_id?: InputMaybe<Scalars['String']>;
  map?: InputMaybe<Scalars['String']>;
  segments?: InputMaybe<Segments_Arr_Rel_Insert_Input>;
  summary?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Maps_Max_Fields = {
  __typename?: 'maps_max_fields';
  external_id?: Maybe<Scalars['String']>;
  map?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Maps_Min_Fields = {
  __typename?: 'maps_min_fields';
  external_id?: Maybe<Scalars['String']>;
  map?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "maps" */
export type Maps_Mutation_Response = {
  __typename?: 'maps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Maps>;
};

/** input type for inserting object relation for remote table "maps" */
export type Maps_Obj_Rel_Insert_Input = {
  data: Maps_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Maps_On_Conflict>;
};

/** on conflict condition type for table "maps" */
export type Maps_On_Conflict = {
  constraint: Maps_Constraint;
  update_columns?: Array<Maps_Update_Column>;
  where?: InputMaybe<Maps_Bool_Exp>;
};

/** Ordering options when selecting data from "maps". */
export type Maps_Order_By = {
  activities_aggregate?: InputMaybe<Activities_Aggregate_Order_By>;
  external_id?: InputMaybe<Order_By>;
  map?: InputMaybe<Order_By>;
  segments_aggregate?: InputMaybe<Segments_Aggregate_Order_By>;
  summary?: InputMaybe<Order_By>;
};

/** primary key columns input for table: maps */
export type Maps_Pk_Columns_Input = {
  external_id: Scalars['String'];
};

/** select columns of table "maps" */
export enum Maps_Select_Column {
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Map = 'map',
  /** column name */
  Summary = 'summary',
}

/** input type for updating data in table "maps" */
export type Maps_Set_Input = {
  external_id?: InputMaybe<Scalars['String']>;
  map?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
};

/** update columns of table "maps" */
export enum Maps_Update_Column {
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  Map = 'map',
  /** column name */
  Summary = 'summary',
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "activities" */
  delete_activities?: Maybe<Activities_Mutation_Response>;
  /** delete single row from the table: "activities" */
  delete_activities_by_pk?: Maybe<Activities>;
  /** delete data from the table: "gears" */
  delete_gears?: Maybe<Gears_Mutation_Response>;
  /** delete single row from the table: "gears" */
  delete_gears_by_pk?: Maybe<Gears>;
  /** delete data from the table: "maps" */
  delete_maps?: Maybe<Maps_Mutation_Response>;
  /** delete single row from the table: "maps" */
  delete_maps_by_pk?: Maybe<Maps>;
  /** delete data from the table: "segment_efforts" */
  delete_segment_efforts?: Maybe<Segment_Efforts_Mutation_Response>;
  /** delete single row from the table: "segment_efforts" */
  delete_segment_efforts_by_pk?: Maybe<Segment_Efforts>;
  /** delete data from the table: "segments" */
  delete_segments?: Maybe<Segments_Mutation_Response>;
  /** delete single row from the table: "segments" */
  delete_segments_by_pk?: Maybe<Segments>;
  /** delete data from the table: "user_summary" */
  delete_user_summary?: Maybe<User_Summary_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "weather" */
  delete_weather?: Maybe<Weather_Mutation_Response>;
  /** delete single row from the table: "weather" */
  delete_weather_by_pk?: Maybe<Weather>;
  /** insert data into the table: "activities" */
  insert_activities?: Maybe<Activities_Mutation_Response>;
  /** insert a single row into the table: "activities" */
  insert_activities_one?: Maybe<Activities>;
  /** insert data into the table: "gears" */
  insert_gears?: Maybe<Gears_Mutation_Response>;
  /** insert a single row into the table: "gears" */
  insert_gears_one?: Maybe<Gears>;
  /** insert data into the table: "maps" */
  insert_maps?: Maybe<Maps_Mutation_Response>;
  /** insert a single row into the table: "maps" */
  insert_maps_one?: Maybe<Maps>;
  /** insert data into the table: "segment_efforts" */
  insert_segment_efforts?: Maybe<Segment_Efforts_Mutation_Response>;
  /** insert a single row into the table: "segment_efforts" */
  insert_segment_efforts_one?: Maybe<Segment_Efforts>;
  /** insert data into the table: "segments" */
  insert_segments?: Maybe<Segments_Mutation_Response>;
  /** insert a single row into the table: "segments" */
  insert_segments_one?: Maybe<Segments>;
  /** insert data into the table: "user_summary" */
  insert_user_summary?: Maybe<User_Summary_Mutation_Response>;
  /** insert a single row into the table: "user_summary" */
  insert_user_summary_one?: Maybe<User_Summary>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "weather" */
  insert_weather?: Maybe<Weather_Mutation_Response>;
  /** insert a single row into the table: "weather" */
  insert_weather_one?: Maybe<Weather>;
  /** update data of the table: "activities" */
  update_activities?: Maybe<Activities_Mutation_Response>;
  /** update single row of the table: "activities" */
  update_activities_by_pk?: Maybe<Activities>;
  /** update data of the table: "gears" */
  update_gears?: Maybe<Gears_Mutation_Response>;
  /** update single row of the table: "gears" */
  update_gears_by_pk?: Maybe<Gears>;
  /** update data of the table: "maps" */
  update_maps?: Maybe<Maps_Mutation_Response>;
  /** update single row of the table: "maps" */
  update_maps_by_pk?: Maybe<Maps>;
  /** update data of the table: "segment_efforts" */
  update_segment_efforts?: Maybe<Segment_Efforts_Mutation_Response>;
  /** update single row of the table: "segment_efforts" */
  update_segment_efforts_by_pk?: Maybe<Segment_Efforts>;
  /** update data of the table: "segments" */
  update_segments?: Maybe<Segments_Mutation_Response>;
  /** update single row of the table: "segments" */
  update_segments_by_pk?: Maybe<Segments>;
  /** update data of the table: "user_summary" */
  update_user_summary?: Maybe<User_Summary_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "weather" */
  update_weather?: Maybe<Weather_Mutation_Response>;
  /** update single row of the table: "weather" */
  update_weather_by_pk?: Maybe<Weather>;
};

/** mutation root */
export type Mutation_RootDelete_ActivitiesArgs = {
  where: Activities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Activities_By_PkArgs = {
  external_id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_GearsArgs = {
  where: Gears_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Gears_By_PkArgs = {
  external_id: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_MapsArgs = {
  where: Maps_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Maps_By_PkArgs = {
  external_id: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Segment_EffortsArgs = {
  where: Segment_Efforts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Segment_Efforts_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_SegmentsArgs = {
  where: Segments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Segments_By_PkArgs = {
  external_id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_User_SummaryArgs = {
  where: User_Summary_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  external_id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_WeatherArgs = {
  where: Weather_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Weather_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsert_ActivitiesArgs = {
  objects: Array<Activities_Insert_Input>;
  on_conflict?: InputMaybe<Activities_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Activities_OneArgs = {
  object: Activities_Insert_Input;
  on_conflict?: InputMaybe<Activities_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GearsArgs = {
  objects: Array<Gears_Insert_Input>;
  on_conflict?: InputMaybe<Gears_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Gears_OneArgs = {
  object: Gears_Insert_Input;
  on_conflict?: InputMaybe<Gears_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MapsArgs = {
  objects: Array<Maps_Insert_Input>;
  on_conflict?: InputMaybe<Maps_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Maps_OneArgs = {
  object: Maps_Insert_Input;
  on_conflict?: InputMaybe<Maps_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Segment_EffortsArgs = {
  objects: Array<Segment_Efforts_Insert_Input>;
  on_conflict?: InputMaybe<Segment_Efforts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Segment_Efforts_OneArgs = {
  object: Segment_Efforts_Insert_Input;
  on_conflict?: InputMaybe<Segment_Efforts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SegmentsArgs = {
  objects: Array<Segments_Insert_Input>;
  on_conflict?: InputMaybe<Segments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Segments_OneArgs = {
  object: Segments_Insert_Input;
  on_conflict?: InputMaybe<Segments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_SummaryArgs = {
  objects: Array<User_Summary_Insert_Input>;
};

/** mutation root */
export type Mutation_RootInsert_User_Summary_OneArgs = {
  object: User_Summary_Insert_Input;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_WeatherArgs = {
  objects: Array<Weather_Insert_Input>;
  on_conflict?: InputMaybe<Weather_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Weather_OneArgs = {
  object: Weather_Insert_Input;
  on_conflict?: InputMaybe<Weather_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_ActivitiesArgs = {
  _inc?: InputMaybe<Activities_Inc_Input>;
  _set?: InputMaybe<Activities_Set_Input>;
  where: Activities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Activities_By_PkArgs = {
  _inc?: InputMaybe<Activities_Inc_Input>;
  _set?: InputMaybe<Activities_Set_Input>;
  pk_columns: Activities_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_GearsArgs = {
  _inc?: InputMaybe<Gears_Inc_Input>;
  _set?: InputMaybe<Gears_Set_Input>;
  where: Gears_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Gears_By_PkArgs = {
  _inc?: InputMaybe<Gears_Inc_Input>;
  _set?: InputMaybe<Gears_Set_Input>;
  pk_columns: Gears_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_MapsArgs = {
  _set?: InputMaybe<Maps_Set_Input>;
  where: Maps_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Maps_By_PkArgs = {
  _set?: InputMaybe<Maps_Set_Input>;
  pk_columns: Maps_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Segment_EffortsArgs = {
  _inc?: InputMaybe<Segment_Efforts_Inc_Input>;
  _set?: InputMaybe<Segment_Efforts_Set_Input>;
  where: Segment_Efforts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Segment_Efforts_By_PkArgs = {
  _inc?: InputMaybe<Segment_Efforts_Inc_Input>;
  _set?: InputMaybe<Segment_Efforts_Set_Input>;
  pk_columns: Segment_Efforts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_SegmentsArgs = {
  _inc?: InputMaybe<Segments_Inc_Input>;
  _set?: InputMaybe<Segments_Set_Input>;
  where: Segments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Segments_By_PkArgs = {
  _inc?: InputMaybe<Segments_Inc_Input>;
  _set?: InputMaybe<Segments_Set_Input>;
  pk_columns: Segments_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_SummaryArgs = {
  _inc?: InputMaybe<User_Summary_Inc_Input>;
  _set?: InputMaybe<User_Summary_Set_Input>;
  where: User_Summary_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_WeatherArgs = {
  _inc?: InputMaybe<Weather_Inc_Input>;
  _set?: InputMaybe<Weather_Set_Input>;
  where: Weather_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Weather_By_PkArgs = {
  _inc?: InputMaybe<Weather_Inc_Input>;
  _set?: InputMaybe<Weather_Set_Input>;
  pk_columns: Weather_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** Boolean expression to compare columns of type "point". All fields are combined with logical 'AND'. */
export type Point_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['point']>;
  _gt?: InputMaybe<Scalars['point']>;
  _gte?: InputMaybe<Scalars['point']>;
  _in?: InputMaybe<Array<Scalars['point']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['point']>;
  _lte?: InputMaybe<Scalars['point']>;
  _neq?: InputMaybe<Scalars['point']>;
  _nin?: InputMaybe<Array<Scalars['point']>>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** An array relationship */
  gears: Array<Gears>;
  /** An aggregate relationship */
  gears_aggregate: Gears_Aggregate;
  /** fetch data from the table: "gears" using primary key columns */
  gears_by_pk?: Maybe<Gears>;
  /** fetch data from the table: "maps" */
  maps: Array<Maps>;
  /** fetch aggregated fields from the table: "maps" */
  maps_aggregate: Maps_Aggregate;
  /** fetch data from the table: "maps" using primary key columns */
  maps_by_pk?: Maybe<Maps>;
  /** An array relationship */
  segment_efforts: Array<Segment_Efforts>;
  /** An aggregate relationship */
  segment_efforts_aggregate: Segment_Efforts_Aggregate;
  /** fetch data from the table: "segment_efforts" using primary key columns */
  segment_efforts_by_pk?: Maybe<Segment_Efforts>;
  /** An array relationship */
  segments: Array<Segments>;
  /** An aggregate relationship */
  segments_aggregate: Segments_Aggregate;
  /** fetch data from the table: "segments" using primary key columns */
  segments_by_pk?: Maybe<Segments>;
  /** execute function "user_dashboard_summary" which returns "user_summary" */
  user_dashboard_summary: Array<User_Summary>;
  /** execute function "user_dashboard_summary" and query aggregates on result of table type "user_summary" */
  user_dashboard_summary_aggregate: User_Summary_Aggregate;
  /** fetch data from the table: "user_summary" */
  user_summary: Array<User_Summary>;
  /** fetch aggregated fields from the table: "user_summary" */
  user_summary_aggregate: User_Summary_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "weather" */
  weather: Array<Weather>;
  /** fetch aggregated fields from the table: "weather" */
  weather_aggregate: Weather_Aggregate;
  /** fetch data from the table: "weather" using primary key columns */
  weather_by_pk?: Maybe<Weather>;
};

export type Query_RootActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

export type Query_RootActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

export type Query_RootActivities_By_PkArgs = {
  external_id: Scalars['bigint'];
};

export type Query_RootGearsArgs = {
  distinct_on?: InputMaybe<Array<Gears_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gears_Order_By>>;
  where?: InputMaybe<Gears_Bool_Exp>;
};

export type Query_RootGears_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gears_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gears_Order_By>>;
  where?: InputMaybe<Gears_Bool_Exp>;
};

export type Query_RootGears_By_PkArgs = {
  external_id: Scalars['String'];
};

export type Query_RootMapsArgs = {
  distinct_on?: InputMaybe<Array<Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Maps_Order_By>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};

export type Query_RootMaps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Maps_Order_By>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};

export type Query_RootMaps_By_PkArgs = {
  external_id: Scalars['String'];
};

export type Query_RootSegment_EffortsArgs = {
  distinct_on?: InputMaybe<Array<Segment_Efforts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Efforts_Order_By>>;
  where?: InputMaybe<Segment_Efforts_Bool_Exp>;
};

export type Query_RootSegment_Efforts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segment_Efforts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Efforts_Order_By>>;
  where?: InputMaybe<Segment_Efforts_Bool_Exp>;
};

export type Query_RootSegment_Efforts_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootSegmentsArgs = {
  distinct_on?: InputMaybe<Array<Segments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segments_Order_By>>;
  where?: InputMaybe<Segments_Bool_Exp>;
};

export type Query_RootSegments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segments_Order_By>>;
  where?: InputMaybe<Segments_Bool_Exp>;
};

export type Query_RootSegments_By_PkArgs = {
  external_id: Scalars['bigint'];
};

export type Query_RootUser_Dashboard_SummaryArgs = {
  args: User_Dashboard_Summary_Args;
  distinct_on?: InputMaybe<Array<User_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Summary_Order_By>>;
  where?: InputMaybe<User_Summary_Bool_Exp>;
};

export type Query_RootUser_Dashboard_Summary_AggregateArgs = {
  args: User_Dashboard_Summary_Args;
  distinct_on?: InputMaybe<Array<User_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Summary_Order_By>>;
  where?: InputMaybe<User_Summary_Bool_Exp>;
};

export type Query_RootUser_SummaryArgs = {
  distinct_on?: InputMaybe<Array<User_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Summary_Order_By>>;
  where?: InputMaybe<User_Summary_Bool_Exp>;
};

export type Query_RootUser_Summary_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Summary_Order_By>>;
  where?: InputMaybe<User_Summary_Bool_Exp>;
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  external_id: Scalars['Int'];
};

export type Query_RootWeatherArgs = {
  distinct_on?: InputMaybe<Array<Weather_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Weather_Order_By>>;
  where?: InputMaybe<Weather_Bool_Exp>;
};

export type Query_RootWeather_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Weather_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Weather_Order_By>>;
  where?: InputMaybe<Weather_Bool_Exp>;
};

export type Query_RootWeather_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "segment_efforts" */
export type Segment_Efforts = {
  __typename?: 'segment_efforts';
  /** An object relationship */
  activity: Activities;
  activity_id: Scalars['bigint'];
  average_cadence?: Maybe<Scalars['numeric']>;
  average_heartrate?: Maybe<Scalars['numeric']>;
  average_watts: Scalars['numeric'];
  device_watts: Scalars['Boolean'];
  elapsed_time: Scalars['Int'];
  id: Scalars['Int'];
  max_heartrate?: Maybe<Scalars['numeric']>;
  moving_time: Scalars['Int'];
  name: Scalars['String'];
  pr_rank?: Maybe<Scalars['Int']>;
  /** An object relationship */
  segment: Segments;
  segment_id: Scalars['bigint'];
  start_date_local: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
  /** An object relationship */
  weather?: Maybe<Weather>;
  weather_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "segment_efforts" */
export type Segment_Efforts_Aggregate = {
  __typename?: 'segment_efforts_aggregate';
  aggregate?: Maybe<Segment_Efforts_Aggregate_Fields>;
  nodes: Array<Segment_Efforts>;
};

/** aggregate fields of "segment_efforts" */
export type Segment_Efforts_Aggregate_Fields = {
  __typename?: 'segment_efforts_aggregate_fields';
  avg?: Maybe<Segment_Efforts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Segment_Efforts_Max_Fields>;
  min?: Maybe<Segment_Efforts_Min_Fields>;
  stddev?: Maybe<Segment_Efforts_Stddev_Fields>;
  stddev_pop?: Maybe<Segment_Efforts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Segment_Efforts_Stddev_Samp_Fields>;
  sum?: Maybe<Segment_Efforts_Sum_Fields>;
  var_pop?: Maybe<Segment_Efforts_Var_Pop_Fields>;
  var_samp?: Maybe<Segment_Efforts_Var_Samp_Fields>;
  variance?: Maybe<Segment_Efforts_Variance_Fields>;
};

/** aggregate fields of "segment_efforts" */
export type Segment_Efforts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Segment_Efforts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "segment_efforts" */
export type Segment_Efforts_Aggregate_Order_By = {
  avg?: InputMaybe<Segment_Efforts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Segment_Efforts_Max_Order_By>;
  min?: InputMaybe<Segment_Efforts_Min_Order_By>;
  stddev?: InputMaybe<Segment_Efforts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Segment_Efforts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Segment_Efforts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Segment_Efforts_Sum_Order_By>;
  var_pop?: InputMaybe<Segment_Efforts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Segment_Efforts_Var_Samp_Order_By>;
  variance?: InputMaybe<Segment_Efforts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "segment_efforts" */
export type Segment_Efforts_Arr_Rel_Insert_Input = {
  data: Array<Segment_Efforts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Segment_Efforts_On_Conflict>;
};

/** aggregate avg on columns */
export type Segment_Efforts_Avg_Fields = {
  __typename?: 'segment_efforts_avg_fields';
  activity_id?: Maybe<Scalars['Float']>;
  average_cadence?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_rank?: Maybe<Scalars['Float']>;
  segment_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "segment_efforts" */
export type Segment_Efforts_Avg_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  average_cadence?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_rank?: InputMaybe<Order_By>;
  segment_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "segment_efforts". All fields are combined with a logical 'AND'. */
export type Segment_Efforts_Bool_Exp = {
  _and?: InputMaybe<Array<Segment_Efforts_Bool_Exp>>;
  _not?: InputMaybe<Segment_Efforts_Bool_Exp>;
  _or?: InputMaybe<Array<Segment_Efforts_Bool_Exp>>;
  activity?: InputMaybe<Activities_Bool_Exp>;
  activity_id?: InputMaybe<Bigint_Comparison_Exp>;
  average_cadence?: InputMaybe<Numeric_Comparison_Exp>;
  average_heartrate?: InputMaybe<Numeric_Comparison_Exp>;
  average_watts?: InputMaybe<Numeric_Comparison_Exp>;
  device_watts?: InputMaybe<Boolean_Comparison_Exp>;
  elapsed_time?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  max_heartrate?: InputMaybe<Numeric_Comparison_Exp>;
  moving_time?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pr_rank?: InputMaybe<Int_Comparison_Exp>;
  segment?: InputMaybe<Segments_Bool_Exp>;
  segment_id?: InputMaybe<Bigint_Comparison_Exp>;
  start_date_local?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
  weather?: InputMaybe<Weather_Bool_Exp>;
  weather_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "segment_efforts" */
export enum Segment_Efforts_Constraint {
  /** unique or primary key constraint */
  SegmentEffortsIdKey = 'segment_efforts_id_key',
  /** unique or primary key constraint */
  SegmentEffortsPkey = 'segment_efforts_pkey',
}

/** input type for incrementing numeric columns in table "segment_efforts" */
export type Segment_Efforts_Inc_Input = {
  activity_id?: InputMaybe<Scalars['bigint']>;
  average_cadence?: InputMaybe<Scalars['numeric']>;
  average_heartrate?: InputMaybe<Scalars['numeric']>;
  average_watts?: InputMaybe<Scalars['numeric']>;
  elapsed_time?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  max_heartrate?: InputMaybe<Scalars['numeric']>;
  moving_time?: InputMaybe<Scalars['Int']>;
  pr_rank?: InputMaybe<Scalars['Int']>;
  segment_id?: InputMaybe<Scalars['bigint']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "segment_efforts" */
export type Segment_Efforts_Insert_Input = {
  activity?: InputMaybe<Activities_Obj_Rel_Insert_Input>;
  activity_id?: InputMaybe<Scalars['bigint']>;
  average_cadence?: InputMaybe<Scalars['numeric']>;
  average_heartrate?: InputMaybe<Scalars['numeric']>;
  average_watts?: InputMaybe<Scalars['numeric']>;
  device_watts?: InputMaybe<Scalars['Boolean']>;
  elapsed_time?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  max_heartrate?: InputMaybe<Scalars['numeric']>;
  moving_time?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  pr_rank?: InputMaybe<Scalars['Int']>;
  segment?: InputMaybe<Segments_Obj_Rel_Insert_Input>;
  segment_id?: InputMaybe<Scalars['bigint']>;
  start_date_local?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']>;
  weather?: InputMaybe<Weather_Obj_Rel_Insert_Input>;
  weather_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Segment_Efforts_Max_Fields = {
  __typename?: 'segment_efforts_max_fields';
  activity_id?: Maybe<Scalars['bigint']>;
  average_cadence?: Maybe<Scalars['numeric']>;
  average_heartrate?: Maybe<Scalars['numeric']>;
  average_watts?: Maybe<Scalars['numeric']>;
  elapsed_time?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  max_heartrate?: Maybe<Scalars['numeric']>;
  moving_time?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pr_rank?: Maybe<Scalars['Int']>;
  segment_id?: Maybe<Scalars['bigint']>;
  start_date_local?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
  weather_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "segment_efforts" */
export type Segment_Efforts_Max_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  average_cadence?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pr_rank?: InputMaybe<Order_By>;
  segment_id?: InputMaybe<Order_By>;
  start_date_local?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  weather_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Segment_Efforts_Min_Fields = {
  __typename?: 'segment_efforts_min_fields';
  activity_id?: Maybe<Scalars['bigint']>;
  average_cadence?: Maybe<Scalars['numeric']>;
  average_heartrate?: Maybe<Scalars['numeric']>;
  average_watts?: Maybe<Scalars['numeric']>;
  elapsed_time?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  max_heartrate?: Maybe<Scalars['numeric']>;
  moving_time?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pr_rank?: Maybe<Scalars['Int']>;
  segment_id?: Maybe<Scalars['bigint']>;
  start_date_local?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
  weather_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "segment_efforts" */
export type Segment_Efforts_Min_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  average_cadence?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pr_rank?: InputMaybe<Order_By>;
  segment_id?: InputMaybe<Order_By>;
  start_date_local?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  weather_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "segment_efforts" */
export type Segment_Efforts_Mutation_Response = {
  __typename?: 'segment_efforts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Segment_Efforts>;
};

/** on conflict condition type for table "segment_efforts" */
export type Segment_Efforts_On_Conflict = {
  constraint: Segment_Efforts_Constraint;
  update_columns?: Array<Segment_Efforts_Update_Column>;
  where?: InputMaybe<Segment_Efforts_Bool_Exp>;
};

/** Ordering options when selecting data from "segment_efforts". */
export type Segment_Efforts_Order_By = {
  activity?: InputMaybe<Activities_Order_By>;
  activity_id?: InputMaybe<Order_By>;
  average_cadence?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  device_watts?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pr_rank?: InputMaybe<Order_By>;
  segment?: InputMaybe<Segments_Order_By>;
  segment_id?: InputMaybe<Order_By>;
  start_date_local?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  weather?: InputMaybe<Weather_Order_By>;
  weather_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: segment_efforts */
export type Segment_Efforts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "segment_efforts" */
export enum Segment_Efforts_Select_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  AverageCadence = 'average_cadence',
  /** column name */
  AverageHeartrate = 'average_heartrate',
  /** column name */
  AverageWatts = 'average_watts',
  /** column name */
  DeviceWatts = 'device_watts',
  /** column name */
  ElapsedTime = 'elapsed_time',
  /** column name */
  Id = 'id',
  /** column name */
  MaxHeartrate = 'max_heartrate',
  /** column name */
  MovingTime = 'moving_time',
  /** column name */
  Name = 'name',
  /** column name */
  PrRank = 'pr_rank',
  /** column name */
  SegmentId = 'segment_id',
  /** column name */
  StartDateLocal = 'start_date_local',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WeatherId = 'weather_id',
}

/** input type for updating data in table "segment_efforts" */
export type Segment_Efforts_Set_Input = {
  activity_id?: InputMaybe<Scalars['bigint']>;
  average_cadence?: InputMaybe<Scalars['numeric']>;
  average_heartrate?: InputMaybe<Scalars['numeric']>;
  average_watts?: InputMaybe<Scalars['numeric']>;
  device_watts?: InputMaybe<Scalars['Boolean']>;
  elapsed_time?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  max_heartrate?: InputMaybe<Scalars['numeric']>;
  moving_time?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  pr_rank?: InputMaybe<Scalars['Int']>;
  segment_id?: InputMaybe<Scalars['bigint']>;
  start_date_local?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['Int']>;
  weather_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Segment_Efforts_Stddev_Fields = {
  __typename?: 'segment_efforts_stddev_fields';
  activity_id?: Maybe<Scalars['Float']>;
  average_cadence?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_rank?: Maybe<Scalars['Float']>;
  segment_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "segment_efforts" */
export type Segment_Efforts_Stddev_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  average_cadence?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_rank?: InputMaybe<Order_By>;
  segment_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Segment_Efforts_Stddev_Pop_Fields = {
  __typename?: 'segment_efforts_stddev_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
  average_cadence?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_rank?: Maybe<Scalars['Float']>;
  segment_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "segment_efforts" */
export type Segment_Efforts_Stddev_Pop_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  average_cadence?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_rank?: InputMaybe<Order_By>;
  segment_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Segment_Efforts_Stddev_Samp_Fields = {
  __typename?: 'segment_efforts_stddev_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
  average_cadence?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_rank?: Maybe<Scalars['Float']>;
  segment_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "segment_efforts" */
export type Segment_Efforts_Stddev_Samp_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  average_cadence?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_rank?: InputMaybe<Order_By>;
  segment_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Segment_Efforts_Sum_Fields = {
  __typename?: 'segment_efforts_sum_fields';
  activity_id?: Maybe<Scalars['bigint']>;
  average_cadence?: Maybe<Scalars['numeric']>;
  average_heartrate?: Maybe<Scalars['numeric']>;
  average_watts?: Maybe<Scalars['numeric']>;
  elapsed_time?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  max_heartrate?: Maybe<Scalars['numeric']>;
  moving_time?: Maybe<Scalars['Int']>;
  pr_rank?: Maybe<Scalars['Int']>;
  segment_id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "segment_efforts" */
export type Segment_Efforts_Sum_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  average_cadence?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_rank?: InputMaybe<Order_By>;
  segment_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "segment_efforts" */
export enum Segment_Efforts_Update_Column {
  /** column name */
  ActivityId = 'activity_id',
  /** column name */
  AverageCadence = 'average_cadence',
  /** column name */
  AverageHeartrate = 'average_heartrate',
  /** column name */
  AverageWatts = 'average_watts',
  /** column name */
  DeviceWatts = 'device_watts',
  /** column name */
  ElapsedTime = 'elapsed_time',
  /** column name */
  Id = 'id',
  /** column name */
  MaxHeartrate = 'max_heartrate',
  /** column name */
  MovingTime = 'moving_time',
  /** column name */
  Name = 'name',
  /** column name */
  PrRank = 'pr_rank',
  /** column name */
  SegmentId = 'segment_id',
  /** column name */
  StartDateLocal = 'start_date_local',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WeatherId = 'weather_id',
}

/** aggregate var_pop on columns */
export type Segment_Efforts_Var_Pop_Fields = {
  __typename?: 'segment_efforts_var_pop_fields';
  activity_id?: Maybe<Scalars['Float']>;
  average_cadence?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_rank?: Maybe<Scalars['Float']>;
  segment_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "segment_efforts" */
export type Segment_Efforts_Var_Pop_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  average_cadence?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_rank?: InputMaybe<Order_By>;
  segment_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Segment_Efforts_Var_Samp_Fields = {
  __typename?: 'segment_efforts_var_samp_fields';
  activity_id?: Maybe<Scalars['Float']>;
  average_cadence?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_rank?: Maybe<Scalars['Float']>;
  segment_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "segment_efforts" */
export type Segment_Efforts_Var_Samp_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  average_cadence?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_rank?: InputMaybe<Order_By>;
  segment_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Segment_Efforts_Variance_Fields = {
  __typename?: 'segment_efforts_variance_fields';
  activity_id?: Maybe<Scalars['Float']>;
  average_cadence?: Maybe<Scalars['Float']>;
  average_heartrate?: Maybe<Scalars['Float']>;
  average_watts?: Maybe<Scalars['Float']>;
  elapsed_time?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_heartrate?: Maybe<Scalars['Float']>;
  moving_time?: Maybe<Scalars['Float']>;
  pr_rank?: Maybe<Scalars['Float']>;
  segment_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "segment_efforts" */
export type Segment_Efforts_Variance_Order_By = {
  activity_id?: InputMaybe<Order_By>;
  average_cadence?: InputMaybe<Order_By>;
  average_heartrate?: InputMaybe<Order_By>;
  average_watts?: InputMaybe<Order_By>;
  elapsed_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_heartrate?: InputMaybe<Order_By>;
  moving_time?: InputMaybe<Order_By>;
  pr_rank?: InputMaybe<Order_By>;
  segment_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "segments" */
export type Segments = {
  __typename?: 'segments';
  average_grade: Scalars['numeric'];
  city?: Maybe<Scalars['String']>;
  climb_category: Scalars['Int'];
  country?: Maybe<Scalars['String']>;
  distance: Scalars['numeric'];
  elevation_high: Scalars['numeric'];
  elevation_low: Scalars['numeric'];
  end_point: Scalars['point'];
  external_id: Scalars['bigint'];
  /** An object relationship */
  map?: Maybe<Maps>;
  map_id?: Maybe<Scalars['String']>;
  maximum_grade: Scalars['numeric'];
  name: Scalars['String'];
  /** An array relationship */
  segment_efforts: Array<Segment_Efforts>;
  /** An aggregate relationship */
  segment_efforts_aggregate: Segment_Efforts_Aggregate;
  start_point: Scalars['point'];
  state?: Maybe<Scalars['String']>;
  total_elevation_gain?: Maybe<Scalars['numeric']>;
  type: Scalars['String'];
};

/** columns and relationships of "segments" */
export type SegmentsSegment_EffortsArgs = {
  distinct_on?: InputMaybe<Array<Segment_Efforts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Efforts_Order_By>>;
  where?: InputMaybe<Segment_Efforts_Bool_Exp>;
};

/** columns and relationships of "segments" */
export type SegmentsSegment_Efforts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segment_Efforts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Efforts_Order_By>>;
  where?: InputMaybe<Segment_Efforts_Bool_Exp>;
};

/** aggregated selection of "segments" */
export type Segments_Aggregate = {
  __typename?: 'segments_aggregate';
  aggregate?: Maybe<Segments_Aggregate_Fields>;
  nodes: Array<Segments>;
};

/** aggregate fields of "segments" */
export type Segments_Aggregate_Fields = {
  __typename?: 'segments_aggregate_fields';
  avg?: Maybe<Segments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Segments_Max_Fields>;
  min?: Maybe<Segments_Min_Fields>;
  stddev?: Maybe<Segments_Stddev_Fields>;
  stddev_pop?: Maybe<Segments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Segments_Stddev_Samp_Fields>;
  sum?: Maybe<Segments_Sum_Fields>;
  var_pop?: Maybe<Segments_Var_Pop_Fields>;
  var_samp?: Maybe<Segments_Var_Samp_Fields>;
  variance?: Maybe<Segments_Variance_Fields>;
};

/** aggregate fields of "segments" */
export type Segments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Segments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "segments" */
export type Segments_Aggregate_Order_By = {
  avg?: InputMaybe<Segments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Segments_Max_Order_By>;
  min?: InputMaybe<Segments_Min_Order_By>;
  stddev?: InputMaybe<Segments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Segments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Segments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Segments_Sum_Order_By>;
  var_pop?: InputMaybe<Segments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Segments_Var_Samp_Order_By>;
  variance?: InputMaybe<Segments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "segments" */
export type Segments_Arr_Rel_Insert_Input = {
  data: Array<Segments_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Segments_On_Conflict>;
};

/** aggregate avg on columns */
export type Segments_Avg_Fields = {
  __typename?: 'segments_avg_fields';
  average_grade?: Maybe<Scalars['Float']>;
  climb_category?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elevation_high?: Maybe<Scalars['Float']>;
  elevation_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  maximum_grade?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "segments" */
export type Segments_Avg_Order_By = {
  average_grade?: InputMaybe<Order_By>;
  climb_category?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elevation_high?: InputMaybe<Order_By>;
  elevation_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  maximum_grade?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "segments". All fields are combined with a logical 'AND'. */
export type Segments_Bool_Exp = {
  _and?: InputMaybe<Array<Segments_Bool_Exp>>;
  _not?: InputMaybe<Segments_Bool_Exp>;
  _or?: InputMaybe<Array<Segments_Bool_Exp>>;
  average_grade?: InputMaybe<Numeric_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  climb_category?: InputMaybe<Int_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  distance?: InputMaybe<Numeric_Comparison_Exp>;
  elevation_high?: InputMaybe<Numeric_Comparison_Exp>;
  elevation_low?: InputMaybe<Numeric_Comparison_Exp>;
  end_point?: InputMaybe<Point_Comparison_Exp>;
  external_id?: InputMaybe<Bigint_Comparison_Exp>;
  map?: InputMaybe<Maps_Bool_Exp>;
  map_id?: InputMaybe<String_Comparison_Exp>;
  maximum_grade?: InputMaybe<Numeric_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  segment_efforts?: InputMaybe<Segment_Efforts_Bool_Exp>;
  start_point?: InputMaybe<Point_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  total_elevation_gain?: InputMaybe<Numeric_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "segments" */
export enum Segments_Constraint {
  /** unique or primary key constraint */
  SegmentsExternalIdKey = 'segments_external_id_key',
  /** unique or primary key constraint */
  SegmentsPkey = 'segments_pkey',
}

/** input type for incrementing numeric columns in table "segments" */
export type Segments_Inc_Input = {
  average_grade?: InputMaybe<Scalars['numeric']>;
  climb_category?: InputMaybe<Scalars['Int']>;
  distance?: InputMaybe<Scalars['numeric']>;
  elevation_high?: InputMaybe<Scalars['numeric']>;
  elevation_low?: InputMaybe<Scalars['numeric']>;
  external_id?: InputMaybe<Scalars['bigint']>;
  maximum_grade?: InputMaybe<Scalars['numeric']>;
  total_elevation_gain?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "segments" */
export type Segments_Insert_Input = {
  average_grade?: InputMaybe<Scalars['numeric']>;
  city?: InputMaybe<Scalars['String']>;
  climb_category?: InputMaybe<Scalars['Int']>;
  country?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['numeric']>;
  elevation_high?: InputMaybe<Scalars['numeric']>;
  elevation_low?: InputMaybe<Scalars['numeric']>;
  end_point?: InputMaybe<Scalars['point']>;
  external_id?: InputMaybe<Scalars['bigint']>;
  map?: InputMaybe<Maps_Obj_Rel_Insert_Input>;
  map_id?: InputMaybe<Scalars['String']>;
  maximum_grade?: InputMaybe<Scalars['numeric']>;
  name?: InputMaybe<Scalars['String']>;
  segment_efforts?: InputMaybe<Segment_Efforts_Arr_Rel_Insert_Input>;
  start_point?: InputMaybe<Scalars['point']>;
  state?: InputMaybe<Scalars['String']>;
  total_elevation_gain?: InputMaybe<Scalars['numeric']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Segments_Max_Fields = {
  __typename?: 'segments_max_fields';
  average_grade?: Maybe<Scalars['numeric']>;
  city?: Maybe<Scalars['String']>;
  climb_category?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['numeric']>;
  elevation_high?: Maybe<Scalars['numeric']>;
  elevation_low?: Maybe<Scalars['numeric']>;
  external_id?: Maybe<Scalars['bigint']>;
  map_id?: Maybe<Scalars['String']>;
  maximum_grade?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  total_elevation_gain?: Maybe<Scalars['numeric']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "segments" */
export type Segments_Max_Order_By = {
  average_grade?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  climb_category?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elevation_high?: InputMaybe<Order_By>;
  elevation_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  map_id?: InputMaybe<Order_By>;
  maximum_grade?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Segments_Min_Fields = {
  __typename?: 'segments_min_fields';
  average_grade?: Maybe<Scalars['numeric']>;
  city?: Maybe<Scalars['String']>;
  climb_category?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['numeric']>;
  elevation_high?: Maybe<Scalars['numeric']>;
  elevation_low?: Maybe<Scalars['numeric']>;
  external_id?: Maybe<Scalars['bigint']>;
  map_id?: Maybe<Scalars['String']>;
  maximum_grade?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  total_elevation_gain?: Maybe<Scalars['numeric']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "segments" */
export type Segments_Min_Order_By = {
  average_grade?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  climb_category?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elevation_high?: InputMaybe<Order_By>;
  elevation_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  map_id?: InputMaybe<Order_By>;
  maximum_grade?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "segments" */
export type Segments_Mutation_Response = {
  __typename?: 'segments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Segments>;
};

/** input type for inserting object relation for remote table "segments" */
export type Segments_Obj_Rel_Insert_Input = {
  data: Segments_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Segments_On_Conflict>;
};

/** on conflict condition type for table "segments" */
export type Segments_On_Conflict = {
  constraint: Segments_Constraint;
  update_columns?: Array<Segments_Update_Column>;
  where?: InputMaybe<Segments_Bool_Exp>;
};

/** Ordering options when selecting data from "segments". */
export type Segments_Order_By = {
  average_grade?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  climb_category?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elevation_high?: InputMaybe<Order_By>;
  elevation_low?: InputMaybe<Order_By>;
  end_point?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  map?: InputMaybe<Maps_Order_By>;
  map_id?: InputMaybe<Order_By>;
  maximum_grade?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  segment_efforts_aggregate?: InputMaybe<Segment_Efforts_Aggregate_Order_By>;
  start_point?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: segments */
export type Segments_Pk_Columns_Input = {
  external_id: Scalars['bigint'];
};

/** select columns of table "segments" */
export enum Segments_Select_Column {
  /** column name */
  AverageGrade = 'average_grade',
  /** column name */
  City = 'city',
  /** column name */
  ClimbCategory = 'climb_category',
  /** column name */
  Country = 'country',
  /** column name */
  Distance = 'distance',
  /** column name */
  ElevationHigh = 'elevation_high',
  /** column name */
  ElevationLow = 'elevation_low',
  /** column name */
  EndPoint = 'end_point',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  MapId = 'map_id',
  /** column name */
  MaximumGrade = 'maximum_grade',
  /** column name */
  Name = 'name',
  /** column name */
  StartPoint = 'start_point',
  /** column name */
  State = 'state',
  /** column name */
  TotalElevationGain = 'total_elevation_gain',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "segments" */
export type Segments_Set_Input = {
  average_grade?: InputMaybe<Scalars['numeric']>;
  city?: InputMaybe<Scalars['String']>;
  climb_category?: InputMaybe<Scalars['Int']>;
  country?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['numeric']>;
  elevation_high?: InputMaybe<Scalars['numeric']>;
  elevation_low?: InputMaybe<Scalars['numeric']>;
  end_point?: InputMaybe<Scalars['point']>;
  external_id?: InputMaybe<Scalars['bigint']>;
  map_id?: InputMaybe<Scalars['String']>;
  maximum_grade?: InputMaybe<Scalars['numeric']>;
  name?: InputMaybe<Scalars['String']>;
  start_point?: InputMaybe<Scalars['point']>;
  state?: InputMaybe<Scalars['String']>;
  total_elevation_gain?: InputMaybe<Scalars['numeric']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Segments_Stddev_Fields = {
  __typename?: 'segments_stddev_fields';
  average_grade?: Maybe<Scalars['Float']>;
  climb_category?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elevation_high?: Maybe<Scalars['Float']>;
  elevation_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  maximum_grade?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "segments" */
export type Segments_Stddev_Order_By = {
  average_grade?: InputMaybe<Order_By>;
  climb_category?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elevation_high?: InputMaybe<Order_By>;
  elevation_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  maximum_grade?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Segments_Stddev_Pop_Fields = {
  __typename?: 'segments_stddev_pop_fields';
  average_grade?: Maybe<Scalars['Float']>;
  climb_category?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elevation_high?: Maybe<Scalars['Float']>;
  elevation_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  maximum_grade?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "segments" */
export type Segments_Stddev_Pop_Order_By = {
  average_grade?: InputMaybe<Order_By>;
  climb_category?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elevation_high?: InputMaybe<Order_By>;
  elevation_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  maximum_grade?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Segments_Stddev_Samp_Fields = {
  __typename?: 'segments_stddev_samp_fields';
  average_grade?: Maybe<Scalars['Float']>;
  climb_category?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elevation_high?: Maybe<Scalars['Float']>;
  elevation_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  maximum_grade?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "segments" */
export type Segments_Stddev_Samp_Order_By = {
  average_grade?: InputMaybe<Order_By>;
  climb_category?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elevation_high?: InputMaybe<Order_By>;
  elevation_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  maximum_grade?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Segments_Sum_Fields = {
  __typename?: 'segments_sum_fields';
  average_grade?: Maybe<Scalars['numeric']>;
  climb_category?: Maybe<Scalars['Int']>;
  distance?: Maybe<Scalars['numeric']>;
  elevation_high?: Maybe<Scalars['numeric']>;
  elevation_low?: Maybe<Scalars['numeric']>;
  external_id?: Maybe<Scalars['bigint']>;
  maximum_grade?: Maybe<Scalars['numeric']>;
  total_elevation_gain?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "segments" */
export type Segments_Sum_Order_By = {
  average_grade?: InputMaybe<Order_By>;
  climb_category?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elevation_high?: InputMaybe<Order_By>;
  elevation_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  maximum_grade?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
};

/** update columns of table "segments" */
export enum Segments_Update_Column {
  /** column name */
  AverageGrade = 'average_grade',
  /** column name */
  City = 'city',
  /** column name */
  ClimbCategory = 'climb_category',
  /** column name */
  Country = 'country',
  /** column name */
  Distance = 'distance',
  /** column name */
  ElevationHigh = 'elevation_high',
  /** column name */
  ElevationLow = 'elevation_low',
  /** column name */
  EndPoint = 'end_point',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  MapId = 'map_id',
  /** column name */
  MaximumGrade = 'maximum_grade',
  /** column name */
  Name = 'name',
  /** column name */
  StartPoint = 'start_point',
  /** column name */
  State = 'state',
  /** column name */
  TotalElevationGain = 'total_elevation_gain',
  /** column name */
  Type = 'type',
}

/** aggregate var_pop on columns */
export type Segments_Var_Pop_Fields = {
  __typename?: 'segments_var_pop_fields';
  average_grade?: Maybe<Scalars['Float']>;
  climb_category?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elevation_high?: Maybe<Scalars['Float']>;
  elevation_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  maximum_grade?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "segments" */
export type Segments_Var_Pop_Order_By = {
  average_grade?: InputMaybe<Order_By>;
  climb_category?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elevation_high?: InputMaybe<Order_By>;
  elevation_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  maximum_grade?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Segments_Var_Samp_Fields = {
  __typename?: 'segments_var_samp_fields';
  average_grade?: Maybe<Scalars['Float']>;
  climb_category?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elevation_high?: Maybe<Scalars['Float']>;
  elevation_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  maximum_grade?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "segments" */
export type Segments_Var_Samp_Order_By = {
  average_grade?: InputMaybe<Order_By>;
  climb_category?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elevation_high?: InputMaybe<Order_By>;
  elevation_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  maximum_grade?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Segments_Variance_Fields = {
  __typename?: 'segments_variance_fields';
  average_grade?: Maybe<Scalars['Float']>;
  climb_category?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  elevation_high?: Maybe<Scalars['Float']>;
  elevation_low?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  maximum_grade?: Maybe<Scalars['Float']>;
  total_elevation_gain?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "segments" */
export type Segments_Variance_Order_By = {
  average_grade?: InputMaybe<Order_By>;
  climb_category?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  elevation_high?: InputMaybe<Order_By>;
  elevation_low?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  maximum_grade?: InputMaybe<Order_By>;
  total_elevation_gain?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  /** fetch data from the table: "activities" using primary key columns */
  activities_by_pk?: Maybe<Activities>;
  /** An array relationship */
  gears: Array<Gears>;
  /** An aggregate relationship */
  gears_aggregate: Gears_Aggregate;
  /** fetch data from the table: "gears" using primary key columns */
  gears_by_pk?: Maybe<Gears>;
  /** fetch data from the table: "maps" */
  maps: Array<Maps>;
  /** fetch aggregated fields from the table: "maps" */
  maps_aggregate: Maps_Aggregate;
  /** fetch data from the table: "maps" using primary key columns */
  maps_by_pk?: Maybe<Maps>;
  /** An array relationship */
  segment_efforts: Array<Segment_Efforts>;
  /** An aggregate relationship */
  segment_efforts_aggregate: Segment_Efforts_Aggregate;
  /** fetch data from the table: "segment_efforts" using primary key columns */
  segment_efforts_by_pk?: Maybe<Segment_Efforts>;
  /** An array relationship */
  segments: Array<Segments>;
  /** An aggregate relationship */
  segments_aggregate: Segments_Aggregate;
  /** fetch data from the table: "segments" using primary key columns */
  segments_by_pk?: Maybe<Segments>;
  /** execute function "user_dashboard_summary" which returns "user_summary" */
  user_dashboard_summary: Array<User_Summary>;
  /** execute function "user_dashboard_summary" and query aggregates on result of table type "user_summary" */
  user_dashboard_summary_aggregate: User_Summary_Aggregate;
  /** fetch data from the table: "user_summary" */
  user_summary: Array<User_Summary>;
  /** fetch aggregated fields from the table: "user_summary" */
  user_summary_aggregate: User_Summary_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "weather" */
  weather: Array<Weather>;
  /** fetch aggregated fields from the table: "weather" */
  weather_aggregate: Weather_Aggregate;
  /** fetch data from the table: "weather" using primary key columns */
  weather_by_pk?: Maybe<Weather>;
};

export type Subscription_RootActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

export type Subscription_RootActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

export type Subscription_RootActivities_By_PkArgs = {
  external_id: Scalars['bigint'];
};

export type Subscription_RootGearsArgs = {
  distinct_on?: InputMaybe<Array<Gears_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gears_Order_By>>;
  where?: InputMaybe<Gears_Bool_Exp>;
};

export type Subscription_RootGears_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gears_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gears_Order_By>>;
  where?: InputMaybe<Gears_Bool_Exp>;
};

export type Subscription_RootGears_By_PkArgs = {
  external_id: Scalars['String'];
};

export type Subscription_RootMapsArgs = {
  distinct_on?: InputMaybe<Array<Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Maps_Order_By>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};

export type Subscription_RootMaps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Maps_Order_By>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};

export type Subscription_RootMaps_By_PkArgs = {
  external_id: Scalars['String'];
};

export type Subscription_RootSegment_EffortsArgs = {
  distinct_on?: InputMaybe<Array<Segment_Efforts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Efforts_Order_By>>;
  where?: InputMaybe<Segment_Efforts_Bool_Exp>;
};

export type Subscription_RootSegment_Efforts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segment_Efforts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Efforts_Order_By>>;
  where?: InputMaybe<Segment_Efforts_Bool_Exp>;
};

export type Subscription_RootSegment_Efforts_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootSegmentsArgs = {
  distinct_on?: InputMaybe<Array<Segments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segments_Order_By>>;
  where?: InputMaybe<Segments_Bool_Exp>;
};

export type Subscription_RootSegments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segments_Order_By>>;
  where?: InputMaybe<Segments_Bool_Exp>;
};

export type Subscription_RootSegments_By_PkArgs = {
  external_id: Scalars['bigint'];
};

export type Subscription_RootUser_Dashboard_SummaryArgs = {
  args: User_Dashboard_Summary_Args;
  distinct_on?: InputMaybe<Array<User_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Summary_Order_By>>;
  where?: InputMaybe<User_Summary_Bool_Exp>;
};

export type Subscription_RootUser_Dashboard_Summary_AggregateArgs = {
  args: User_Dashboard_Summary_Args;
  distinct_on?: InputMaybe<Array<User_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Summary_Order_By>>;
  where?: InputMaybe<User_Summary_Bool_Exp>;
};

export type Subscription_RootUser_SummaryArgs = {
  distinct_on?: InputMaybe<Array<User_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Summary_Order_By>>;
  where?: InputMaybe<User_Summary_Bool_Exp>;
};

export type Subscription_RootUser_Summary_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Summary_Order_By>>;
  where?: InputMaybe<User_Summary_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  external_id: Scalars['Int'];
};

export type Subscription_RootWeatherArgs = {
  distinct_on?: InputMaybe<Array<Weather_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Weather_Order_By>>;
  where?: InputMaybe<Weather_Bool_Exp>;
};

export type Subscription_RootWeather_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Weather_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Weather_Order_By>>;
  where?: InputMaybe<Weather_Bool_Exp>;
};

export type Subscription_RootWeather_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type User_Dashboard_Summary_Args = {
  id?: InputMaybe<Scalars['Int']>;
};

/** columns and relationships of "user_summary" */
export type User_Summary = {
  __typename?: 'user_summary';
  activities?: Maybe<Scalars['bigint']>;
  distance?: Maybe<Scalars['numeric']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "user_summary" */
export type User_Summary_Aggregate = {
  __typename?: 'user_summary_aggregate';
  aggregate?: Maybe<User_Summary_Aggregate_Fields>;
  nodes: Array<User_Summary>;
};

/** aggregate fields of "user_summary" */
export type User_Summary_Aggregate_Fields = {
  __typename?: 'user_summary_aggregate_fields';
  avg?: Maybe<User_Summary_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Summary_Max_Fields>;
  min?: Maybe<User_Summary_Min_Fields>;
  stddev?: Maybe<User_Summary_Stddev_Fields>;
  stddev_pop?: Maybe<User_Summary_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Summary_Stddev_Samp_Fields>;
  sum?: Maybe<User_Summary_Sum_Fields>;
  var_pop?: Maybe<User_Summary_Var_Pop_Fields>;
  var_samp?: Maybe<User_Summary_Var_Samp_Fields>;
  variance?: Maybe<User_Summary_Variance_Fields>;
};

/** aggregate fields of "user_summary" */
export type User_Summary_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Summary_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Summary_Avg_Fields = {
  __typename?: 'user_summary_avg_fields';
  activities?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_summary". All fields are combined with a logical 'AND'. */
export type User_Summary_Bool_Exp = {
  _and?: InputMaybe<Array<User_Summary_Bool_Exp>>;
  _not?: InputMaybe<User_Summary_Bool_Exp>;
  _or?: InputMaybe<Array<User_Summary_Bool_Exp>>;
  activities?: InputMaybe<Bigint_Comparison_Exp>;
  distance?: InputMaybe<Numeric_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "user_summary" */
export type User_Summary_Inc_Input = {
  activities?: InputMaybe<Scalars['bigint']>;
  distance?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "user_summary" */
export type User_Summary_Insert_Input = {
  activities?: InputMaybe<Scalars['bigint']>;
  distance?: InputMaybe<Scalars['numeric']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Summary_Max_Fields = {
  __typename?: 'user_summary_max_fields';
  activities?: Maybe<Scalars['bigint']>;
  distance?: Maybe<Scalars['numeric']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Summary_Min_Fields = {
  __typename?: 'user_summary_min_fields';
  activities?: Maybe<Scalars['bigint']>;
  distance?: Maybe<Scalars['numeric']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_summary" */
export type User_Summary_Mutation_Response = {
  __typename?: 'user_summary_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Summary>;
};

/** Ordering options when selecting data from "user_summary". */
export type User_Summary_Order_By = {
  activities?: InputMaybe<Order_By>;
  distance?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
};

/** select columns of table "user_summary" */
export enum User_Summary_Select_Column {
  /** column name */
  Activities = 'activities',
  /** column name */
  Distance = 'distance',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
}

/** input type for updating data in table "user_summary" */
export type User_Summary_Set_Input = {
  activities?: InputMaybe<Scalars['bigint']>;
  distance?: InputMaybe<Scalars['numeric']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Summary_Stddev_Fields = {
  __typename?: 'user_summary_stddev_fields';
  activities?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Summary_Stddev_Pop_Fields = {
  __typename?: 'user_summary_stddev_pop_fields';
  activities?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Summary_Stddev_Samp_Fields = {
  __typename?: 'user_summary_stddev_samp_fields';
  activities?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Summary_Sum_Fields = {
  __typename?: 'user_summary_sum_fields';
  activities?: Maybe<Scalars['bigint']>;
  distance?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type User_Summary_Var_Pop_Fields = {
  __typename?: 'user_summary_var_pop_fields';
  activities?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Summary_Var_Samp_Fields = {
  __typename?: 'user_summary_var_samp_fields';
  activities?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Summary_Variance_Fields = {
  __typename?: 'user_summary_variance_fields';
  activities?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  access_token: Scalars['String'];
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  date_preference?: Maybe<Scalars['String']>;
  /** A computed field, executes function "users_expired_token" */
  expired?: Maybe<Scalars['Int']>;
  expires_at: Scalars['Int'];
  external_id: Scalars['Int'];
  first_name: Scalars['String'];
  ftp?: Maybe<Scalars['Int']>;
  /** An array relationship */
  gears: Array<Gears>;
  /** An aggregate relationship */
  gears_aggregate: Gears_Aggregate;
  last_name: Scalars['String'];
  measurement_preference: Scalars['String'];
  profile: Scalars['String'];
  profile_medium: Scalars['String'];
  refresh_token: Scalars['String'];
  scope: Scalars['String'];
  /** An array relationship */
  segment_efforts: Array<Segment_Efforts>;
  /** An aggregate relationship */
  segment_efforts_aggregate: Segment_Efforts_Aggregate;
  sex?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  username: Scalars['String'];
};

/** columns and relationships of "users" */
export type UsersActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersGearsArgs = {
  distinct_on?: InputMaybe<Array<Gears_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gears_Order_By>>;
  where?: InputMaybe<Gears_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersGears_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gears_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gears_Order_By>>;
  where?: InputMaybe<Gears_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersSegment_EffortsArgs = {
  distinct_on?: InputMaybe<Array<Segment_Efforts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Efforts_Order_By>>;
  where?: InputMaybe<Segment_Efforts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersSegment_Efforts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segment_Efforts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Efforts_Order_By>>;
  where?: InputMaybe<Segment_Efforts_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  expires_at?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  ftp?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  activities?: InputMaybe<Activities_Bool_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_preference?: InputMaybe<String_Comparison_Exp>;
  expired?: InputMaybe<Int_Comparison_Exp>;
  expires_at?: InputMaybe<Int_Comparison_Exp>;
  external_id?: InputMaybe<Int_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  ftp?: InputMaybe<Int_Comparison_Exp>;
  gears?: InputMaybe<Gears_Bool_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  measurement_preference?: InputMaybe<String_Comparison_Exp>;
  profile?: InputMaybe<String_Comparison_Exp>;
  profile_medium?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  segment_efforts?: InputMaybe<Segment_Efforts_Bool_Exp>;
  sex?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  expires_at?: InputMaybe<Scalars['Int']>;
  external_id?: InputMaybe<Scalars['Int']>;
  ftp?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  activities?: InputMaybe<Activities_Arr_Rel_Insert_Input>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date_preference?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  external_id?: InputMaybe<Scalars['Int']>;
  first_name?: InputMaybe<Scalars['String']>;
  ftp?: InputMaybe<Scalars['Int']>;
  gears?: InputMaybe<Gears_Arr_Rel_Insert_Input>;
  last_name?: InputMaybe<Scalars['String']>;
  measurement_preference?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  profile_medium?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  segment_efforts?: InputMaybe<Segment_Efforts_Arr_Rel_Insert_Input>;
  sex?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  access_token?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date_preference?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  external_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  ftp?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  measurement_preference?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  profile_medium?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  access_token?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date_preference?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  external_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  ftp?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  measurement_preference?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  profile_medium?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  access_token?: InputMaybe<Order_By>;
  activities_aggregate?: InputMaybe<Activities_Aggregate_Order_By>;
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_preference?: InputMaybe<Order_By>;
  expired?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  ftp?: InputMaybe<Order_By>;
  gears_aggregate?: InputMaybe<Gears_Aggregate_Order_By>;
  last_name?: InputMaybe<Order_By>;
  measurement_preference?: InputMaybe<Order_By>;
  profile?: InputMaybe<Order_By>;
  profile_medium?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  segment_efforts_aggregate?: InputMaybe<Segment_Efforts_Aggregate_Order_By>;
  sex?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  external_id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DatePreference = 'date_preference',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Ftp = 'ftp',
  /** column name */
  LastName = 'last_name',
  /** column name */
  MeasurementPreference = 'measurement_preference',
  /** column name */
  Profile = 'profile',
  /** column name */
  ProfileMedium = 'profile_medium',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  Sex = 'sex',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date_preference?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  external_id?: InputMaybe<Scalars['Int']>;
  first_name?: InputMaybe<Scalars['String']>;
  ftp?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  measurement_preference?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  profile_medium?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  sex?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  expires_at?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  ftp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  ftp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  ftp?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  expires_at?: Maybe<Scalars['Int']>;
  external_id?: Maybe<Scalars['Int']>;
  ftp?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DatePreference = 'date_preference',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Ftp = 'ftp',
  /** column name */
  LastName = 'last_name',
  /** column name */
  MeasurementPreference = 'measurement_preference',
  /** column name */
  Profile = 'profile',
  /** column name */
  ProfileMedium = 'profile_medium',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  Sex = 'sex',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  ftp?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  ftp?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  expires_at?: Maybe<Scalars['Float']>;
  external_id?: Maybe<Scalars['Float']>;
  ftp?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "weather" */
export type Weather = {
  __typename?: 'weather';
  /** An array relationship */
  activities: Array<Activities>;
  /** An aggregate relationship */
  activities_aggregate: Activities_Aggregate;
  conditions: Scalars['String'];
  id: Scalars['uuid'];
  /** An array relationship */
  segment_efforts: Array<Segment_Efforts>;
  /** An aggregate relationship */
  segment_efforts_aggregate: Segment_Efforts_Aggregate;
  temperature?: Maybe<Scalars['Float']>;
  wind_chill?: Maybe<Scalars['Float']>;
  wind_dir?: Maybe<Scalars['Float']>;
  wind_gust?: Maybe<Scalars['Float']>;
  wind_speed?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "weather" */
export type WeatherActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** columns and relationships of "weather" */
export type WeatherActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Activities_Order_By>>;
  where?: InputMaybe<Activities_Bool_Exp>;
};

/** columns and relationships of "weather" */
export type WeatherSegment_EffortsArgs = {
  distinct_on?: InputMaybe<Array<Segment_Efforts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Efforts_Order_By>>;
  where?: InputMaybe<Segment_Efforts_Bool_Exp>;
};

/** columns and relationships of "weather" */
export type WeatherSegment_Efforts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Segment_Efforts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Segment_Efforts_Order_By>>;
  where?: InputMaybe<Segment_Efforts_Bool_Exp>;
};

/** aggregated selection of "weather" */
export type Weather_Aggregate = {
  __typename?: 'weather_aggregate';
  aggregate?: Maybe<Weather_Aggregate_Fields>;
  nodes: Array<Weather>;
};

/** aggregate fields of "weather" */
export type Weather_Aggregate_Fields = {
  __typename?: 'weather_aggregate_fields';
  avg?: Maybe<Weather_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Weather_Max_Fields>;
  min?: Maybe<Weather_Min_Fields>;
  stddev?: Maybe<Weather_Stddev_Fields>;
  stddev_pop?: Maybe<Weather_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Weather_Stddev_Samp_Fields>;
  sum?: Maybe<Weather_Sum_Fields>;
  var_pop?: Maybe<Weather_Var_Pop_Fields>;
  var_samp?: Maybe<Weather_Var_Samp_Fields>;
  variance?: Maybe<Weather_Variance_Fields>;
};

/** aggregate fields of "weather" */
export type Weather_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Weather_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Weather_Avg_Fields = {
  __typename?: 'weather_avg_fields';
  temperature?: Maybe<Scalars['Float']>;
  wind_chill?: Maybe<Scalars['Float']>;
  wind_dir?: Maybe<Scalars['Float']>;
  wind_gust?: Maybe<Scalars['Float']>;
  wind_speed?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "weather". All fields are combined with a logical 'AND'. */
export type Weather_Bool_Exp = {
  _and?: InputMaybe<Array<Weather_Bool_Exp>>;
  _not?: InputMaybe<Weather_Bool_Exp>;
  _or?: InputMaybe<Array<Weather_Bool_Exp>>;
  activities?: InputMaybe<Activities_Bool_Exp>;
  conditions?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  segment_efforts?: InputMaybe<Segment_Efforts_Bool_Exp>;
  temperature?: InputMaybe<Float_Comparison_Exp>;
  wind_chill?: InputMaybe<Float_Comparison_Exp>;
  wind_dir?: InputMaybe<Float_Comparison_Exp>;
  wind_gust?: InputMaybe<Float_Comparison_Exp>;
  wind_speed?: InputMaybe<Float_Comparison_Exp>;
};

/** unique or primary key constraints on table "weather" */
export enum Weather_Constraint {
  /** unique or primary key constraint */
  WeatherPkey = 'weather_pkey',
}

/** input type for incrementing numeric columns in table "weather" */
export type Weather_Inc_Input = {
  temperature?: InputMaybe<Scalars['Float']>;
  wind_chill?: InputMaybe<Scalars['Float']>;
  wind_dir?: InputMaybe<Scalars['Float']>;
  wind_gust?: InputMaybe<Scalars['Float']>;
  wind_speed?: InputMaybe<Scalars['Float']>;
};

/** input type for inserting data into table "weather" */
export type Weather_Insert_Input = {
  activities?: InputMaybe<Activities_Arr_Rel_Insert_Input>;
  conditions?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  segment_efforts?: InputMaybe<Segment_Efforts_Arr_Rel_Insert_Input>;
  temperature?: InputMaybe<Scalars['Float']>;
  wind_chill?: InputMaybe<Scalars['Float']>;
  wind_dir?: InputMaybe<Scalars['Float']>;
  wind_gust?: InputMaybe<Scalars['Float']>;
  wind_speed?: InputMaybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Weather_Max_Fields = {
  __typename?: 'weather_max_fields';
  conditions?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  temperature?: Maybe<Scalars['Float']>;
  wind_chill?: Maybe<Scalars['Float']>;
  wind_dir?: Maybe<Scalars['Float']>;
  wind_gust?: Maybe<Scalars['Float']>;
  wind_speed?: Maybe<Scalars['Float']>;
};

/** aggregate min on columns */
export type Weather_Min_Fields = {
  __typename?: 'weather_min_fields';
  conditions?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  temperature?: Maybe<Scalars['Float']>;
  wind_chill?: Maybe<Scalars['Float']>;
  wind_dir?: Maybe<Scalars['Float']>;
  wind_gust?: Maybe<Scalars['Float']>;
  wind_speed?: Maybe<Scalars['Float']>;
};

/** response of any mutation on the table "weather" */
export type Weather_Mutation_Response = {
  __typename?: 'weather_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Weather>;
};

/** input type for inserting object relation for remote table "weather" */
export type Weather_Obj_Rel_Insert_Input = {
  data: Weather_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Weather_On_Conflict>;
};

/** on conflict condition type for table "weather" */
export type Weather_On_Conflict = {
  constraint: Weather_Constraint;
  update_columns?: Array<Weather_Update_Column>;
  where?: InputMaybe<Weather_Bool_Exp>;
};

/** Ordering options when selecting data from "weather". */
export type Weather_Order_By = {
  activities_aggregate?: InputMaybe<Activities_Aggregate_Order_By>;
  conditions?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  segment_efforts_aggregate?: InputMaybe<Segment_Efforts_Aggregate_Order_By>;
  temperature?: InputMaybe<Order_By>;
  wind_chill?: InputMaybe<Order_By>;
  wind_dir?: InputMaybe<Order_By>;
  wind_gust?: InputMaybe<Order_By>;
  wind_speed?: InputMaybe<Order_By>;
};

/** primary key columns input for table: weather */
export type Weather_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "weather" */
export enum Weather_Select_Column {
  /** column name */
  Conditions = 'conditions',
  /** column name */
  Id = 'id',
  /** column name */
  Temperature = 'temperature',
  /** column name */
  WindChill = 'wind_chill',
  /** column name */
  WindDir = 'wind_dir',
  /** column name */
  WindGust = 'wind_gust',
  /** column name */
  WindSpeed = 'wind_speed',
}

/** input type for updating data in table "weather" */
export type Weather_Set_Input = {
  conditions?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  temperature?: InputMaybe<Scalars['Float']>;
  wind_chill?: InputMaybe<Scalars['Float']>;
  wind_dir?: InputMaybe<Scalars['Float']>;
  wind_gust?: InputMaybe<Scalars['Float']>;
  wind_speed?: InputMaybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Weather_Stddev_Fields = {
  __typename?: 'weather_stddev_fields';
  temperature?: Maybe<Scalars['Float']>;
  wind_chill?: Maybe<Scalars['Float']>;
  wind_dir?: Maybe<Scalars['Float']>;
  wind_gust?: Maybe<Scalars['Float']>;
  wind_speed?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Weather_Stddev_Pop_Fields = {
  __typename?: 'weather_stddev_pop_fields';
  temperature?: Maybe<Scalars['Float']>;
  wind_chill?: Maybe<Scalars['Float']>;
  wind_dir?: Maybe<Scalars['Float']>;
  wind_gust?: Maybe<Scalars['Float']>;
  wind_speed?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Weather_Stddev_Samp_Fields = {
  __typename?: 'weather_stddev_samp_fields';
  temperature?: Maybe<Scalars['Float']>;
  wind_chill?: Maybe<Scalars['Float']>;
  wind_dir?: Maybe<Scalars['Float']>;
  wind_gust?: Maybe<Scalars['Float']>;
  wind_speed?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Weather_Sum_Fields = {
  __typename?: 'weather_sum_fields';
  temperature?: Maybe<Scalars['Float']>;
  wind_chill?: Maybe<Scalars['Float']>;
  wind_dir?: Maybe<Scalars['Float']>;
  wind_gust?: Maybe<Scalars['Float']>;
  wind_speed?: Maybe<Scalars['Float']>;
};

/** update columns of table "weather" */
export enum Weather_Update_Column {
  /** column name */
  Conditions = 'conditions',
  /** column name */
  Id = 'id',
  /** column name */
  Temperature = 'temperature',
  /** column name */
  WindChill = 'wind_chill',
  /** column name */
  WindDir = 'wind_dir',
  /** column name */
  WindGust = 'wind_gust',
  /** column name */
  WindSpeed = 'wind_speed',
}

/** aggregate var_pop on columns */
export type Weather_Var_Pop_Fields = {
  __typename?: 'weather_var_pop_fields';
  temperature?: Maybe<Scalars['Float']>;
  wind_chill?: Maybe<Scalars['Float']>;
  wind_dir?: Maybe<Scalars['Float']>;
  wind_gust?: Maybe<Scalars['Float']>;
  wind_speed?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Weather_Var_Samp_Fields = {
  __typename?: 'weather_var_samp_fields';
  temperature?: Maybe<Scalars['Float']>;
  wind_chill?: Maybe<Scalars['Float']>;
  wind_dir?: Maybe<Scalars['Float']>;
  wind_gust?: Maybe<Scalars['Float']>;
  wind_speed?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Weather_Variance_Fields = {
  __typename?: 'weather_variance_fields';
  temperature?: Maybe<Scalars['Float']>;
  wind_chill?: Maybe<Scalars['Float']>;
  wind_dir?: Maybe<Scalars['Float']>;
  wind_gust?: Maybe<Scalars['Float']>;
  wind_speed?: Maybe<Scalars['Float']>;
};

export type GetActivityQueryVariables = Exact<{
  id: Scalars['bigint'];
}>;

export type GetActivityQuery = {
  __typename?: 'query_root';
  activities_by_pk?: {
    __typename?: 'activities';
    average_speed: any;
    max_speed: any;
    start_point: any;
    end_point: any;
    elapsed_time: number;
    moving_time: number;
    total_elevation_gain: any;
    distance: any;
    achievement_count?: number | null;
    start_date_local: any;
    name: string;
    pr_count?: number | null;
    external_id: any;
    segment_efforts: Array<{
      __typename?: 'segment_efforts';
      pr_rank?: number | null;
      weather_id?: any | null;
      id: number;
      elapsed_time: number;
      moving_time: number;
      name: string;
      average_watts: any;
      average_heartrate?: any | null;
      max_heartrate?: any | null;
      segment: {
        __typename?: 'segments';
        external_id: any;
        distance: any;
        average_grade: any;
        elevation_high: any;
        elevation_low: any;
        start_point: any;
        end_point: any;
      };
    }>;
    weather?: {
      __typename?: 'weather';
      wind_speed?: number | null;
      wind_dir?: number | null;
      conditions: string;
      temperature?: number | null;
    } | null;
    map: { __typename?: 'maps'; map: string };
  } | null;
  topResults: Array<{
    __typename?: 'segment_efforts';
    id: number;
    name: string;
    pr_rank?: number | null;
    segment_id: any;
    segment: { __typename?: 'segments'; start_point: any; end_point: any };
  }>;
};

export type GetSegmentLeaderboardsQueryVariables = Exact<{
  segmentId: Scalars['bigint'];
  userId: Scalars['Int'];
}>;

export type GetSegmentLeaderboardsQuery = {
  __typename?: 'query_root';
  segment_efforts: Array<{
    __typename?: 'segment_efforts';
    start_date_local: any;
    moving_time: number;
    elapsed_time: number;
    id: number;
    segment_id: any;
  }>;
};

export type ActivityDetailsFragment = {
  __typename?: 'activities';
  distance: any;
  total_elevation_gain: any;
  elapsed_time: number;
  moving_time: number;
  achievement_count?: number | null;
  start_date_local: any;
  name: string;
  pr_count?: number | null;
  external_id: any;
  map: { __typename?: 'maps'; map: string };
};

export type GetUserDataQueryVariables = Exact<{
  id: Scalars['Int'];
  weekStart: Scalars['timestamptz'];
  yearStart: Scalars['timestamptz'];
}>;

export type GetUserDataQuery = {
  __typename?: 'query_root';
  users_by_pk?: {
    __typename?: 'users';
    external_id: number;
    profile: string;
    profile_medium: string;
    date_preference?: string | null;
    first_name: string;
    last_name: string;
    username: string;
  } | null;
  user_dashboard_summary: Array<{
    __typename?: 'user_summary';
    activities?: any | null;
    distance?: any | null;
  }>;
  activitiesWeek: {
    __typename?: 'activities_aggregate';
    aggregate?: {
      __typename?: 'activities_aggregate_fields';
      count: number;
      sum?: {
        __typename?: 'activities_sum_fields';
        distance?: any | null;
        moving_time?: number | null;
        total_elevation_gain?: any | null;
      } | null;
    } | null;
  };
  activitiesYear: {
    __typename?: 'activities_aggregate';
    aggregate?: {
      __typename?: 'activities_aggregate_fields';
      count: number;
      sum?: {
        __typename?: 'activities_sum_fields';
        distance?: any | null;
        total_elevation_gain?: any | null;
        moving_time?: number | null;
      } | null;
    } | null;
  };
  segment_efforts: Array<{
    __typename?: 'segment_efforts';
    name: string;
    start_date_local: any;
    pr_rank?: number | null;
  }>;
  recentActivities: Array<{
    __typename?: 'activities';
    type: string;
    distance: any;
    total_elevation_gain: any;
    elapsed_time: number;
    moving_time: number;
    achievement_count?: number | null;
    start_date_local: any;
    name: string;
    pr_count?: number | null;
    external_id: any;
    segment_efforts: Array<{
      __typename?: 'segment_efforts';
      id: number;
      elapsed_time: number;
      moving_time: number;
      name: string;
    }>;
    map: { __typename?: 'maps'; map: string };
  }>;
};

export type EffortFragment = {
  __typename?: 'segment_efforts';
  id: number;
  elapsed_time: number;
  moving_time: number;
  name: string;
  average_watts: any;
  average_heartrate?: any | null;
  max_heartrate?: any | null;
};

export type GetDetailedSegmentLeaderboardsQueryVariables = Exact<{
  segmentId: Scalars['bigint'];
  userId: Scalars['Int'];
}>;

export type GetDetailedSegmentLeaderboardsQuery = {
  __typename?: 'query_root';
  segment_efforts: Array<{
    __typename?: 'segment_efforts';
    start_date_local: any;
    id: number;
    elapsed_time: number;
    moving_time: number;
    name: string;
    average_watts: any;
    average_heartrate?: any | null;
    max_heartrate?: any | null;
    segment: {
      __typename?: 'segments';
      average_grade: any;
      climb_category: number;
      elevation_high: any;
      elevation_low: any;
      end_point: any;
      total_elevation_gain?: any | null;
      start_point: any;
      distance: any;
      maximum_grade: any;
      map?: { __typename?: 'maps'; map: string } | null;
    };
    weather?: {
      __typename?: 'weather';
      temperature?: number | null;
      conditions: string;
      wind_dir?: number | null;
      wind_gust?: number | null;
      wind_chill?: number | null;
      wind_speed?: number | null;
    } | null;
  }>;
};

export type GetWeatherForSegmentQueryVariables = Exact<{
  weatherId: Scalars['uuid'];
}>;

export type GetWeatherForSegmentQuery = {
  __typename?: 'query_root';
  weather_by_pk?: {
    __typename?: 'weather';
    temperature?: number | null;
    wind_dir?: number | null;
    wind_speed?: number | null;
    conditions: string;
  } | null;
};

export const ActivityDetailsFragmentDoc = `
    fragment ActivityDetails on activities {
  distance
  total_elevation_gain
  elapsed_time
  moving_time
  achievement_count
  start_date_local
  name
  map {
    map
  }
  pr_count
  external_id
  start_date_local
}
    `;
export const EffortFragmentDoc = `
    fragment Effort on segment_efforts {
  id
  elapsed_time
  moving_time
  name
  average_watts
  average_heartrate
  max_heartrate
}
    `;
export const GetActivityDocument = `
    query getActivity($id: bigint!) {
  activities_by_pk(external_id: $id) {
    ...ActivityDetails
    average_speed
    max_speed
    start_point
    end_point
    elapsed_time
    moving_time
    total_elevation_gain
    segment_efforts {
      segment {
        external_id
        distance
        average_grade
        elevation_high
        elevation_low
        start_point
        end_point
      }
      ...Effort
      pr_rank
      weather_id
    }
    weather {
      wind_speed
      wind_dir
      conditions
      temperature
    }
  }
  topResults: segment_efforts(
    where: {_and: [{activity_id: {_eq: $id}}, {pr_rank: {_is_null: false}}]}
    order_by: {pr_rank: asc}
    limit: 5
  ) {
    id
    name
    pr_rank
    segment_id
    segment {
      start_point
      end_point
    }
  }
}
    ${ActivityDetailsFragmentDoc}
${EffortFragmentDoc}`;
export const useGetActivityQuery = <TData = GetActivityQuery, TError = unknown>(
  variables: GetActivityQueryVariables,
  options?: UseQueryOptions<GetActivityQuery, TError, TData>
) =>
  useQuery<GetActivityQuery, TError, TData>(
    ['getActivity', variables],
    fetcher<GetActivityQuery, GetActivityQueryVariables>(
      GetActivityDocument,
      variables
    ),
    options
  );
export const GetSegmentLeaderboardsDocument = `
    query getSegmentLeaderboards($segmentId: bigint!, $userId: Int!) {
  segment_efforts(
    where: {_and: [{segment_id: {_eq: $segmentId}}, {user_id: {_eq: $userId}}]}
    order_by: {elapsed_time: asc}
    limit: 10
  ) {
    start_date_local
    moving_time
    elapsed_time
    id
    segment_id
  }
}
    `;
export const useGetSegmentLeaderboardsQuery = <
  TData = GetSegmentLeaderboardsQuery,
  TError = unknown
>(
  variables: GetSegmentLeaderboardsQueryVariables,
  options?: UseQueryOptions<GetSegmentLeaderboardsQuery, TError, TData>
) =>
  useQuery<GetSegmentLeaderboardsQuery, TError, TData>(
    ['getSegmentLeaderboards', variables],
    fetcher<GetSegmentLeaderboardsQuery, GetSegmentLeaderboardsQueryVariables>(
      GetSegmentLeaderboardsDocument,
      variables
    ),
    options
  );
export const GetUserDataDocument = `
    query getUserData($id: Int!, $weekStart: timestamptz!, $yearStart: timestamptz!) {
  users_by_pk(external_id: $id) {
    external_id
    profile
    profile_medium
    date_preference
    first_name
    last_name
    username
  }
  user_dashboard_summary(args: {id: $id}) {
    activities
    distance
  }
  activitiesWeek: activities_aggregate(
    where: {user_id: {_eq: $id}, start_date_local: {_gte: $weekStart}}
  ) {
    aggregate {
      count
      sum {
        distance
      }
      sum {
        moving_time
      }
      sum {
        total_elevation_gain
      }
    }
  }
  activitiesYear: activities_aggregate(
    where: {user_id: {_eq: $id}, start_date_local: {_gte: $yearStart}}
  ) {
    aggregate {
      count
      sum {
        distance
      }
      sum {
        total_elevation_gain
      }
      sum {
        moving_time
      }
    }
  }
  segment_efforts(
    distinct_on: [name]
    order_by: [{name: asc}, {pr_rank: asc}, {start_date_local: desc}]
    where: {pr_rank: {_eq: 1}, user_id: {_eq: $id}}
    limit: 3
  ) {
    name
    start_date_local
    pr_rank
  }
  recentActivities: activities(limit: 10, order_by: {start_date_local: desc}) {
    ...ActivityDetails
    type
    segment_efforts(where: {pr_rank: {_is_null: false}}, limit: 3) {
      id
      elapsed_time
      moving_time
      name
    }
  }
}
    ${ActivityDetailsFragmentDoc}`;
export const useGetUserDataQuery = <TData = GetUserDataQuery, TError = unknown>(
  variables: GetUserDataQueryVariables,
  options?: UseQueryOptions<GetUserDataQuery, TError, TData>
) =>
  useQuery<GetUserDataQuery, TError, TData>(
    ['getUserData', variables],
    fetcher<GetUserDataQuery, GetUserDataQueryVariables>(
      GetUserDataDocument,
      variables
    ),
    options
  );
export const GetDetailedSegmentLeaderboardsDocument = `
    query getDetailedSegmentLeaderboards($segmentId: bigint!, $userId: Int!) {
  segment_efforts(
    where: {_and: [{segment_id: {_eq: $segmentId}}, {user_id: {_eq: $userId}}]}
    order_by: {elapsed_time: asc}
  ) {
    ...Effort
    start_date_local
    segment {
      average_grade
      climb_category
      elevation_high
      elevation_low
      end_point
      total_elevation_gain
      start_point
      map {
        map
      }
      distance
      maximum_grade
    }
    weather {
      temperature
      conditions
      wind_dir
      wind_gust
      wind_chill
      wind_speed
    }
  }
}
    ${EffortFragmentDoc}`;
export const useGetDetailedSegmentLeaderboardsQuery = <
  TData = GetDetailedSegmentLeaderboardsQuery,
  TError = unknown
>(
  variables: GetDetailedSegmentLeaderboardsQueryVariables,
  options?: UseQueryOptions<GetDetailedSegmentLeaderboardsQuery, TError, TData>
) =>
  useQuery<GetDetailedSegmentLeaderboardsQuery, TError, TData>(
    ['getDetailedSegmentLeaderboards', variables],
    fetcher<
      GetDetailedSegmentLeaderboardsQuery,
      GetDetailedSegmentLeaderboardsQueryVariables
    >(GetDetailedSegmentLeaderboardsDocument, variables),
    options
  );
export const GetWeatherForSegmentDocument = `
    query getWeatherForSegment($weatherId: uuid!) {
  weather_by_pk(id: $weatherId) {
    temperature
    wind_dir
    wind_speed
    conditions
  }
}
    `;
export const useGetWeatherForSegmentQuery = <
  TData = GetWeatherForSegmentQuery,
  TError = unknown
>(
  variables: GetWeatherForSegmentQueryVariables,
  options?: UseQueryOptions<GetWeatherForSegmentQuery, TError, TData>
) =>
  useQuery<GetWeatherForSegmentQuery, TError, TData>(
    ['getWeatherForSegment', variables],
    fetcher<GetWeatherForSegmentQuery, GetWeatherForSegmentQueryVariables>(
      GetWeatherForSegmentDocument,
      variables
    ),
    options
  );
