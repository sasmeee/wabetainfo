const { getSearch, getArticles, getLatest, getFullPost } = require("./wabetainfo");

async function getWabetainfoData() {
  try {
    const latestPosts = await getLatest();
    console.log(latestPosts);

    const fullPost = await getFullPost();
    console.log(fullPost);

    const articles = await getArticles();
    console.log(articles);

    const postUrl =
      "https://wabetainfo.com/whatsapp-beta-for-android-2-23-17-15-whats-new/";
    const searchResults = await getSearch(postUrl);
    const faq = searchResults[0].faq;
    console.log(faq);
  } catch (error) {
    console.error("Error:", error);
  }
}

getWabetainfoData();
