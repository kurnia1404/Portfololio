import React from 'react'

import htmlImg from '../../assets/img/skills/html.png';
import cssImg from '../../assets/img/skills/css.png';
import reactImg from '../../assets/img/skills/react.png';
import jsImg from '../../assets/img/skills/js.png';
import tailwindImg from '../../assets/img/skills/tailwind.png';
import bootstrapImg from '../../assets/img/skills/bootstrap.png';
import saperpImg from '../../assets/img/skills/saperp.png';
import sapb1Img from '../../assets/img/skills/sapb1.png';
import ContainerLayout from '../Layout/ContainerLayout';
import Grid from '../Layout/Grid';
import SectionTitle from '../Layout/SectionTitle';
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import SkillCard from '../Skills/SkillsCard';
import Card from '../Card/card';

import './style.css';

function Skills() {

  // const DATA_SKILLS = [
  //   {
  //     name: 'JavaScript',
  //     level: 'Advanced',
  //     icon: 'htmlImg',
  //   },
  //   {
  //     name: 'React',
  //     level: 'Intermediate',
  //     icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
  //   },
  //   {
  //     name: 'CSS',
  //     level: 'Advanced',
  //     icon: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg'
  //   }
  // ];




  // const DATA_SKILLS = [
  //   { name: 'React', level: 'Intermediate', icon: <FaReact /> },
  //   { name: 'HTML', level: 'Advanced', icon: <FaHtml5 /> },
  //   { name: 'CSS', level: 'Advanced', icon: <FaCss3Alt /> },
  // ];
    const DATA_SKILLS = [
        {
          name: 'html',
          img: htmlImg,
          level: 90,
          aosDelay: 0,
        },
        {
          name: 'css',
          img: cssImg,
          level: 90,
          aosDelay: 100,
        },
        {
          name: 'react',
          img: reactImg,
          level: 90,
          aosDelay: 200,
        },
        {
          name: 'javascipt',
          img: jsImg,
          level: 80,
          aosDelay: 300,
        },
        {
          name: 'tailwind',
          img: tailwindImg,
          level: 90,
          aosDelay: 400,
        },
        {
          name: 'bootstrap',
          img: bootstrapImg,
          level: 80,
          aosDelay: 500,
        },
        {
          name: 'sap erp',
          img: saperpImg,
          level: 100,
          aosDelay: 600,
        },
        {
          name: 'sap b1',
          img: sapb1Img,
          level: 100,
          aosDelay: 700,
        },
      ];
  return (
    <section className='skills section-padding' id='skills'>
      <ContainerLayout>
        <SectionTitle title='skills' subTitle='my skills' />
        <Grid>
          {DATA_SKILLS.map((service) => (
            <div
              className='skills-item'
              data-aos='fade-up'
              data-aos-duration='600'
              data-aos-delay={service.aosDelay}
              key={service.name}
            >  
            <div className="skills-container">              
              <SkillCard
                // key={index}
                skillName={service.name}
                level={service.level}
                icon={service.img}/>
              </div>

              {/* <div className='img-box'>
                <img src={service.img} alt={service.name} />                
              </div>

              <h3>{service.name}</h3> */}
            </div>
          ))}
        </Grid>
      </ContainerLayout>
    </section>
  )
}

export default Skills
