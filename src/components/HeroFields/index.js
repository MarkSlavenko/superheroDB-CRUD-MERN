import React, {Component} from 'react';
import "./heroFields.css"
import {Link} from "react-router-dom";

class HeroFields extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nickname: props.nickname,
            real_name: props.real_name,
            superpowers: props.superpowers,
            catch_phrase: props.catch_phrase,
            origin_description: props.origin_description
        }
    }

    handleChangeInputNickName = async event => {
        const nickname = event.target.value;
        this.setState({ nickname })
    };

    handleChangeInputRealName = async event => {
        const real_name = event.target.value;
        this.setState({ real_name })
    };

    handleChangeInputSuperpowers = async event => {
        const superpowers = event.target.value;
        this.setState({ superpowers })
    };

    handleChangeInputCatchPhrase = async event => {
        const catch_phrase = event.target.value;
        this.setState({ catch_phrase })
    };

    handleChangeInputOriginDescription = async event => {
        const origin_description = event.target.value;
        this.setState({ origin_description })
    };


    dataFromForm = () => {
        let {nickname, real_name, superpowers, catch_phrase, origin_description} = this.state;

        let data = {nickname, real_name, superpowers, catch_phrase, origin_description};
        Object.keys(data).forEach((key) =>
            (data[key] === null || data[key] === undefined || data[key] === "") && delete data[key]);

        return data;
    };

    handleSubmit = (e) => {
        const params = this.dataFromForm();
        if( this.props.addHero) {
            this.props.addHero(params);
            this.setState({
                nickname: '',
                real_name: '',
                superpowers: '',
                catch_phrase: '',
                origin_description: ''
            });
        } else if (this.props.editHero){
            this.props.editHero(params);
        } else {
            window.alert("Something went wrong!")
        }
        e.preventDefault();
    };

render () {
        return (
            <div className="heroFields">
                <div className="form-style">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="field1">
                            <span>Nickname</span>
                            <input type="text"
                                   name="field1"
                                   className="input-field"
                                   onChange={this.handleChangeInputNickName}
                                   value={this.state.nickname}
                                   required/>
                        </label>
                        <label htmlFor="field2">
                            <span>Real name</span>
                            <input type="text"
                                   name="field2"
                                   className="input-field"
                                   onChange={this.handleChangeInputRealName}
                                   value={this.state.real_name}
                                   required/>
                        </label>
                        <label htmlFor="field3">
                            <span>Superpowers</span>
                            <input type="text"
                                   name="field3"
                                   className="input-field"
                                   onChange={this.handleChangeInputSuperpowers}
                                   value={this.state.superpowers}
                                   required/>
                        </label>
                        <label htmlFor="field4">
                            <span>Catch phrase</span>
                            <input type="text"
                                   name="field3"
                                   className="input-field"
                                   onChange={this.handleChangeInputCatchPhrase}
                                   value={this.state.catch_phrase}/>
                        </label>
                        <label htmlFor="field5">
                            <span>Origin description</span>
                            <textarea name="field5"
                                      className="input-field"
                                      onChange={this.handleChangeInputOriginDescription}
                                      value={this.state.origin_description}
                                      rows="6"
                                      required></textarea>
                        </label>

                        <input type="submit"
                               className={"buttons " + (this.props.addHero ? "btn-add" : "btn-edit")}
                               value={this.props.addHero ? "Add" : "Edit"}/>
                        <Link to='/'
                              className="buttons btn-cancel"
                              role="button">
                            &#8592; Cancel
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
};

export default HeroFields;