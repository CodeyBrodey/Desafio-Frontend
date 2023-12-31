import './PlanetInfo.css'

function PlanetInfo(props) {

    return (
        <>
            <div className='PlanetInfo-entries'>
                <span>{props.names}</span>
                <span>{props.population}</span>
                <span>{props.climate}</span>
                <span>{props.created}</span>
                <span>{props.edited}</span>
            </div>
            <hr className='DropDown-table-hr'/>
        </>
    )
}

export default PlanetInfo
