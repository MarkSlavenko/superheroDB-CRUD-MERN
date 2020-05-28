import React, { Component } from 'react';
import './Content.css';
import HeroesList from "../../components/HeroesList";
import Pagination from "../../components/Pagination";
import heroes from "../../tempDB";

class Content extends Component {

    render() {
        return (
            <div className="content">
                <HeroesList
                    heroes={heroes}
                />
                <Pagination/>
            </div>
        );
    }
}

export default Content;