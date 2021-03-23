from os import name, path
from platform import system, release
from netifaces import ifaddresses
import yaml


def replaceComposeValues():
    ip = ifaddresses('eth0')[2][0]['addr']
    filePath = path.join(path.dirname(__file__), '../docker-compose.yaml')
    with open(filePath, 'r') as file:
        compose = yaml.load(file, Loader=yaml.FullLoader)
        for value in compose['services']['graphql-engine']['environment'].items():
            if ip in value[1]:
                compose['services']['graphql-engine']['environment'][value[0]
                                                                     ] = value[1].replace('http://{}'.format(ip), "${DOCKER_GATEWAY_HOST: -host.docker.internal}")

    with open(filePath, 'w') as writter:
        yaml.dump(compose, writter)


if system() == "Linux" and "microsoft-standard" in release():
    replaceComposeValues()
