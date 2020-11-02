import React, { useState, useEffect } from 'react'
import axios from 'axios';
import TableSheme from '../Components/Table/TableSheme'
import Navbar from '../Components/Navbar/Navbar'
import '../Components/Table/Table.css'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'



function SystemInfo(props) {

    const [items, setItems] = useState([]);
    const [info_system, setInfo_system] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    const message = useMessage()
    const { request, error, clearError } = useHttp()

    const { id } = useParams()
    const url = `http://localhost:5000/api/uploads/${id}`
    const url_id = `http://localhost:5000/api/systems/${id}`

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    //Получение информации по системе
    useEffect(async () => {
        try {
            const system_data = await request(url_id, 'GET')
            setInfo_system(system_data)
        } catch (error) {
        }
    }, [isLoaded])

    console.log(info_system)

    //Получение списка всех файлов для конрктной системы
    useEffect(async () => {
        try {
            const data = await request(url, 'GET')
            setIsLoaded(true);
            setItems(data);
        } catch (error) {
            setIsLoaded(true);
        }
    }, [isLoaded])


    // Загрузка файла
    const uploadScheme = async (selectedFile) => {
        const data = new FormData()
        data.append('file', selectedFile, selectedFile.name)
        const req = await axios.post(url, data)
        setIsLoaded(false)
    }

    const dowlandScheme = (_id, name) => {
        axios({
            url: `http://127.0.0.1:5000/api/uploads/schema/${_id}`,
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', name);
            document.body.appendChild(link);
            link.click();
        });
        setIsLoaded(false)
    }

    const removeScheme = (_id, fileSrc) => {
        axios.delete(`http://127.0.0.1:5000/api/uploads/schema/${_id}`, {
            data: {
                fileSrc
            }
        });
        setIsLoaded(false)
    }

    const editScheme = async (_id, name) => {
        await axios.put(`http://127.0.0.1:5000/api/uploads/schema/${_id}`, { name })
        setIsLoaded(false)
    }


    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>

                <Navbar {...info_system}
                    uploadScheme={uploadScheme}
                />

                < table className="table__system">
                    <thead>
                        <tr>
                            <th className="title__head">
                                <span className="table__tetx"> Наименование файла </span>
                            </th>
                            <th className="title__head">
                                <span className="table__tetx">Размер</span>
                            </th>
                            <th className="title__head">
                                <span className="table__tetx">Автор</span>
                            </th>
                            <th className="title__head">
                                <span className="table__tetx">Дата изменения</span>
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
                                    <TableSheme key={obj._id} {...obj}
                                        dowlandScheme={dowlandScheme}
                                        removeScheme={removeScheme}
                                        editScheme={editScheme}
                                    />
                                )
                            })
                        }
                    </ tbody>
                </ table>
            </div>
        )
    }
}

export default SystemInfo
