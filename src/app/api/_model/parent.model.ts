import mongoose, { model, Model, Schema, Types } from 'mongoose';


const parentSchema = new Schema(
  {
    education : {
        type: String,
        default: ''
    },
    occupation : {
        type: String,
        default: ''
    },
    relationship :{
        type: String,
        default: ''
    },
    name :{
        type: String,
        default: ''
    },
    academicYear : {
      type:String,
      default: ''
    },
    studentName :{
        type: String,
        default: ''
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
