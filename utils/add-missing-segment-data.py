import requests
import aiohttp
import asyncio
from dotenv import load_dotenv, find_dotenv
import os

# put a low limit due to strava 15 mins limit
query = """
{
 segments(where: {map_id: {_is_null: true}}, limit: 5) {
    external_id
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


async def fetch_segment_map(data):
    async with aiohttp.ClientSession() as session:
        calls = []
        for segment in data:
            body = {
                "event": {"data": {"new": {"external_id": segment["external_id"], }}}}
            apiCall = asyncio.ensure_future(get_data(session, body))
            calls.append(apiCall)
        await asyncio.gather(*calls)


async def get_data(session, data):
    async with session.post('http://localhost:8888/.netlify/functions/fetch-segment-data', json=data) as response:

        print("Status:", response.status)
        html = await response.text()
        print("Body:", html)
        return

asyncio.run(fetch_segment_map(
    result["data"]["segments"]))
