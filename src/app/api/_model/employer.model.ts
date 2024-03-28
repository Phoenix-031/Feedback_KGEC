import mongoose, { model, Model, Schema, Types } from 'mongoose';


const employerSchema = new Schema(
  {
    nameOfCompany : {
        type: String,
        default: ""
    },
    noepwd :{
        type: String,
        default: ""
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
