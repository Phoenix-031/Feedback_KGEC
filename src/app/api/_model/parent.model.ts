import mongoose, { model, Model, Schema, Types } from 'mongoose';


const parentSchema = new Schema(
  {
    education : {
        type: String,
        required: true
    },
    occupation : {
        type: String,
        required: true
    },
    relationship :{
        type: String,
        required: true
    },
    name :{
        type: String,
        required: true
    },
    studentName :{
        type: String,
        required: true
    },
    answers :[{
       question_id : mongoose.Schema.Types.ObjectId,
       answer: String
    }]
  },
  {
    timestamps: true,
  }
);

const ParentModel =
  mongoose.models.Parent ?? model('Parent', parentSchema);
export default ParentModel;
