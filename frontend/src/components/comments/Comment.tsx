import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../context/Contexts';

export default function Comment() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  const { user }: any = useContext(Context);

  // useEffect(() => {
  //   const getComs = async () => {
  //     const res = await axios.get(path + '/comments');
  //     setComments(res.data);
  //   };
  //   getComs();
  // }, [path]);

  useEffect(() => {
    const getComs = async () => {
      const res = await axios.get('/comments');
      setComments(res.data);
    };
    getComs();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post('/comments', {
        username: user.username,
        text,
      });
      setText(res.data);
    } catch (err) {}
  };
  return (
    <div>
      <br />
      <p>Comment</p>
      {comments.map((item: any, index: any) => (
        <div key={index}>
          <h2>{item.username}</h2>
          <p>{item.text}</p>
        </div>
      ))}

      <div></div>
      <hr />
      <form onSubmit={handleSubmit}>
        <textarea
          style={{ width: '100%', borderRadius: '5px' }}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button style={{ width: '74px', height: '52px' }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
