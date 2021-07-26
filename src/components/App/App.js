import './App.css';
import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';

function App() {
  return (
    <>
      <Register className="app__regiser" />
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
