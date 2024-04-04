import { Route } from 'wouter'
import { NavbarComponent } from './components/NavbarComponent'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Portfolio } from './pages/Portfolio'
import { Contact } from './pages/Contact'
import { FooterApp } from './components/FooterApp'
import './app.css'

const App = () => {
  return (
    <div>
      <NavbarComponent/>
      <Route path='/' component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
      <FooterApp/>
    </div>
  )
}

export default App