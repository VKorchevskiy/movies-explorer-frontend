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

function Landing() {
  return (
    <>
      <Promo />
      <NavTab />
      <Section title={'О проекте'} classPosition={'landing__about-project'} bookmark={'about-project'}>
        <ProjectCards classPosition={'landing__project-cards'} />
        <TimeLine classPosition={'landing__time-line'} />
      </Section>
      <Section title={'Технологии'} classPosition={'landing__techs'} bookmark={'techs'}>
        <Techs />
      </Section>
      <Section title={'Студент'} classPosition={'landing__student'} bookmark={'student'}>
        <AboutMe classPosition={'landing__about-me'} />
        <Portfolio classPosition={'landing__portfolio'} />
      </Section>
    </>
  );
}

export default Landing;
