import './PeopleInfo.css'

function PeopleInfo(props) {

    return (
        <>
            <div className='PeopleInfo-entries'>
                <span>{props.names}</span>
                <span>{props.height}</span>
                <span>{props.birthyear}</span>
                <span>{props.created}</span>
                <span>{props.edited}</span>
            </div>
            <hr className='DropDown-table-hr'/>
        </>
    )
}

export default PeopleInfo
