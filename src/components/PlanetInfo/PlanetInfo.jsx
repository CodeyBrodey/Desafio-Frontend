import './PlanetInfo.css'

function PlanetInfo(props) {

    return (
        <>
            <div className='PlanetInfo-entries'>
                <span>{props.names}</span>
                <span>{props.height}</span>
                <span>{props.birthyear}</span>
                <span>{props.height}</span>
                <span>{props.edited}</span>
            </div>
            <hr className='DropDown-table-hr'/>
        </>
    )
}

export default PlanetInfo
