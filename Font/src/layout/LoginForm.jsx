import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Make sure to import useAuth from your custom hook

export default function LoginForm() {
  const { setUser } = useAuth(); // Assuming you have a custom hook named useAuth
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [language, setLanguage] = useState('THAI');
  const navigate = useNavigate();

  const handleChange = e => {
    setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8008/auth/login', {
        email: input.email,
        password: input.password
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      const userResponse = await axios.get('http://localhost:8008/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(userResponse.data);
      if (userResponse.data.role === 'ADMIN') {
        
        window.location = '/header';
      } else {
        window.location = '/header';
      }
    } catch(err) {
      setMessage('Login Failed'); // Display error message if login fails
      console.log(err.message);
    }
  };

  const handleLanguageChange = lang => {
    setLanguage(lang);
  };

  return (
    <div className="p-5 border rounded-lg shadow-lg mx-auto mt-5 bg-white w-4/6 min-w-[500px]">
      <div className="flex items-center justify-center w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
        <img
          src="https://img2.thaipng.com/20180607/qtt/kisspng-computer-icons-man-avatar-male-login-5b1946d5e0bfe0.7062621915283831899206.jpg"
          alt="Logo"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="text-3xl mb-5">{language === 'THAI' ? 'เข้าสู่ระบบ' : 'Login'}</div>
      <form className="flex flex-col gap-2 form-container" onSubmit={handleSubmit}>
        <label className="form-control">
          <span className="label-text">{language === 'THAI' ? 'อีเมล' : 'Email'}</span>
          <input
            type="text"
            className="input input-bordered border-black"
            name="email"
            value={input.email}
            onChange={handleChange}
            placeholder={language === 'THAI' ? 'กรุณากรอกอีเมล์' : 'Enter your email'}
          />
        </label>

        <label className="form-control">
          <span className="label-text">{language === 'THAI' ? 'รหัสผ่าน' : 'Password'}</span>
          <input
            type="password"
            className="input input-bordered border-black"
            name="password"
            value={input.password}
            onChange={handleChange}
            placeholder={language === 'THAI' ? 'กรุณากรอกรหัสผ่าน' : 'Enter your password'}
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn btn-success">
            {language === 'THAI' ? 'เข้าสู่ระบบ' : 'Login'}
          </button>
        </div>
        <div className="link3">
          <Link to="/Header">{language === 'THAI' ? 'กลับหน้าหลัก' : 'Back to home'}</Link>
        </div>
      </form>
      {message && <div className="text-red-500">{message}</div>}
    </div>
  );
}
