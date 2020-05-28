import React from 'react';
import PropTypes from 'prop-types';
import "./hero.css"

const Hero = (props) => {

    const {number, nickname, image, data, del, edit} = props;

    const addDefaultSrc = (ev)=> {
        ev.target.src = "./images/def.jpg"
    };

    return (
        <div className="hero">
            <div className="heroImage">
                <img onError={addDefaultSrc} src={image}/>
            </div>
            <div  className="heroNickname">{number}: {nickname}</div>
        </div>
    );
}

Hero.propTypes = {
    nickname : PropTypes.string.isRequired,
    image: PropTypes.string,
    data: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
}

export default Hero;