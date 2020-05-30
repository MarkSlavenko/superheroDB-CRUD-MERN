import React from 'react';
import "./viewHero.css"

const ViewHero = (props) => {
    return (
        <h1>Info about hero with id: {props.id} and name: {props.name}</h1>
    );
};

export default ViewHero;