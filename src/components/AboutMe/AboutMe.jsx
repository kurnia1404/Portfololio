import React from 'react'

import style from './AboutMe.module.css';
import aboutImg from '../../assets/img/img-about.png';
import Grid from '../Layout/Grid';
import SectionTitle from '../Layout/SectionTitle';
import ContainerLayout from '../Layout/ContainerLayout';

function AboutMe() {
  return (
    <section className={style.about} id='about'>
      <ContainerLayout>
        <Grid>
          <div className={style.aboutImg}>
            <div
              className={style.imgBox}
              data-aos='zoom-in'
              data-aos-duration='1000'
            >
              <img src={aboutImg} alt='about' />
              <div className={`${style.box} ${style.box1}`}>
                <span>2.5k</span>
                <p>satiesfied clients</p>
              </div>
            </div>
          </div>
          <div className={style.aboutText}>
            <SectionTitle
              title='about me'
              subTitle="I am an experienced IT profesional with expertise in frontend web development"
            />
            <p data-aos='fade-up' data-aos-duration='600'>
                From 1999 to the present, I have worked in the field of information technology for a number of manufacturing organizations, managing and overseeing the company's computerized systems. I have also worked on multiple infrastructure projects, developed web-based systems, and implemented ERP
                I have experience and knowledge installing servers running Windows NT, Windows 2000, Windows 2003, Windows 2008, Window Server 2008R, Window Server 2012, and Windows 2012R, as well as networking equipment like Cisco routers and Microtics, when working on infrastructure projects.                
            </p>
            <p data-aos='fade-up' data-aos-duration='600'>
            During my work on a system building project, I gained experience in configuring web servers using Internet Information Servers (IIS), Apache, and SQL Server for managing transaction databases and programming languages like HTML, CSS, JavaScript, and Bootstrap framework
            Having implemented Enterprise Resource Planning (ERP) systems utilizing SAP Business One and CS ERP, I possess the necessary competence and knowledge in this field.
            </p>
          </div>
        </Grid>
      </ContainerLayout>
    </section>
  )
}

export default AboutMe
