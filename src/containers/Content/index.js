import React, { Component } from 'react';
import './Content.css';
import HeroesList from "../../components/HeroesList";
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import NotFound from "../../components/NotFound";
import AddHero from "../../components/AddHero";
import EditHero from "../../components/EditHero";
import ViewHero from "../../components/ViewHero";
import api from '../../API';

import {
    changePage,
    setLoading
} from '../../actions';

class Content extends Component {

    componentDidMount() {
        this.props.onChangePage(1);
    }

    addHero = async (params) => {
        await api.insertHero(params).then(res => {
            window.alert(`Hero added successfully!`)
        })
    };

    render() {
        return (
                <div className="content">
                    {!this.props.isLoading ?
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={() => <HeroesList heroes={this.props.heroesList} />}
                    />
                    <Route
                        exact
                        path='/page=:page'
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
                        component={(props) => <ViewHero setLoading={() => this.props.setLoading} getHero={api.getHeroById}{...props}/>}
                    />
                    <Route exact path='/add' component={() => <AddHero addHero={this.addHero}/>}/>
                    <Route component={NotFound} />
                </Switch>
                    : <h1>Loading...</h1>}
            </div>
        );
    }
}


const mapStateToProps = store => {
    return {
        heroesList: store.content.heroesList,
        isLoading: store.content.isLoading
    }
};

function mapDispatchToProps(dispatch) {
    return ({
        onChangePage: (page) => {
            dispatch(changePage(page))
        },
        setLoading: (loading) => {
            dispatch(setLoading(loading))
        }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content)