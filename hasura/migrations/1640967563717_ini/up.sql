SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.user_summary (
    first_name text,
    last_name text,
    activities bigint,
    distance numeric
);
CREATE FUNCTION public.user_dashboard_summary(id integer) RETURNS SETOF public.user_summary
    LANGUAGE sql STABLE
    AS $$
   SELECT users.first_name,
    users.last_name,
    count(activities.external_id) AS activities,
    sum(activities.distance) AS distance
   FROM (users
     JOIN activities ON ((users.external_id = activities.user_id)))
  WHERE users.external_id = id     
  GROUP BY users.external_id;
$$;
CREATE TABLE public.users (
    external_id integer NOT NULL,
    access_token text NOT NULL,
    refresh_token text NOT NULL,
    scope text NOT NULL,
    username text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    profile_medium text NOT NULL,
    profile text NOT NULL,
    state text,
    country text,
    city text,
    sex text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    measurement_preference text NOT NULL,
    ftp integer,
    date_preference text,
    expires_at integer NOT NULL,
    CONSTRAINT measurements CHECK (((measurement_preference = 'feet'::text) OR (measurement_preference = 'meters'::text)))
);
CREATE FUNCTION public.users_expired_token(user_row public.users) RETURNS integer
    LANGUAGE sql STABLE
    AS $$
  select 
    case 
        when extract(epoch from now()) < expires_at 
            then 0 else 1 end as "expired" 
  from users where external_id = user_row.external_id;
$$;
CREATE TABLE public.activities (
    distance numeric NOT NULL,
    moving_time integer NOT NULL,
    elapsed_time integer NOT NULL,
    total_elevation_gain numeric NOT NULL,
    start_date_local timestamp with time zone NOT NULL,
    location_city text,
    location_state text,
    location_country text,
    achievement_count integer,
    average_speed numeric NOT NULL,
    max_speed numeric NOT NULL,
    average_watts numeric,
    has_heartrate boolean NOT NULL,
    average_heartrate numeric,
    max_heartrate numeric,
    elev_high numeric NOT NULL,
    elev_low numeric NOT NULL,
    pr_count integer,
    user_id integer NOT NULL,
    device_watts boolean NOT NULL,
    kilojoules numeric,
    type text NOT NULL,
    gear_id text NOT NULL,
    start_point point NOT NULL,
    end_point point NOT NULL,
    map_id text NOT NULL,
    external_id bigint NOT NULL,
    name text NOT NULL,
    weather_id uuid,
    CONSTRAINT rides_columns CHECK (((type = 'Ride'::text) AND (kilojoules IS NOT NULL) AND (average_watts IS NOT NULL))),
    CONSTRAINT type CHECK (((type = 'Ride'::text) OR (type = 'Run'::text)))
);
CREATE TABLE public.gears (
    distance numeric NOT NULL,
    brand_name text NOT NULL,
    model_name text,
    frame_type text,
    description text,
    user_id bigint NOT NULL,
    external_id text NOT NULL
);
CREATE TABLE public.maps (
    summary text,
    map text NOT NULL,
    external_id text NOT NULL
);
CREATE TABLE public.segment_efforts (
    user_id integer NOT NULL,
    segment_id bigint NOT NULL,
    elapsed_time integer NOT NULL,
    moving_time integer NOT NULL,
    start_date_local timestamp with time zone NOT NULL,
    device_watts boolean NOT NULL,
    average_watts numeric NOT NULL,
    average_heartrate numeric,
    max_heartrate numeric,
    pr_rank integer,
    average_cadence numeric,
    id integer NOT NULL,
    activity_id bigint NOT NULL,
    name text NOT NULL,
    weather_id uuid
);
CREATE SEQUENCE public.segment_efforts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.segment_efforts_id_seq OWNED BY public.segment_efforts.id;
CREATE TABLE public.segments (
    external_id bigint NOT NULL,
    distance numeric NOT NULL,
    type text NOT NULL,
    average_grade numeric NOT NULL,
    maximum_grade numeric NOT NULL,
    elevation_high numeric NOT NULL,
    elevation_low numeric NOT NULL,
    start_point point NOT NULL,
    end_point point NOT NULL,
    climb_category integer NOT NULL,
    total_elevation_gain numeric,
    city text,
    country text,
    state text,
    map_id text,
    name text NOT NULL,
    CONSTRAINT type CHECK (((type = 'Ride'::text) OR (type = 'Run'::text)))
);
CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.users_id_seq OWNED BY public.users.external_id;
CREATE TABLE public.weather (
    wind_dir real,
    temperature real,
    wind_speed real,
    wind_gust real,
    wind_chill real,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    conditions text NOT NULL
);
ALTER TABLE ONLY public.segment_efforts ALTER COLUMN id SET DEFAULT nextval('public.segment_efforts_id_seq'::regclass);
ALTER TABLE ONLY public.users ALTER COLUMN external_id SET DEFAULT nextval('public.users_id_seq'::regclass);
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_id_key1 UNIQUE (external_id);
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_pkey PRIMARY KEY (external_id);
ALTER TABLE ONLY public.gears
    ADD CONSTRAINT gears_id_key UNIQUE (external_id);
ALTER TABLE ONLY public.gears
    ADD CONSTRAINT gears_pkey PRIMARY KEY (external_id);
ALTER TABLE ONLY public.maps
    ADD CONSTRAINT maps_id_key UNIQUE (external_id);
ALTER TABLE ONLY public.maps
    ADD CONSTRAINT maps_pkey PRIMARY KEY (external_id);
ALTER TABLE ONLY public.segment_efforts
    ADD CONSTRAINT segment_efforts_id_key UNIQUE (id);
ALTER TABLE ONLY public.segment_efforts
    ADD CONSTRAINT segment_efforts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.segments
    ADD CONSTRAINT segments_external_id_key UNIQUE (external_id);
ALTER TABLE ONLY public.segments
    ADD CONSTRAINT segments_pkey PRIMARY KEY (external_id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (external_id);
ALTER TABLE ONLY public.weather
    ADD CONSTRAINT weather_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_users_updated_at ON public.users IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_gear_id_fkey FOREIGN KEY (gear_id) REFERENCES public.gears(external_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_map_id_fkey FOREIGN KEY (map_id) REFERENCES public.maps(external_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(external_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_weather_id_fkey FOREIGN KEY (weather_id) REFERENCES public.weather(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.gears
    ADD CONSTRAINT gears_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(external_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.segment_efforts
    ADD CONSTRAINT segment_efforts_activity_id_fkey FOREIGN KEY (activity_id) REFERENCES public.activities(external_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.segment_efforts
    ADD CONSTRAINT segment_efforts_segment_id_fkey FOREIGN KEY (segment_id) REFERENCES public.segments(external_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.segment_efforts
    ADD CONSTRAINT segment_efforts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(external_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.segment_efforts
    ADD CONSTRAINT segment_efforts_weather_id_fkey FOREIGN KEY (weather_id) REFERENCES public.weather(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.segments
    ADD CONSTRAINT segments_map_id_fkey FOREIGN KEY (map_id) REFERENCES public.maps(external_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
