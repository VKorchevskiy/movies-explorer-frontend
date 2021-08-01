import './App.css';

import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { pathsWithFooter, pathsAll } from '../../utils/constant';
import { filterMovies, filterShortMovies } from '../../utils/halpers';
import { moviesApi } from '../../utils/MoviesApi.js';
import { mainApi } from '../../utils/MainApi.js';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

function App() {
  const history = useHistory();
  const [isDisplay, setIsDisplay] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(true);

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      return;
    }

    mainApi
      .getCurrentUser(jwt)
      .then((data) => {
        setCurrentUser({
          ...currentUser,
          _id: data._id,
          email: data.email,
          name: data.name,
        });
        setIsLoggedIn(true);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/movies');

    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      const jwt = localStorage.getItem('jwt');
      Promise.all([mainApi.getCurrentUser(jwt), mainApi.getSavedMovies(jwt)])
        .then(([userData, savedMovies]) => {
          setCurrentUser(userData);
          setSavedMovies(savedMovies);
          console.log(savedMovies)
        })
        .catch(err => console.log(err));
    }
  }, [isLoggedIn]);

  const onLogin = (data) => {
    return mainApi
      .authorize(data)
      .then(({ token }) => {
        localStorage.setItem('jwt', token);
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => console.log(err));
  };

  const onRegister = (data) => {
    return mainApi
      .register(data)
      .then(() => {
        onLogin({ email: data.email, password: data.password })
      })
      .catch(err => console.log(err));
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    history.push('/signin');
  };

  const editProfile = ({ name, email }) => {
    return mainApi
      .putchUser({ name, email }, localStorage.getItem('jwt'))
      .then(res => {
        setCurrentUser(res);
      })
      .catch(err => console.log(err));
  }

  const searchMovies = (dataSearch) => moviesApi.getMovies()
    .then((movies) => {
      localStorage.setItem('movies', JSON.stringify(movies));
      setIsDisplay(true);
    })
    .then(() => {
      setMovies(filterMovies(JSON.parse(localStorage.getItem('movies')), dataSearch))
    })
    .catch(err => console.log(err));

  const saveMovie = (movie) => mainApi.saveMovie(movie, localStorage.getItem('jwt'))
    .then((newMovie) => {
      setSavedMovies({
        ...savedMovies,
        newMovie
      })
      setMovies((state) => state.map((m) => console.log(m)))
    })
    .catch(err => console.log(err));

  const deleteMovie = (id) => mainApi.deleteMovie(id, localStorage.getItem('jwt'))
    .then(res => console.log(res))
    .catch(err => console.log(err));

  const handleMovieLike = (movie) => {
    const isLiked = savedMovies.some((m) => movie.movieId === m.movieId)
    console.log(isLiked)
    if (isLiked) {

    } else {
      saveMovie(movie);
    }
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <IsLoggedInContext.Provider value={isLoggedIn}>
        <SavedMoviesContext.Provider value={savedMovies}>
          <Switch>
            <Route path="/signup" exact>
              <Register className="app__register" onRegister={onRegister} />
            </Route>
            <Route path="/signin" exact>
              <Login className="app__login" onLogin={onLogin} />
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
                    {pathsAll.includes(url) ? <Header /> : <></>}

                    {url === 'movies' ? <ProtectedRoute
                      movies={movies}
                      isDisplay={isDisplay}
                      searchMovies={searchMovies}
                      isShortMovies={isShortMovies}
                      setIsShortMovies={setIsShortMovies}
                      isLoggedIn={isLoggedIn}
                      onMovieLike={handleMovieLike}
                      component={Movies}
                    /> : <></>}

                    {url === 'saved-movies' ? <ProtectedRoute
                      isLoggedIn={isLoggedIn}
                      component={SavedMovies} />
                      : <></>}

                    {url === 'profile' ? <ProtectedRoute
                      className="app__profile"
                      onLogout={onLogout}
                      isLoggedIn={isLoggedIn}
                      editProfile={editProfile}
                      component={Profile}
                    /> : <></>}

                    {pathsWithFooter.includes(url) ? <ProtectedRoute
                      isLoggedIn={isLoggedIn}
                      component={Footer}
                    /> : <></>}

                    {!pathsAll.includes(url) ? <ProtectedRoute
                      isLoggedIn={isLoggedIn}
                      component={PageNotFound}
                    /> : <></>}
                  </>
                );
              }}
            />
          </Switch>
        </SavedMoviesContext.Provider>
      </IsLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
