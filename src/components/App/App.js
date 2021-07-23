import './App.css';
import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import Landing from '../Landing/Landing';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';


function App() {
  return (
    <>
      <SearchForm>
        <FilterCheckbox />
      </SearchForm>
      <MoviesCardList />
      <Preloader />
      <Header />
      <PageNotFound />
      <Landing />
      <Footer />
    </>
  );
}

export default App;
