import './TableInfo.css'

function TableInfo(props) {

    return (
        <>
            <div className='TableInfo-entries'>
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

export default TableInfo
