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
        author       : String,
        created      : Date
})

const content = new Schema({
    title        : String,
    sections     : Array,
    author       : String,
    created      : Date,
    rating       : Number
})

module.exports = {
        User          : mongoose.model('user', user),
        Announcements : mongoose.model('announcements', announcements),
        Content       : mongoose.model('content', content),
}