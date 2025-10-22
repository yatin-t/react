import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <div className="user-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="user-info">
            <h2>Welcome, {user.name}! 🎉</h2>
            <p>{user.email}</p>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="info-card">
            <div className="info-icon">🚀</div>
            <h3>Getting Started</h3>
            <p>Your account has been successfully created. Start exploring our features!</p>
          </div>

          <div className="info-card">
            <div className="info-icon">⚡</div>
            <h3>Quick Actions</h3>
            <p>Access your personalized dashboard and manage your preferences.</p>
          </div>

          <div className="info-card">
            <div className="info-icon">🎯</div>
            <h3>Your Profile</h3>
            <p>Complete your profile to unlock all features and benefits.</p>
          </div>
        </div>

        <button onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
