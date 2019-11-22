const mongoose = require("mongoose");
const Well = require("../models/Well");

mongoose
  // .connect("mongodb://heroku_k6fbpvjf:jssia5c411e25qjsuk2uf1qovj@ds115166.mlab.com:15166/heroku_k6fbpvjf", { useNewUrlParser: true })
  .connect("mongodb://localhost/t-apped", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const wellType = "Trinkbrunnen";

const well = [
  {
    name: "Volkspark Friedrichshain",
    type: wellType,
    coordinates: { lat: 52.528544, lng: 13.432946 },
    availability: "open", //"open", "not available", "closed"
    accessability: "off",
    noteworthy: "off",
    inOperation: { from: 1, to: 12 } //[from:, to:]
  },
  {
    name: "Park Gleisdreieck Ostpark",
    type: wellType,
    coordinates: { lat: 52.499459, lng: 13.372408 },
    availability: "closed", //"open", "not available", "closed"
    accessability: "on",
    noteworthy: "off",
    inOperation: {
      from: 1,
      to: 12
    },
    ratings: [1, 4, 5] //[from:, to:]
  },
  {
    name: "Reichenberger Str. 18",
    type: wellType,
    coordinates: { lat: 52.498711, lng: 13.419031 },
    availability: "closed", //"open", "not available", "closed"
    accessability: "on",
    noteworthy: "off",
    inOperation: { from: 1, to: 12 } //[from:, to:]
  },
  {
    name: "Comeniusplatz/ Torellstr.",
    type: wellType,
    coordinates: { lat: 52.511341, lng: 13.44879 },
    availability: "closed", //"open", "not available", "closed"
    accessability: "on",
    noteworthy: "on",
    inOperation: { from: 5, to: 12 }, //[from:, to:]
    ratings: [4, 4, 3]
  },
  {
    name: "Park Gleisdreieck Westpark",
    type: wellType,
    coordinates: { lat: 52.4958, lng: 13.373565 },
    availability: "closed", //"open", "not available", "closed"
    accessability: "off",
    noteworthy: "off",
    inOperation: { from: 5, to: 10 } //[from:, to:]
  },
  {
    name: "Paul-Linke Ufer",
    type: wellType,
    coordinates: { lat: 52.493004, lng: 13.431233 },
    availability: "not available", //"open", "not available", "closed"
    accessability: "off",
    noteworthy: "off",
    inOperation: { from: 1, to: 12 }, //[from:, to:]
    ratings: [4, 5, 5],
    imageUrls: [
      "https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg",
      "https://www.fressnapf.de/medias/katze-Kitten-Freig-nger-580-500.jpg?context=bWFzdGVyfHJvb3R8NTA4MzV8aW1hZ2UvanBlZ3xoOTgvaDE1Lzk2NTgxNzE1MjMxMDIuanBnfGVjNzYzZmMwM2ZhYzAxZWFkOGUxYjQwOTU2ODA1M2QyODI5NDMzOWI2ZTJmZjgzYjk1MzhmOTk3NzJjMzJmY2E"
    ]
  },
  {
    name: "Marchlewskistr./Pillauerstr.",
    type: wellType,
    coordinates: {
      lat: 52.510121,
      lng: 13.447446
    },
    availability: "closed", //"open", "not available", "closed"
    accessability: "off",
    noteworthy: "off",
    inOperation: {
      from: 5,
      to: 12
    },
    imageUrls: [
      "https://4.imimg.com/data4/IC/SK/MY-1736226/img-20160129-wa0018-500x500.jpg"
    ]
  },
  {
    name: "Mariannenplatz",
    type: wellType,
    coordinates: {
      lat: 52.503687,
      lng: 13.424634
    },
    availability: "open", //"open", "not available", "closed"
    accessability: "on",
    noteworthy: "off",
    inOperation: {
      from: 5,
      to: 10
    }
  },
  {
    name: "Hohenstaufenplatz",
    type: wellType,
    coordinates: {
      lat: 52.491028,
      lng: 13.422743
    },
    availability: "closed", //"open", "not available", "closed"
    accessability: "on",
    noteworthy: "on",
    inOperation: {
      from: 5,
      to: 10
    }
  },
  {
    name: "Herrmann-Stöhr-Platz",
    type: wellType,
    coordinates: {
      lat: 52.511681,
      lng: 13.433953
    },
    availability: "not available", //"open", "not available", "closed"
    accessability: "on",
    noteworthy: "off",
    inOperation: {
      from: 5,
      to: 10
    }
  },
  {
    name: "Marheinekeplatz",
    type: wellType,
    coordinates: {
      lat: 52.489132,
      lng: 13.395816
    },
    availability: "closed", //"open", "not available", "closed"
    accessability: "on",
    noteworthy: "off",
    inOperation: {
      from: 5,
      to: 12
    }
  },
  {
    name: "Forckenbeckplatz",
    type: wellType,
    coordinates: {
      lat: 52.520015,
      lng: 13.460264
    },
    availability: "not available", //"open", "not available", "closed"
    accessability: "on",
    noteworthy: "on",
    inOperation: {
      from: 5,
      to: 12
    }
  }
];

Well.deleteMany()
  .then(() => {
    return Well.create(well);
  })
  .then(wellCreated => {
    console.log(`${wellCreated.length} well created with the following id:`);
    console.log(wellCreated.map(u => w._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
