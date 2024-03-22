import mongoose, { model, Model, Schema, Types } from 'mongoose';


const alumniSchema = new Schema(
  {
    branch :{
        type: String,
        required: true
    },
    batch :{
        type: String,
        required: true
    },
    name :{
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const AlumniModel =
  mongoose.models.Alumni ?? model('Alumni', alumniSchema);
export default AlumniModel;
