// injecting some data at the begining of building the app .
require("dotenv").config({ path: __dirname + "/./../.env" });
const mongoose = require("mongoose");
const QA = require("../models/QA");
// get data
const bulkQuestions = require("../data/data");

// see if DB url exist.
if (!process.env.MONGODB_URI) {
  throw "Cannot read MONGODB_URI, the uri seems to be undefined, have you set the environment variables ?";
}
const url = process.env.MONGODB_URI; // no need to add PORT here unless creating a new collection.
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    console.log(
      "\x1b[1m\x1b[36m%s\x1b[0m",
      `Connection to ${x.connection.name} established.`
    );
    return QA.deleteMany();
  })
  .then(() => {
    // write data in mongoDB with create
    QA.create(bulkQuestions)
      .then((createdQuestions) => {
        console.log(
          `DB seed accomplished : ${createdQuestions.length} documents inserted !`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
