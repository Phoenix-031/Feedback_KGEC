import mongoose, { model, Model, Schema, Types } from 'mongoose';


const questionSchema = new Schema(
  {
    questions:[
        {
            questionText : {
                type: String,
                required: true
            },
            answer : {
                type: String,
                required: true
            }
        }
    ]
  },
  {
    timestamps: true,
  }
);

const QuestionModel =
  mongoose.models.Question ?? model('Question', questionSchema);
export default QuestionModel;
