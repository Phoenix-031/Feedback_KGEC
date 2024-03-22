import mongoose, { model, Model, Schema, Types } from 'mongoose';


const teacherSchema = new Schema(
  {
    academicYear :{
        type: String,
        required: true
    },
    name :{
        type: String,
        required: true
    },
    branch :{
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const TeacherModel =
  mongoose.models.Teacher ?? model('Teacher', teacherSchema);
export default TeacherModel;
