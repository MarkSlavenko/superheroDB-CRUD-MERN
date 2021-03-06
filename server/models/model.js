const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Heroes = new Schema(
    {
        nickname: { type: String, required: true },
        real_name: { type: String, required: true },
        origin_description: { type: String, required: true },
        superpowers: { type: String, required: true },
        catch_phrase: { type: String},
        images: { type: [String]},
        // imgFile: { data: Buffer, contentType: String}
    },
    { timestamps: true },
);

module.exports = mongoose.model('superheroes', Heroes);