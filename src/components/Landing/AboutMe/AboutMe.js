import './AboutMe.css';
import React from 'react';
import avatar from '../../../images/avatar.jpg';

function AboutMe() {
  return (
    <div className="about-me">
      <img className="about-me__avatar" src={avatar} alt="Владимир" />
      <div className="about-me__description">
        <div className="about-me__texts">
          <p className="about-me__name">Владимир</p>
          <p className="about-me__text about-me__text_profession">Фронтенд-разработчик, 33 года</p>
          <p className="about-me__text">Живу в Москве, закончил факультет промышленной теплоэнергетики ОмГТУ. У меня есть жена. Я люблю слушать музыку, а ещё увлекаюсь рыбалкой и путешествиями. Недавно начал кодить. С 2017 года работал в «Центральном проектном институте». Прохожу курс по веб-разработке.</p>
        </div>
        <ul className="about-me__socials">
          <li className="about-me__social"><a className="about-me__link" target="_blank" href="https://vk.com/id564049394" rel="noreferrer">Vkontakte</a></li>
          <li className="about-me__social"><a className="about-me__link" target="_blank" href="https://github.com/VKorchevskiy" rel="noreferrer">Github</a></li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe;
