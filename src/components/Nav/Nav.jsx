import './Nav.css'

function Nav() {

    return (
        <nav>
            <img className="nav-logo" src="/src/images/logo.webp" alt="" />
            <ul className="nav-options">
                <li>
                    <a className='nav-options-container' href="">
                        <img className="icon" src="../src/images/dashboard.png" alt="" />
                        Dashboard
                    </a>
                </li>

                <li>
                    <a className='nav-options-container' href="">
                        <img className="icon" src="./src/images/ajustes.png" alt="" />
                        Ajustes
                    </a>
                </li>

                <li>
                    <a className='nav-options-container nav-options--desconectar' href="">
                        <img className="icon" src="../desconectar.png" alt="" />
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