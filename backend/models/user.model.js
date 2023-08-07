// board.model.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    prefer: String,
    pwd: String,
    phone: String,
});

export const User = mongoose.model('User', userSchema);
