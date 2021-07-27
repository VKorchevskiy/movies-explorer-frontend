import './App.css';
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
import { Route, Switch } from 'react-router-dom';


function App() {
  const pathsWithFooter = ['movies', 'saved-movies']
  const pathsAll = ['movies', 'saved-movies', 'profile']

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
              {pathsAll.includes(url) ? <Header /> : <></>}
              {url === 'movies' ? <Movies /> : <></>}
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
