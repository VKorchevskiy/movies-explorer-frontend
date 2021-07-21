import './Footer.css';
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <ul className="footer__links">
        <li className="footer__item"><a className="footer__link" target="_blank" href="https://praktikum.yandex.ru/" rel="noreferrer">Яндекс.Практикум</a></li>
        <li className="footer__item"><a className="footer__link" target="_blank" href="https://github.com/VKorchevskiy" rel="noreferrer">Github</a></li>
        <li className="footer__item"><a className="footer__link" target="_blank" href="https://vk.com/id564049394" rel="noreferrer">Vkontakte</a></li>
      </ul>
      <p className="footer__copiright">&#169;2021</p>
    </footer>
  )
}

export default Footer;
