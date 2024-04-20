import Profile from '../assets/profile.jpg'
import './styles/about.css'

export const About = () => {
  return (
    <div className='about-page'>
      <h1>About <strong>Me</strong></h1>
      <div className='about-content'>
        <div className='info-about'>
          <h1>Francisco Rangel</h1>
          <br />
          <p>Hello I am Francisco from the state of Zacatecas Mexico, I am 26 years old and I am dedicated to software development specializing in web development on the frontend side but studying for the backend, currently apart from working professionally I am studying Industrial Engineering on Saturdays to expand my knowledge in terms of engineering.</p>
          <br />
          <p>A goal I would like to achieve is to develop AI and I also like everything that has to do with machine learning and data science.</p>
          <br />
          <p>In terms of professional experience, I have +4 years. In the first 2 years I was working as a mobile developer, working with Flutter for cross-platform apps, Kotlin in Android studio, Swift and XCode for native apps. In the other 2 I was as a frontend developer handling React. I` ve been a freelancer and I`ve been a fuillstack handling Python.</p>
          <br />
          <p>Other technologies I know and manage are: Java, .NET, Go, Firebase, React Native, VueJS, MySQL, MongoDB, PostgreSQL, VTEXIO, Typescript.</p>
          <br />
          <p>My favorite hobbies are playing video games (it`s one of my main passions), playing and listening to music, among my favorite genres and bands are rock, metal and its subgenres, electronica and rap, such as Korn, Megadeth, Iron Maiden, Nirvana, Daft Punk, among others. I also like to go for walks with my dog named Seven.</p>
        </div>
        <div className='about-img'>
          <img src={Profile} alt="img" width='350px' />
        </div>
      </div>
    </div>
  )
}
