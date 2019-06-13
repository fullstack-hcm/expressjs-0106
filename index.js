const express = require('express');
const PORT = 3900;
const app = express();

/**
 * internal package
 */
const CalClass      = require('./utils/Calcu');
const { POSTS }     = require('./utils/data');

const { GET_LIST_WITH_USER_ID, GET_INFO_POST_WITH_POST_ID }          = require('./utils/handle-func');

app.get('/', (req, res) => res.json({ message: 'hello home' }))

app.get('/hello-world', (request, response) => {
    response.json({
        message: 'hello world'
    })
})

app.get('/cal/:cal/:numA/:numB', (req, res) => {
    const { cal, numA, numB } = req.params;
    if (isNaN(numA) || isNaN(numB))
        res.json({ message: 'param_not_valid' })
    let cal1 = new CalClass(cal.toUpperCase(), numA, numB);

    let resultCal = cal1._getResultCal();
    res.json({ resultCal })
});

/**
 * List Post
 */
app.get('/posts', (req, res) => res.json({ POSTS }))

/**
 * Get lIST with userID
 */
app.get('/posts/:userID', (req, res) => {
    const { userID } = req.params;
    let postWithUserId = GET_LIST_WITH_USER_ID(POSTS, userID);
    res.json({ posts: postWithUserId })
})

app.get('/post/:postID', (req, res) => {
    const { postID } = req.params;
    /**
     * validate
     */
    let infoPost = GET_INFO_POST_WITH_POST_ID(POSTS, postID);
    res.json({ infoPost })
})

app.listen(PORT, () => console.log(`server started at port: ${PORT}`))

/**
 * 1. npm init
 * 2. npm install express --save
 * 
 * RELOAD -- npm install -g nodemon
 * node index.js => nodemon index.js
 */