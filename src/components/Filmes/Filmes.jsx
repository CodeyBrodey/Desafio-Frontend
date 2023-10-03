import "./Filmes.css"

function Filmes() {

    return (
        <div className="filmes">
            <h2>Filmes</h2>
            <ul>
                <li>
                    <span className="title">Episódio IV: Uma Nova Esperança</span>
                    <span className="date">25/05/1977</span>
                </li>

                <li>
                    <span className="title">Episódio I: A Ameaça Fantasma</span>
                    <span className="date">19/05/1999</span>
                </li>

                <li>
                    <span className="title">Episódio V: O Império Contra-Ataca</span>
                    <span className="date">21/05/1980</span>
                </li>

                <li>
                    <span className="title">Episódio II: Ataque dos Clones</span>
                    <span className="date">16/05/2002</span>
                </li>
                
                <li>
                    <span className="title">Episódio VI: O Retorno de Jedi</span>
                    <span className="date">25/05/1983</span>
                </li>

                <li>
                    <span className="title">Episódio III: A Vingança dos Sith</span>
                    <span className="date">19/05/2005</span>
                </li>
            </ul>
        </div>
    )
}

export default Filmes
