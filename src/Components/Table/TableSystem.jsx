import React, { useState } from 'react'
import './Table.css'
import { Link } from 'react-router-dom'

function TableSystem({ _id, name, gateway, createdAt, hanldeVidjet }) {

    const [clickEdit, setclickEdit] = useState(false)
    const [editText, seteditText] = useState({
        name: name, gateway: gateway
    })


    const editHandler = () => {
        setclickEdit(true)
    }

    const deleteHandler = () => {
        hanldeVidjet(_id, 'DELETE')
    }

    const changeHandler = event => {
        seteditText(event.target.value)
    }
    
    const changeFocus = () => {
       
        setclickEdit(false)
    }


    const handleKeyPress = (event) => {
        if (event.key == 'Enter') {
         
            setclickEdit(false)
        }
    }

    return (
        <tr key={_id} className="content__items">
            {
                clickEdit === false ?
                    <td className="content__block">
                        <Link to={{
                            pathname: `/system/${_id}`,
                            name: name,
                            gateway: gateway,
                            createdAt: createdAt
                        }} >
                            <span></span>
                            <span className="table__tetx">{name}</span>
                        </Link>
                    </td>
                    :
                    <td className="content__block">
                        <input
                            className="table__tetx"
                            type="text"
                            name="name"
                            onBlur={changeFocus}
                            onChange={changeHandler}
                            onKeyPress={handleKeyPress}
                            value={editText.name} />
                    </td>
            }

            <td className="content__block">
                <span className="table__tetx">{gateway}</span>
            </td>
            <td className="content__block">
                <span className="table__tetx">{createdAt}</span>
            </td>
            <td className="content__block">
                <button
                    className="edit__btn"
                    onClick={editHandler}
                >
                    <i class="fas fa-pen" />
                </button>
                <button
                    className="del__btn"
                    onClick={deleteHandler}
                >
                    <i class="fa fa-trash" />
                </button>
            </td>
        </tr>
    )
}

export default TableSystem
