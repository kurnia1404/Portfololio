import { Button } from '../Layout/Button';
import ContainerLayout from '../Layout/ContainerLayout';
import { InputBox, TextAreaBox } from '../Layout/Form';
import Grid from '../Layout/Grid';
import SectionTitle from '../Layout/SectionTitle';


import './style.css';

function ContactUs() {
  return (
    <section className='contact section-padding' id='contact'>
      <ContainerLayout>
        <SectionTitle title='contact us' subTitle='have any question ?' />
        <Grid className='contact-grid'>
          <div className='contact-info'>
            <div
              className='contact-info-item'
              data-aos='fade-up'
              data-aos-duration='600'
            >
              <i className='fas fa-map-marker-alt'></i>
              <h3>Adress</h3>
              <p>Kota Serang, Banten, Indonesia</p>
            </div>
            <div
              className='contact-info-item'
              data-aos='fade-up'
              data-aos-duration='600'
            >
              <i className='fas fa-phone'></i>
              <h3>Call us</h3>
              <p>+62 8332 232 ***</p>
            </div>
            <div
              className='contact-info-item'
              data-aos='fade-up'
              data-aos-duration='600'
            >
              <i className='fas fa-envelope'></i>
              <h3>Email us</h3>
              <p>example@mail.com</p>
            </div>
          </div>
          <div
            className='contact-form'
            data-aos='fade-up'
            data-aos-duration='600'
          >
            <form>
              <InputBox placeholder='Name' />
              <InputBox type='email' placeholder='Email' />
              <InputBox placeholder='Phone' />
              <TextAreaBox placeholder='Message' />
              <Button type='submit'>Send Message</Button>
            </form>
          </div>
        </Grid>
      </ContainerLayout>
    </section>
  );
}

export default ContactUs;
