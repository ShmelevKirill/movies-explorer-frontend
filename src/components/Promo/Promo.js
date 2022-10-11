import './Promo.css';
import promoImg from '../../images/text__COLOR_landing-logo.png';

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <img className='promo__img' src={promoImg} alt='Фоновый лого'/>
    </section>
  );
}

export default Promo;