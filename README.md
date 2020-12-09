# t-apped

t-apped is an application that helps to bring people to free, fresh and clean water in Berlin.

As these kinds of drinking water wells are available in Berlin since 1985 (according to Wikipedia) and nobody knows about it, we saw it as our job to introduce these to the community.

The main focus groups are on the one hand water citizens and tourists and the other hands the service workers of "Berliner Wasserbetriebe" the water provider.

t-apped uses open data from the government of Berlin, seeded in a MongoDB database as there is no API available.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

`git clone https://github.com/MikeVanYarnrider/t-apped.git`

then navigate to the approriate folder and install all npm packages

`npm install`

afterwards, you can start seeding the MongoDB database for testing

`node bin/seeds.js`

`node bin/wellSeeds.js`

### Get it running

The port for localhost is set to :2000. As you might want it to run on localhost because your localhost:2000 is already in use, you can change the ports in file bin/www. Just search for every occurence of 2000 and change it to whatever number you want.

In your terminal, navigate to your /t-apped folder and with

`npm start``

the application should be available on localhost:2000 (or whatever number you chose)

## What to do

You can freely look around and checkout which fresh water fountains are currently open or closed and see the ranking. Reporting dirty or broken fountains is also possible.

For some features you need to be logged in and therefore we have a

_Regular User_
Username: Alice
Password: Alice

who has access to comments and his personalised profile with information about how great saving water is and regular users are able to comment, rate and report water fountains.

_Admin User_
Username: Bob
Password: Bob

is granted Access to the Admin dashboard. Admins can create and delete water fountains, see the reported ones with address, can check them out and mark them as resolved.

## Core Features

- map by mapbox
- user backend with interesting information about water usage in general
- admin backend for troubleshooting
- well details for availability, accessibility and commenting
- This application was created for demonstrative purposes and is not for sales use.

t-apped was created and developed by Pascal Hanke and Michael Garnreiter .

https://t-apped.herokuapp.com/about

Technologies: Node.js, Express.js, Passport.js, MongoDB, Bootstrap, Mapbox, handlebars
