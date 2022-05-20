import './posts.css';
import Post from '../post/Post';
import { IPosts } from '../../pages/home/Home';

interface PostsProps {
  posts: IPosts[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div className="posts">
      {posts.map((p: any, index: any) => (
        <div key={index}>
          <Post post={p} />
        </div>
      ))}
    </div>
  );
}
