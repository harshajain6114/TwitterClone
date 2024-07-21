import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Communities = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'Explore') {
      navigate('/explore-more'); // Redirect to explore more page
    }
  };

  return (
    <div className="w-4/5 border-x border-gray-600 p-3 min-h-screen flex flex-col">
      {/* Header */}
      <div className="top flex items-center p-3 sticky top-0 bg-black backdrop-blur-3xl opacity-80 z-10">
        <h2 className="text-2xl font-bold text-white flex-grow">Communities</h2>
        <div className="settings">
          <span className="material-symbols-outlined text-white">settings</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="my-3 border-b border-gray-700 pb-2">
        <div className="flex">
          <div className={`flex-1 flex justify-center ${activeTab === 'Home' ? 'border-b-2 border-blue-500' : ''}`}>
            <span
              className="text-white text-base px-4 py-2 bg-transparent hover:font-bold hover:bg-gray-800 cursor-pointer"
              onClick={() => handleTabClick('Home')}
            >
              Home
            </span>
          </div>
          <div className={`flex-1 flex justify-center ${activeTab === 'Explore' ? 'border-b-2 border-blue-500' : ''}`}>
            <span
              className="text-white text-base px-4 py-2 bg-transparent hover:font-bold hover:bg-gray-800 cursor-pointer"
              onClick={() => handleTabClick('Explore')}
            >
              Explore
            </span>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="flex-grow overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://pbs.twimg.com/community_banner_img/1508633632990109698/7lsODAUu?format=jpg&name=240x240"
            alt="Community"
            className="w-full rounded-lg border border-gray-600 transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://pbs.twimg.com/community_banner_img/1682292298313523200/LYlNK0y6?format=jpg&name=240x240"
            alt="Community"
            className="w-full rounded-lg border border-gray-600 transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://pbs.twimg.com/community_banner_img/1781435591013421056/OduukdwB?format=jpg&name=240x240"
            alt="Community"
            className="w-full rounded-lg border border-gray-600 transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://pbs.twimg.com/community_banner_img/1670124674184007681/G_kNFC7m?format=jpg&name=240x240"
            alt="Community"
            className="w-full rounded-lg border border-gray-600 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Explore More Link */}
      <div className="text-center my-4">
        <a
          href="/explore-more"
          className="text-blue-500 hover:underline"
        >
          Explore more...
        </a>
      </div>
    </div>
  );
};

export default Communities;




