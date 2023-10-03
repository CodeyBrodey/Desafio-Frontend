import './Nav.css'
import logo from '../images/logo.webp'
import dashboardImage from '../images/dashboard.png'
import ajustesImage from '../images/ajustes.png'
import desconectarImage from '../images/desconectar.png'

function Nav() {

    return (
        <nav>
            <img className="nav-logo" src={logo} alt="" />
            <ul className="nav-options">
                <li>
                    <a className='nav-options-container' href="">
                        <img className="icon" src={ dashboardImage } alt="" />
                        Dashboard
                    </a>
                </li>

                <li>
                    <a className='nav-options-container' href="">
                        <img className="icon" src={ ajustesImage } alt="" />
                        Ajustes
                    </a>
                </li>

                <li>
                    <a className='nav-options-container nav-options--desconectar' href="">
                        <img className="icon" src={ desconectarImage } alt="" />
                        Desconectar
                    </a>
                </li>

                <li className='nav-box'>
                </li>
            </ul>
        </nav>
    )
} 

export default Nav