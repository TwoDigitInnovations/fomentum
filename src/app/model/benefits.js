'use strict';

const mongoose = require('mongoose');
const benefitsSchema = new mongoose.Schema({

    userType: {
        type: String,
        trim: true,
        require: true
    },

    companyName: {
        type: String,
        trim: true,
        require: true
    },
    discount: {
        type: String,
        trim: true,
        require: true
    },
    description: {
        type: String,
        trim: true,
        require: true
    },
}, {
    timestamps: true
});

benefitsSchema.set('toJSON', {
    getters: true,
    virtuals: false,
    transform: (doc, ret, options) => {
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.model('Benefits', benefitsSchema);