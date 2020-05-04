FROM node:11-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /usr/src/app

# RUN yarn
RUN npm install --registry=https://registry.npm.taobao.org --pure-lockfile --no-emoji --no-progress

# Copy Codes
# COPY package.json /usr/src/app
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /usr/src/app

EXPOSE 8083
# CMD [ "npm", "run dev" ]
ENTRYPOINT ["yarn"]
CMD ["start"]