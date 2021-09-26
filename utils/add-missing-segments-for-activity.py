import requests
import aiohttp
import asyncio
from dotenv import load_dotenv, find_dotenv
import os

# put a low limit due to strava 15 mins limit
query = """
query Activities {
  activities(where: {_not: {segment_efforts: {}}}) {
    external_id
    segment_efforts {
      id
    }
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


async def create_activity(data):
    print(data)
    async with aiohttp.ClientSession() as session:
        calls = []
        for activity in data:
            body = {
              "user_id":  os.environ.get('USER_ID'),
              "activity_id": activity["external_id"]
            }
            apiCall = asyncio.ensure_future(create(session, body))
            calls.append(apiCall)
        await asyncio.gather(*calls)


async def create(session, data):
    async with session.post('http://localhost:8888/.netlify/functions/create_activity', json=data) as response:

        print("Status:", response.status)
        html = await response.text()
        print("Body:", html)
        return

asyncio.run(create_activity(
    result["data"]["activities"]))
