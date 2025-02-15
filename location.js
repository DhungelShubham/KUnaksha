const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
    name: {
        type: String,
        default: "",
        //required: true
    },
    lon: {
        type: Number,
        //required: true,
        default: 0
    },
    lat:{
        type: Number,
        //required: true,
        default: 0 
    },
    alt:{
        type: Number,
        //required: true,
        default: 0
    }
})

locationSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

locationSchema.set('toJSON', {
    virtuals: true,
});

locationSchema.index({ name: "text"});

exports.Location = mongoose.model('Location', locationSchema);