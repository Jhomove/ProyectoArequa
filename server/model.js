const   mongoose = require('mongoose'),
        Schema   = mongoose.Schema

const user = new Schema({
        name         : String,
        email        : String,
        password     : String,
        registerDate : Date,
        notifications: {
            newFollower : Boolean,
            time        : Number
        },
        achievements : Array,
        friends      : Array,
        courses      : Array
})

const announcements = new Schema({
        title        : String,
        description  : String,
        img          : String,
        author       : {
            name  : String,
            email : String
        },
        created      : Date
})

const course = new Schema({
    title        : String,
    sections     : Array,
    created      : Date,
    author       : {
        name  : String,
        email : String
    },
    rating : {
        type    : Number,
        default : 0
    }
})

module.exports = {
    User          : mongoose.model('user', user),
    Announcements : mongoose.model('announcements', announcements),
    Course        : mongoose.model('course', course),
}