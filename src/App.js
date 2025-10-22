import React, { useState } from 'react';
import './App.css';
import ParticleBackground from './components/ParticleBackground';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <ParticleBackground />
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <AuthForm setUser={setUser} />
      )}
    </div>
  );
}

export default App;
