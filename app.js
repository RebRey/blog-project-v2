const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");

// Challenge 18: require lodash
const _ = require("lodash");

const app = express();
const port = 3000;
app.listen(port, function () {
  console.log("Server is running on port " + port + ".");
});

const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// challenge 11: Create a variable called posts to store the javascript object that stores the two key value pairs, set it equal to an empty array
let posts = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Challenge 1: Render the homepage (home.ejs)
app.get("/", function (req, res) {
  // Challenge 2: Output the value of const homeStartingContent into the template (HTML escaped)
  // key(ejs tag name): value (js const name)
  // Challenge 12: pass the posts array into the home.ejs page when we render it.
  // add another key value pair after the startingContent: homeStartingContent value pair.
  res.render("home", {
    startingContent: homeStartingContent,
    // javascript object name called posts: array called posts
    posts: posts,
  });

  // Challenge 11: Console log the posts array so we can see all of the posts that are stored inside the array.
  // console.log(posts);
});

// Challenge 5: Render the about page (about.ejs)
app.get("/about", function (req, res) {
  // Challenge 2: Output the value of const aboutContent into the template (HTML escaped)
  // key(ejs tag name): value (js const name)
  res.render("about", { ejsAboutContent: aboutContent });
});

// Challenge 5: Render the countact page (contact.ejs)
app.get("/contact", function (req, res) {
  // Challenge 2: Output the value of const constContent into the template (HTML escaped)
  // key(ejs tag name): value (js const name)
  // Challenge 12: output the post javascript object
  res.render("contact", { ejsContactContent: contactContent });
});

// Challenge 7: Get request to render the compose page (compose.ejs)
app.get("/compose", function (req, res) {
  // Challenge 2: Output the value of const constContent into the template (HTML escaped)
  // key(ejs tag name): value (js const name)
  res.render("compose");
});

// Challenge 8: POST request to render text input after pushing the publish button on compose.ejs
app.post("/compose", function (req, res) {
  const postTitle = req.body.postTitle;
  // Challenge 8: Console log the text input
  // console.log(req.body.postBody);
  // Challenge 10 create a JavaScript object that stores the following key:pairs:
  // title: req.body.postTitle , and content:req.body.postBody
  // req.body object stores input from the client (browser) and sends it to your Express server.
  const post = {
    title: req.body.postTitle,
    // convert the title into kebabcase to keep it shorter with - instead of %20
    kebabCaseTitle: _.kebabCase(req.body.postTitle),
    content: req.body.postBody,
  };
  // Challenge 11: add the post object into the new array by using the .push() method
  // posts is the array .push() is the method and post is the javascript object that contains the key value pairs
  posts.push(post);

  // Challenge 11: redirect to the root route and inside of the root route, we're going to log all o fthe posts inside the post array.
  res.redirect("/");
});

// Challenge 16: create a get request using route parameters /posts/:postName
// note the : in front of the postName, this creates a dynamic URL
// console log the postName parameter using req.params() method
app.get("/posts/:postName", function (req, res) {
  // console.log(req.params.postName);
  // Challenge 17: check wheather the parameter value is equal to a title of a post that we have inside our posts array.
  // Create a constant called requestedTitle and set it equal to req.params.postName
  // Challenge 18: convert req.params.postName into lowercase using loDash method 
  const requestedTitle = _.lowerCase(req.params.postName);

  // Challenge 17: loop through the posts array to check its title
  // inside the function() should be the singular form of the array (function(post))
  posts.forEach(function (post) {
    // Challenge 17: after checking its title save it into a constant called storedTitle
     // Challenge 18: convert post.title into lowercase using loDash method  
    const storedTitle = _.lowerCase(post.title);

    // Challenge 17: Check for each post wheather if the storedTitle matches the requestedTitle so we can use an if statment for that
    // if (storedTitle === requestedTitle) {
    //   console.log("Match found!")
    // } else {
    //   console.log("Not a match!")
    // }

    // Challenge 19: 
    if (storedTitle === requestedTitle) {
      // Challenge 19: create a javascript object with two key-value pairs. the key is the name and the values are the ejs tag names we want to render on the page
      res.render("post", {
        title: post.title,
        content: post.content
      })
    }
  });
});

