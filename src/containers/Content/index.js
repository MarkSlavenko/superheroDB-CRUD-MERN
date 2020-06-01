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
    setLoading,
    TotalPages,
    loadContent
} from '../../actions';

class Content extends Component {

    componentDidMount = async () => {
        this.props.loadContent();
        this.props.getTotalPages();
    };

    addHero = async (params) => {
        await api.insertHero(params).then(res => {
            window.alert(`Hero added successfully!`)
        });
        this.props.onChangePage(this.props.currentPage);
    };

    deleteHero = async (id , nickname) => {
        if (
            window.confirm(
                `Do you really want to delete the hero ${nickname} with id: ${id}?`,
            )
        ) {
            await api.deleteHeroById(id);
            this.props.onChangePage(this.props.currentPage);
        }
    };


    render() {
        return (
                <div className="content">
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={(props) => <HeroesList
                            delHero={this.deleteHero}
                            currentPage={this.props.currentPage}
                            heroes={this.props.heroesList}
                            totalPages={this.props.totalPages}
                            changePage={this.props.onChangePage}
                            isLoading={this.props.isLoading}
                            {...props}
                        />}
                    />
                    <Route
                        exact
                        path='/edit/:id'
                        component={(props) => <EditHero
                            getHero={api.getHeroById}
                            editHero={api.updateHeroById}
                            changePage={()=>this.props.onChangePage(this.props.currentPage)}
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
            </div>
        );
    }
}


const mapStateToProps = store => {
    return {
        heroesList: store.content.heroesList,
        isLoading: store.content.isLoading,
        totalPages: store.content.totalPages,
        currentPage: store.content.page
    }
};

function mapDispatchToProps(dispatch) {
    return ({
        onChangePage: (page) => {
            dispatch(changePage(page))
        },
        setLoading: (loading) => {
            dispatch(setLoading(loading))
        },
        getTotalPages: () => {
            dispatch(TotalPages())
        },
        loadContent: () => {
            dispatch(loadContent())
        }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content)