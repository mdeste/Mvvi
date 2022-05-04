# mvvi

## About mvvi

*mvvi* is a non-commercial web project built in React which allows users to generate and save lists of films by filtering via various criteria. 

Users are able to log in and add individual search results to a personal list which can be modified at any time.



## Usage

### Search 

Search for films using the parameters available on the explore (home) page and hitting the `SEARCH!` button. Results can be filtered by release date, title, and rating (with specific ascending and descending filters for each). Select the filter you would like from the dropdown and click on the `FILTER RESULTS` button to re-arrange the results with the selected filter. Hit the `MORE RESULTS` button to load another 20 results with your current parameters and filters selected. 

![the explore page](/src/assets/jpg/siteExampleA.jpg)


### Account creation

To create a watchlist, you must first create an account. Click on the `Profile` link on the navigation bar, and then the `DON'T HAVE AN ACCOUNT? SIGN UP HERE!` link, and enter a username, valid email address and secure password, or alternatively create an account with your Google account by using the OAuth link.

![the sign up page](/src/assets/jpg/siteExampleE.jpg)

To log out, navigate to your profile using the link in the navbar, and click the `LOG OUT` button below the page title to log out and be returned to the explore page. 

If you already have an account but have forgotten your password, click on the `FORGOT PASSWORD` link on the login page. On the Forgot Password page, enter your email address and hit the `SEND PASSWORD RESET LINK!` button. A popup will notify you if the email was successfully sent. Check your e-mail inbox for an email from mvvi-app.firebase.com and follow the instructions in the email to gain access to your account.

![the profile page](/src/assets/jpg/siteExampleB.jpg)

If you'd like to change your password whilst logged in, navigate to your profile and click on the `CHANGE PASSWORD` link. Type in your current password and the new password that you would like, and then click on the `CHANGE PASSWORD` button. If the change is successful, you will be redirected to the profile page and a popup will note a successful password change.


### Watchlist creation and management

Upon successful account creation, you'll be redirected to the explore page. Search for some movies, and when you find one you'd like to add to your watchlist, click on the title. This will take you to the specific page for that title, in which you'll find more details about the film and a link to the TMDB page. Click the `ADD TO WATCHLIST` button below this to add the movie to your watchlist. You should see a popup if adding the film to your watchlist was successful. You can navigate to the watchlist using the `Watchlist` button in the navbar.

![adding a movie to your watchlist](/src/assets/jpg/siteExampleC.jpg)

To remove a film from your watchlist, click back into the title via your watchlist (or the explore page), and click the `REMOVE FROM WATCHLIST` button. Click `OK` when you're prompted to by your browser, and if successful, you should see a popup notifying you of a successful deletion. 

![the watchlist page](/src/assets/jpg/siteExampleD.jpg)

Titles you have added to your watchlist will be marked on the explore page by the heart icon in the right corner of the search results turning black, whilst titles that are not yet on your watchlist will be marked with a white heart.



## The Fine Print

*mvvi* is built in ReactJS version 17, and uses Google's Firebase for user authentication and database administration. For a full list of dependencies, see the package.json file.  

The project uses the FOSS typeface *JetBrains Mono Light*, designed by Philipp Nurullin and released by [JetBrains](https://www.jetbrains.com/lp/mono/). The logotype for *mvvi* is set in *Agrandir Grand Heavy* and the Navbar is set in *Agrandir Text Bold*, designed by Alex Slobzheninov and released by [Pangram Pangram Foundry](https://pangrampangram.com/products/agrandir). *Agrandir* is available for free use in personal, non-commercial portfolio projects.

The project uses the TMDB Discover API but is not endorsed or certified by TMDB. 

For more information on TMDB, please visit [The Movie Database](https://www.themoviedb.org/), or alternatively view the API documentation [here](https://www.themoviedb.org/documentation/api).

If you have any questions, drop me a line on Github. :sparkling_heart:

![mvvi Logo](/src/assets/jpg/siteLogo.jpg)