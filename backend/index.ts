import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import Logging from '../backend/library/logging';
import authRoute from '../backend/routers/auth';
import userRoute from '../backend/routers/users';
import postRoute from '../backend/routers/posts';
import categoryRoute from './routers/categories';
import commentRoute from './routers/comments';

const MONDO_DB =
  // 'mongodb+srv://Blog_DB:Minhkhang2505@cluster0.7avdm.mongodb.net/blog?retryWrites=true&w=majority';
  'mongodb+srv://khang:Minhkhang2505@cluster0.pxnwq.mongodb.net/blog?retryWrites=true&w=majority';

dotenv.config();

mongoose
  .connect(MONDO_DB)
  .then(() => {
    Logging.info('Connected to mongoDB');
  })
  .catch((error) => {
    Logging.error('Unable to connect: ');
    Logging.error(error);
  });
const app = express();
const port: number = 4000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('file has been uploaded');
});

app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, '/images')));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/comments', commentRoute);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
