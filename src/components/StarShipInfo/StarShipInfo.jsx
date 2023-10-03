import './StarShipInfo.css'

function StarShipInfo(props) {

    return (
        <>
            <div className='StarShipInfo-entries'>
                <span>{props.names}</span>
                <span>{props.model}</span>
                <span>{props.manufacturer}</span>
                <span>{props.created}</span>
                <span>{props.edited}</span>
            </div>
            <hr className='DropDown-table-hr'/>
        </>
    )
}

export default StarShipInfo
