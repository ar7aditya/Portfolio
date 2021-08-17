const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const port = 80;
let posts = [];
let myArray = Object.values(posts);

const homeStartingContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, doloribus. Voluptates quaerat consequatur rem id, adipisci fugit doloremque dignissimos provident non at sapiente vitae fugiat omnis deserunt voluptate illo facilis!";
const aboutContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, doloribus. Voluptates quaerat consequatur rem id, adipisci fugit doloremque dignissimos provident non at sapiente vitae fugiat omnis deserunt voluptate illo facilis!";
const contactContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, doloribus. Voluptates quaerat consequatur rem id, adipisci fugit doloremque dignissimos provident non at sapiente vitae fugiat omnis deserunt voluptate illo facilis!";


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))


app.get("/", (req, res) => {
    res.render('home.ejs', {
        homeStarting: homeStartingContent,
        posts: posts
    });
})
app.get("/about", (req, res) => {
    res.render('about.ejs', { aboutStarting: aboutContent });
})
app.get("/contact", (req, res) => {
    res.render('contact.ejs', { contactStarting: contactContent });
})
app.get("/compose", (req, res) => {
    res.render('compose.ejs');
})

app.post('/compose', (req, res) => {
    const post = {
        title: req.body.postTitle,
        content: req.body.postBody
    }
    posts.push(post);
    res.redirect("/");

})

app.get('/posts/:userId', function (req, res) {
    let requestedTitle = _.lowerCase(req.params.userId);

    posts.forEach(function (post) {
        const storedTitle = _.lowerCase(post.title);

        if (storedTitle === requestedTitle) {
            res.render('post.ejs', {
                title: post.title,
                content: post.content
            });
        }
    });
});




app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});



