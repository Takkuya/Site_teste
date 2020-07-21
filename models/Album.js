const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SchemaAlbum = new Schema({
    nome : {
        type : String,
        required : true
    },

    data : {
        type : Date,
        required : true
    },

    banda : {
        type : String,
        required : true
    },

    musicas : {
        type : [String],
        required : true
    },

})

module.exports = Album = mongoose.model('Album' , SchemaAlbum)