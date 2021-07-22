import './Header.css';
import React from 'react';

function Header() {
  return (
    <header className="header">
      <a className="header__logo"></a>
      <ul className="footer__links">
        <li className="footer__item"><a className="footer__link" target="_blank" href="https://praktikum.yandex.ru/" rel="noreferrer">Яндекс.Практикум</a></li>
        <li className="footer__item"><a className="footer__link" target="_blank" href="https://github.com/VKorchevskiy" rel="noreferrer">Github</a></li>
        <li className="footer__item"><a className="footer__link" target="_blank" href="https://vk.com/id564049394" rel="noreferrer">Vkontakte</a></li>
      </ul>
      <p className="footer__copiright">&#169;2021</p>
    </header>
  )
}

export default Header;
