import mongoose, { model, Model, Schema, Types } from 'mongoose';


const employerSchema = new Schema(
  {
  },
  {
    timestamps: true,
  }
);

const EmployerModel =
  mongoose.models.Employer ?? model('Employer', employerSchema);
export default EmployerModel;
