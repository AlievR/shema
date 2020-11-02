import React, { useState } from 'react'
import '../css/Navbar.css'

function Navbar({ name, gateway, createdAt, uploadScheme }) {

    const [selectedFile, setselectedFile] = useState([])
    const [countFile, setcountFile] = useState(0)

    /*
        const onChangeHandler = event => {
            //это нужно вставить в сам render
            <button type="button" onClick={onClickHandler}>Загрузить</button>
            <label for="file" className="label__file">Выберите файлы</label>
                                <input type="file" name="file" className="file" onChange={onChangeHandler} />
            /////
            setselectedFile(event.target.files[0])
        }
    */

    const onClickHandler = () => {
        for (let file of selectedFile) {
            uploadScheme(file)
        }
    }


    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        setselectedFile(Array.from(e.dataTransfer.files));
        setcountFile(e.dataTransfer.files.length)
    }

    const onClickHandlerRemoveFile = async (id) => {
        let arr = await selectedFile.filter((system, index) => index != id)
        setselectedFile(arr)
        setcountFile(arr.length)
    }

    const fileSize = (size) => {
        console.log("Размер пошел")
        if (size === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }


    return (
        <div className="navbar__header">
            <div className="navbar__conatiner">
                <div className="navbar__content">
                    <div className="navbar__info">
                        <button className="menu_back">Вернуться назад</button>
                        <div className="navbar__upload">
                            <div className="navbar__subtile" >
                                <span className="subtile__text"><b>Информационная система:</b> {name}</span>
                                <span className="subtile__text"><b>IP-адрес сети:</b> {gateway}</span>
                                <span className="subtile__text"><b>Дата создания системы: </b> {createdAt}</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="menu__btn"
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={fileDrop}
                    >
                        {
                            countFile == 0
                                ?
                                <div className="drop__message">
                                    <div className="upload__icon" />
                                    Загрузите файлы в это окно
                                </div>
                                :
                                <div>

                                    <button
                                        className="upload__button"
                                        type="button"
                                        onClick={onClickHandler}
                                    >
                                        Загрузить {countFile} файла
                                         </button>
                                    {
                                        console.log(selectedFile),
                                        selectedFile.map((obj, id) => {
                                            return (
                                                <div key={id} className="file__status-bar">
                                                    <div className="file__atribut">
                                                        <div className="file__type-logo" />
                                                        <span className="file__name">{obj.name}</span>
                                                        <span className="file__size">({fileSize(obj.size)})</span>
                                                        <button
                                                            className="file__remove"
                                                            onClick={() => onClickHandlerRemoveFile(id)}>
                                                            <span className="file__krest">X</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar
