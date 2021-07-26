import './App.css';
import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
    <>
      <Login className="app__login" />
      <Register className="app__register" />
      <Header />
      <SavedMovies />
      <Movies />
      <Preloader />
      <PageNotFound />
      <Landing />
      <Footer />
    </>
  );
}

export default App;
