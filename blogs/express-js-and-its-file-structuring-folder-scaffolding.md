---
title: "Express.js and its File Structuring : Folder Scaffolding"
date: 2020-07-08
slug: "express-js-and-its-file-structuring-folder-scaffolding"
excerpt: "<p>This is originally published as part of my Medium and dev.to Blog The app/file structuring is one way to be Clean Coder. There are no standard structures as such, but, generally followed structure "
categories: ["express", "node"]
author: "shravan20"
url: "http://ohmyscript.com/2020/07/08/express-js-and-its-file-structuring-folder-scaffolding/"
---

# Express.js and its File Structuring : Folder Scaffolding

*This is originally published as part of my [Medium](https://medium.com/@imshravan/express-and-its-file-structuring-ea1f39e18fc3) and [dev.to](https://dev.to/imshravan/express-js-and-its-file-structuring-folder-scaffolding-hd6) Blog*

The app/file structuring is one way to be Clean Coder. There are no standard structures as such, but, generally followed structure will be discussed below.

I am a beginner. As a beginner, I would explain how did I go about this File Structuring scenario for the Express Application. I have used Express Framework, with MongoDB database. I had used Mongoose as MongoDB Object Modelling for Express Application.

![](https://res.cloudinary.com/practicaldev/image/fetch/s---orRrG_---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5vzr2cps82xkoamlm9qy.png)

```
" There is a luxury in self-reproach. When we blame ourselves we feel no one else has a right to blame us. "

- Oscar Wilde, The Picture of Dorian Gray
```

It is best to use an Application scaffolder to get you generalised initial structure. I would suggest, go with Express Application Generator or Yeoman Application Generator.

The generated app would have directory structure something of this sort:

![](https://res.cloudinary.com/practicaldev/image/fetch/s--A-twXrVo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/b19r1f9puza4petmlv6q.png)

Here, you can create another folder named "src".

Copy and paste the routes directory to the src folder.

And also create folders namely:

- ***Models***
- ***Routes*** // that already exists
- ***Controllers***
- ***Services***
- ***Repositories***

These are the basic files that ‘ src ' folder/directory will be holding.

Now, you would wonder what would each of directory hold and do?

- ***Models directory*** will be holding files that keeps the schema/data models that is required for your current project.
- ***Routes directory*** will be holding the route files, where *Routing* refers to how an application's endpoints (URIs) respond to client requests. It basically defines your app routes.
- ***Controllers directory*** will be holding the controller files, wherein the controller files deal with validation of the data, whatever that is been sent from the frontend. The request and response handling is taken care in this directory.
- ***Services directory*** will be holding the services files, which deals with the business logic of the API. This is a final filtration before sending it to the Data Access Layer, here we filter the data received into the final payload for querying with the database. The files in this directory will deal with processing the payload to the format, it should be in to be stored into the database.
- ***Data Access Layer/Repositories*** will be dealing with queries that have to be executed based on API. All the CRUD operations for APIs are taken care of in this particular folder.

These are basic application structuring method I opted to go with.

This method of writing code is a stepping stone to writing clean code. Clean code doesn't have to deal with solving complex logic in a simple way or writing code neatly. Clean coding is an art of writing the code in such a way that, a beginner himself or person from non-programming background should also be able to understand the flow of the code you have written.

Apart from this, we can also go with various extra folders, which will lie above ‘src' directory.

Say, your front end is asking for data to be sent from the server in some form. Then, you can build a ***transformation layer/transformation folder***, where you can have files defining functions converting the data received from the database in one format can be transformed to the format your front-end developers ask for.

Also, you can define a folder named ***helpers,*** which will have some functionality that you want to use in multiple APIs or scenarios. So instead of trying to define it everywhere, you can just define it in one place and call that wherever required.

Another folder could be ***middlewares,*** where you can define all your route-level middle-wares once and call it in your routes as chained-functions.

Make sure you go through some simple concepts like :

- ***KISS(KEEP IT SIMPLE STUPID)***
- ***DRY (Donot Repeat Yourself)***
- ***TDA (Tell Don't Ask)***
- ***SoC (Separation of Concerns)***
- ***YAGNI (You ain't gonna need it)***

I am not 100% sure that this is the standard format. As a beginner, I believe this is the best way to learn to code in Express or any other framework. As a beginner, I had difficulties to know this, as I believed all the logic are to be dumped into controllers. And then, I learnt it later on, that was wrong.

Every problem statement will have its own suitable way of structuring the files. This is a very common method.

I hope the article helps you understand a little about how to structure your back-end application in Express.js.

To get an clear picture how to folder/code would look like, refer to my next article on &#8220;How to write CRUD &#8211; API in Express&#8221;, coming soon.

If any queries, please drop a mail [mrshravankumarb@gmail.com](mailto:mrshravankumarb@gmail.com)

Drop your views as comments.

Signing off till next time 🙂