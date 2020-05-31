import React, { Component } from 'react';
import "./editHero.css"
import HeroFields from "../HeroFields";

class EditHero extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            heroData: null,
            isEmpty: false,
            isLoading: false
        }
    }

    editHero = async (params) => {
        await this.props.editHero(this.state.id, params).then(res => {
            this.props.changePage();
            window.alert(`Hero successfully edited!`);
        })
    };

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
                        <div  className="editHero">
                            <HeroFields
                                nickname = {nickname}
                                real_name = {real_name}
                                origin_description = {origin_description}
                                superpowers = {superpowers}
                                catch_phrase = {catch_phrase}
                                editHero={this.editHero}
                            />
                        </div>
                        : <h1>Loading...</h1>
                    : <h1>Hero with id <span className="title">{this.state.id}</span> not found!</h1>}
            </div>
        )};
}

export default EditHero;