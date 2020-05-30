import React, { Component } from 'react';
import './Content.css';
import HeroesList from "../../components/HeroesList";
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import NotFound from "../../components/NotFound";
import AddHero from "../../components/AddHero";
import EditHero from "../../components/EditHero";
import ViewHero from "../../components/ViewHero";

class Content extends Component {

    constructor(props) {
        super(props)
    }

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
                        component={() => <EditHero/>}
                    />
                    <Route
                        exact
                        path='/hero/:id'
                        component={() => <ViewHero/>}
                    />
                    <Route exact path='/add' component={AddHero}/>
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