FROM node:20-alpine

# Create app directory
WORKDIR /usr

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

ENV NODE_ENV="development"

CMD ["yarn", "start"]

# u run the commands locally: (when testing locally, they will have to spin up their own postgres or some shit locally). dont use the dockerfile cuz the database_url shit is fucked 
# 1) npx prisma migrate dev --name add-post-model. to create new migrations and apply those changes to database. 
# 2) npx prisma generate. to regenerate the prisma client in node_modules/.prisma/client with the updated schema from schema.prisma

# if they want to deploy their changes to the dev environment 
# push everyhting to github. now should be up to date with their migrations folder, new prisma client, etc. 
# gitops will trigger, create new image in artifact registry for both regular + dockerfile.dbmigrate. upon push, in the cloudbuild.yaml should specify cloud run jobs execute. instead of using wtv the fuck they had in the .env for database connection, the cloud run jobs will use the cloudsql one. 



