import React, { useState, useEffect } from 'react'
import TableSystem from '../Components/TableSystem'
import Menu from '../Components/Menu'
import '../css/Table.css'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'


function SystemList() {

    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const url = "http://localhost:5000/api/systems"

    const message = useMessage()
    const { request, error, clearError } = useHttp()


    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])


    useEffect( async () => {
        try {
            const data = await request(url, 'GET')
            setIsLoaded(true);
            setItems(data);
        } catch (error) {
            setIsLoaded(true);
        }
    }, [isLoaded])


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


    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
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
                            items.map((obj) => {
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
}
export default SystemList
