import React from 'react';
import "./addHero.css"
import HeroFields from "../../components/HeroFields";

const AddHero = (props) => {

    return (
        <div className="addHero">
            <h1>Please fill out the form.</h1>
            <HeroFields addHero={props.addHero}/>
        </div>
    )
};

export default AddHero;