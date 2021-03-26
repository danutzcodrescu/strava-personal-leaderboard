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
            if '${DOCKER_GATEWAY_HOST:-host.docker.internal}' in value[1]:
                compose['services']['graphql-engine']['environment'][value[0]
                                                                     ] = value[1].replace('${DOCKER_GATEWAY_HOST:-host.docker.internal}', 'http://{}'.format(ip))
    with open(filePath, 'w') as writter:
        print(compose)
        yaml.dump(compose, writter)
    print('DONE')


if system() == "Linux" and "microsoft-standard" in release():
    replaceComposeValues()
