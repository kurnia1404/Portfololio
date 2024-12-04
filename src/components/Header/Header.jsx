import { useEffect, useRef } from 'react'
import React from 'react'
import style from './Header.module.css'
import './style.css'
import ContainerLayout from '../Layout/ContainerLayout'

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerBgFunc = () => {
      if (window.scrollY > 0) {
        headerRef.current.classList.add('bg-reveal');
      } else {
        headerRef.current.classList.remove('bg-reveal');
      }
    };
    document.addEventListener('scroll', headerBgFunc);

    return () => {
      document.removeEventListener('scroll', headerBgFunc);
    };
  }, []);

  useEffect(() => {
    const navToggler = document.querySelector('.js-nav-toggler');
    const nav = document.querySelector('.js-nav');
    const navItems = nav.querySelectorAll('li');

    const navToggle = () => {
      nav.classList.toggle('open');
      navToggler.classList.toggle('active');
    };

    navToggler.addEventListener('click', navToggle);

    navItems.forEach((li) => {
      li.querySelector('a').addEventListener('click', () => {
        if (window.innerWidth <= 767) {
          navToggle();
        }
      });
    });

    return () => {
      navToggler.removeEventListener('click', navToggle);
      navItems.forEach((li) => {
        li.querySelector('a').removeEventListener('click', () => {
          if (window.innerWidth <= 767) {
            navToggle();
          }
        });
      });
    };
  }, []);

  return (
    <div className={style.header} ref={headerRef}>
      <ContainerLayout style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div className={style.logo}>
          <a href='#'>AAR</a>
          <span>frontend web developer </span>
        </div>

        <button
          className='nav-toggler js-nav-toggler'
          data-aos='fade-down'
          data-aos-duration='1000'
        >
          <span></span>
        </button>
      <nav className='nav js-nav'>
        <ul>
            <li><a  href='#home'>Home</a></li>
            <li><a  href='#about'>About Me</a></li>
            <li><a  href='#skills'>Skills</a></li>
            <li><a  href='#projects'>Projects</a></li>
            <li><a  href='#contact'>Contact</a></li>            
        </ul>
      </nav>
      </ContainerLayout>
    </div>
  )
}

export default Header
