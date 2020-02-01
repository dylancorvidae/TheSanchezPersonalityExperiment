# ThinkShout Questions
1. What was the goal and what were the requirements?  

  The goal was to create a personality test similar to a Myers-Briggs test for fans of the show Rick & Morty.  Requirements were to have encrypted authentication via signup/login using email, display name and password, persistence for user data, sql database, component architecture, use express js as the server framework, and deploy it on heroku. Oh, also have an about the devs page.

2. How does the work meet (or not meet) the goal and requirements?  

  This project met the goal and all of the requirements. The app has authentication that salted and hashed the password using bcrypt.js. User data is persistent, if the user leaves without finishing the quiz, they start right back at where they left, they can even go back and change answers to questions the answered previously. After completing the assessment the user gets shown their profile assessment telling them which character they are and their Myers-Briggs type indicator (MBTI) which saves from the previous time they took the test.  There are 6 tables in the SQL database, holding: questions, answers, users login info, myers-briggs type indicator info, character info, and users game persistence data. It is rendered through HTML to DOM custom component architecture and uses express to run server.js. There are 2 versions deployed on Heroku a Safe for Work Version and a NSFW version due to language.  

  Safe For Work: https://c-137-mbti-quiz.herokuapp.com/  
  Not Safe For Work: http://c-137-mbti-quiz-nsfw.herokuapp.com/ 

  I believe we went above and beyond in the making of this app. Not only does it fulfill it’s goals and requirements but it looks great doing it. I personally spent a lot of time on how the app looks (CSS, UI content) and feels (UX content). I spent a good amount of time balancing the quiz answers so that it’s fairly likely you will get the Myers-Briggs type you would on a legitimate MBTI assessment.  


3. How does it work? (big picture: think about how you would describe this to someone who was going to review the code or add functionality, to get them started) 

The user creates a login on the signup/login page. After which they are directed to the first question of the quiz. When they finish all 21 questions of the quiz they are redirected to the profile page which tells them what character from Rick & Morty they are according to their MBTI. There is also a stats page which includes a graph of all the results from everyone who has taken the quiz. And it has an about the devs page. 

The project is built on the node.js platform using express middleware as the server and renders via vanilla javascript components. It has several dependencies and uses a PostgreSQL database. All the quiz information, personality assessments, and user information is stored in a Postgres database. The graph is created using chartjs. User passwords are salted and hashed via bcryptjs. The app uses superagent to handle api calls, cors to prevent non-standard requests, and morgan as a logger.


4. Who did you work on this with, and which parts were you responsible for? (If there is no commit or ticket history to review, please be extra explicit here)  

This project was a small group effort of 4, including: Kamran Ali, Angela Vawser, Sam Jespersen, and I. We used a combination of solo, pair, and mob programming to build this app. The original version was built in 5 days. I went back afterwards when I had some free time and made the site fully responsive for all viewport sizes. 

As for my responsibilities, I shared the role of UI designer with a teammate on this project and was responsible for most of the UX as I wrote the majority of the quiz content and all of the personality assessments. In addition to content creation I coded the authorization and authentication and made the entire signin/signup page. I wrote most of the CSS and HTML, and built a majority of the Javascript HTML to DOM rendering components. I made the page responsive for all viewport sizes. I did a large amount of the project organization as I designed the file structure for this project, wrote and organized the supporting docs that our group worked off as we built our app. 


5. If you were to do it again, what would you do differently? OR If you could spend more time, what would you add/improve?  

The first thing I would do over again is make this a true single page application using React.  We hadn’t yet learned React at this point in our course at Alchemy and were using a custom vanilla javascript component architecture built by our instructor. The main page, our question and answer section, is built in SPA fashion but when you click to go to profile, stats, or about us it re-renders the whole page which is inefficient.

If I were to do it again I would have made the stats have just the stats and create a whole separate page for personality types.  

If I spent more time on this project I would fix the issue on the stats page under the Personality Types section that manifests at certain screen resolutions.  When trying to read the card on the end right while cursor hovering the card jumps back and forth between it and the one directly before it. This affects the desktop version but not the mobile or touchpad versions.

I just learned about using SCSS to create fluid typography using calc and viewport units which would create a more fluid change in the dynamic responsiveness of the fonts which would be nice. The font jumps around too much at different media query sizes for my liking.


6. How do I run this code on my own webserver so I can try it out?  

Required installations needed to run app:
Node.js and npm both are installed together via Node.js installer found here https://nodejs.org/en/download/

1. Clone the Github repository to local drive
2. Navigate to apps top-level folder via CLI and type “npm i” to download dependencies and create the node modules folder
3. In CLI type npm run start, server will start running on Port 3000 
4. To see working app open browser and type http://localhost:3000/ in address bar

Security Note: For this fork of the project I have left in the .env file which has the url path to the PostgreSQL database served on Heroku. I would not normally leave this exposed as it could lead to database attacks. I created this instance of the database for the purpose of making y’all not have to install PostgreSQL to run this app.  I've found from experience that installing PostgreSQL can be a time consuming endeavour, as it's not streamlined well for all OSs. 



# The Sanchez Personality Experiment
## Links to Deployed Sites:
Safe For Work:
https://c-137-mbti-quiz.herokuapp.com/    

Not Safe For Work:
http://c-137-mbti-quiz-nsfw.herokuapp.com/ (Rated R for Rick Language)

## Created By: 
Angela Vawser, Dylan Corvidae, Kamran Ali, Sam Jespersen

## Description:
A Rick &amp; Morty Themed Personality Quiz

## Problem Domain:
In this ultra-consumerist reality that we currently find ourselves in, the only respite from the constant barrage to output more, create more, be more, is to dull our brains with mindless entertainment.  Our app is meant to bring you peace through comedy and give you a break from the monotony of the ultra-capitalistic society we live in.

## Semantic Versioning:
1.1.0  


# Resources:
## Fonts:
get_schwifty__a_rick_and_morty_font_by_jonizaak_dajw4u8  
rick_and_morty_font_by_starriichan_d9h2vl6  
_adult_swim_font__by_esteveztheart-dbj9by8  

## Libraries, Frameworks, Packages:
Node.js  
bcryptjs  
cors  
dotenv  
eslint  
esm  
express  
jsdom  
jsonwebtoken  
morgan  
nodemon  
pg  
superagent  
chartjs  

## Deploying Your Own Version Of The App:
Install libraries from above using npm i in CLI inside current folder  
Add .env file (see .env-example)  

# Team Specific Data: 
## User stories
I am a Rick and Morty fan, I came to this site to see what character I would be assigned.
I know nothing about Rick and Morty, so I came to this site to understand what pickles and szechuan sauce have to do with this show.

## Conflict Plan:
- open and honest communication
- Dylan has offered to help with conflict resolution.
- remove self from conflict/situation, discuss with someone outside of the conflict about your concerns.
- time management

## Communication Plan:
- open and honest communication
- open and honest communication X2 more

## Mob/Pair Programming:
- debugging
- unsure tutorials
- merging done as group
