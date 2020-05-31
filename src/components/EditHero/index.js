import React from 'react';
import "./editHero.css"

const EditHero = (props) => {

    return (
        <h1>Edit hero with id: {props.id} and name: {props.name}</h1>
    );
};

export default EditHero;