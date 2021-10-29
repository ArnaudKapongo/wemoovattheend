const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema.types.ObjectId -> users  dans monthly

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    months: [
    {
    
    date: {
     type: String
     },
    name: {
        type: String
        },
    autonomy: {
        type: Number
    },
    initiative: {
        type: Number
    },
    communication: {
        type: Number
    },
    rigor: {
        type: Number
    },
    punctuality: {
        type: Number
    },
    
    },
        
    ],
    
})