import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default module.exports = mongoose.model('Category', CategorySchema);
