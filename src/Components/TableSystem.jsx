import React from 'react'
import '../css/Table.css'

function TableSystem({id,name,network,date }) {
    return (
            <tr key={id} className="content__items">
                <td className="content__block">
                    <a className="scheme__name">
                        <span></span>
                        <span className="table__tetx">{name}</span>
                    </a>
                </td>
                <td className="content__block">
                    <span className="table__tetx">{network}</span>
                </td>
                <td className="content__block">
                    <span className="table__tetx">{date}</span>
                </td>
                <td className="content__block">
                    <button className="edit__btn"><i class="fas fa-pen" /></button>
                    <button className="del__btn"><i class="fa fa-trash" /></button>
                </td>
            </tr>
    )
}

export default TableSystem
