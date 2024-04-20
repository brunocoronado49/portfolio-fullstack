import './styles/contact.css'

export const Contact = () => {
  return (
    <div className='contact-page'>
      <h1>Contact <strong>Me</strong></h1>
      <div className='contact-content'>
      <div className='info-contact'>
          <div className='card-contact'>
            <h3>Email: francorangelcoronado@gmail.com</h3>
            <h3>
              Github: <a href="https://github.com/brunocoronado49">@brunocoronado49</a>
            </h3>
            <h3>
              LinkedIn: <a href="https://www.linkedin.com/in/jfrc117/">Francisco Rangel</a>
            </h3>
            <a target='blank' href='https://firebasestorage.googleapis.com/v0/b/jfrc-clupp.appspot.com/o/cv-en.pdf?alt=media&token=3981fe5c-4cb6-4d34-91a0-f023716a40b0' className='btn-contact'>Download CV (en)</a>
            <a target='blank' href='https://firebasestorage.googleapis.com/v0/b/jfrc-clupp.appspot.com/o/cv-es.pdf?alt=media&token=ec24b04a-1221-4873-a5ed-11b07a64bc80' className='btn-contact' >Download CV (es)</a>
          </div>
        </div>
      </div>
    </div>
  )
}
