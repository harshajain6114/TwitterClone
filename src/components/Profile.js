import React, { useState } from 'react';
import postImage from '/home/harsha/Desktop/hosting/hosteclone/src/assets/images/Screenshot from 2024-07-20 17-53-34.png';

const Profile = () => {
  const [isProfilePicEnlarged, setIsProfilePicEnlarged] = useState(false);

  const toggleProfilePic = () => {
    setIsProfilePicEnlarged(!isProfilePicEnlarged);
  };

  return (
    <div className="w-4/5 border-x border-gray-600 p-3">
        <div>Harsha Jain</div>
      <div className="bg-black text-white min-h-screen">
        <div className="relative">
          <img
            src="https://pbs.twimg.com/profile_banners/1685322688443949056/1703482807/600x200"
            alt="Banner"
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-32 left-6">
            <img
              src="https://pbs.twimg.com/profile_images/1688195378603278336/wZhJ6B8q_400x400.jpg"
              alt="Profile"
              className={`rounded-full border-4 border-black cursor-pointer transition-all duration-300 ${
                isProfilePicEnlarged ? 'w-64 h-64' : 'w-32 h-32'
              }`}
              onClick={toggleProfilePic}
            />
          </div>
        </div>
        <div className="h-[1px] bg-gray-700 my-4"></div>
        <div className="px-6 mt-16">
          <h1 className="text-xl font-bold">Harsha</h1>
          <p className="text-gray-400">@HarshaJain_0611</p>
          <p className="mt-2 text-base">Passionate Coder 🔥 | Continuous Learner 📚 | Tech Enthusiast 🤓 | Cricket Fan 🏏</p>
          <p className="mt-2 text-gray-400 text-base">
            📍 India
            <a 
              href="https://www.linkedin.com/in/harsha-jain-0611"
              className="text-blue-500 ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/harsha-jain-0611
            </a>
            Joined July 2023
          </p>
          <div className="flex mt-4 space-x-6">
            <div className="flex items-center hover:font-bold">
              <span className="font-bold text-base mr-2">210</span>
              <p className="text-gray-400 text-base">Following</p>
            </div>
            <div className="flex items-center hover:font-bold">
              <span className="font-bold text-base mr-2">205</span>
              <p className="text-gray-400 text-base">Followers</p>
            </div>
          </div>
        </div>
        <div className="px-6 mt-8">
          <div className="flex justify-between">
            <button className="text-base text-gray-400 flex-grow hover:font-bold">Posts</button>
            <button className="text-base text-gray-400 flex-grow hover:font-bold">Replies</button>
            <button className="text-base text-gray-400 flex-grow hover:font-bold">Highlights</button>
            <button className="text-base text-gray-400 flex-grow hover:font-bold">Articles</button>
            <button className="text-base text-gray-400 flex-grow hover:font-bold">Media</button>
            <button className="text-base text-gray-400 flex-grow hover:font-bold">Likes</button>
          </div>
        </div>
        <div className="h-[1px] bg-gray-700 my-8"></div>
        <div className="posts">
          <div className="post border border-gray-600 rounded-lg mb-4 p-4 bg-black">
            <div className="flex">
              <div className="img m-2 w-16 h-16 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src="https://pbs.twimg.com/profile_images/1688195378603278336/wZhJ6B8q_400x400.jpg" alt="Profile" />
              </div>
              <div className="content flex-1 ml-4">
                <span className="font-bold hover:underline cursor-pointer text-white">Harsha Jain</span>
                <span className="text-gray-500">@HarshaJain_0611 · 20 July</span>
                <div className="postimg mt-2 text-white">
                  Find me on Twitter:
                  <a 
                    href="https://x.com/HarshaJain_0611"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://x.com/HarshaJain_0611
                  </a>
                </div>
                <div className="post-content mt-2">
                  <img 
                    className="w-full h-auto object-cover rounded-none mt-2 border-slate-400"
                    src={postImage}
                    alt="Post content"
                  />
                </div>
                <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                  <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 cursor-pointer">
                    <span className="material-symbols-outlined">chat_bubble</span> 44
                  </div>
                  <div className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 cursor-pointer">
                    <span className="material-symbols-outlined">repeat</span> 3
                  </div>
                  <div className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 cursor-pointer">
                    <span className="material-symbols-outlined">Favorite</span> 225
                  </div>
                  <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 cursor-pointer">
                    <span className="material-symbols-outlined">bar_chart</span> 11k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


