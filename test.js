const { waBetaHome, getLatestPost } = require("./wabetainfo");

// to get all posts in home page

waBetaHome().then(console.log);

// to get leatest post in home page

getLatestPost().then(console.log);
