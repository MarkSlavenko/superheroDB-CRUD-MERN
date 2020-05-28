import React, { Component } from 'react';
import './Content.css';
import HeroesList from "../../components/HeroesList";
import Pagination from "../../components/Pagination";

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <HeroesList/>
                <Pagination/>
            </div>
        );
    }
}

export default Content;