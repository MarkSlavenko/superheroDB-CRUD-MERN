import React from 'react';
import "./heroesList.css";
import PropTypes from 'prop-types';
import Hero from "../Hero";

const HeroesList = (props) => {

    let heroes = [];
    let heroesForShow;
    if (props.heroes) {
        heroes = props.heroes;

        try {
            heroesForShow = heroes.map( (hero, index) =>(
                <Hero
                    key = {"hero" + index}
                    number = {index + 1}
                    nickname = {hero.nickname}
                    image = {hero.images ? hero.images[0] : null}
                    data = {hero}
                    del = {props.del}
                    edit = {props.edit} />
            ));
        } catch (e) {
            console.error('Error with heroes data!');
        }
    } else {
        heroesForShow = <h2>There are no heroes to display!</h2>
    }

    return (
        <div className="heroes-list">
            {heroesForShow}
        </div>
    );
}

HeroesList.propTypes = {
    heroes: PropTypes.array.isRequired
}

export default HeroesList;