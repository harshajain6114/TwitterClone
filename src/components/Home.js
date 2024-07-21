import React from 'react';
import postImage from '/home/harsha/Desktop/hosting/hosteclone/src/assets/images/Screenshot from 2024-07-20 17-53-34.png'

const Home = () => {
  return (
    <div className="w-4/5 border-x border-gray-600 p-3 ml-1/5">
      <div className="top flex items-center p-3 sticky top-0 bg-black backdrop-blur-3xl opacity-80 z-10">
        <div className="left w-1/2 flex justify-center font-bold text-lg">For You</div>
        <div className="right w-1/2 flex justify-center font-bold text-lg">Following</div>
        <div className="settings mx-2 ml-auto">
          <span className="material-symbols-outlined text-white">settings</span>
        </div>
      </div>
      
      <div className="h-[1px] bg-gray-700 my-3"></div>
      
      <div className="whatishapp flex gap-4 my-3">
        <div className="img m-2 w-16 h-16 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src="https://pbs.twimg.com/profile_images/1688195378603278336/wZhJ6B8q_400x400.jpg" alt="Profile" />
        </div>
        <div className="w-full">
          <input className="w-full h-12 my-2 text-xl bg-black outline-none text-white rounded-lg px-3" type="text" placeholder="What is happening?!" />
          <div className="flex justify-between items-center">
            <div className="blueicons flex gap-2 text-blue-400 items-center">
              <span className="material-symbols-outlined cursor-pointer">image</span>
              <span className="material-symbols-outlined cursor-pointer">gif</span>
              <span className="material-symbols-outlined cursor-pointer">ballot</span>
              <span className="material-symbols-outlined cursor-pointer">sentiment_satisfied</span>
              <span className="material-symbols-outlined cursor-pointer">calendar_month</span>
              <span className="material-symbols-outlined cursor-pointer">pin_drop</span>
            </div>
            <div className="postbtn">
              <button className="bg-[#1d9bf0] px-6 mx-5 text-sm rounded-full py-2 text-white font-bold">Post</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-[1px] bg-gray-700 my-6"></div>
      
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
                  className="w-full h-auto object-cover rounded-xl mt-2" 
                  src={postImage} 
                  alt="Post content" 
                />
              </div>
              <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 cursor-pointer">
                  <span className="material-symbols-outlined">chat_bubble</span> 1k
                </div>
                <div className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 cursor-pointer">
                  <span className="material-symbols-outlined">repeat</span> 1k
                </div>
                <div className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 cursor-pointer">
                  <span className="material-symbols-outlined">Favorite</span> 1k
                </div>
                <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 cursor-pointer">
                  <span className="material-symbols-outlined">bar_chart</span> 1k
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


