import React, { useState } from 'react';
import './AuthForm.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthForm = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleToggle = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsFlipping(false);
    }, 300);
  };

  return (
    <div className="auth-container">
      <div className={`auth-card ${isFlipping ? 'flipping' : ''}`}>
        <div className="glass-effect"></div>
        <div className="auth-content">
          {isLogin ? (
            <LoginForm setUser={setUser} onToggle={handleToggle} />
          ) : (
            <RegisterForm onToggle={handleToggle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
