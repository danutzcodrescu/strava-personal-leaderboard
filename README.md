# Strava personal leaderboard

Strava hidden the personal leaderboards behind the paywall in July 2020. I was mainly interesting in comparing my segment performances, hence the idea to create my own Strava leaderboard by fetching the data using Strava API and dumping it in a Postgres DB. The project tries to recreate some of the Strava UI around activity details and segment leaderboards, but this _this also one of my personal playgrounds and some things might not be polished at all_.

### Architecture

- serverless functions running on [Netlify](https://www.netlify.com/) to fetch data and authenticate the user against the [Strava API](https://developers.strava.com/)
- data fetched from Strava is dumped into a [PostgreDB](https://www.postgresql.org/)
- [Hasura Graphql](https://hasura.io/) to act as a backend-for-frontend
- frontend written in React, Typescript, Apollo Client and Material-UI; maps are created using [Leaflet](https://leafletjs.com/) and [Mapbox tiles](https://www.mapbox.com/maps); the charts are created using [Echarts](https://echarts.apache.org/en/index.html).
- weather data is collected using [Visual crossing API](https://www.visualcrossing.com/)

### Local development

Netlify Dev is used for local development of the frontend because it wraps create-react-app and spawns locally all the serverless functions required for the backend.

Docker compose is used to spin up the backend, making it very easy to create both a postgres db and Hasura graphql server.

In order to have the schema structure created make sure you first run the `init` migration and then apply the hasura metadata

```
psql -h localhost -p 5432 -d postgres -U postgres < ./hasura/migrations/init/up.sql

hasura metadata apply --admin-secret myadminsecretkey
```

#### WSL development

**Requires Python**
Netlify functions that are passed as ENV variable having the url as docker host do not work in WSL because Microsoft is mangling with the ip interfaces. in order to enable hasura event functions to be mapped to netlify local functions, run `yarn dev-wsl`. The script is remapping docker-compose env variables to `eth0` ip.

### Ansible scripts

There are some ansible scripts in order to backup the data from Docker, copy data from VPS Postgres DB, or to import it into a new Postgres database running remotely. Due to the volume of records that would be created by the weather data, Heroku DB quickly runs out of records (there is a hard limit of 10k rows for free version). I would personally advice getting a managed DB or a small server and install Postgres there. Also the scripts provide a way to upload the data to a Heroku Postgres DB linked to a Hasura cloud instance. `Psql` is required in most cases, but the scripts could be easily modified to be run from within docker if `psql` is not available locally.

The ansible scripts require some variables defined in the `ansible-scripts/vars.yml`. The file should contain:

- app_name -> Heroku application name
- hasura_endpoint -> Hasura cloud instance url
- docker_image_name -> name of the postgress docker container
- db_user - if running on in a vps get the role
- db_password - if running in a vps/managed db
- db_name - if running in a vps/managed db
- vps_address - ip of the vps or managed db
- port - if running in a vps/managed db
- hasura_admin_secret - if security is set in hasura
