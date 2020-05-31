import React from 'react';
import PropTypes from 'prop-types';
import "./hero.css"
import {Link} from "react-router-dom";

const Hero = (props) => {
    console.log(props);
    let {number, nickname, image, id} = props;


    const addDefaultSrc = (ev)=> {
        ev.target.src = "./images/def.jpg"
    };

    if (!image) {
        image = "";
    }

    return (
        <div className="hero">
            <div className="heroImage">
                <img onError={addDefaultSrc} src={image}/>
            </div>
            <div className="heroInfo">
                <div  className="heroNickname">{number}: {nickname}</div>
                <div  className="heroButtons">
                    <Link to={'/hero/' + id}
                          className="btn btn-view"
                          role="button">
                        View
                    </Link>
                    <Link to={'/edit/' + id}
                          className="btn btn-edit"
                          role="button">
                        Edit
                    </Link>
                    <Link onClick={() => props.delHero(id, nickname)}
                          className="btn btn-delete"
                          role="button">
                        Delete
                    </Link>
                </div>
            </div>
        </div>
    );
};

Hero.propTypes = {
    number: PropTypes.number.isRequired,
    nickname : PropTypes.string.isRequired,
    image: PropTypes.string,
    id: PropTypes.string.isRequired,
    delFunc: PropTypes.func.isRequired,
};

export default Hero;