import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from react-icons

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-4/5 border-x border-gray-600 p-3 min-h-screen">
      <div className="top flex items-center p-3 sticky top-0 bg-black backdrop-blur-3xl opacity-80 z-10">
        <div className="flex flex-1 items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Notifications</h2>
          <div className="settings mx-2">
            <span className="material-symbols-outlined text-white">
              settings
            </span>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="flex justify-between text-slate-500 text-lg py-3">
        <span
          onClick={() => handleTabClick('All')}
          className={`px-4 py-2 cursor-pointer ${activeTab === 'All' ? 'text-white border-b-2 border-blue-500' : 'bg-transparent hover:bg-gray-800'}`}
        >
          All
        </span>
        <span
          onClick={() => handleTabClick('Verified')}
          className={`px-4 py-2 cursor-pointer ${activeTab === 'Verified' ? 'text-white border-b-2 border-blue-500' : 'bg-transparent hover:bg-gray-800'}`}
        >
          Verified
        </span>
        <span
          onClick={() => handleTabClick('Mentions')}
          className={`px-4 py-2 cursor-pointer ${activeTab === 'Mentions' ? 'text-white border-b-2 border-blue-500' : 'bg-transparent hover:bg-gray-800'}`}
        >
          Mentions
        </span>
      </div>
      <div className="h-[1px] w-full bg-gray-700"></div>

      {/* Notifications */}
      <div className="mt-4">
        {/* Notification 1 */}
        <div className="flex items-start p-4 hover:bg-gray-800 cursor-pointer">
          <img
            src="https://pbs.twimg.com/profile_images/1688195378603278336/wZhJ6B8q_400x400.jpg"
            alt="Harsha Jain"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="flex flex-col">
            <span className="font-bold">Harsha Jain</span>
            <span className="text-sm text-gray-500">
              is on #100DaysOfChallenge.{' '}
              <a href="https://twitter.com/harsha_jain" className="text-blue-400 hover:underline">
                Visit profile
              </a>
            </span>
          </div>
        </div>

        {/* Notification 2 */}
        <div className="p-4 hover:bg-gray-800 cursor-pointer flex items-center">
          <FaLinkedin className="text-blue-700 mr-2" />
          <span className="text-sm text-gray-500">
            Follow Harsha on{' '}
            <a href="https://www.linkedin.com/in/harsha-jain-b1859b287/" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
          </span>
        </div>

        {/* Notification 3 */}
        <div className="p-4 hover:bg-gray-800 cursor-pointer flex items-center">
          <FaGithub className="text-gray-800 mr-2" />
          <span className="text-sm text-gray-500">
            Check out Harsha's{' '}
            <a href="https://github.com/Harshajain0611" className="text-blue-400 hover:underline">
              GitHub
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notifications;




