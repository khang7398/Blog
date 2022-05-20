import axios from 'axios';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Contexts';
import './login.css';

export default function Login() {
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { dispatch, isFetching }: any = useContext(Context);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START}' });
    try {
      const res = await axios.post('auth/login', {
        username: userRef.current?.value,
        password: passwordRef.current?.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />

        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
