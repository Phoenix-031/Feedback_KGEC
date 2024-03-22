import mongoose, { model, Model, Schema, Types } from 'mongoose';


const alumniSchema = new Schema(
  {
  },
  {
    timestamps: true,
  }
);

const AlumniModel =
  mongoose.models.Alumni ?? model('Alumni', alumniSchema);
export default AlumniModel;
