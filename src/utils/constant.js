import logo from '../images/logo/logo.svg';
import avatar from '../images/avatar.jpg';

export const pathsWithFooter = ['/movies', '/saved-movies']

export const pathsAll = ['/movies', '/saved-movies', '/profile']

export const projectCards = [
  {
    subtitle: 'Дипломный проект включал 5 этапов',
    description: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
  },
  {
    subtitle: 'На выполнение диплома ушло 5 недель',
    description: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
  }
];

export const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

export const portfolioCards = [
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

export const optionsMoviesApi = {
  baseUrl: 'https://api.nomoreparties.co',
};

export const optionsMainApi = {
  baseUrl: 'https://api.diploma.vkorchevskiy.nomoredomains.club',
  // baseUrl: 'http://localhost:3000',
};

export const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export const SEARCH_ERROR = 'Нужно ввести ключевое слово';
export const NOT_FOUND = "Ничего не найдено";
export const NAME_ERROR = 'Нужно ввести имя';
export const EMAIL_ERROR = 'Нужно ввести e-mail';
export const PASSWORD_ERROR = 'Пароль должен содержать не менее одного числа, одного спецсимвола, одной латинской буквы в нижнем и верхнем регистрах и состоять минимум из восьми символов.';

export const PROFILE_ERROR = 'При изменении данных пользователя произошла ошибка.';
export const SUCCESSFUL_PROFILE_EDITING = 'Данные пользователя успешно изменены'
export const REGISTER_ERROR = 'При регистрации пользователя произошла ошибка.';
export const AUTH_ERROR = 'При авторизации произошла ошибка.';

export const MAX_WIDTH = 1280;
export const MEDIUM_WIDTH = 768;
export const MIN_WIDTH = 320;
export const MAX_QUANTITY_CARDS = 12;
export const MORE_MAX_QUANTITY_CARDS = 4;
export const MEDIUM_QUANTITY_CARDS = 8;
export const MORE_MEDIUM_QUANTITY_CARDS = 2;
export const MIN_QUANTITY_CARDS = 5;
export const MORE_MIN_QUANTITY_CARDS = 1;
export const HOUR = 60;
export const DURATION_SHORT_MOVIE = 40;

export {
  logo,
  avatar,
};
