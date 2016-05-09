[Visit the site!](buildapc.herokuapp.com)

# Build-A-PC
### Market 
There is a huge market for custom-built PC's online - and there are hundreds of website that will aid in searching for the right parts. Take PCPartPicker, the most famous one, an extremely well-made website that indexes EVERY option for EVERY part of a computer. 

![pcp](http://i.imgur.com/X1R2BZz.png)

### Why BuildAPC?
This resource is incredible for tech-savvy individuals who LOVE the idea of building a computer and like nothing more than browsing through hundred of parts and finding the best ones to suit their needs.

This site, *buildapc.com* is a place where people who are not in love with computers but can still go through each part of the building process, learn what each part of a computer does, and choose the right part for THEM from a selection of different part 'levels'.

### Why Custom?
The benefits of a custom-built PC are:
1. Faster than mass-produced computers.
2. Cheaper(!) than mass produced computers for the same speed. 
3. More customizable, your computer is YOUR OWN creation.

## Technologies and Approach
The technologies I used for this project are: 
- Node.js
- Express
- Postgres
  - PG Module
  - PG Promise
- React
  - React Router
- Underscore

.. and many more.

I want this project to be a representation of a real idea I have had for awhile. I believe that there is a legitimate market of people who are interested enough in computers to want to understand each part, but not interested enough to research which part is the best. I also beleive there is real monetization value here with the use of featured parts on the site.

I originally looked into a pcpartpicker.com API, but they do not have a public-accessible API for use. I eventually found a couple great resources for pricing and I went with newegg.com which has an (untested) node.js module `node-newegg-api`. 

The technology goal of this project is to make a very clean and presentable app that will demonstrate proficiency in the above technologies (specifically react).

## Wireframes

## Entity Relationship Diagrams (ERDs)
When a user signs up for the first time, there will be no information stored into the database. As they go through the website and add features to their computer, they will add those features to their 1:1 relational 'build'. When the user loads the site in the future, there will be a box with 'current build' that shows there current parts and a 'view build', 'share build', and 'reset build' button.

![erd](http://i.imgur.com/XCWUv97.png)

## Style Guide
- Use ES6 **ALWAYS**, wherever applicable 
  - const, let, anonymous arrow functions
- Require, not import
- Spaces in between declarations (function, statement) and code block `{}`
