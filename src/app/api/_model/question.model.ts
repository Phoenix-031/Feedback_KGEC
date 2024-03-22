import mongoose, { model, Model, Schema, Types } from 'mongoose';


const questionSchema = new Schema(
  {
    questionText : {
        type: String,
        required: true
    },
    answer : {
        type: String,
        default: ""
    },
    section :{
        type: String,
        required: true
    },
    entity : {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const QuestionModel =
  mongoose.models.Question ?? model('Question', questionSchema);
export default QuestionModel;
