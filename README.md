# ThinkShout Questions
1. What was the goal and what were the requirements?  

  The goal was to create a personality test similar to a Myers-Briggs test for fans of the show Rick & Morty.  Requirements were to have encrypted authentication via signup/login using email, display name and password, persistence for user data across sessions, an sql database, fetches data from an external api, component architecture, use express as the server framework, and deploy it on heroku. Oh, also have an about the devs page.

2. How does the work meet (or not meet) the goal and requirements?  

  This project met our goals and all of the requirements. The app has authentication that salted and hashed the password using bcrypt.js. User data is persistent across logins, if the user leaves without finishing the quiz, they start right back at where they left off, they can even go back and change answers to questions they previously answered so long as the quiz was not finished. After completing the assessment the user gets shown their profile assessment telling them which character they are and their Myers-Briggs type indicator (MBTI), this result is saved from the previous time they took the test but changes each time they complete the quiz. All the completed quiz results from all users is tallied on the stats page. There are 6 tables in the SQL database which hold the questions, answers, myers-briggs type indicator info, character info, users login info, and users quiz data. We fetch character data from the Rick & Morty API. It is rendered through a vanilla javascript HTML to DOM custom component architecture and uses express to run the server. There are 2 versions deployed on Heroku a Safe for Work Version and a NSFW version due to language.  

  Safe For Work: https://c-137-mbti-quiz.herokuapp.com/  
  Not Safe For Work: http://c-137-mbti-quiz-nsfw.herokuapp.com/ 

  I believe we went above and beyond in the making of this app. Not only does it fulfill it’s goals and requirements but it looks great doing it. I'm particularly proud of what we did for the UI/UX of this app. We did a really great job of making this look and feel like an Adult Swim web page, using the fonts and artwork from the show and network as well as creating new art in the style of the show thanks to Angela's graphic design skills. I personally spent a lot of time on how the app looks (CSS, UI content) and feels (UX content). I spent even spent time balancing the quiz answers so that it’s highly likely you will get the Myers-Briggs type you would on a legitimate MBTI assessment.  


3. How does it work? (big picture: think about how you would describe this to someone who was going to review the code or add functionality, to get them started) 

The user creates a login on the signup/login page. After which they are directed to the first question of the quiz. When they finish all 21 questions of the quiz they are redirected to the profile page which tells them what character from Rick & Morty they are according to their MBTI. There is also a stats page which includes a graph of all the results from everyone who has taken the quiz. And it has an about the devs page. 

The project is built on the node.js platform using express middleware as the server and renders via vanilla javascript components. It has several dependencies and uses a PostgreSQL database. All the quiz information, personality assessments, and user information is stored in a Postgres database. The graph is created using chartjs. User passwords are salted and hashed via bcryptjs. The app uses superagent to handle api calls, cors to prevent non-standard requests, and morgan as a logger.


4. Who did you work on this with, and which parts were you responsible for? (If there is no commit or ticket history to review, please be extra explicit here)  

This project was a small group effort of 4, including: Kamran Ali, Angela Vawser, Sam Jespersen, and I. We used a combination of solo, pair, and mob programming to build this app. The original version was built in 5 days. I went back afterwards when I had some free time and made the site fully responsive for all viewport sizes. 

As for my responsibilities, I shared the role of UI designer with a teammate on this project and was responsible for most of the UX as I wrote the majority of the quiz content and all of the personality assessments. In addition to content creation I coded the authorization and authenticationas well as the entire signin/signup page. I wrote most of the CSS and HTML, and built a majority of the Javascript HTML to DOM rendering components. I made the page responsive for all viewport sizes. I did a large amount of the project organization as I designed the file structure for this project, wrote and organized the supporting docs that our group worked off as we built our app. 

I am particularly proud of my work on The Sanchez Personality Experiment header text. If you take a look at the header.css you can see that h1.title uses 10 different text shadows to create that same colored and glowing effect that the font used in the show displays. I'm also like the little touch of the portal login and logouts. I had to do a lot of research to figure out how to get the login/sign-up to switch back and forth and the logout speeding up it's spin when you hover on it was a fun little animation to throw together. 


5. If you were to do it again, what would you do differently? OR If you could spend more time, what would you add/improve?  

The first thing I would do over again is make this a true single page application using React. We hadn’t yet learned React at this point in our course at Alchemy and were using a custom vanilla javascript component architecture built by our instructor. The main page, our question and answer section, is built in SPA fashion but when you click to go to profile, stats, or about us it re-renders the whole page which is inefficient.

If I were to do it again I would have made the stats page have just the stats and create a whole separate page for personality types.  

If I didn't have the requirement of the encrypted authentication I feel it would make the quiz more fun with better usability. Making the user sign-up with a username, email, and password is a bit overkill for an app like this which is supposed to be easy and fun. The user data could be stored in local storage instead of in the SQL database. We released this app on the Rick & Morty Reddit page right before the new season started and I received several complaints asking why there was a login for this even after I explained it was part of the requirements for the class project.

If I spent more time on this project I would fix the issue on the stats page under the Personality Types section that manifests at certain screen resolutions. When trying to read the card on the end right while cursor hovering the card jumps back and forth between it and the one directly before it. This affects the desktop version but not the mobile or touchpad versions.

I just learned about using SCSS to create fluid typography using calc and viewport units which would create a more fluid change in the dynamic responsiveness of the fonts which would be nice. The font jumps around too much at different media query sizes for my liking.

It would be fun to have the login/sign-up portal enlarge on submit to engulf the whole screen and then shrink back down leaving the user to start the quiz that way. I'm not sure how I'd go about doing that but it would be a fun challenge and a cool user interaction.

6. How do I run this code on my own webserver so I can try it out?  

Required installations needed to run app:  
Node.js and npm both are installed together via Node.js installer found here https://nodejs.org/en/download/

1. Clone the Github repository to local drive
2. Navigate to apps top-level folder via CLI and type “npm i” to download dependencies and create the node modules folder
3. In CLI type npm run start, server will start running on Port 3000 
4. To see working app open browser and type http://localhost:3000/ in address bar

Security Note: For this fork of the project I have left in the .env file which has the url path to the PostgreSQL database served on Heroku. I would not normally leave this exposed as it could lead to database attacks. I created this instance of the database for the purpose of making y’all not have to install PostgreSQL to run this app. I've found from experience that installing PostgreSQL can be a time consuming endeavour, as it's not streamlined well for all OSs. 



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
