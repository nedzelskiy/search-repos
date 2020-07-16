#!/usr/bin/env bash

NODE_ENV=$NODE_ENV \
node node_modules/nodemon/bin/nodemon.js \
    builds/$NODE_ENV/server/server.js \
    --watch builds/$NODE_ENV/server/server.js
