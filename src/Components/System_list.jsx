import React from 'react'
import '../css/System_list.css'
import delete_icon from '../image/delete.png'

function System_list() {

    const items = [
        {
            id: 0,
            "name": "МФЦ",
            "network": "172.31.11.0/26",
            "date": "21-10-2020 20:36:20",

        },
        {
            id: 1,
            "name": "МФЦ",
            "network": "172.31.11.0/26",
            "date": "21-10-2020 20:36:20",
        },
        {
            id: 2,
            "name": "МФЦ",
            "network": "172.31.11.0/26",
            "date": "21-10-2020 20:36:20",
        },
        {
            id: 3,
            "name": "МФЦ",
            "network": "172.31.11.0/26",
            "date": "21-10-2020 20:36:20",
        },
        {
            id: 4,
            "name": "МФЦ",
            "network": "172.31.11.0/26",
            "date": "21-10-2020 20:36:20",
        },
        {
            id: 5,
            "name": "МФЦ",
            "network": "172.31.11.0/26",
            "date": "21-10-2020 20:36:20",
        },
        {
            id: 6,
            "name": "МФЦ",
            "network": "172.31.11.0/26",
            "date": "21-10-2020 20:36:20",
        }
    ]


    return (
        <div className="system_list">
            <div className="container">
                <div className="menu_system">
                    <button className="add__btn">Добавить</button>
                </div>
                <ul class="list-group">
                    <li class="list-group-name">
                        <span className="system__text"> Имя ИС</span>
                        <span className="system__text"> Сеть </span>
                        <span className="system__text"> Дата создания </span>
                        <span className="system__text"> Виджеты </span>
                    </li>
                    {
                        items.map((obj) => {
                            return (
                                <li key={obj.id} class="list-group-item">
                                    <div className="system__schemes">
                                        <a className="system__link" href={obj.id}>
                                            <span className="system__text"> {obj.name} </span>
                                            <span className="system__text"> {obj.network} </span>
                                            <span className="system__text"> {obj.date} </span>
                                        </a>
                                    </div>
                                    <div className="system__btn">
                                        <button className="edit__btn"><i class="fas fa-pen" /></button>
                                        <button className="del__btn"><i class="fa fa-trash" /></button>
                                    </div>
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        </div >
    )
}

export default System_list
