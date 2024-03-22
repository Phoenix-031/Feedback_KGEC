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
    }
  },
  {
    timestamps: true,
  }
);

const ParentModel =
  mongoose.models.Employer ?? model('Parent', parentSchema);
export default ParentModel;
