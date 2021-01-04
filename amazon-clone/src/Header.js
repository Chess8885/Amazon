import React from 'react'

function Header() {
    return (
        <div className='header'>
            <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
        <div className="header_search">

            <input className="header_searchInput" type="text" />

        </div>

        <div className="header_nav">
        <div className="header_option">
            <span className="header_optionLineOne">
            Hello, guest
            </span>
        </div>

        <div className="header_option">
            <span className="header_optionLineTwo">
            Sign In
            </span>
        </div>

        </div>

        <div className="header_option">
            <span className="header_optionLineOne">
           Returns
            </span>
        </div>

        <div className="header_option">
            <span className="header_optionLineTwo">
            Orders
            </span>
        </div>

        <div className="header_option">
            <span className="header_optionLineOne">
            Your
            </span>
        </div>

        <div className="header_option">
            <span className="header_optionLineTwo">
            Prime
            </span>
        </div>

        </div>
    );
}

export default Header