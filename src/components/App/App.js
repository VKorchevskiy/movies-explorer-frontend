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

import {
  pathsWithFooter,
  pathsAll,
  PROFILE_ERROR,
  REGISTER_ERROR,
  AUTH_ERROR,
} from '../../utils/constant';

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
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [setupedFilteredMovies, setSetupedFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [setupedFilteredSavedMovies, setSetupedFilteredSavedMovies] = useState(savedMovies);
  const [isShortSavedMovies, setIsShortSavedMovies] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [profileError, setProfileError] = useState('');

  //--------------------------АВТОРИЗАЦИЯ, РЕГИСТРАЦИЯ И ВЫХОД ИЗ СИСТЕМЫ--------------------------//
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
      .catch(err => {
        console.log(err.name)
        console.log(err.statusCode)
        console.log(err.state)
        console.log(err.message)
        console.log(err)
      });
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
        .then(([currentUser, savedMovies]) => {
          setCurrentUser(currentUser);
          setSavedMovies(savedMovies);
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
      .catch(err => {
        console.log(err);
        setLoginError(AUTH_ERROR);
      });
  };

  const onRegister = (data) => {
    return mainApi
      .register(data)
      .then(() => {
        onLogin({ email: data.email, password: data.password })
      })
      .catch(err => {
        setRegisterError(REGISTER_ERROR);
      });
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    history.push('/signin');
  };

  //-------------------------------РЕДАКТИРОВАНИЕ ПРОФИЛЯ-------------------------------//
  const editProfile = ({ name, email }) => {
    return mainApi
      .putchUser({ name, email }, localStorage.getItem('jwt'))
      .then(res => {
        setCurrentUser(res);
        setProfileError('')
      })
      .catch(err => {
        console.log(err);
        setProfileError(PROFILE_ERROR)
      });
  };

  //-----------------------------ПОИСК ФИЛЬМОВ, ФИЛЬТРАЦИЯ (MOVIES)-----------------------------//
  const searchMovies = (dataSearch) => {
    setIsLoading(true);
    return moviesApi.getMovies()
      .then((movies) => {
        localStorage.setItem('movies', JSON.stringify(movies));
        setMovies(JSON.parse(localStorage.getItem('movies')));
        setIsDisplay(true);
      })
      .then(() => {
        setFilteredMovies(filterMovies(JSON.parse(localStorage.getItem('movies')), dataSearch));
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    isShortMovies
      ? setSetupedFilteredMovies(filterShortMovies(filteredMovies))
      : setSetupedFilteredMovies(filteredMovies);
  }, [filteredMovies, isShortMovies]);

  //-----------------------------ПОИСК ФИЛЬМОВ, ФИЛЬТРАЦИЯ (SAVED-MOVIES)-----------------------------//
  useEffect(() => {
    setSetupedFilteredSavedMovies(savedMovies);
    setFilteredSavedMovies(savedMovies)
  }, [savedMovies]);

  const searchSavedMovies = (dataSearch) => {
    setFilteredSavedMovies(filterMovies(savedMovies, dataSearch));
  };

  useEffect(() => {
    isShortSavedMovies
      ? setSetupedFilteredSavedMovies(filterShortMovies(filteredSavedMovies))
      : setSetupedFilteredSavedMovies(filteredSavedMovies);
  }, [filteredSavedMovies, isShortSavedMovies]);

  //-----------------------------СОХРАНЕНИЕ, УДАЛЕНИЕ ФИЛЬМА-----------------------------//
  const saveMovie = (movie) => mainApi.saveMovie(movie, localStorage.getItem('jwt'))
    .then((newMovie) => {
      setSavedMovies([
        ...savedMovies,
        newMovie
      ])
      // setFilteredMovies((state) => state.map(((m) => m.id !== movie.id)))
    })
    .catch(err => console.log(err));

  const deleteMovie = (id) => mainApi.deleteMovie(id, localStorage.getItem('jwt'))
    .then(() => {
      setSavedMovies((state) => state.filter((m) => m._id !== id));
      setFilteredSavedMovies((state) => state.filter((m) => m._id !== id));
      setSetupedFilteredSavedMovies((state) => state.filter((m) => m._id !== id));
    })
    .catch(err => console.log(err));

  const handleDeleteMovie = (id) => deleteMovie(id);

  const handleLikeMovie = (isLiked, movie) => {
    if (isLiked) {
      const _id = savedMovies.find((m) => m.movieId === movie.movieId)._id;
      deleteMovie(_id)
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
              <Register className="app__register" onRegister={onRegister} error={registerError} setError={setRegisterError} />
            </Route>
            <Route path="/signin" exact>
              <Login className="app__login" onLogin={onLogin} error={loginError} setError={setLoginError} />
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
                      movies={setupedFilteredMovies}
                      isDisplay={isDisplay}
                      searchMovies={searchMovies}
                      isShortMovies={isShortMovies}
                      setIsShortMovies={setIsShortMovies}
                      isLoading={isLoading}
                      isLoggedIn={isLoggedIn}
                      onMovieButton={handleLikeMovie}
                      component={Movies}
                    /> : <></>}

                    {url === 'saved-movies' ? <ProtectedRoute
                      movies={setupedFilteredSavedMovies}
                      isDisplay={true}
                      searchMovies={searchSavedMovies}
                      isShortMovies={isShortSavedMovies}
                      setIsShortMovies={setIsShortSavedMovies}
                      isLoading={isLoading}
                      isLoggedIn={isLoggedIn}
                      onMovieButton={handleDeleteMovie}
                      component={SavedMovies} />
                      : <></>}

                    {url === 'profile' ? <ProtectedRoute
                      className="app__profile"
                      onLogout={onLogout}
                      isLoggedIn={isLoggedIn}
                      editProfile={editProfile}
                      error={profileError}
                      setError={setProfileError}
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
