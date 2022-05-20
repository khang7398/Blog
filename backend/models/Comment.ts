import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    PostId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default module.exports = mongoose.model('Comment', CommentSchema);
