<p align="center">
  <a href="" rel="noopener">
 <img width=100px height=100px src="https://wabetainfo.com/wp-content/uploads/2021/01/image-100x100.jpg" alt="Esana"></a>
</p>

# **WABetaInfo** - A Web Scrape NPM package of wabetainfo.com (unofficial)

This is an unofficial scrape of wabetainfo.com and all post credit goes to **[@wabetainfo](https://wabetainfo.com/)**. This project is based on Javascript.

_Coded by: [Sasmitha Ashinsana](https://github.com/Sasmeee)_

## Installation

```
npm i @sasmeee/wabetainfo
```

## Usage

```js
const {
  getArticles,
  getLatest,
  getFullPost,
  getSearch,
} = require("@sasmeee/wabetainfo");
```

## Methods

### Get Post Previews List in Home - getArticles()

Code:

```js
const articles = await getArticles();
console.log(articles);
```

Output:

```json
{
    "id": "post-23832",
    "title": "WhatsApp beta for Android 2.23.17.15: what’s new?",
    "summary": "WhatsApp is rolling out a new update through the Google Play Beta Program, bringing the version up to 2.23.17.15.\n What’s new in this update? WhatsApp is rolling out a  feature to suggest new groups for communities, and it is available to some beta testers!",
    "link": "https://wabetainfo.com/whatsapp-beta-for-android-2-23-17-15-whats-new/",
    "publishedDate": "2023-08-16",
    "platforms": [ "ANDROID" ]
  },
  ... 9 more items
```

### Get Latest Post Preview - getLatest()

Code:

```js
const latestPosts = await getLatest();
console.log(latestPost);
```

Output:

```json
{
  "id": "post-23755",
  "title": "WhatsApp Web beta gets a screen lock feature to enhance privacy",
  "summary": "After announcing a screen lock feature in development for WhatsApp Desktop beta last year, we can finally announce that it’s now available to a limited group of users that joined the beta program of WhatsApp Web beta.",
  "link": "https://wabetainfo.com/whatsapp-web-beta-gets-a-screen-lock-feature-to-enhance-privacy/",
  "publishedDate": "2023-08-14",
  "platforms": ["WEB"]
}
```

### Get Latest Full Post - getFullPost()

Code:

```js
const fullPost = await getFullPost();
console.log(fullPost);
```

Output:

```json
{
  "id": "post-23755",
  "title": "WhatsApp Web beta gets a screen lock feature to enhance privacy",
  "summary": "After announcing a screen lock feature in development for WhatsApp Desktop beta last year, we can finally announce that it’s now available to a limited group of users that joined the beta program of WhatsApp Web beta.",
  "link": "https://wabetainfo.com/whatsapp-web-beta-gets-a-screen-lock-feature-to-enhance-privacy/",
  "publishedDate": "2023-08-14",
  "platforms": ["WEB"],
  "news": "After announcing a screen lock feature in development for WhatsApp Desktop beta last year, we can finally announce that it’s now available to a limited group of users that joined the beta program of WhatsApp Web beta.Last year, we shared an article regarding the screen lock option, a feature for WhatsApp Desktop beta. With this feature, it would have been possible to protect the app from unauthorized access with a password. When we announced this feature, it was under development so it was not ready for beta testers. However, after a long time of testing, WhatsApp is now releasing this feature to some beta testers that use the latest version of WhatsApp Web and joined the official beta program!As you can see in this screenshot, WhatsApp Web is locked thanks to the screen lock feature, and it asks for a password to view the list of your conversations. To discover if this feature is enabled for your WhatsApp account, just open WhatsApp Settings > Privacy. In case the feature is available to your account, you should see a screen lock entry point here. When enabled, you will have to enter a password to unlock WhatsApp Web. In this screen, it’s also possible to configure this feature by choosing when the user should be prompted with the password. If you forget the password, you need to log out of WhatsApp Web and log into again by scanning the QR code.Using the screen lock feature on WhatsApp Web offers an advantage in terms of privacy. When you enable this feature, it ensures that even if someone gains access to your computer while you’re away, they won’t be able to access your WhatsApp chats and messages without entering the password. In addition, push notifications will not appear when the screen is locked. In our opinion, this definitely helps users maintain the confidentiality of their conversations by enhancing privacy and prevents unauthorized users from viewing their personal information.The screen lock feature is available to some users that use the latest version of WhatsApp Web beta, and it is rolling out to even more people over the coming weeks.Stay up-to-date on WhatsApp news by following WABetaInfo on Twitter where you can also discover other new features for WhatsApp beta for Android, iOS, Web/Desktop, and Windows.Do you like this news? Please, let us know on Twitter: we love hearing your feedback! If you’re curious to know where you can find WABetaInfo, there is a dedicated page where you can discover our services.\n In addition, we have set up a Discord Server where you can chat with other people, get help and advice, and stay up to date with the latest announcements from WABetaInfo.",
  "imageLink": "https://usercontent.one/wp/wabetainfo.com/wp-content/uploads/2023/08/WA_SCREEN_LOCK_FEATURE_BETA_WEB.jpg",
  "faq": [
    {
      "question": "Name of the feature?",
      "answer": "Screen lock"
    },
    {
      "question": "Status?",
      "answer": "Rolling out"
    },
    {
      "question": "Compatibility?",
      "answer": "WhatsApp Web 2.2333.11 beta is marked as a compatible update."
    },
    {
      "question": "I’ve installed this update but I don’t have this feature. Why?",
      "answer": "This feature is available to some beta testers, and it’s rolling out to more people over the coming weeks."
    },
    {
      "question": "Thanks:",
      "answer": "Sc, for testing and reporting!"
    },
    {
      "question": "Previous news?",
      "answer": "WhatsApp news of the week: multi-account and passkey feature for account verification!"
    }
  ]
}
```

### Search the results from URL - searchResults()

> **Note:** You should asign the link to "PostUrl"

Code:

```js
const postUrl =
  "https://wabetainfo.com/whatsapp-beta-for-android-2-23-17-15-whats-new/";

const searchResults = await getSearch(postUrl);
console.log(searchResults);
```

Output:

```json
{
  "id": "post-23832",
  "title": "WhatsApp beta for Android 2.23.17.15: what’s new?",
  "publishedDate": "2023-08-16",
  "summary": "WhatsApp is rolling out a new update through the Google Play Beta Program, bringing the version up to 2.23.17.15.\n What’s new in this update? WhatsApp is rolling out a feature to suggest new community groups, and it is available to some beta testers!",
  "news": "WhatsApp is rolling out a new update through the Google Play Beta Program, bringing the version up to 2.23.17.15.\n What’s new in this update? WhatsApp is rolling out a feature to suggest new community groups, and it is available to some beta testers!In the article about the WhatsApp beta for Android 2.23.14.14 update, we announced a new feature for communities: pending groups. With this feature, everyone can recommend new groups to add to communities, giving community members the opportunity to enrich the community with new groups with similar interests. When we announced this feature in the previous article, this was under development, so it means it was not ready for beta testing. However, after installing the latest WhatsApp beta for Android 2.23.17.15 update from the Google Play Store, some community members may be able to experiment with this feature!As you can see in this screenshot, a new section will be available for community administrators, where all the groups suggested by community members will be listed. To suggest a group, community members simply need to open the community screen displaying all its groups and can add a new group using the designated button. Those groups have to receive approval from admins before being added to the community.In our opinion, this feature is designed to help community admins make their groups even better by allowing community members to work together. Once a suggestion for a new group is approved, the group gets automatically included in the community, and its members become part of the community too. This way, community admins can easily make their communities larger thanks to new groups. However, it’s important to note that new community members will have the choice to decide which other community groups they’d like to join since this process isn’t automatic.The pending groups feature for communities is available to some beta testers that install the latest updates of WhatsApp beta for Android, and it’s rolling out to even more people over the coming weeks.Stay up-to-date on WhatsApp news by following WABetaInfo on Twitter where you can also discover other new features for WhatsApp beta for Android, iOS, Web/Desktop, and Windows.Do you like this news? Please, let us know on Twitter: we love hearing your feedback! If you’re curious to see where you can find WABetaInfo, there is a dedicated page where you can discover our services.\n In addition, we have set up a Discord Server where you can chat with other people, get help and advice, and stay up to date with the latest announcements from WABetaInfo.",
  "imageLink": "https://usercontent.one/wp/wabetainfo.com/wp-content/uploads/2023/07/WA_GROUP_SUGGESTIONS_PENDING_GROUPS_SCREEN_ANDROID.png",
  "faq": [
    {
      "question": "Name of the feature?",
      "answer": "Suggest groups"
    },
    {
      "question": "Status?",
      "answer": "Rolling out"
    },
    {
      "question": "Compatibility?",
      "answer": "WhatsApp beta for Android 2.23.17.15 is marked as a compatible update, but some users may be able to get the same feature by installing the previous 2.23.17.14 update."
    },
    {
      "question": "I’ve installed this update but I don’t have this feature. Why?",
      "answer": "This feature is available to some beta testers, and it’s rolling out to more users over the coming weeks."
    },
    {
      "question": "Thanks:",
      "answer": "FastenM and TestingApp199, for testing and reporting!"
    },
    {
      "question": "Previous news?",
      "answer": "WhatsApp is releasing a forwarding message feature for channels!"
    }
  ]
}
```

## Change log

### v1.1.0 [17/08/2023]

- Fix the latest news
- Feature: Platform wise article list.
- Feature: Search by query article list.

## License

This project is protected by the `GNU General Public License v3.0.`

## Disclaimer

`WABetaInfo` name, we have nothing to do with the website officially. If any complains please contact via sl.travamaker@gmail.com
