# blog-project
A blog

## Objective:
Create a blog website.

## Initial Set-Up:
1) Download the starting files for Section 23: Boss Level Challenge 3 - Blog Website
found here: 
https://www.appbrewery.co/p/web-development-course-resources/
2) cd into the current project folder and initialize npm using the command line interface. This will create a package.json file.
```
  npm init
```

3) Install npm in the current project folder. This will create a package-lock.json file. 
```
  npm install
```

4) Use npm to install express in the current project folder. You can check that it is installed in the package.json file under dependencies. 
```
  npm install express
```

5) Use npm to install body-parser in the current project folder.You can check that it is installed in the package.json file under dependencies. 
```
  npm install body-parser
```

6) Use npm to install ejs in the current project folder. You can check that it is installed in the package.json file under dependencies. 
```
  npm install ejs
```

7) Use npm to install loDash (a modern JavaScript utility library delivering modularity, performance & extras) in the current project folder. You can check that it is installed in the package.json file under dependencies. 

```
  npm install lodash
```

## Install MongoDB
https://www.mongodb.com/try/download/community

Follow the Installation manual from: 
https://www.mongodb.com/docs/v6.0/tutorial/install-mongodb-on-os-x-tarball/

STEP 1: Download the tarball
STEP 2: Exact the files from the downloaded archive
STEP 3: Ensure the binaries are in a directory listed in your PATH environment variable.
* Open a new CLI (terminal on Mac)

*  Moving the MongoDB folder into /usr/local (used by the system administrator when installing software locally)
put stuff that you manage here
```
 sudo mv /Users/rebecca/Downloads/mongodb-macos-x86_64-6.0.4 /usr/local/mongodb
```
 Check if the folder was successfully moved to the local folder:
```
open /usr/local/ 
```

* The usr folder is normally hidden, it is easier to use the CLI to access its contents. 

* Add MongoDB binaries to environment variables. 
* This tells our Mac when it starts up what is the file path to access MongoDB.

Go to home folder
```
cd ~
```

* Create a new file called .zshrc
```
touch .zshrc
```
* Check if the .zshrc file was created successfully inside the list of hidden files
```
ls -a
```
*edit the .zshrc folder by using an editor on the CLI called vim.
```
vim .zshrc
```

* vim does not have a GUI with buttons, it works with commands. While using vim get into insert mode hit i. 

* type the following command: 
```
export PATH=$PATH:/usr/local/mongodb/bin 
```
* Exit INSERT MODE by hitting the esc key. 

* Save your edits by typing the following command and hit enter when done. This will also quit vim.
```
:wq
```
 

9) Run MongoDB Community Edition:

STEP 1: Create a data directory before you start MongoDB for the first time. Create db folder inside the mongodb folder.
```
mkdir -p /usr/local/mongodb/db
```

* check to see if the db folder was successfully created:
```
open /usr/local/mongodb/db
```

PROTIP: MacOS has since changed root level directory permissions. 
You can no longer create directories in the root directory. 

STEP 2: Set permissions for the data directory. 

sudo chown "username" "directory path you want to own"

```
sudo chown rebecca /usr/local/mongodb/db
```

STEP 3) Check if mongodb was installed correctly by typing the following command:
```
mongos --version
```

*You might get a system error about security and trusting software from unsigned developers. Go to System Settings -> Privacy & Security and grant permissions to "mongos"

try typing the following command again:

```
mongos --version
```

*mac might ask you again if you are sure you want to open "mangos" grant permission by clicking yes.

STEP 4) Start mongodb database server. Type the following command:

```
mongod --dbpath /usr/local/mongodb/db
```

*Anytime you close this terminal you will need to type this command to run the mongodb database server again.

STEP 6) MongoDB Shell Download
MongoDB Shell is the quickest way to connect to (and work with) MongoDB. Download and extract the files.

Open the folder and click on bin, drop the two files inside (mongosh and mongosh_crypt_v1.dylib) into /usr/local/mongodb/bin folder.

STEP 5) Open a new tab in the terminal by hitting the command t keys or shell > new tab.
* type the following command: 
```
mongosh
```


## Challenges
**Challenge 1:**
To complete challenge 1, you should be able to head over to localhost:3000 and when you hit enter it should render the home page and it will have an h1 but just says Home.

So in your home.ejs you'll need to create an h1 that says Home and by writing some code inside app.js, you should be able to get this to show up on localhost:3000.

**Challenge 2:**
In the app.js file, there are three of constants at the top:

const homeStartingContent = 
const aboutContent = 
const contactContent =

They just contain a whole bunch of Lorem Ipsum and randomly generated text.

Let's say that this the content that's in our server and we want to be able to deliver it over to our home page using EJS.

For this challenge have the home page display a "home" title using a h1 tag and the homeStartingContent inside a paragraph tag.

On your browser, when you go to localhost:3000 you will see an h1 that says home, but also the same text that's held inside that constant which is homeStartingContent.

**Challenge 3:**
Inside the home.ejs file there is an HTML boilerplate and a title.

In this challenge, replace the header and footer layout partials inside the respective header.ejs and a footer.ejs files.

When you refresh your website you should see the nav bar,

the three links in the nav bar, a brand on the left and a footer at the bottom with some text. And you'll

see all of the CSS that we've got inside our styles.css being applied to this web page.

**Challenge 4:**
Inside the project, in the views folder, create a new folder called partials.

Inside this folder drag the header and footer.ejs files.

When you come across Node Express EJS apps, there are main web pages and then there are our partially complete HTML files inside a folder called partials. This is usually the structure that you will see. 

