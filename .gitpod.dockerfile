FROM gitpod/workspace-full

RUN npm install -g netlify-cli \
    && curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash \
    && curl https://rclone.org/install.sh | sudo bash
    