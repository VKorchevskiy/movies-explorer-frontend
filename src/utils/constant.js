import logo from '../images/logo/logo.svg';
import avatar from '../images/avatar.jpg';

const pathsWithFooter = ['movies', 'saved-movies']

const pathsAll = ['movies', 'saved-movies', 'profile']

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

const optionsMoviesApi = {
  baseUrl: 'https://api.nomoreparties.co',
};

const optionsMainApi = {
  // baseUrl: 'api.diploma.vkorchevskiy.nomoredomains.club',
  baseUrl: 'http://localhost:3000',
};

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export {
  logo,
  avatar,
  pathsWithFooter,
  pathsAll,
  projectCards,
  techs,
  portfolioCards,
  optionsMoviesApi,
  optionsMainApi,
  headers,
};
