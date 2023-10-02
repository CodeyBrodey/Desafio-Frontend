import './Dashboard.css'
import Filmes from '../Filmes/Filmes'


function Dashboard() {

    return (
        <main>
            <div className="main-top">
                <h1>Olá, User</h1>

                <div className='main-options'>
                    <img className='icon' src="/src/images/pesquisar.png" alt="" />
                    <div className="icon--notification">
                        <img className='icon' src="/src/images/notificacao.png" alt="" />
                    </div>
                    <div className='main-user'>
                        <img className='icon' src="/src/images/user.png" alt="" />
                        User
                    </div>
                </div>
            </div>
            <Filmes />
        </main>
    )
}

export default Dashboard