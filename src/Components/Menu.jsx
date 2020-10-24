import React, { useState } from 'react'
import '../css/Menu.css'

function Menu() {

    const [Score, SetScore] = useState(false);
    const [SystemName, SetSystemName] = useState("");
    const [SystemNetwork, SetSystemNetwork] = useState("");

    const OpenForm = () => {
        SetScore(true)
    };

    const CloseForm = () => {
        SetScore(false)
    };

    const PostInfoSystem = (e) => {
        e.preventDefault();
        console.log(e.target.system_name.value,e.target.system_network.value,);
        SetScore(false);
    }

    const handleNameChange = (e) => {

        SetSystemName(e.value)
    }

    const handleNetworkChange = (e) => {
        SetSystemNetwork(e.value)
    }


    return (
        <div className="menu_system">
            <button onClick={OpenForm} className="add__btn">Добавить</button>
            {
                Score ?
                    <div className="system__create">
                        <div className="system__info">
                            <span className="system__title">
                                Создание ИС
                            </span>
                            <button className="sys_cl"
                                onClick={CloseForm}>
                                <span className="system__close"></span>
                            </button>

                        </div>
                        <form className="Form__system"
                            onSubmit={PostInfoSystem}>
                            <ul className="group__items">
                                <li>
                                    <input className="system__name"
                                        type="text"
                                        name="system_name"
                                        placeholder="Название ИС"
                                        onChange={handleNameChange}
                                        value={SystemName} />
                                </li>
                                <li>
                                    <input className="system__name"
                                        type="text"
                                        name="system_network"
                                        placeholder="Сеть"
                                        onChange={handleNetworkChange}
                                        value={SystemNetwork} />
                                </li>
                                <li>
                                    <button className="system__btn"
                                        type="submit"
                                         > Добавить </button>
                                </li>
                            </ul>
                        </form>
                    </div>
                    : false
            }
        </div>
    )
}

export default Menu
