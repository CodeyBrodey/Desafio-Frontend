import './Dashboard.css'
import Filmes from '../Filmes/Filmes'
import DropDown from '../DropDown/DropDown'
import { useState, useEffect } from 'react'
import pesquisarImage from '../images/pesquisar.png'
import notificacaoImage from '../images/notificacao.png'
import userImage from '../images/user.png'


function Dashboard() {
    let [pessoasData, setPessoasData] = useState([])
    let [planetasData, setPlanetasData] = useState([])
    let [especiesData, setEspeciesData] = useState([])
    let [navesData, setNavesData] = useState([])

    async function getData() {
        let pessoasRes = await fetch('https://swapi.dev/api/people')
        let planetasRes = await fetch('https://swapi.dev/api/planets')
        let especiesRes = await fetch('https://swapi.dev/api/species')
        let navesRes = await fetch('https://swapi.dev/api/starships')

        const pessoasData = await pessoasRes.json()
        const planetasData = await planetasRes.json()
        const especiesData = await especiesRes.json()
        const navesData = await navesRes.json()

        setPessoasData(pessoasData)
        setPlanetasData(planetasData)
        setEspeciesData(especiesData)
        setNavesData(navesData)

    }

    useEffect(() => { getData() }, [])


    return (
        <main>
            <div className="main-top">
                <h1>Olá, User</h1>

                <div className='main-options'>
                    <img className='icon' src={ pesquisarImage } alt="" />
                    <div className="icon--notification">
                        <img className='icon' src={ notificacaoImage } alt="" />
                    </div>
                    <div className='main-user'>
                        <img className='icon' src={ userImage } alt="" />
                        User
                    </div>
                </div>
            </div>
            <Filmes />
            <DropDown pessoasData={ pessoasData } planetasData={ planetasData } especiesData={ especiesData } navesData={ navesData } />
        </main>
    )
}

export default Dashboard