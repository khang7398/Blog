import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../context/Contexts';
import './write.css';

export default function Write() {
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState<any>(null);
  const { user }: any = useContext(Context);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      photo,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && <img className="writeImg" src={URL.createObjectURL(file)} alt="" />}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files?.[0])}
          />
          <input
            className="writeInput"
            placeholder="Title"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            onChange={(e) => setDesc(e.target.value)}
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
