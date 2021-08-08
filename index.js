const express = require("express");
const morgan = require("morgan");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

require("dotenv").config();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGO_URL || "mongodb://localhost:27017/";
const DB_NAME = process.env.MONGO_DB || "htadb";

let db;
let articleCollection;

// SETUP express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("combined"));

// GET:LIST endpoint
app.get("/article", (req, res) => {
  articleCollection.find({}).toArray((err,result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(result);
  });
});

// GET:ID endpoint
app.get("/article/:id", (req, res) => {
  articleCollection.findOne({ _id: new ObjectId(req.params.id) }, (error, result) => {
      if(error) {
          return res.status(500).send(error);
      }
      res.send(result);
  });
});

// POST endpoint
app.post("/article", (req, res) => {
  articleCollection.insertOne(req.body, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log(req.body);
    res.send(result.result);
  });
});

// DELETE endpoint
app.delete("/article/:id", (req, res) => {
  articleCollection.deleteOne({ _id : new ObjectId(req.params.id) }, (err, result) => {
    if(err) {
        return res.status(500).send(error);
    }
    res.send(result);
});
});

// START the web server
app.listen(PORT, () => {
  MongoClient.connect(DB_URL, function (err, client) {
    if (err) {
      console.log("Error connecting to database:", err);
      process.exit(1);
    }

    console.log("Connected to database.");

    db = client.db(DB_NAME);
    articleCollection = db.collection("article");
  });

  console.log(process.env);
  console.log(`hta listening at http://localhost:${PORT}`);
});
