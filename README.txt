Instructions on getting this finished app running:

add your .env file to the root of this project. You need a PORT
and CONNECTION_STRING variable

run `npm install` in the terminal in the completed-code directory

run `nodemon` (or a daemon) in the terminal in the completed-code directory

Seed the database by copying the code in seed.sql and running it
in your database (this could be by using your database management company's
SQL runner available on their website).

Only if you are running locally:
run `localhost:<your .env port number>` in your browser.

Only if your app is deployed:
visit the IP address or domain of your deployed site.
Make sure your remote server is routing port 80 traffic to
the port specified in your .env file.

To demo the app:
 1. input at least one fighter
 2. input any amount of weapons or fighters
 3. delete any weapons you like
