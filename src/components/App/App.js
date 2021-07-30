import './App.css';

import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
// import Preloader from '../Preloader/Preloader';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

import { pathsWithFooter, pathsAll } from '../../utils/constant';
import { filterMovies } from '../../utils/halpers';
import { moviesApi } from '../../utils/MoviesApi.js';


function App() {
  const [isNotSearched, setIsNotSearched] = useState(false);
  const [allMovies, setAllMovies] = useState([])
  const [movies, setMoviesData] = useState([]);



  const searchMovies = (dataSearch) => {

    return moviesApi.getMovies()
      .then((movies) => filterMovies(movies, dataSearch))
      .then((movies) => {
        setMoviesData(movies);
        console.log(movies)
        setIsNotSearched(true)
      })
  }

  return (
    <Switch>

      <Route path="/signup" exact>
        <Register className="app__register" />
      </Route>
      <Route path="/signin" exact>
        <Login className="app__login" />
      </Route>

      <Route path="/" exact>
        <Landing />
      </Route>

      <Route
        exact={true}
        path="/:path"
        render={({ match }) => {
          const url = match.url.replace(/^.{1}/gi, '');
          return (
            <>
              {pathsAll.includes(url) ? <Header isLogged={true} /> : <></>}
              {url === 'movies' ? <Movies
                movies={movies}
                isNotSearched={isNotSearched}
                searchMovies={searchMovies}
              /> : <></>}
              {url === 'saved-movies' ? <SavedMovies /> : <></>}
              {url === 'profile' ? <Profile className="app__profile" userName="Владимир" /> : <></>}
              {pathsWithFooter.includes(url) ? <Footer /> : <></>}
              {!pathsAll.includes(url) ? <PageNotFound /> : <></>}
            </>
          );
        }}
      />

    </Switch>
  );
}

export default App;
