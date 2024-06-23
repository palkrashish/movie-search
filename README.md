
# [Movie Search App](https://ashish-movie-search.netlify.app/)

This React-based Movie Search App allows users to seamlessly search for and explore detailed information about movies. It features:

- a homepage with a "Movie Search App" heading for navigation.
- a search bar with debouncing for efficient API calls.
- a Redux-managed state for storing and displaying search results.
- React Router for smooth navigation between the search page and movie details.
- movie details page showing title, poster, release date, description, cast, producers, and directors.
- Integration with a movie API (e.g., TMDb) for fetching accurate movie data.
- User-friendly interface design for intuitive navigation and information retrieval.

## Projects that need to be installed:- 

 - Need to install Axios, react-bootstrap, redux, react-router-dom
 - npm i loadsh for debouncing 
 


## API Reference

- https://developer.themoviedb.org/reference/search-movie
## Demo


https://ashish-movie-search.netlify.app/
![movie](https://github.com/palkrashish/movie-search/assets/74855648/e89b2efb-f84f-4f81-9702-77a2a95171cf)



## Movie - Search App
Create a movie database web application using React that allows users to search for movies and view details about each movie.
The app should utilise routing to display different views/pages for search results and individual movie details.

## Requirement:-
1. Homepage/Search Page:
- Display "Movie Search App" as the heading of the application, clicking on which will navigate the user back to the home page from the details page.
- Display a search bar below the application heading.
- Allow users to type in a search query for movies.
- Use debouncing to avoid making extra API calls on each character typed.
- Store the movie list in the Redux store.
- Clicking on an individual movie result should navigate to the details page for that movie.
2. Routing
- Use React Router to set up routes for the homepage/search page, and movie details page.
- The URL should reflect the current state of the application (e.g. / for the search page and /movie/:id for individual movie details).

3. Movie Details Page:-
- When a user clicks on a search result or enters a movie URL directly, display a dedicated page for that movie.
- Show detailed information about the selected movie (e.g., title, poster, release date, description, cast, producers and directors).

4. API Intergation:-
- Utilise a movie API (e.g., The Movie Database API - TMDb) to fetch movie data based on search queries and movie IDs.
- Handling API requests and responses appropriately (e.g., loading, state, error handling).

5. Design and UI:
- Create a clean and user-friendly interface for both search results and movie details.


