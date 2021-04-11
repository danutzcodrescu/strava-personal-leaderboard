import requests
import aiohttp
import asyncio
from dotenv import load_dotenv, find_dotenv
import os

query = """
{
  segment_efforts(where: {weather_id: {_is_null: true}}, limit: 800) {
    id
    segment_id
    start_date_local
    elapsed_time
  }
}
"""
load_dotenv(find_dotenv('../.env'))


def run_query(query):
    request = requests.post(
        os.environ.get('REACT_APP_HASURA_ENDPOINT'), json={'query': query}, headers={'content-type': 'application/json', 'x-hasura-admin-secret': os.environ.get('HASURA_ADMIN_SECRET')})
    if request.status_code == 200:
        return request.json()
    else:
        raise Exception("Query failed to run by returning code of {}. {}".format(
            request.status_code, query))


result = run_query(query)


async def fetch_segment_weather(data):
    async with aiohttp.ClientSession() as session:
        calls = []
        for segment in data:
            body = {"event": {"data": {"new": {"id": segment["id"], "start_date_local": segment["start_date_local"],
                                               "elapsed_time": segment["elapsed_time"], "segment_id": segment["segment_id"]}}}}

            apiCall = asyncio.ensure_future(getData(session, body))
            calls.append(apiCall)
        await asyncio.gather(*calls)


async def getData(session, data):
    async with session.post('http://localhost:8888/.netlify/functions/fetch-weather-data-segment', json=data) as response:

        print("Status:", response.status)
        html = await response.text()
        print("Body:", html)
        return

asyncio.run(fetch_segment_weather(
    result["data"]["segment_efforts"]))
