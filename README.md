# PROJECT CURATE'M

## ABOUT 
Curate'M is a freelance project based on an imagined business situation to produce an web based app that uses museum/art based APIs to retrieve data across all types of artworks. Displays the datas associated with the said pieces, how or where user can visit in person as well as saving them to a temporary personal exhibition. 

## USERS

Currently, this project does not have backend associated to store the user data nor it allows users to create profiles and save their searches. Instead, it uses React State to hold the exhibit pieces temporary until the browser refreshes or the users closes window then opens up the same tab. 

So far, users without logging in can: 

- Nagivate through different regions to explore artworks from each area based API 

- In the UK page, users can explore random artworks provided with no real order, users an interact to see more artwork by a button at the bottom of the page. US API calls for all the artwork, therefore takes longer time and always returns artwork in the same order.

- Users can choose from give presets to select for items of their interest on the UK page, where as in the US keyword based search criteria.

- Users can click on the single artwork from the main page which then will take them to a page that contains higher level of details regarding the selected artwork such as the history and background when possible.

- Users then from the single artwork page can interact with 'Add to my exhibit' button to add the unique artwork to their temporary file, which will be cleared if the page is refreshed at any given time.

- Able to see where the artwork is kept or displayed, where possible. Some artwork does not provide this.

- Exhibit: Users can see all their artwork that they have added on a single page, with also minimal information - such as the artwork ID, location and storage information as well as a link to contact the respective museum in which they are kept in.


## TECH STACK 

- There is no Backend as of current (August, 2024)

- Javascript as the main language

- React frontend frame

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