To complete this challenge try and fix the code so that your header and footer partials still get

applied.

**Challenge 5:** 
Now in this challenge in order to complete it, go into your browser and go to

localhost:3000/about and be able to see the about page with the same header and footer and CSS

applied to this page. And also to be able to go over to the contact page and again have this page rendered

with a header and footer using the partials and also have the data that's inside the app.js,

about content and contact content rendered and passed over to the correct pages.

**Challenge 6:** Update the code so that when you click on these the nav bar links (home, about us, contact, us) in the nav bar they actually take us to the correct pages.

So when you click on about, it should go to the About page and contact goes to a contact page. The challenging part is is figuring out where to change this code.

**Challenge 7:**
The goal of this challenge is to be able to head over to the path that's localhost:3000

/compose and be able to render a page that has the same styling as the rest of the pages with

our nav bar and our footer and to have an h1 that says compose as the title of the page. And then we're going to have a text input and button that has the text publish.

**Challenge 8:**
The goals for this challenge is to update the code so that when we go over to our compose page and we type something and we click publish then we should see that blog entry immediately in our console.

**Challenge 9:**
Create a compose form with bootstrap enabled on a title input and a post input.

The title input is a single line and the post input is a multi line text box 

You also need to make this publish button blue and look like this.

We've got some extra labels in hand above the title and post input boxes.

**Challenge 10:**
Currently there are two inputs inside our form. One is called post body and one is called post title. 

Inside our app.js we currently can console.log the post title that gets sent to our compose route through the post requests that the form initiates.

So when we click the submit button we send over two pieces of data, the textarea and the input.

The next challenge is instead of console logging the post body or the post title inside this callback, create a Javascript object that's simply just called post and it has to store both the title that gets passed over as well as the post body that gets passed over.

**Challenge 11:**
In this challenge put this newly created post object inside a global variable called

posts, with an 's' at the end.

We're going to have an array that is going to store all of these new posts but it's going to be a global variable.

You need to create a new empty array that is a global variable and then you're going to add this new post object to that new array.

And finally at the end of this route, you're going to redirect to the root route. And inside the root route we're going to log all of the posts inside the post array that you created.

Once you've completed this, what should happen is I should be able to put in a post hit publish

and then let's go back to compose again and let's put in another post and hit publish.

And firstly you notice that we get directed to the root route or the home page

once we've finished composing the post. And then if you take a look inside our terminal you can see that

my entire array is being logged and the first time it only contained a single object, the 'Day 1 post, and the second time this array

contained two Javascript objects both of my posts, 'Day 1' and 'Day 2'.

**Challenge 12:** 
Instead of console logging the posts, pass them over to the home.ejs page and console.log the posts array there.

**Challenge 13:**
Write a FOR loop inside the home.ejs page that loops through the post array and console logs each and every title, the titles of each of these posts. And to test it you should have a minimum of two posts so that you can make sure that you are indeed printing out all of the titles inside the posts array.

**Challenge 14:**
use the forEach method instead of the standard FOR loop that you currently have.

**Challenge 15:**
The goal of this challenge is instead of console logging the titles or the bodies of each of the posts that we compose I want you to be able to render it on the home page.

**Challenge 16:**
Restart your server, if you are running nodemon you can type rs to restart it.
Create a new route with parameters /posts/:postName

**Challenge 17**
Restart your server, if you are running nodemon you can type rs to restart it.

go to /compose and write a post with a title Test and inside the post you can write any kind of mumbojumbo and click on the publish button. 

The aim of this challenge is if we can type /posts/test spelt out exactly the same as the title of our blog post, then when I hit enter and I go over to our console I should be able to see match found.

So I want you to write the code inside app.js that checks whether if this parameter value is equal to a title of a post that we've got inside our posts array. And if that's true then you're going to log match found.

**Challenge 18:**
Install loDash, which is a modern JavaScript utility library delivering modularity, performance & extras. Require loDash in your project. In the loDash documentation search for lowercase, and use the method that allows you to turn all strings into a lowercase. And if you look at the example it actually goes much further than that. It will in fact ignore all of the hyphens or the underscores and it will simply just give you a pure string to work with.

**Challenge 19:**
Instead of console logging whether a title is matched or not match, we actually want to render the actual page so that if we have a post say called another post inside our home page we should be able to head over to /posts/another-post.

And the goal of this challenge is that when I hit enter we should now get taken to a brand new page that's been rendered using EJS and it's a standalone page that just contains the contents of that particular blog post.

**Challenge 20:**
The goal of this challenge is to use Google and use Stack Overflow and use all the resources you have on the internet to figure out how you can change the code so that our home page now truncates the content of each blog posts to only 100 characters. And then at the end there's just these three ... and now we only have a preview of each blog post.

**Challenge 21:**
The goal of this challenge is when you load up the home page it should have a link at the end of each truncated blog post with something that says Read more. And when we click on it then it should take us to the actual page of the blog post including all of the content.

Solution: 
We know that inside home.ejs we already have access to the post's title for each and every post on the home page.

We also know that we've set up our routes so that if we say posts/ and we simply put in the name all the titles, so say Day 1 with a space in between will look like this /posts/day-1
That means that our href can simply be /posts/EJS tag so we end up with this  in the href /posts/<%= post.title %>


## Learned
I learned how to

use route parameters

use Lodash, a JavaScript utility library that makes it easier to work with JavaScript inside my Node apps.

used _.lowerCase() loDash method that converts string, as space separated words, to lower case.

## Methods
* substring() JavaScript method that returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.



