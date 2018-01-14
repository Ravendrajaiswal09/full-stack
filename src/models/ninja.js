import mongoose from 'mongoose';

const Schema = mongoose.Schema

const GeoSchema = new Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
})
const NinjaSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name field required']
    },
    rank: {
        type:String
    },
    available:{
        type:Boolean,
        default:false
    },
    geometry: GeoSchema
})

const Ninja = mongoose.model('ninja', NinjaSchema)

module.exports = Ninja;