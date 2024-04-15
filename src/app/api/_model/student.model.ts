import mongoose, { model, Model, Schema, Types } from 'mongoose';


const studentSchema = new Schema(
  {
    rollNo : {
        type: String,
        default : ""
    },
    department :{
        type: String,
        default : ""
    },
    yearOfStudy: {
        type: String,
        default : ""
    },
    academicYear : {
        type: String,
        default : ""
    },
    pursuing : {
      type: String,
      default : ""
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

const StudentModel =
  mongoose.models.Student ?? model('Student', studentSchema);
export default StudentModel;
