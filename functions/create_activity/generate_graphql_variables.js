function generateGraphqlVariables(stravaActivity, user_id) {
  const object = {
    achievement_count: stravaActivity.achievement_count,
    average_heartrate: stravaActivity.average_heartrate,
    average_speed: stravaActivity.average_speed,
    average_watts: stravaActivity.average_watts,
    device_watts: stravaActivity.device_watts,
    distance: stravaActivity.distance,
    elapsed_time: stravaActivity.elapsed_time,
    elev_high: stravaActivity.elapsed_time,
    elev_low: stravaActivity.elev_low,
    end_point: `(${stravaActivity.end_latlng.reverse().join(',')})`,
    external_id: stravaActivity.id,
    gear_id: stravaActivity.gear_id,
    has_heartrate: stravaActivity.has_heartrate,
    kilojoules: stravaActivity.kilojoules,
    location_city: stravaActivity.location_city,
    location_country: stravaActivity.location_country,
    location_state: stravaActivity.location_state,
    max_heartrate: stravaActivity.max_heartrate,
    max_speed: stravaActivity.max_speed,
    moving_time: stravaActivity.moving_time,
    pr_count: stravaActivity.pr_count,
    start_date_local: stravaActivity.start_date_local,
    start_point: `(${stravaActivity.start_latlng.reverse().join(',')})`,
    total_elevation_gain: stravaActivity.total_elevation_gain,
    type: stravaActivity.type,
    user_id: stravaActivity.athlete.id,
    map: {
      data: {
        external_id: stravaActivity.map.id,
        map: stravaActivity.map.polyline,
      },
    },
  };
  const segments = stravaActivity.segment_efforts.map((effort) => ({
    external_id: effort.segment.id,
    average_grade: effort.segment.average_grade,
    maximum_grade: effort.segment.maximum_grade,
    start_point: `(${effort.segment.start_latlng.reverse().join(',')})`,
    end_point: `(${effort.segment.end_latlng.reverse().join(',')})`,
    elevation_low: effort.segment.elevation_low,
    elevation_high: effort.segment.elevation_high,
    distance: effort.segment.distance,
    country: effort.segment.country,
    climb_category: effort.segment.climb_category,
    city: effort.segment.city,
    state: effort.segment.state,
    type: effort.segment.activity_type,
    segment_efforts: {
      data: {
        activity_id: stravaActivity.id,
        average_heartrate: effort.average_heartrate,
        average_watts: effort.average_watts,
        device_watts: effort.device_watts,
        elapsed_time: effort.elapsed_time,
        max_heartrate: effort.max_heartrate,
        moving_time: effort.moving_time,
        start_date_local: effort.start_date_local,
        user_id: user_id,
        pr_rank: effort.pr_rank,
        average_cadence: effort.average_cadence,
      },
    },
  }));
  return { object, segments };
}

module.exports = generateGraphqlVariables;
