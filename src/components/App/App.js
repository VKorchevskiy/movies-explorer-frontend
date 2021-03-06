import './App.css';

import { useCallback, useEffect, useState } from 'react';
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
  NOT_FOUND,
  SUCCESSFUL_PROFILE_EDITING,
  PROFILE_ERROR_MESSAGES,
  LOGIN_ERROR_MESSAGES,
  REGISTER_ERROR_MESSAGES,
} from '../../utils/constant';

import { filterMovies, filterShortMovies, getErrorMessage } from '../../utils/halpers';
import { moviesApi } from '../../utils/MoviesApi.js';
import { mainApi } from '../../utils/MainApi.js';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { IsLoggedInContext } from '../../contexts/IsLoggedInContext';
import { IsButtonDisabledContext } from '../../contexts/IsButtonDisabledContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import Preloader from '../Preloader/Preloader';

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
  const [profileSuccess, setProfileSuccess] = useState('');
  const [notFoundMovies, setNotFoundMovies] = useState('');
  const [notFoundSavedMovies, setNotFoundSavedMovies] = useState('');
  const [isCheckedToken, setIsCheckedToken] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  //--------------------------??????????????????????, ?????????????????????? ?? ?????????? ???? ??????????????--------------------------//
  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      setIsCheckedToken(true);
      return;
    }

    mainApi
      .getCurrentUser(jwt)
      .then((data) => {
        setIsLoggedIn(true);
        setIsCheckedToken(true);
        const localMovies = JSON.parse(localStorage.getItem('movies'));
        if (localMovies) {
          setMovies(localMovies);
        }
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsCheckedToken(true);
      })
  }, [history]);

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      const jwt = localStorage.getItem('jwt');
      const localMovies = JSON.parse(localStorage.getItem('movies'));

      if (localMovies) {
        Promise.all([mainApi.getCurrentUser(jwt), mainApi.getSavedMovies(jwt)])
          .then(([currentUser, savedMovies]) => {
            setCurrentUser(currentUser);
            setSavedMovies(savedMovies);
          })
          .catch(err => console.log(err))
          .finally(() => {
            setIsLoading(false);
          })
      } else {
        Promise.all([
          mainApi.getCurrentUser(jwt),
          mainApi.getSavedMovies(jwt),
          moviesApi.getMovies()
        ])
          .then(([currentUser, savedMovies, movies]) => {
            setCurrentUser(currentUser);
            setSavedMovies(savedMovies);
            localStorage.setItem('movies', JSON.stringify(movies));
            setMovies(movies);
          })
          .catch(err => console.log(err))
          .finally(() => {
            setIsLoading(false);
          })
      }
    }
  }, [isLoggedIn]);

  const onLogin = (data) => {
    setIsButtonDisabled(true);
    return mainApi
      .authorize(data)
      .then(({ token }) => {
        localStorage.setItem('jwt', token);
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => {
        console.log(err);
        setLoginError(getErrorMessage(err, LOGIN_ERROR_MESSAGES));
      })
      .finally(() => setIsButtonDisabled(false));
  };

  const onRegister = (data) => {
    setIsButtonDisabled(true);
    return mainApi
      .register(data)
      .then(() => {
        onLogin({ email: data.email, password: data.password })
      })
      .catch(err => {
        console.log(err);
        setRegisterError(getErrorMessage(err, REGISTER_ERROR_MESSAGES));
      })
      .finally(() => setIsButtonDisabled(false));
  };

  const onLogout = () => {
    setIsDisplay(false);
    setMovies([]);
    setFilteredMovies([]);
    setSetupedFilteredMovies([]);
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    history.push('/');
  };

  const handleGoBack = () => history.goBack();

  //-------------------------------???????????????????????????? ??????????????-------------------------------//
  const editProfile = ({ name, email }) => {
    setIsButtonDisabled(true);
    return mainApi
      .putchUser({ name, email }, localStorage.getItem('jwt'))
      .then(res => {
        setCurrentUser(res);
        setProfileError('');
        setProfileSuccess(SUCCESSFUL_PROFILE_EDITING);
      })
      .catch(err => {
        console.log(err);
        setProfileError(getErrorMessage(err, PROFILE_ERROR_MESSAGES));
        setProfileSuccess('');
      })
      .finally(() => setIsButtonDisabled(false));
  };

  //-----------------------------?????????? ??????????????, ???????????????????? (MOVIES)-----------------------------//
  const searchFilterMovie = (dataSearch) => {
    // setFilteredMovies(filterMovies(JSON.parse(localStorage.getItem('movies')), dataSearch));
    setFilteredMovies(filterMovies(movies, dataSearch));
    setIsLoading(false);
  }

  const searchMovies = (dataSearch) => {
    setIsLoading(true);
    const localMovies = JSON.parse(localStorage.getItem('movies'))
    if (localMovies) {
      searchFilterMovie(dataSearch);
      setIsDisplay(true);
    } else return moviesApi.getMovies()
      .then((movies) => {
        localStorage.setItem('movies', JSON.stringify(movies));
        setMovies(movies);
        setIsDisplay(true);
      })
      .then(() => {
        searchFilterMovie(dataSearch);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    isShortMovies
      ? setSetupedFilteredMovies(filterShortMovies(filteredMovies))
      : setSetupedFilteredMovies(filteredMovies);
    (setupedFilteredMovies.length === 0) ? setNotFoundMovies(NOT_FOUND) : setNotFoundMovies('');
  }, [filteredMovies, isShortMovies, setupedFilteredMovies.length]);

  //-----???????????? ???? ??????????????------------------------?????????? ??????????????, ???????????????????? (SAVED-MOVIES)-----------------------------//
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
    (setupedFilteredSavedMovies.length === 0 && savedMovies.length !== 0) ? setNotFoundSavedMovies(NOT_FOUND) : setNotFoundSavedMovies('');
  }, [filteredSavedMovies, isShortSavedMovies, setupedFilteredSavedMovies.length, savedMovies.length]);

  //-----------------------------????????????????????, ???????????????? ????????????-----------------------------//
  const saveMovie = (movie) => mainApi.saveMovie(movie, localStorage.getItem('jwt'))
    .then((newMovie) => {
      setSavedMovies([
        ...savedMovies,
        newMovie
      ])
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

  if (!isCheckedToken) {
    return <></>;
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <IsLoggedInContext.Provider value={isLoggedIn}>
        <SavedMoviesContext.Provider value={savedMovies}>
          <IsButtonDisabledContext.Provider value={isButtonDisabled}>
            {
              isLoading
                ? <Preloader />
                : <Switch>
                  <Route path="/signup" exact>
                    <Register className="app__register" onRegister={onRegister} error={registerError} setError={setRegisterError} isButtonDisabled={isButtonDisabled} setIsButtonDisabled={setIsButtonDisabled} />
                  </Route>
                  <Route path="/signin" exact>
                    <Login className="app__login" onLogin={onLogin} error={loginError} setError={setLoginError} isButtonDisabled={isButtonDisabled} setIsButtonDisabled={setIsButtonDisabled} />
                  </Route>

                  <Route path="/" exact>
                    <Landing />
                  </Route>

                  <Route
                    exact={true}
                    path="/:path"
                    render={({ match }) => {
                      const url = match.url;
                      return (
                        <>
                          {pathsAll.includes(url) ? <Header /> : <></>}

                          {url === '/movies' ? <ProtectedRoute
                            path="/movies"
                            movies={setupedFilteredMovies}
                            isDisplay={isDisplay}
                            searchMovies={searchMovies}
                            isShortMovies={isShortMovies}
                            setIsShortMovies={setIsShortMovies}
                            isLoading={isLoading}
                            isLoggedIn={isLoggedIn}
                            onMovieButton={handleLikeMovie}
                            notFoundMovies={notFoundMovies}
                            setNotFoundMovies={setNotFoundMovies}
                            component={Movies}
                          /> : <></>}

                          {url === '/saved-movies' ? <ProtectedRoute
                            path="/saved-movies"
                            movies={setupedFilteredSavedMovies}
                            isDisplay={true}
                            searchMovies={searchSavedMovies}
                            isShortMovies={isShortSavedMovies}
                            setIsShortMovies={setIsShortSavedMovies}
                            isLoading={isLoading}
                            isLoggedIn={isLoggedIn}
                            onMovieButton={handleDeleteMovie}
                            notFoundMovies={notFoundSavedMovies}
                            setNotFoundMovies={setNotFoundSavedMovies}
                            component={SavedMovies}
                          /> : <></>}

                          {url === '/profile' ? <ProtectedRoute
                            className="app__profile"
                            path="/profile"
                            onLogout={onLogout}
                            isLoggedIn={isLoggedIn}
                            editProfile={editProfile}
                            error={profileError}
                            setError={setProfileError}
                            success={profileSuccess}
                            setSuccess={setProfileSuccess}
                            isButtonDisabled={isButtonDisabled}
                            setIsButtonDisabled={setIsButtonDisabled}
                            component={Profile}
                          /> : <></>}

                          {pathsWithFooter.includes(url) ? <ProtectedRoute
                            isLoggedIn={isLoggedIn}
                            component={Footer}
                          /> : <></>}

                          {!pathsAll.includes(url) ? <PageNotFound goBack={handleGoBack} /> : <></>}
                        </>
                      );
                    }}
                  />

                  <Route path="*">
                    <PageNotFound goBack={handleGoBack} />
                  </Route>

                </Switch>
            }
          </IsButtonDisabledContext.Provider>
        </SavedMoviesContext.Provider>
      </IsLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
