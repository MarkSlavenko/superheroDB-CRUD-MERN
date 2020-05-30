import React from 'react';
import "./addHero.css"
import {Link} from "react-router-dom";

const AddHero = (props) => {

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

    const resetForm = (e) => {
        for (let i = 0; i < 5; i++) {
            e.target[i].value = "";
        }
    };

    const handleAddNewHero = (e) => {
        const params = dataFromForm(e);
        props.addHero(params);
        resetForm(e);
        e.preventDefault();
    };

    return (
        <div className="addHero">
            <h1>Please fill out the form.</h1>
            <form className="form-style" onSubmit={handleAddNewHero}>
                <ul>
                    <li>
                        <input type="text" name="field1" className="field-style field-split align-left"
                               placeholder="Nickname" required/>
                        <input type="text" name="field2" className="field-style field-split align-right"
                               placeholder="Real name" required/>

                    </li>
                    <li>
                        <input type="text" name="field3" className="field-style field-full align-none"
                               placeholder="Superpowers" required/>
                    </li>
                    <li>
                        <input type="text" name="field3" className="field-style field-full align-none"
                               placeholder="Catch phrase"/>
                    </li>
                    <li>
                        <textarea name="field5" className="field-style" placeholder="Origin description" required></textarea>
                    </li>
                    <li>
                        <input type="submit" className="buttons btn-add" value="Add"/>
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

export default AddHero;