# Configuring the project 
- Install MySQL Server
- Create a database called ecommerce
- Inside the folder `client` run the command: `npm install`
- Inside the folder `api` run the command: `npm install`
- Create a `.env` file inside the folder `api` (look at `.env-example`)
- Inside the folder `api` run the following commands:
  - `npm run migrate` (create tables)
  - `npm run seed` (populate them with fake data)

# Running Dev
- Run the client using the command `npm start` inside the `client` folder
- Run the api using the command `npm run dev` inside the `api` folder

# Running Production
- You need the `pm2` module installed globally. You can install it with `npm install -g pm2`. Look at http://pm2.keymetrics.io for more details
- Run the client using the command `npm run start-prod` inside the `client` folder
- Run the api using the command `npm run start-prod` inside the `api` folder

# Other Commands
- Compile SCSS `gulp sass` or `npm run compile-scss`
- Compile SCSS watching changes `gulp sass:watch` or `npm run compile-scss-w`
- Build React App `npm run build`