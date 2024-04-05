import ImagePortafolio from '../assets/undraw_portfolio_website_re_jsdd.svg'
import './styles/contact.css'

export const Contact = () => {
  return (
    <div className='contact-page'>
      <h1>Contact <strong>Me</strong></h1>
      <div className='contact-content'>
        <div className='img-contact'>
          <img src={ImagePortafolio} alt="img" />
        </div>
        <div className='info-contact'>
          <div className='card-contact'>
            <h3>Email: francorangelcoronado@gmail.com</h3>
            <h3>
              Github: <a href="https://github.com/brunocoronado49">@brunocoronado49</a>
              </h3>
            <h3>
              LinkedIn: <a href="https://www.linkedin.com/in/jfrc117/">Francisco Rangel</a>
            </h3>
            <button className='btn-contact'>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  )
}
