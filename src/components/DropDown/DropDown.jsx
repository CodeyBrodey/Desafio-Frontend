import { useState } from "react"
import "./DropDown.css"
import PeopleInfo from "../PeopleInfo/PeopleInfo"
import PlanetInfo from "../PlanetInfo/PlanetInfo"
import SpeciesInfo from "../SpeciesInfo/SpeciesInfo"
import StarShipInfo from "../StarShipInfo/StarShipInfo"
import PropTypes from 'prop-types'
import pessoasImage from '../images/pessoas.png'
import planetasImage from '../images/planetas.png'
import especiesImage from '../images/especies.png'
import navesImage from '../images/naves.png'
import searchBarImage from '../images/search-bar.png'
import loadingImage from '../images/loading.png'


function DropDown(props) {
    /* PropTypes */
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
    let myPeopleData = props.pessoasData.results
    let myPlanetData = props.planetasData.results
    let mySpeciesData = props.especiesData.results
    let myStarShipData = props.navesData.results

    const DropDownTableInfo = [
       {Pessoas: ['Nome', 'Altura', 'Ano de Nascimento', 'Criado em', 'Editado em']},
       {Planetas: ['Nome', 'População', 'Clima', 'Criado em', 'Editado em']},
       {Espécies: ['Nome', 'Classificação', 'Designação', 'Criado em', 'Editado em']},
       {Naves: ['Nome', 'Modelo', 'Fabricante', 'Velocidade', 'Valor em créditos']}
    ]
    
    console.log(myStarShipData)
    

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
                        <span>{ props.pessoasData.count ? props.pessoasData.count : <img className="loading-image" src={loadingImage}></img>}</span>
                    </div>
                </button>

                <button className="DropDown-button DropDown-planetas not-active" onClick={ handleClick }>
                    <p className="DropDown-title">Planetas</p>
                    <div className="DropDown-info">
                        <img src={ planetasImage } alt="" />
                        <span>{ props.planetasData.count ? props.planetasData.count : <img className="loading-image" src={loadingImage}></img>}</span>
                    </div>
                </button>

                <button className="DropDown-button DropDown-especies not-active" onClick={ handleClick }>
                    <p className="DropDown-title">Espécies</p>
                    <div className="DropDown-info">
                        <img className="especies-image" src={ especiesImage } alt="" />
                        <span>{ props.especiesData.count ? props.especiesData.count : <img className="loading-image" src={loadingImage}></img>}</span>
                    </div>
                </button>

                <button className="DropDown-button DropDown-naves not-active" onClick={ handleClick }>
                    <p className="DropDown-title">Naves</p>
                    <div className="DropDown-info">
                        <img className="naves-image" src={ navesImage } alt="" />
                        <span>{ props.navesData.count ? props.navesData.count : <img className="loading-image" src={loadingImage}></img>}</span>
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
                        {myPeopleData !== undefined && infoTitle === 'Pessoas' ? 
                        myPeopleData.filter((value) => {
                            if(myPeopleData !== undefined) return value
                            return console.log('not working')
                        })
                        .map((item) => ( 
                            <PeopleInfo key={ item.name } names={item.name} height={item.height} birthyear={item.birth_year} created={item.created} edited={item.edited}/>
                        )) : console.log('not nice')
                        } 

                        {myPlanetData !== undefined && infoTitle === 'Planetas' ? 
                        myPlanetData.filter((value) => {
                            if(myPlanetData !== undefined) return value
                            return console.log('not working')
                        })
                        .map((item) => ( 
                            <PlanetInfo key={ item.name } names={item.name} population={item.population} climate={item.climate} created={item.created} edited={item.edited}/>
                        )) : console.log('not nice')
                        } 
                        
                        {mySpeciesData !== undefined && infoTitle === 'Espécies' ? 
                        mySpeciesData.filter((value) => {
                            if(mySpeciesData !== undefined) return value
                            return console.log('not working')
                        })
                        .map((item) => ( 
                            <SpeciesInfo key={ item.name } names={item.name} classification={item.classification} designation={item.designation} created={item.created} edited={item.edited}/>
                        )) : console.log('not nice')
                        } 
                        
                        {myStarShipData !== undefined && infoTitle === 'Naves' ? 
                        myStarShipData.filter((value) => {
                            if(myStarShipData !== undefined) return value
                            return console.log('not working')
                        })
                        .map((item) => ( 
                            <StarShipInfo key={ item.name } names={item.name} model={item.model} manufacturer={item.manufacturer} created={item.created} edited={item.edited}/>
                        )) : console.log('not nice')
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown
