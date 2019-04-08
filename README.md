# Jam-is-on

## Team members: 
1. Maruthi Lalitha Pelluri Venkata Sesha
2. Carlos Ponce
3. Denis Galo
4. Liam Condon
5. Kevin Choi


## Welcome to Jam-is-on!

<img src="" width= "250px">

# <a name="introduction"> Introduction </a>
Jam-is-on is an app that efficiently allow musicians and bands to connect. 
* Are you a musician looking for a band?
* Do you have musical talent but having trouble find band members?
* Are you a band leader having trouble finding a drummer, vocalist, or guitar player? 

If you answered YES to any of the questions above, HAVE NO FEAR! Jam-is-on application is here to help YOU! 

---

# Table of Contents

- [Introduction](#introduction) 
- [Technologies Used](#technology) 
* [HTML](#style) 
* [CSS](#style) 
* [BootStrap](#bootstrap) 
* [Google Fonts](#google) 
* [Jumble](#jumble) 
* [Bideo.js](#bideo)
* [JavaScript](#java)
* [jQuery](#java)
* [AJAX/API Technologies](#ajax)
* [Firebase](#firebase)
- [Deployed Site](#deployed)
- [Meet the Authors](#authors)
- [About Inspector Otter](#otter)

---

# <a name="technology"> Technologies Used </a>

#### <a name="style"> HTML CSS BootStrap</a>

Upon loading our site, the user will see several items displayed on the screen. 

<img src="">

1) A background video of waves coming ashore.
2) A gray navigation bar at the top of the webpage displaying Inspector Otter's Logo to the left and a word search bar to the right with a yellow submit button. 
3) A search area to the left where users can input their location and find cafes near the location that was input (as people who search word definitions may be new to the area). 
4) An area where previously search words are displayed for the user to see. 
5) A dark-blue colored footer with a white <img src ="assets/images/about.png" height= "25px"> button. 

Upon clicking the <img src ="assets/images/search.png" height= "25px"> button for a search word within the navigation bar, the user will be shown the **Merriam-Webster** definition of the word and Gifs, along with several **new** buttons. The four new buttons that appear when a user searches a word are <img src ="assets/images/foreignbuttons.png" height= "25px"> and <img src ="assets/images/unofficialbutton.png" height= "25px">. When any one of the Spanish, Chinese, or Russian buttons are clicked, the searched word's **translation** will be displayed. See demo below when a user inputs a word into the search bar, submits the word and then clicks on the Spanish, Chinese and Russian translation buttons. 

<img src="https://media.giphy.com/media/37R9qO9YNVuy7hDDR5/giphy.gif">

When the unofficial definition button is clicked, the **Urban Dictionary** definition of the word searched is displayed. See demo below when a user clicks on the Unofficial Definition buttons. 

<img src="https://media.giphy.com/media/3HxDs4rYiZ2YxwdYkd/giphy.gif">

When a user inputs a location into the search bar of the cafe search function, images and other information regarding local cafes will be  displayed for user convenience. See demo below when a user submits a location into the location search bar. 

<img src= "https://media.giphy.com/media/7FgnPeMXZb83TvsBMq/giphy.gif">

In terms of styling the webpage, we used <a name="bootstrap">BootStrap</a> to display the Navigation Bar, Footer, Buttons, a pop-up about page, and to make our website responsive. We also used our own CSS style sheet to change colors, fonts, positioning. Additionally we used the Inconsolata font from <a name="google"> Google Fonts</a> to display our text.

#### <a name="jumble">Jumble</a>

<img src="https://media.giphy.com/media/ieebglCGDJJa6Q06tY/giphy.gif">

Jumble is a jQuery plugin that jumbles up the colors of your text headers, and can also be animated. We used this plugin to bring more color to our webpage. You can see the Jumble effect being used on the names of the authors in the About section of the website.

More information regarding Jumble can be found at: https://github.com/vonKristoff/jumble

#### <a name="bideo">Bideo.js</a>

Bideo.js is a JavaScript plugin used to play a video in the background of a container/body. For our webpage we decided to feature a video of a string of waves crashing onto the beach for aesthetic purposes.

More information regarding Bideo.js can be found at: https://github.com/rishabhp/bideo.js 


#### <a name="java">JavaScript & jQuery</a>
The majority of our HTML webpage is being dynamically generated through our JavaScript file using the jQuery library. Our JavaScript is organized by section, separating the APIs we used in this project by section. 

#### <a name="firebase">Firebase</a>
We are using firebase to store the user-inputted word. The database is then being called upon to display words that have been searched under the _previous word searches_ section of our webpage. We are also setting a counter to display the number of words which have been searched and stored in firebase.  

#### <a name="ajax">API Technologies</a>
Our team uses several APIs for our Inspector Otter Webpage. 
1) We are using Webster Dictionary API to retrieve the formal definitions of the word the user searches. https://www.merriam-webster.com/ 
2) We use Urban Dictionary API to retrieve the informal/slang word definitions the user can view upon clicking on the unofficial definition button. https://www.urbandictionary.com/
3) We incorporate Yandex Translate API into our website through the Spanish, Chinese and Russian buttons. When a user clicks on one of these buttons, the translated word appears in the selected foreign language. https://tech.yandex.com/translate/doc/dg/concepts/About-docpage/
4) In addition we are using Zomato API which allows us to pull information related to restaurants near a location the user inputs. The idea is to recommend cafes for the user to check out since our target group are new people to the area. https://www.zomato.com/
5) We applied Giphy API to the webpage by pulling the user input and showing a gif regarding that word's vibe/essence. https://www.giphy.com


---

# <a name="deployed"> Deployed Site </a>
Use the link to see the deployed site: https://kchoi123.github.io/GroupProject1/

---

# <a name="authors">Meet the Authors!</a>

|     Author           |  Summary|    Fun Fact         | Hobbies    |
|----------------------|---------|---------------------|------------|
|<b>Andrew Xie :panda_face: <br><img src="assets/images/andrew.jpg" width="150px"> https://github.com/Xieandrew2235           |Andrew is a recent college graduate with a degree in International Politics. He hopes that this bootcamp will be the first step towards a career in web development. |Andrew graduated from college in China. | Watching sports :baseball:  |
|<b>Cyrus Ghadiri :hatching_chick: ![Cyrus' Picture](assets/images/cyrus.png) https://github.com/ctghadiri       |UC Berkeley full-stack student with interests in moving into back-end web development. |Travels to a new country every year. | Traveling :airplane:, Next stop Japan :jp:  |
|<b>Jennifer Powell :koala: ![Jennifer's Picture](assets/images/jennifer.jpeg)  https://github.com/jerpowel321     |Born and raised in the Bay Area, Jennifer has spent the last several years working in public accounting. She currently attends UC Berkley extension Coding Bootcamp with the hopes of switching careers into web and software development.| Jennifer has been skydiving!| Card Games, :spades: :hearts: :clubs: :diamonds: Bowling, :bowling: Swimming :swimmer: |
|<b>Kevin Choi :rice_ball: ![Kevin's Picture](assets/images/kevin.jpg)  https://github.com/kchoi123         |Kevin Choi comes from a background in IT Infrastructure specializing in hybrid system deployment using co-locations, AWS, Azure, Rackspace, and SoftLayer. His goal is to develop tools that will help collaborate hardware and software incompatibilities, both technologically and departmentally.| Kevin has played on the US Junior National Badminton Team.   | Netflix and sitting on the couch with his dog Polo :dog:|
|<b>Shayan Anoushiravani :cat: ![Shayan Picture](assets/images/shayan.png) https://github.com/shayansea  |Shayan is a Bay Area native and UC Davis graduate in Design, who enjoys the outdoors and art. He is currently on the path to becoming a combo of UX designer, graphic designer, and software developer. | Shayan has an amazing cat named Phineas. :cat: | Drawing, Cooking, Gardening :herb: |