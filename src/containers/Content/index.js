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

    page = 2;

    componentDidMount = async () => {
        this.props.onChangePage(this.page);
    };

    addHero = async (params) => {
        await api.insertHero(params).then(res => {
            window.alert(`Hero added successfully!`)
        })
    };

    deleteHero = (id , nickname) => {
        if (
            window.confirm(
                `Do you really want to delete the hero ${nickname} with id: ${id}?`,
            )
        ) {
            api.deleteHeroById(id);
            window.location.reload();
        }
    };


    render() {
        return (
                <div className="content">
                    {!this.props.isLoading ?
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={() => <HeroesList
                            delHero={this.deleteHero}
                            page={this.page}
                            heroes={this.props.heroesList} />}
                    />
                    <Route
                        exact
                        path='/page=:page'
                        component={() => <HeroesList
                            delHero={this.deleteHero}
                            page={this.page}
                            heroes={this.props.heroesList} />}
                    />
                    <Route
                        exact
                        path='/edit/:id'
                        component={(props) => <EditHero
                            getHero={api.getHeroById}
                            {...props}/>}
                    />
                    <Route
                        exact
                        path='/hero/:id'
                        component={(props) => <ViewHero
                            getHero={api.getHeroById}
                            delHero={this.deleteHero}
                            {...props}
                        />}
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