import mongoose, { model, Model, Schema, Types } from 'mongoose';


const studentSchema = new Schema(
  {
  },
  {
    timestamps: true,
  }
);

const StudentModel =
  mongoose.models.Student ?? model('Student', studentSchema);
export default StudentModel;
