import mongoose, { model, Model, Schema, Types } from 'mongoose';


const employerSchema = new Schema(
  {
    nameOfCompany : {
        type: String,
        required: true
    },
    noepwd :{
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

const EmployerModel =
  mongoose.models.Employer ?? model('Employer', employerSchema);
export default EmployerModel;
