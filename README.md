# PROJECT CURATE'M

## ABOUT 
Curate'M is a freelance project based on an imagined business situation to produce an web based app that uses museum/art based APIs to retrieve data across all types of artworks. Displays the datas associated with the said pieces, how or where user can visit in person as well as saving them to a temporary personal exhibition. 

**FIND THE HOSTED SITE [HERE](https://curatem.netlify.app/)**

## USERS

The core functionalities of this web application is to provide users the oppurtunity to explore artworks from various different regions through a slick and simple design without barriers like account creation or complex filters, users can dive straight into the exploration experience. The site primarily pulls data from 
- Victoria & Albert Museum, V&A (UK)
- Cleveland Open Access API (US) 

As they provide a generous number of artworks with complete information regarding the piece, including new pieces that are updated and maintined regularly. Athough the US API has a classfication of 'Types' allocated, the keyword search bar was integrated to avoid overwhelming the users with numerous claffications and potentially miss out on hidden work. Whereas the UK based API, it is a given preset that users can choose from allowing a more straightforward browsing experience. This is also due to not all artworks have compelte metadata from the V&A API. 

This project is powered by a frontend-driven architecture to ensure a fast, seamless experience for users. All interactions and response alerts are handled efficiently on this page, without the need to retrieve data from a backend service

So far, users without logging in can: 

- Nagivate through different regions to explore artworks from each area based API 

- In the UK page, users can explore random artworks provided with no real order, users can interact to see more artwork by a button at the bottom of the page. US API calls for all the artwork, therefore takes longer time and always returns artwork in the same order.

- Users can choose from give presets to select for items of their interest on the UK page, where as in the US keyword based search criteria.

- Users can click on the single artwork from the main page which then will take them to a page that contains higher level of details regarding the selected artwork such as the history and background when possible.

- Users then from the single artwork page can interact with 'Add to my exhibit' button to add the unique artwork to their temporary file, which will be cleared if the page is refreshed at any given time.

- Able to see where the artwork is kept or displayed, where possible. Some artwork does not provide this.

- Exhibit: Users can see all their artwork that they have added on a single page, with also contains minimal information - such as the artwork ID, location and storage information as well as a link to contact the respective museum in which they are kept in.


## TECH STACK 

- Main language: Javascript 

- Frontend Framework: React

- Axios calls externally sourced APIs

- Styling with CSS, Bulma, React icons and React Hot Toast

- UK based Museum API [Victoria & Albert Museum](https://developers.vam.ac.uk/guide/v2/welcome.html) 

- US based Museum API [Cleveland Art Open API](https://openaccess-api.clevelandart.org)



## HOW TO 
**This project requires Node v20.5.1 and above to run**

Fork this repo and run ```git clone``` on your local computer with a method of your choice

From terminal ```code curatem``` to open up the repo

```npm install``` to install all necessary framework and tech stack for this project.



Once forked, cloned and installed dependecies, to run ```npm run dev``` command and follow Localhost URL at any given point to see it running in your local browser 
 

## SOURCES/COPYRIGHT
All artwork information and images belong to Victoria & Albert Museum or Cleveland Museum of Art.



