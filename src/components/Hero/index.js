import React from 'react';
import PropTypes from 'prop-types';

const Hero = (props) => {

    const {number, nickname, image, data, del, edit} = props;

    return (
        <div className="hero">
        <p>{number} Hero nickname: {nickname}</p>
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