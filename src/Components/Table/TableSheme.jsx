import React, { useState,useRef,useEffect } from 'react'
import './Table.css'


function TableSheme({ _id, name, fileSrc, size, updatedAt, dowlandScheme, removeScheme, editScheme }) {


    const [clickEdit, setclickEdit] = useState(false)
    const [editText, seteditText] = useState("")


    const onClickHandlerDowland = () => {
        dowlandScheme(_id, name)
    }

    const onClickHandlerDelete = () => {
        removeScheme(_id, fileSrc)
    }

    const onClickHandlerEdit = () => {
        setclickEdit(true)
        seteditText(name)
    }

    const changeHandler = event => {
        seteditText(event.target.value)
    }
    
    const changeFocus = () => {
        editScheme(_id,editText)
        setclickEdit(false)
    }


    const handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            editScheme(_id,editText)
            setclickEdit(false)
        }
    }

    return (
        <tr key={_id} className="content__items">
            {
                clickEdit === false ?
                    <td className="content__block">
                        <span></span>
                        <span className="table__tetx">{name}</span>
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
                            value={editText} />
                    </td>
            }

            <td className="content__block">
                <span className="table__tetx">{size}</span>
            </td>
            <td className="content__block">
                <span className="table__tetx">А</span>
            </td>
            <td className="content__block">
                <span className="table__tetx">{updatedAt}</span>
            </td>
            <td className="content__block">
                <button type="button" class="btn btn-success btn-block" onClick={onClickHandlerDowland}>Скачать</button>
                <button type="button" class="btn btn-success btn-block" onClick={onClickHandlerDelete}>Удалить</button>
                <button type="button" class="btn btn-success btn-block" onClick={onClickHandlerEdit}>Перемен</button>
            </td>
        </tr>
    )
}

export default TableSheme
