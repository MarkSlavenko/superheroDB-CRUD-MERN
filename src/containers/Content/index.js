import React, { Component } from 'react';
import './Content.css';
import HeroesList from "../../components/HeroesList";
import heroes from "../../tempDB";
import { Switch, Route } from 'react-router-dom'
import NotFound from "../../components/NotFound";
import AddHero from "../../components/AddHero";
import {connect} from 'react-redux';

class Content extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path='/' component={() => <HeroesList heroes={this.props.heroesList} />}/>
                    <Route path='/add' component={AddHero}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}


const mapStateToProps = store => {
    return {
        heroesList: store.content.heroesList
    }
};

export default connect(
    mapStateToProps
)(Content)