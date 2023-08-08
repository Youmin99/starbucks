// board.model.js

import mongoose from 'mongoose';

const Author = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    prefer: String,
    pwd: String,
    phone: String,
    og: Author, //{ title: String, description: String, image: String },
});

export const User = mongoose.model('User', userSchema);
