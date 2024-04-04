import { HomeInfo } from '../components/HomeInfo'
import './styles/homeContent.css'

export const HomeContent = () => {
  return (
    <div className='home-content'>
        <h1>Hi, I am <strong id='name'>Francisco Rangel</strong></h1>
        <br />
        <p className='rol'>Software Developer</p>
        <br />
        <HomeInfo/>
    </div>
  )
}
