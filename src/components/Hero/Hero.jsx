import React from 'react'
import homeImg from '../../assets/img/me-img.png';
import style from './Hero.module.css'
import Grid from '../Layout/Grid';
import ContainerLayout from '../Layout/ContainerLayout';
import { ButtonLink } from '../Layout/Button';

function Hero() {
  return (
    <section className={style.home} id='home'>
      <ContainerLayout>
        <Grid>
          <div className={style.homeText}>
            <h1 data-aos='fade-up' data-aos-duration='1000'>            
            Hi I'm Jhon Doe Frontend Web Developer
            </h1>
            <p data-aos='fade-up' data-aos-duration='1000' data-aos-delay='150'>
            I am an experienced IT profesional with expertise in  frontend web development and ERP implementation
            My Profesional Experience
            </p>
            <ButtonLink
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='300'
              href='#about'
            >
              ... more
            </ButtonLink>
          </div>
          <div className={style.homeImg}>
            <div
              className={style.curvedWrap}
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              <div className={style.curved}></div>
            </div>
            <img
              src={homeImg}
              alt='img'
              data-aos='fade-left'
              data-aos-duration='1000'
            />
          </div>
        </Grid>
      </ContainerLayout>
    </section>
  )
}

export default Hero
