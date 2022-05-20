import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      require: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    comment: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

export default module.exports = mongoose.model('Post', PostSchema);
