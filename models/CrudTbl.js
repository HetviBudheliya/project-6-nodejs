const mongoose = require('mongoose');

const crudScema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    discription : {
        type : String,
        required : true
    },
    poster: {
        type: String,
        required: true
    },
});

const crud = mongoose.model('crud',crudScema);
module.exports = crud;