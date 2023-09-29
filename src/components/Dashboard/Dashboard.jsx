import './Dashboard.css'

function Dashboard() {

    return (
        <main>
            <div className="main-top">
                <h1>Olá, User</h1>

                <div className='main-options'>
                    <img className='icon' src="/src/images/pesquisar.png" alt="" />
                    <img className='icon icon--notification' src="/src/images/notificacao.png" alt="" />
                    <div className='main-user'>
                        <img className='icon' src="/src/images/user.png" alt="" />
                        User
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dashboard