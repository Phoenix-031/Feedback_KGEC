import mongoose, { model, Model, Schema, Types } from 'mongoose';


const teacherSchema = new Schema(
  {
  },
  {
    timestamps: true,
  }
);

const TeacherModel =
  mongoose.models.Teacher ?? model('Teacher', teacherSchema);
export default TeacherModel;
