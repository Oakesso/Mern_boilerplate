const mongoose = require("mongoose");

if (!process.env.MONGODB_URI) {
  throw "Cannot read MONGODB_URI, the uri seems to be undefined, have you set the environment variables ?";
}

console.log("process.env.MONGODB_URI :", process.env.MONGODB_URI);

const url = process.env.MONGODB_URI;

mongoose
  .connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    console.log(
      "\x1b[1m\x1b[36m%s\x1b[0m",
      `Connection to ${x.connection.name} established.`
    );
  })
  .catch((error) => {
    console.log(`An error occured try to connect to the DB ${error}`);
  });
