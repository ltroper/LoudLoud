# LoudLoud
This is a clone of SoundCloud.
LoudLoud is a place to share songs.

# Index
[MVP Feature List](https://github.com/ltroper/LoudLoud/wiki/MVP-Feature-List)|[Database Schema](https://github.com/ltroper/LoudLoud/wiki/Database-Schema)|

# Getting Started
1. Clone this repo `https://github.com/ltroper/LoudLoud.git`
2. Install dependencies `npm install`
3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL `CREATE USER <name> WITH CREATEDB PASSWORD <Ppassword>`
4. Create a .env file int the backend directory based on .env.example.
5. Enter username and password into the .env file along with the desired database name, a secure password for the JWT_SECRET, and your desired PORT.
6. Add the following proxy to your package.json file within your frontend directory, matching your port configuration in the .env file. `"proxy": "http://localhost:5000"`
7. Create database, migrate and seed `npx dotenv sequelize db:create` `npx dotenv sequelize db:migrate` `npx dotenv sequelize db:seed:all`
8. Start the services in the backend and frontend directory `npm start`
9. Create an account to begin using LoudLoud

# Features
Logged in users can perform following actions.
- Add/View/Edit/Delete Songs
- Add/View/Edit/Delete Playlists

