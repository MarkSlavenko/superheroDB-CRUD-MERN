import React, { Component } from 'react';
import "./viewHero.css"
import {Link} from "react-router-dom";

class ViewHero extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            heroData: null,
            isEmpty: false,
            isLoading: false
        }
    }

    componentDidMount () {
        this.setState({
            isLoading: true
        });

        const {id} = this.state;

        this.props.getHero(id).then(
            (res) => {
                if (res.status === 200) {
                    this.setState({
                        heroData: res.data.data,
                        isLoading: false
                    })
                }
            },
            (error) => {
                this.setState({
                    isEmpty: true,
                    isLoading: true
                })
            });
    };

    render() {
        let nickname, real_name, origin_description, superpowers, catch_phrase, images;
        this.state.heroData &&( { nickname, real_name, origin_description, superpowers, catch_phrase, images } = this.state.heroData);
    return (
        <div>
            {!this.state.isEmpty ?
                !this.state.isLoading ?
                <div  className="viewHero">
                    <h2><span className="title"> Hero nickname</span> {nickname}</h2>
                    <h2><span className="title">Hero real name</span>{real_name}</h2>
                    <h2><span className="title">Superpowers</span>{superpowers}</h2>
                    {catch_phrase && <h2><span className="title">Catch phrase</span>{catch_phrase}</h2>}
                    <h2><span className="title">Hero origin description</span>{origin_description}</h2>
                    <div className="viewHero-links">
                        <Link to={'/edit/' + this.state.id}
                              className="btn btn-edit"
                              role="button">
                            Edit
                        </Link>
                        <Link onClick={() => this.props.delHero(this.state.id, nickname)}
                              className="btn btn-delete"
                              role="button">
                            Delete
                        </Link>
                    </div>
                </div>
                : <h1>Loading...</h1>
                : <h1>Hero with id <span className="title">{this.state.id}</span> not found!</h1>}
        </div>
    )};
}

export default ViewHero;