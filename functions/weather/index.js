const axios = require('axios');

async function getWeatherData({ point, startDate, elapsed }) {
  const start = new Date(startDate);

  start.setSeconds(start.getSeconds() + elapsed);

  const { data } = await axios.get(
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history',
    {
      params: {
        contentType: 'json',
        key: process.env.WEATHER_API_KEY,
        unitGroup: 'metric',
        locations: point,
        aggregateHours: 1,
        startDateTime: startDate,
        endDateTime: start.toISOString().slice(0, -6),
        timezone: 'Europe/Brussels',
      },
    }
  );
  // for now only take first value
  return {
    wind_dir: data.locations[point].values[0].wdir,
    temperature: data.locations[point].values[0].temp,
    wind_speed: data.locations[point].values[0].wspd,
    wind_gust: data.locations[point].values[0].wgust,
    wind_chill: data.locations[point].values[0].windchill,
    conditions: data.locations[point].values[0].conditions,
  };
}

module.exports = {
  getWeatherData,
};
