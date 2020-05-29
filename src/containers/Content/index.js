import React, { Component } from 'react';
import './Content.css';
import HeroesList from "../../components/HeroesList";
import heroes from "../../tempDB";
import { Switch, Route } from 'react-router-dom'
import NotFound from "../../components/NotFound";
import AddHero from "../../components/AddHero";

class Content extends Component {

    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path='/' component={() => <HeroesList heroes={heroes} />}/>
                    <Route path='/add' component={AddHero}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Content;