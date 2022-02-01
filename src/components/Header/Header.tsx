import React from "react";
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src='https://www.roscosmos.ru/media/files/identity/roscosmos-logo-main.png' className="App-logo"
             alt="logo"/>
    </header>

}

export default Header;