import { useState } from "react"
import "./DropDown.css"
import PropTypes from 'prop-types'

function DropDown(props) {
    DropDown.propTypes = {
        pessoasData: PropTypes.shape({
            count: PropTypes.number.isRequired
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
                        <img src="/src/images/pessoas.png" alt="" />
                        <span>{ props.pessoasData.count }</span>
                    </div>
                </button>
                <button className="DropDown-button DropDown-planetas not-active" onClick={ handleClick }>
                    <p className="DropDown-title">Planetas</p>
                    <div className="DropDown-info">
                        <img src="/src/images/planetas.png" alt="" />
                        <span>{ props.planetasData.count }</span>
                    </div>
                </button>
                <button className="DropDown-button DropDown-especies not-active" onClick={ handleClick }>
                    <p className="DropDown-title">Espécies</p>
                    <div className="DropDown-info">
                        <img src="/src/images/especies.png" alt="" />
                        <span>{ props.especiesData.count }</span>
                    </div>
                </button>
                <button className="DropDown-button DropDown-naves not-active" onClick={ handleClick }>
                    <p className="DropDown-title">Naves</p>
                    <div className="DropDown-info">
                        <img src="/src/images/naves.png" alt="" />
                        <span>{ props.navesData.count }</span>
                    </div>
                </button>
            </div>

            <div className="DropDown-active">
                <div className="DropDown-active-top">
                    <span>{ infoTitle }</span>
                    <img src="/src/images/search-bar.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default DropDown
