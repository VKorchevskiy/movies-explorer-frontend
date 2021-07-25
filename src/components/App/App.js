import './App.css';
import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <>
      <InputAuth
        className={'q'}
        classInput={'input-auth__input_border_gray'}
        classDescription={'qqq'}
        description={'qqq q'}
        nameInput={'qqq qq'}
        placeholder={'qqq qqq'}
        error={'qqq qqq q'}
      />
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
