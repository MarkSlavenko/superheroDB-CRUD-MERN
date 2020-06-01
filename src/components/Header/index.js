import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <h1>Superheroes Database</h1>
            <div className="navigation">
                <Link to='/'
                      className="button-nav"
                      role="button">
                    All heroes
                </Link>
                <Link to='/add'
                      className="button-nav"
                      role="button">
                    Add new hero
                </Link>
            </div>
        </header>
    );
}

export default Header;