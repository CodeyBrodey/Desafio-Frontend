import { useEffect, useState } from "react"
import "./DropDown.css"
import TableInfo from "../TableInfo/TableInfo"
import PropTypes from 'prop-types'
import pessoasImage from '../images/pessoas.png'
import planetasImage from '../images/planetas.png'
import especiesImage from '../images/especies.png'
import navesImage from '../images/naves.png'
import searchBarImage from '../images/search-bar.png'


function DropDown(props) {
    DropDown.propTypes = {
        pessoasData: PropTypes.shape({
            count: PropTypes.number.isRequired,
            results: PropTypes.array.isRequired
        }).isRequired,
        planetasData: PropTypes.shape({
            count: PropTypes.number.isRequired
        }).isRequired,
        especiesData: PropTypes.shape({
            count: PropTypes.number.isRequired
        }).isRequired,
        navesData: PropTypes.shape({
            count: PropTypes.number.isRequired
        }).isRequired
    }
    

    const DropDownButtons = document.querySelectorAll('.DropDown-button')
    const [ infoTitle, setInfoTitle ] = useState(null)
    const DropDownActive = document.querySelector('.DropDown-active')
    let myData = props.pessoasData.results
    useEffect(() => {
        myData
    }, [myData])
    

    function handleClick(event) {
        const target = event.currentTarget

        DropDownButtons.forEach((button) => {
            button.classList.add('not-active')
            button.classList.contains('not-active') ? null : DropDownActive.style.display = 'block' 
        })
        target.classList.remove('not-active')
        
        setInfoTitle(target.querySelector('p').textContent)
        console.log(DropDownActive.style.display = 'block')
    }


    
    return (
        <div>
            <div className="DropDown-container">
                <button className="DropDown-button DropDown-pessoas not-active" onClick={ handleClick }>
                    <p className="DropDown-title">Pessoas</p>
                    <div className="DropDown-info">
                        <img src={ pessoasImage } alt="" />
                        <span>{ props.pessoasData.count }</span>
                    </div>
                </button>

                <button className="DropDown-button DropDown-planetas not-active" onClick={ handleClick }>
                    <p className="DropDown-title">Planetas</p>
                    <div className="DropDown-info">
                        <img src={ planetasImage } alt="" />
                        <span>{ props.planetasData.count }</span>
                    </div>
                </button>

                <button className="DropDown-button DropDown-especies not-active" onClick={ handleClick }>
                    <p className="DropDown-title">Espécies</p>
                    <div className="DropDown-info">
                        <img className="especies-image" src={ especiesImage } alt="" />
                        <span>{ props.especiesData.count }</span>
                    </div>
                </button>

                <button className="DropDown-button DropDown-naves not-active" onClick={ handleClick }>
                    <p className="DropDown-title">Naves</p>
                    <div className="DropDown-info">
                        <img className="naves-image" src={ navesImage } alt="" />
                        <span>{ props.navesData.count }</span>
                    </div>
                </button>
            </div>

            <div className="DropDown-active">
                <div className="DropDown-active-top">
                    <span>{ infoTitle }</span>
                    <img src={ searchBarImage } alt="" />
                </div>

                <hr />

                <div className="DropDown-table">
                    <div>
                        <span className="table-title">Nome</span>
                    </div>

                    <div>
                        <span className="table-title">Altura</span>
                    </div>

                    <div>
                        <span className="table-title">Ano de Nascimento</span>
                    </div>

                    <div>
                        <span className="table-title">Criado em</span>
                    </div>

                    <div>
                        <span className="table-title">Editado</span>
                    </div>
                </div>
                <hr className="DropDown-table-hr"/>
                <div className="DropDown-table-results">
                    <div>
                        {myData === undefined ? console.log('not nice') : 
                        myData.filter((value) => {
                            if(myData !== undefined) return value
                            return console.log('not working')
                        })
                        .map((item) => ( 
                            <TableInfo key={ item.name } names={item.name} height={item.height} birthyear={item.birth_year} created={item.created} edited={item.edited}/>
                        ))
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown
