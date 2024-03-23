import mongoose, { model, Model, Schema, Types } from 'mongoose';


const teacherSchema = new Schema(
  {
    academicYear :{
        type: String,
        default: ""
    },
    name :{
        type: String,
        default: ""
    },
    branch :{
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

const TeacherModel =
  mongoose.models.Teacher ?? model('Teacher', teacherSchema);
export default TeacherModel;
