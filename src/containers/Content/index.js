import React, { Component } from 'react';
import './Content.css';
import HeroesList from "../../components/HeroesList";
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import NotFound from "../../components/NotFound";
import AddHero from "../../components/AddHero";
import EditHero from "../../components/EditHero";
import ViewHero from "../../components/ViewHero";
import api from '../../API'

class Content extends Component {

    addHero = async (params) => {
        await api.insertHero(params).then(res => {
            window.alert(`Hero added successfully!`)
        })
    };

    getHero = (id) => {
        const res = api.getHeroById(id);
        return(res);
    };



    render() {
        return (
            <div className="content">
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={() => <HeroesList heroes={this.props.heroesList} />}
                    />
                    <Route
                        exact
                        path='/edit/:id'
                        component={(props) => <EditHero {...props}/>}
                    />
                    <Route
                        exact
                        path='/hero/:id'
                        component={(props) => <ViewHero getHero={this.getHero}{...props}/>}
                    />
                    <Route exact path='/add' component={() => <AddHero addHero={this.addHero}/>}/>
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