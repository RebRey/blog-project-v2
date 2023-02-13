// Required modules
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");
const _ = require("lodash");

// Create the app and port connection
const app = express();
const port = 3000;
app.listen(port, function () {
  console.log("Server is running on port " + port + ".");
});

// // Open the connection to MongoDB local server and create the database
// main().catch((err) => console.log(err));
// async function main() {
//   mongoose.set("strictQuery", false);
//   await mongoose.connect("mongodb://127.0.0.1/blogDB");
//   console.log("Connected to local MongoDB server.");
// }

// Open the connection to MongoDB Atlas and create the database
main().catch((err) => console.log(err));
async function main() {
  mongoose.set("strictQuery", false);
  // Create a connection string for Mongo Atlas
  const connectionURI =
    "mongodb+srv://admin-rebecca:" +
    process.env.MONGO_ATLAS_ADMIN_PASSWORD +
    "@cluster0.swlgzsc.mongodb.net/blogDB";
  // Mongo Atlas connection
  await mongoose.connect(connectionURI);

  console.log("Connected to MongoDB server.");
}

// Create a Mongoose postSchema that contains a title and content.
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

// Create a Mongoose model using the postSchema to define your Posts Collection
const Post = mongoose.model("Post", postSchema);

// Starting content
const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// Set ejs
app.set("view engine", "ejs");

// Use body-parser and express in the app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Handle GET request for root route (home page)
app.get("/", function (req, res) {
  // Find all the post documents from the posts collection
  Post.find({}, function (err, posts) {
    // render the starting content and post documents in the home.ejs file
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts,
    });
  });
});

// Handle GET request for about route
app.get("/about", function (req, res) {
  res.render("about", { ejsAboutContent: aboutContent });
});

// Handle GET request for contact route
app.get("/contact", function (req, res) {
  res.render("contact", { ejsContactContent: contactContent });
});

// Handle GET request for compose route
app.get("/compose", function (req, res) {
  res.render("compose");
});

// Handle POST request for compose route
app.post("/compose", function (req, res) {
  // Create a new post document using mongoose model
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
  });

  // save the post document in your database
  // add a call back to the mongoose save() method.
  post.save(function (err) {
    if (!err) {
      // redirect to the root route
      res.redirect("/");
    }
  });
});

// Handle POST request for dynamic routes
// Change the express route parameter to postId
app.get("/posts/:postId", function (req, res) {
  // Create constant to store the postId parameter value
  const requestedPostId = req.params.postId;

  // Use the findOne() method to find the post with a matching id in the posts collection
  Post.findOne({ _id: requestedPostId }, function (err, post) {
    // Once a matching post is found, you can render its title and content in the post.ejs page
    res.render("post", {
      title: post.title,
      content: post.content,
    });
  });
});
