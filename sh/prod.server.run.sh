#!/usr/bin/env bash

NODE_ENV=$NODE_ENV \
node node_modules/pm2/bin/pm2 start builds/$NODE_ENV/server/server.js
