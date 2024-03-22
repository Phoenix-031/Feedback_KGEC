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
    }
  },
  {
    timestamps: true,
  }
);

const EmployerModel =
  mongoose.models.Employer ?? model('Employer', parentSchema);
export default EmployerModel;
