import React from 'react';
import "./heroFields.css"
import {Link} from "react-router-dom";

const HeroFields = (props) => {

    const resetForm = (e) => {
        for (let i = 0; i < 5; i++) {
            e.target[i].value = "";
        }
    };

    const dataFromForm = (e) => {
        const nickname = e.target[0].value;
        const real_name = e.target[1].value;
        const superpowers = e.target[2].value;
        const catch_phrase = e.target[3].value;
        const origin_description = e.target[4].value;

        let data = {nickname, real_name, superpowers, catch_phrase, origin_description};
        Object.keys(data).forEach((key) =>
            (data[key] === null || data[key] === undefined || data[key] === "") && delete data[key]);

        return data;
    };

    const handleSubmit = (e) => {
        const params = dataFromForm(e);
        if( props.addHero) {
            props.addHero(params);
            resetForm(e);
        } else if (props.editHero){
            props.editHero(params);
        } else {
            window.alert("Something went wrong!")
        }
        e.preventDefault();
    };


    return (
        <div className="heroFields">
            <form className="form-style" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <input type="text" name="field1" className="field-style field-split align-left"
                               placeholder="Nickname" value={props.nickname} required/>
                        <input type="text" name="field2" className="field-style field-split align-right"
                               placeholder="Real name" value={props.real_name} required/>

                    </li>
                    <li>
                        <input type="text" name="field3" className="field-style field-full align-none"
                               placeholder="Superpowers" value={props.superpowers} required/>
                    </li>
                    <li>
                        <input type="text" name="field3" className="field-style field-full align-none"
                               placeholder="Catch phrase" value={props.catch_phrase}/>
                    </li>
                    <li>
                        <textarea name="field5" className="field-style" placeholder="Origin description"
                                  value={props.origin_description} required></textarea>
                    </li>
                    <li>
                        <input type="submit"
                               className={"buttons " + (props.addHero ? "btn-add" : "btn-edit")}
                               value={props.addHero ? "Add" : "Edit"}/>
                        <Link to='/'
                              className="buttons btn-cancel"
                              role="button">
                            &#8592; Cancel
                        </Link>
                    </li>
                </ul>
            </form>
        </div>
    )
};

export default HeroFields;