import React from 'react'
import TableSystem from '../Components/TableSystem'
import Menu from '../Components/Menu'
import '../css/Table.css'

function Home() {
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
                <Menu />
                < table className="table__system">
                    <thead>
                        <tr>
                            <th className="title__head">
                                <span className="table__tetx"> Название ИС </span>
                            </th>
                            <th className="title__head">
                                <span className="table__tetx">Сеть</span>
                            </th>
                            <th className="title__head">
                                <span className="table__tetx">Дата создания</span>
                            </th>
                            <th className="title__head">
                                <span className="table__tetx">Виджеты</span>
                            </th>
                        </ tr>
                    </thead>
                    <tbody>
                        {
                            items.map((obj) => {
                                return (
                                    <TableSystem {...obj} />
                                )
                            })
                        }
                    </ tbody>
                </ table>
            </div>
      
    )
}

export default Home
