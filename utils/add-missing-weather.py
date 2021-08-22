import requests

query = """
{
  activities(where: {weather_id: {_is_null: true}}, limit: 500) {
    external_id
    map_id
    start_date_local
    elapsed_time
  }
}
"""


def run_query(query):
    request = requests.post(
        'http://localhost:8080/v1/graphql', json={'query': query}, headers={'x-hasura-admin-secret': 'myadminsecretkey'})
    if request.status_code == 200:
        return request.json()
    else:
        raise Exception("Query failed to run by returning code of {}. {}".format(
            request.status_code, query))


result = run_query(query)


def fetch_weather_data(data):
    for activity in data:
        body = {"event": {"data": {"new": {"map_id": activity["map_id"], "start_date_local": activity["start_date_local"],
                                           "elapsed_time": activity["elapsed_time"], "external_id": activity["external_id"]}}}}
        weather = requests.post(
            "http://localhost:8888/.netlify/functions/fetch-weather-data-activity", json=body)
        if weather.status_code == 200:
            print(weather.text)
        else:
            raise Exception("Query failed to run by returning code of {}. {}".format(
                weather.status_code,))


fetch_weather_data(result["data"]["activities"])
