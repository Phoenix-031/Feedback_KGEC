import mongoose, { model, Model, Schema, Types } from 'mongoose';


const alumniSchema = new Schema(
  {
    branch :{
        type: String,
        default : ""
    },
    batch :{
        type: String,
        default : ""
    },
    name :{
        type: String,
        default : ""
    },
    opportunities : {
      type :String,
      default : ""
    },
    alumniInfo : {
      name : {
        type : String,
        default : ""
      },
      organization : {
        type : String,
        default : ""
      },
      position : {
        type : String,
        default : ""
      },
      graduationYear : {
        type : String,
        default : ""
      },  
      suggestions : {
        type : String,
        default : ""
      } 
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

const AlumniModel =
  mongoose.models.Alumni ?? model('Alumni', alumniSchema);
export default AlumniModel;
