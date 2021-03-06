# API_GO
2016 Spring EECS 395/495 Journalism

####General Information

___1. Team members:___

Yushun Wang, Qingwei Chen, Zichen Wang, Yi Gu, Tae Hun Kim, Shikhar Mohan

___2. What it does:___

The world of code is moving swiftly towards a world of APIs rather than libraries. This includes APis from companies such as Google, Facebook and Yahoo that empower organizations to integrate years of work into their products.

API_GO is a very useful platform gathering existing APIs and providing help to rookie programmers. In this case, some APIs are well-known but many of them are not. Our website can be a convenient tool for developers to search and learn new APIs.

In this project, we will build a website for developers to find APIs they need and offer various ways to help them learn how to use a new API.

___3. How it works:___

- Find an existing APIs 
- Access to the documentations 
- Provide examples of different use cases and sample codes
- Offer videos which step users through the process of utilizing the APIs 
- Accept requests for new APIs - If there is an API that is not included in this website, users can make a request of adding this new API to the database.
- Comments and votes - Users can give feedbacks after using an API, including whether the documentation is clear and helpful, how useful this API is and does it solve their problems.  

___4. Key technologies:___

 - Meteor JS
 - Flat UI Bootstrap
 - Heroku

http://designmodo.github.io/Flat-UI/docs/components.html

___5. Next steps:___

- Add a voting or rating system
- Moderators, gamification to incentivize contributions
- Multilingual API explorer 
- Accomplish searching and categorization functions


####Project setup information

___1. Resource dependencies (databases, external services, APIs, etc.) & Code/library dependencies___

The following are npm modules used in this app:

- iron:router - For routing
- jss:flat-ui - CSS
- less - CSS preprocesser
- richsilv:owl-carousel - JS Carousel library
- meteortoys:allthings - Database visualizer
- fortawesome:fontawesome - Fonts/UI
- aldeed:collection2 - Forms
- aldeed:autoform - Forms
- aldeed:simple-schema - Forms + MongoDB
- perak:codemirror - JS Code prettify
- underscore - JS utility library


Meteor JS comes with MongoDB installed.


___2. How to setup and run the code___

1. Install Meteor JS from https://www.meteor.com/install
2. Clone this repository from GitHub
3. In the `apigo` directory, run the command `meteor` to start the app
4. Go to localhost:3000 in your web browser to see the website
5. For Heroku, the app is hosted at nuapigo.herokuapp.com and to make updates to the app you need to follow the steps in this tutorial http://justmeteor.com/blog/deploy-to-production-on-heroku/
