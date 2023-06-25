# **WABetaInfo** - A Web Scrape NPM package of wabetainfo.com (unofficial)

This is an unofficial scrape of wabetainfo.com and all post credit goes to **[@wabetainfo](https://wabetainfo.com/)**. This project is based on Javascript.

_Coded by: [Sasmitha Ashinsana](https://github.com/Sasmeee)_

## Installation

```
npm i @sasmeee/wabetainfo
```

## Usage

```js
const wabetainfo = require("@sasmeee/wabetainfo");
```

## Methods

### getWaBetaInfoData()

Code:

```js
const posts = await wabetainfo.waBetaHome();
console.log(posts);
```

Output:

```
[
    {
    "id": "post-22635",
    "title": "WhatsApp beta for iOS 23.13.0.70: what’s new?",
    "summary": "WhatsApp has just submitted a new update through the TestFlight beta Program, bringing the version up to 23.13.0.70. The version marked within WhatsApp Settings is 2.23.13.70 and the TestFlight build is 23.13.0 (487837817).\nWhat’s new in this update? WhatsApp is releasing an enhanced interface for several sections of the app, and it is available to some beta testers! Read more",
    "url": "https://wabetainfo.com/whatsapp-beta-for-ios-23-13-0-70-whats-new/#more-22635",
    "published": "June 23, 2023",
    "platform": "IOS"
  },
    ... 9 more items
]
```

### getLatestPost()

Code:

```js
const latestPost = await wabetainfo.getLatestPost();
console.log(latestPost);
```

Output:

```json
{
  "id": "post-22635",
  "title": "WhatsApp beta for iOS 23.13.0.70: what’s new?",
  "summary": "WhatsApp has just submitted a new update through the TestFlight beta Program, bringing the version up to 23.13.0.70. The version marked within WhatsApp Settings is 2.23.13.70 and the TestFlight build is 23.13.0 (487837817).\n" +
    "What’s new in this update? WhatsApp is releasing an enhanced interface for several sections of the app, and it is available to some beta testers! Read more",
  "url": "https://wabetainfo.com/whatsapp-beta-for-ios-23-13-0-70-whats-new/#more-22635",
  "published": "June 23, 2023",
  "platform": "IOS",
  "news": "WhatsApp has just submitted a new update through the TestFlight beta Program, bringing the version up to 23.13.0.70. The version marked within WhatsApp Settings is 2.23.13.70 and the TestFlight build is 23.13.0 (487837817).\n" +
    "What’s new in this update? WhatsApp is releasing an enhanced interface for several sections of the app, and it is available to some beta testers!In the article about the WhatsApp beta for iOS 23.10.0.76 update, we announced a new feature under development: a translucent effect for the tab bar. With this feature, WhatsApp planned to offer users a more modern appearance for the application by enhancing its visual appeal. Other updates regarding the user interface were also spotted during the development of the WhatsApp beta for iOS 23.7.0.74 update: in this article, we announced a new style for several sections of the app, with rounded corners and small margins around the edges. After installing the latest WhatsApp beta for iOS 23.13.0.70 update from the TestFlight app, some beta testers may experiment with these features that enhance the interface of the app!As you can see in this screenshot, there are some changes regarding various elements of the user interface. Firstly, the tab bar and navigation bar now have a translucent effect that reflects the design of one of the earlier builds of WhatsApp released for iOS 7, but this is an improved version. The translucent effect was highly appreciated by users. However, for unknown reasons, WhatsApp decided to remove this effect. Tables within various sections of the app, such as settings, message info, the calls tab, and your contacts list, now feature an updated style, specifically by using the latest table style offered by Apple through its APIs. Finally, certain action menus have been converted into context menus to provide users with an improved interface.While WhatsApp is implementing various enhancements to improve the interface for the WhatsApp for Android app in order to support Material Design 3, WhatsApp has also decided to introduce some improvements regarding the interface for the iOS app. By supporting the latest graphical features offered by Apple, WhatsApp finally provides users with a more visually updated application, not only in terms of new features.Note that, as mentioned in our previous articles, the new style with rounded corners and small margins around the edges is only available to those beta testers that have installed at least iOS 13. In addition, context menus are only available on iOS 14. In order to experience the new enhancements, it’s needed to install the latest WhatsApp beta from the TestFlight app.The enhanced interface is available to some beta testers that install the latest version of WhatsApp beta for iOS from the TestFlight app, and it is rolling out to even more people over the coming weeks.Stay up-to-date on WhatsApp news by following WABetaInfo on Twitter. You can also discover other new features for WhatsApp beta for Android, iOS, Web/Desktop, and Windows.Do you like this news? Please, let us know on Twitter: we love hearing your feedback! If you’re curious to know where you can find WABetaInfo, there is a dedicated page where you can discover our services.\n" +
    "In addition, we have set up a Discord Server where you can chat with other people, get help and advice, and stay up to date with the latest announcements from WABetaInfo.",
  "image": "/TestFlight/images/WhatsApp Messenger.jpg",
  "faq": [
    { 
      "question": "Name of the feature?", 
      "answer": "Enhanced interface" 
    },
    {
      "question": "Status?", 
      "answer": "Rolling out" 
    },
    {
      "question": "Compatibility?",
      "answer": "WhatsApp beta for iOS 23.13.0.70 is marked as a compatible update."
    },
    {
      "question": "I have the same version but I don’t have this feature, why?",
      "answer": "This feature is available to some beta testers, and it is rolling out to more people over the coming weeks."
    },
    {
      "question": "Thanks:",
      "answer": "Spencer, for testing and reporting!"
    },
    {
      "question": "Previous news?",
      "answer": "WhatsApp beta for Android gets a new interface for the communities tab!"
    }
  ]
}
```
## License
This project is protected by the `GNU General Public License v3.0.`

## Disclaimer
`WABetaInfo` name, we have nothing to do with the website officially. If any complains please contact via sl.travamaker@gmail.com