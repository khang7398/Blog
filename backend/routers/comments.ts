import express from 'express';
import Comment from '../models/Comment';

const router = express.Router();

router.post('/', async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const saveComment = await newComment.save();
    res.status(200).json(saveComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/postId/', async (req, res) => {
//   try {
//     const comment = await Comment.findById(req.query.id);
//     res.status(200).json(comment);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', async (req, res) => {
  try {
    const comment = await Comment.find();
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default module.exports = router;
