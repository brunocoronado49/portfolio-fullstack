import Csharp from '../assets/icons8-c.svg'
import Mysql from '../assets/icons8-mysql.svg'
import Dotnet from '../assets/icons8-net-framework.svg'
import Python from '../assets/icons8-python.svg'
import Ts from '../assets/icons8-mecanografiado.svg'
import './styles/homeContent.css'

export const HomeFooter = () => {
  return (
    <div className='home-footer'>
        <div className='techs-images'>
            <img src={Csharp} alt="csharp" />
            <img src={Dotnet} alt="dotnet" />
            <img src={Python} alt="pyton" />
            <img src={Ts} alt="ts" />
            <img src={Mysql} alt="mysql" />
        </div>
    </div>
  )
}
