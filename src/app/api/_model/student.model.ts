import mongoose, { model, Model, Schema, Types } from 'mongoose';


const studentSchema = new Schema(
  {
    rollNo : {
        type: String,
        required: true
    },
    department :{
        type: String,
        required: true
    },
    yearOfStudy: {
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

const StudentModel =
  mongoose.models.Student ?? model('Student', studentSchema);
export default StudentModel;
