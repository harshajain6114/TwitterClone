// src/components/Dashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Home from './Home';
import Explore from './Explore';
import Notifications from './Notifications';
import Messages from './Messages';
import Grok from './Grok';
import Communities from './Communities';
import Profile from './Profile';
import Left from './Left'; // Import the Left component

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'home':
        return <Home />;
      case 'explore':
        return <Explore />;
      case 'notifications':
        return <Notifications />;
      case 'messages':
        return <Messages />;
      case 'grok':
        return <Grok />;
      case 'communities':
        return <Communities />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex">
      <Sidebar onItemClick={handleItemClick} />
      <div className="flex-1 max-w-screen-lg mx-auto">
        {renderContent()}
      </div>
      <div className="w-1/6 hidden md:block">
        <Left />
      </div>
    </div>
  );
};

export default Dashboard;
