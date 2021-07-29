import logo from '../images/logo/logo.svg';
import avatar from '../images/avatar.jpg';
import movie from '../images/movies/run_is_freadom.png';

const projectCards = [
  {
    subtitle: 'Дипломный проект включал 5 этапов',
    description: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
  },
  {
    subtitle: 'На выполнение диплома ушло 5 недель',
    description: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
  }
];

const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

const portfolioCards = [
  {
    description: 'Статичный сайт',
    link: 'https://vkorchevskiy.github.io/how-to-learn/index.html',
  },
  {
    description: 'Адаптивный сайт',
    link: 'https://vkorchevskiy.github.io/russian-travel/index.html',
  },
  {
    description: 'Одностраничное приложение',
    link: 'https://github.com/VKorchevskiy/mesto-react',
  }
];

const optionsMoviesApi ={
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
};

const headersMoviesApi = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export {
  logo,
  avatar,
  movie,
  projectCards,
  techs,
  portfolioCards,
  optionsMoviesApi,
  headersMoviesApi,
};
