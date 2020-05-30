import React, { Component } from 'react';
import "./viewHero.css"

class ViewHero extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            heroData: null,
            isLoading: false,
            isEmpty: false
        }
    }

    componentDidMount = async () => {
        this.setState({
            isLoading: true,
        });

        const { id } = this.state;
        const res = await this.props.getHero(id);
        console.log(res);
        if (res.status === 200) { // try to catch 400
            this.setState({
                heroData: res.data.data,
                isLoading: false,
            })
        }
        else {
            this.setState({
                isEmpty: true,
                isLoading: false
            })
        }
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
                </div>
                : <h1>Loading...</h1>
                : <h1>Hero with id {this.state.id} not found!</h1>}
        </div>
    )};
}

export default ViewHero;