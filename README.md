# Strava personal leaderboard

Strava hidden the personal leaderboards behind the paywall in July 2020. I was mainly interesting in comparing my segment performances, hence the idea to create my own Strava leaderboard by fetching the data using Strava API and dumping it in a Postgres DB. The project tries to recreate some of the Strava UI around activity details and segment leaderboards, but this _this also one of my personal playgrounds and some things might not be polished at all_.

### Architecture

- serverless functions running on [Netlify](https://www.netlify.com/) to fetch data and authenticate the user against the [Strava API](https://developers.strava.com/)
- data fetched from Strava is dumped into a [PostgreDB](https://www.postgresql.org/)
- [Hasura Graphql](https://hasura.io/) to act as a backend-for-frontend
- frontend written in React, Typescript, Apollo Client and Material-UI; maps are created using [Leaflet](https://leafletjs.com/) and [Mapbox tiles](https://www.mapbox.com/maps); the charts are created using [Echarts](https://echarts.apache.org/en/index.html).

### Local development

Netlify Dev is used for local development of the frontend because it wraps create-react-app and spawns locally all the serverless functions required for the backend.

Docker compose is used to spin up the backend, making it very easy to create both a postgres db and Hasura graphql server.

#### WSL development

**Requires Python**
Netlify functions that are passed as ENV variable having the url as docker host do not work in WSL because Microsoft is mangling with the ip interfaces. in order to enable hasura event functions to be mapped to netlify local functions, run `yarn dev-wsl`. The script is remapping docker-compose env variables to `eth0` ip.

### Ansible scripts

There are some ansible scripts in order to backup the data or to import it into new postgres db. Also the scripts provide a way to upload the data to a Heroku postgress DB linked to a Hasura cloud instance.

The ansible scripts require some variables defined in the `ansible-scripts/vars.yml`. The file should contain:

- app_name -> Heroku application name
- hasura_endpoint -> Hasura cloud instance url
- docker_image_name -> name of the postgress docker container
