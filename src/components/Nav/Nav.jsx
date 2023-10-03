import './Nav.css'
import dashboardImg from '/Users/User/Documents/Programming/GitHub/Desafio-Frontend/src/images/dashboard.png'
import ajustesImg from '../../images/ajustes.png'

function Nav() {

    return (
        <nav>
            <img className="nav-logo" src="/src/images/logo.webp" alt="" />
            <ul className="nav-options">
                <li>
                    <a className='nav-options-container' href="">
                        <img className="icon" src={ dashboardImg } alt="" />
                        Dashboard
                    </a>
                </li>

                <li>
                    <a className='nav-options-container' href="">
                        <img className="icon" src={ajustesImg} alt="" />
                        Ajustes
                    </a>
                </li>

                <li>
                    <a className='nav-options-container nav-options--desconectar' href="">
                        <img className="icon" src="/src/images/desconectar.png" alt="" />
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