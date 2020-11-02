import React, { useState, useEffect } from 'react'
import TableSystem from '../Components/Table/TableSystem'
import Menu from '../Components/Menu/Menu'
import '../Components/Table/Table.css'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'


function SystemList() {

    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const url = "http://localhost:5000/api/systems"

    const message = useMessage()
    const { request, error, clearError } = useHttp()

    const item = [
        {
            "_id": "5f9a8220fde9b209ac41293a",
            "name": "Руслан",
            "gateway": "172.31.11.722/29",
            "createdAt": "2020-10-29T08:49:36.017Z",
            "updatedAt": "2020-10-29T08:49:36.017Z",
            "__v": 0
        },
        {
            "_id": "5f9aabc1ebc9cb0d5019c7c1",
            "name": "wqdqw",
            "gateway": "qdwqdw",
            "createdAt": "2020-10-29T11:47:13.251Z",
            "updatedAt": "2020-10-29T11:47:13.251Z",
            "__v": 0
        }
    ]

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])



    const addSystem = async (request_type, formInfo) => {
        try {
            const data = await request(url, String(request_type), formInfo)
            message(data.message)
            setIsLoaded(false)
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }


    const changeVidjetStatus = async (_id, request_type) => {
        try {
            const data = await request(url, String(request_type), { _id })
            message(data.message)
            setIsLoaded(false)
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }



    return (
        <div className="system_list">
            <Menu PostInfoSystem={addSystem} />
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
                        item.map((obj) => {
                            return (
                                <TableSystem key={obj._id} {...obj} hanldeVidjet={changeVidjetStatus} />
                            )
                        })
                    }
                </ tbody>
            </ table>
        </div>

    )

}
export default SystemList
