const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
var Twit = require('twit');

var T = new Twit({
    consumer_key: 'KVUdZnLuyYKFNWD1DGD8QaHhd',
    consumer_secret: 'dAGbwsX8kbMD7og4WtxkIGGeUYB4WwKVhCXiMcEZf1F15IsVKC',
    access_token: '1118775628961132544-W9qwTlD9lSIUnLu9Z6l41laHl3r3nY',
    access_token_secret: 's9gu9LT79FkLi3i3dcyghTZzuVecgO1ixYf0LPXoL4d9W',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
});




app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/getTweets', (req, res) => {
    res.send('Getting data');
    var params = { screen_name: 'Michael41984197' };
    T.get('statuses/user_timeline', params, function (error, data, response) {
        console.log(data);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
