# mvvi

## About mvvi

*mvvi* is a non-commercial web project built in React which allows users to generate and save lists of films by filtering via various criteria. 

Users are able to log in and add individual search results to a personal list which can be modified at any time.


## Usage

Search for films using the parameters available on the explore (home) page and hitting the "SEARCH!" button. Results can be filtered by release date, title, and rating (with specific ascending and descending filters for each). Hit the "MORE RESULTS" button to load another 20 results with your current parameters and filters selected. 

To create a watchlist, you must first create an account. Click on the "Profile" link in the navigation bar, and then the "DON'T HAVE AN ACCOUNT? SIGN UP HERE!" link, and enter a username, valid email address and secure password, or alternatively log in using your Google Account with the OAuth link. 

Upon successful account creation, you'll be redirected to the explore page. Search for some movies, and when you find one you'd like to add to your watchlist, click on the title. This will take you to the specific page for that title, in which you'll find more details about the film and a link to the TMDB page. Click the "ADD TO WATCHLIST" button below this to add the movie to your watchlist. You should see a popup if adding the film to your watchlist was successful. You can navigate to the watchlist using the "Watchlist" button in the navbar.

To remove a film from your watchlist, click back into the title via your watchlist (or the explore page), and click the "REMOVE FROM WATCHLIST" button. Click "OK" when you're prompted to by your browser, and if successful, you should see a popup noting a successful deletion. 

Titles you have added to your watchlist will be marked by the heart icon in the right corner of the search results turning black, whilst titles that are not yet on your watchlist will be marked with a white heart.

To log out, navigate to your profile using the link in the navbar, and click the "LOG OUT" button below the page title to log out and be returned to the explore page. 


## The Fine Print

*mvvi* is built in ReactJS version 17, and uses Google's Firebase for user authentication and database administration. For a full list of dependencies, see the package.json file.  

The project uses the FOSS typeface *JetBrains Mono Light*, designed by Philipp Nurullin and released by [JetBrains](https://www.jetbrains.com/lp/mono/). The logotype for *mvvi* is set in *Agrandir Grand Heavy* and the Navbar is set in *Agrandir Text Bold*, designed by Alex Slobzheninov and released by [Pangram Pangram Foundry](https://pangrampangram.com/products/agrandir). *Agrandir* is available for free use in personal, non-commercial portfolio projects.

The project uses the TMDB Discover API but is not endorsed or certified by TMDB. 

For more information on TMDB, please visit [The Movie Database](https://www.themoviedb.org/), or alternatively view the API documentation [here](https://www.themoviedb.org/documentation/api).

If you have any questions, drop me a line on Github. :sparkling_heart:

![mvvi Logo](/src/assets/jpg/siteLogo.jpg)