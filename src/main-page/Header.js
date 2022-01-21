import React from 'react';


function Header() {

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__menu-button">
                        <span></span>
                    </div>
                    <ul className="header__nav">
                        <li><a href="#">NEW</a></li>
                        <li><a href="#">КАТАЛОГ</a></li>
                        <li><a href="#">О НАС</a></li>
                    </ul>
                    <a className="header__logo"><img src="/assets/img/logo.svg" alt="" /></a>
                    <div className="header__lang">
                        <p>RU</p>
                        <p>UAH</p>
                    </div>
                    <div className="header__function">
                        <div className="header__function--wrapper">
                            <button><img src="/src/assets/img/cart.svg" alt="" /></button>
                            <button><img src="/src/assets/img/search.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;