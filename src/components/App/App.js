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
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [setupedFilteredMovies, setSetupedFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  const [savedFilteredMovies, setSavedFilteredMovies] = useState([]);
  const [setupedFilteredSavedMovies, setSetupedFilteredSavedMovies] = useState([]);
  const [isShortSavedMovies, setIsShortSavedMovies] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  //-------------------------------РЕДАКТИРОВАНИЕ ПРОФИЛЯ-------------------------------//
  const editProfile = ({ name, email }) => {
    return mainApi
      .putchUser({ name, email }, localStorage.getItem('jwt'))
      .then(res => {
        setCurrentUser(res);
      })
      .catch(err => console.log(err));
  }

  //-----------------------------ПОИСК ФИЛЬМОВ, ФИЛЬТРАЦИЯ (ВСЕ + СОХРАНЕННЫЕ)-----------------------------//
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
        isShortMovies
          ? setSetupedFilteredMovies(filterShortMovies(filteredMovies))
          : setSetupedFilteredMovies(filteredMovies);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    isShortMovies
      ? setSetupedFilteredMovies(filterShortMovies(filteredMovies))
      : setSetupedFilteredMovies(filteredMovies);
  }, [filteredMovies, isShortMovies]);

  const searchSavedMovies = (dataSearch) => {
    setIsLoading(true);



    return mainApi.getMovies()
      .then((movies) => {
        setFilteredMovies(filterMovies(JSON.parse(localStorage.getItem('movies')), dataSearch));
        isShortMovies
          ? setSetupedFilteredMovies(filterShortMovies(filteredMovies))
          : setSetupedFilteredMovies(filteredMovies);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }

  // useEffect(() => {
  //   isShortMovies
  //     ? setSetupedFilteredMovies(filterShortMovies(filteredMovies))
  //     : setSetupedFilteredMovies(filteredMovies);
  // }, [filteredMovies, isShortMovies]);

  //-----------------------------СОХРАНЕНИЕ, УДАЛЕНИЕ ФИЛЬМА-----------------------------//
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
    console.log(savedMovies)
    if (isLiked) {
      deleteMovie({ id: movie.id })
    } else {
      saveMovie(movie);
    }
    console.log(savedMovies)
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
                console.log(url)
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
                      // onMovieLike={handleMovieLike}
                      component={Movies}
                    /> : <></>}

                    {url === 'saved-movies' ? <ProtectedRoute
                      movies={savedMovies}
                      isDisplay={true}
                      searchMovies={searchSavedMovies}
                      isShortMovies={isShortSavedMovies}
                      setIsShortMovies={setIsShortSavedMovies}
                      isLoading={isLoading}
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
