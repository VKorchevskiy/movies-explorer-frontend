// import { AboutProjectCards } from '../../utils/constant';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import Section from './Section/Section';
import ProjectCards from './ProjectCards/ProjectCards';
import TimeLine from './TimeLine/TimeLine';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import './Landing.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Landing({ className }) {
  return (
    <div className={`landing ${className || ''}`.trim()}>
      <Header className="landing__header" />
      <Promo className="landing__promo" />
      <NavTab className="landing__nav-tab" />
      <Section title={'О проекте'} className={'landing__about-project'} bookmark={'about-project'}>
        <ProjectCards className={'landing__project-cards'} />
        <TimeLine className={'landing__time-line'} />
      </Section>
      <Section title={'Технологии'} className={'landing__techs'} bookmark={'techs'}>
        <Techs className="landing__tech-cards" />
      </Section>
      <Section title={'Студент'} className={'landing__student'} bookmark={'student'}>
        <AboutMe className={'landing__about-me'} />
        <Portfolio className={'landing__portfolio'} />
      </Section>
      <Footer />
    </div>
  );
}

export default Landing;
