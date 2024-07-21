import React from 'react';

const Sidebar = ({ onItemClick }) => {
  return (
    <div className="w-72 p-3 border-none  min-h-screen sticky top-0">
      <ul className="space-y-1">
        <li 
          className="flex md:justify-end items-center gap-3 justify-end mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-4 py-2 hover:rounded-full border-none"
          onClick={() => onItemClick('home')}
        >
          <span className="text-3xl material-symbols-outlined">home</span>
          <span className="hidden md:block">Home</span>
        </li>
        <li 
          className="flex md:justify-end items-center gap-3 justify-end mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-4 py-2 hover:rounded-full border-none"
          onClick={() => onItemClick('explore')}
        >
          <span className="text-3xl material-symbols-outlined">explore</span>
          <span className="hidden md:block">Explore</span>
        </li>
        <li 
          className="flex md:justify-end items-center gap-3 justify-end mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-4 py-2 hover:rounded-full border-none"
          onClick={() => onItemClick('notifications')}
        >
          <span className="text-3xl material-symbols-outlined">notifications</span>
          <span className="hidden md:block">Notifications</span>
        </li>
        <li 
          className="flex md:justify-end items-center gap-3 justify-end mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-4 py-2 hover:rounded-full border-none"
          onClick={() => onItemClick('messages')}
        >
          <span className="text-3xl material-symbols-outlined">chat</span>
          <span className="hidden md:block">Messages</span>
        </li>
        <li 
          className="flex md:justify-end items-center gap-3 justify-end mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-4 py-2 hover:rounded-full border-none"
          onClick={() => onItemClick('grok')}
        >
          <span className="text-3xl material-symbols-outlined">check</span>
          <span className="hidden md:block">Grok</span>
        </li>
        <li 
          className="flex md:justify-end items-center gap-3 justify-end mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-4 py-2 hover:rounded-full border-none"
          onClick={() => onItemClick('communities')}
        >
          <span className="text-3xl material-symbols-outlined">group</span>
          <span className="hidden md:block">Communities</span>
        </li>
        <li 
          className="flex md:justify-end items-center gap-3 justify-end mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-4 py-2 hover:rounded-full border-none"
          onClick={() => onItemClick('profile')}
        >
          <span className="text-3xl material-symbols-outlined">person</span>
          <span className="hidden md:block">Profile</span>
        </li>
        <li 
          className="flex md:justify-end items-center gap-3 justify-end mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-4 py-2 hover:rounded-full border-none"
          onClick={() => onItemClick('more')}
        >
          <span className="text-3xl material-symbols-outlined">pending</span>
          <span className="hidden md:block">More</span>
        </li>
        <li>
          <div className="button w-full text-center my-4">
            <button className="hidden md:block bg-[#1d9bf0] px-20 text-xl w-6 rounded-full py-3 text-white">Post</button>
            <button className="md:hidden bg-[#1d9bf0] px-2 md:px-4 text-xl rounded-full py-1 md:py-3 text-white">
              <span className="material-symbols-outlined">edit</span>
            </button>
          </div>
        </li>
        <div className="userprofile w-full mt-4">
          <div className="item p-2 flex items-center gap-3 hover:bg-gray-800 cursor-pointer rounded-full border-none">
            <img className="w-12 h-12 rounded-full" src="https://pbs.twimg.com/profile_images/1688195378603278336/wZhJ6B8q_400x400.jpg" alt="profile" />
            <div className="text-sm text-white">
              Harsha Jain
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
