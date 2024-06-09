const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: {
        type: String, 
        required: true
    }, 
    age: {
        type: Number, 
        required: true, 
    },
    grade: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        unique: true, 
        required: true,
        match: /.+\@.+\..+/
    }
}, { timestamps : true })

module.exports = mongoose.model('Student', studentSchema)