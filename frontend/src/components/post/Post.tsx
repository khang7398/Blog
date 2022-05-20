import { Link } from 'react-router-dom';
import './post.css';

export default function Post({ post }: any) {
  const PF = 'http://localhost:4000/images/';
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat: any, index: any) => (
            <div key={index}>
              <span className="postCat">{cat.name}</span>
            </div>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
