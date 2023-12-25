FROM node:lts AS base

# Set working directory
WORKDIR /app

# 
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

# Same as npm install
RUN yarn install --frozen-lockfile

COPY . /app
