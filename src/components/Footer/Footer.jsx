import React from 'react';
import ContainerLayout from '../Layout/ContainerLayout';
import './style.css';

function Footer() {
  return (
    <footer className='footer'>
      <ContainerLayout>
        <h3>follow us</h3>
        <div className='social-links'>
          <a href='#' title='facebook'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='#' title='twitter'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='#' title='instagram'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='#' title='youtube'>
            <i className='fab fa-youtube'></i>
          </a>
        </div>
      </ContainerLayout>
    </footer>
  );
}

export default Footer;
