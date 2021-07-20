// import { AboutProjectCards } from '../../utils/constant';
import Promo from './Promo/Promo';
import Section from './Section/Section';
import ProjectCards from './ProjectCards/ProjectCards';
import TimeLine from './TimeLine/TimeLine';
import './Landing.css';



// import Tech from './Tech/Tech';

function Landing() {
  return (
    <>
      {/* <Promo /> */}
      <Section title={'О проекте'}>
        <ProjectCards classPosition={'landing__project-cards'} />
        <TimeLine classPosition={'landing__time-line'} />
      </Section>

      <Section title={'Технологии'}>

      </Section>
    </>
  );
}

export default Landing;
