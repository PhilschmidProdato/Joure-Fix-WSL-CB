FROM node:10

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# installs node dependencies
RUN npm install


# Bundle app source
COPY . .

EXPOSE 4444
CMD [ "node", "server.js" ]