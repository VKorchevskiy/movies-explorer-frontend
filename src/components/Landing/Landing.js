// import { AboutProjectCards } from '../../utils/constant';
import Promo from './Promo/Promo';
import Section from './Section/Section';
import ProjectCards from './ProjectCards/ProjectCards';
import TimeLine from './TimeLine/TimeLine';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import './Landing.css';

function Landing() {
  return (
    <>
      <Promo />

      <Section title={'О проекте'}>
        <ProjectCards classPosition={'landing__project-cards'} />
        <TimeLine classPosition={'landing__time-line'} />
      </Section>

      <Section title={'Технологии'} classPosition={'landing__techs'}>
        <Techs />
      </Section>

      <Section title={'Студент'}>
        <Portfolio classPosition={'landing__portfolio'} />
      </Section>
    </>
  );
}

export default Landing;
