const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const port = 80;
let posts = [];
let myArray = Object.values(posts);

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))


app.get("/", (req, res) => {
    res.render('home.ejs', {
        posts: posts
    });
})
app.get("/about", (req, res) => {
    res.render('about.ejs');
})
app.get("/contact", (req, res) => {
    res.render('contact.ejs');
})
app.get("/project", (req, res) => {
    res.render('project.ejs');
})
app.get("/project/readmore1", (req, res) => {
    res.render('readmore1.ejs');
})
app.get("/skill", (req, res) => {
    res.render('skill.ejs');
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



