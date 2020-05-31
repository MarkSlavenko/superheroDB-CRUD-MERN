import React from 'react';
import "./heroesList.css";
import PropTypes from 'prop-types';
import Hero from "../Hero";
import Pagination from "../../components/Pagination";

const HeroesList = (props) => {

    let heroes = [];
    let heroesForShow;
    if (props.heroes) {
        heroes = props.heroes;

        try {
            heroesForShow = heroes.map( (hero, index) =>(
                <Hero
                    key = {"hero" + index}
                    id = {hero._id}
                    number = {(props.currentPage-1)*5 + index + 1}
                    nickname = {hero.nickname}
                    image = {hero.images ? hero.images[0] : null}
                    delHero={props.delHero}
                />
            ));
        } catch (e) {
            console.error('Error with heroes data!');
        }
    } else {
        heroesForShow = <h2>There are no heroes to display!</h2>
    }

    return (
        <div>
        {!props.isLoading ?
            <div className="heroes-list">
            {heroesForShow}
            <Pagination
                totalPages={props.totalPages}
                currentPage={props.currentPage}
                changePage={props.changePage}
            />
            </div>
            : <h1>Loading...</h1>}
            </div>
    )
};

HeroesList.propTypes = {
    heroes: PropTypes.array.isRequired
};

export default HeroesList;