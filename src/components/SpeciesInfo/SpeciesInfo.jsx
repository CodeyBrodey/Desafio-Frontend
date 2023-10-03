import './SpeciesInfo.css'

function SpeciesInfo(props) {

    return (
        <>
            <div className='SpeciesInfo-entries'>
                <span>{props.names}</span>
                <span>{props.classification}</span>
                <span>{props.designation}</span>
                <span>{props.created}</span>
                <span>{props.edited}</span>
            </div>
            <hr className='DropDown-table-hr'/>
        </>
    )
}

export default SpeciesInfo
