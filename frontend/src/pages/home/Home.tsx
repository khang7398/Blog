import './home.css';
import Posts from '../../components/posts/Posts';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export interface IPosts {
  title: string;
  desc: string;
  username: string;
  categories: Array<''>;
  createdAt: Date;
  updatedAt: Date;
}

export default function Home() {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search ]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
