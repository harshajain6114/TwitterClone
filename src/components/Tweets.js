import React from 'react';

const Tweets = () => {
  return (
    <div className="w-3/5 border-x border-gray-600 p-3">
      <div className="top flex p-3 sticky top-0 bg-black backdrop-blur-3xl opacity-80">
        <div className="absolute w-16 h-1 rounded-full bg-blue-500 bottom-0 left-[19%] z-10"></div>
        <div className="left bg-red-3001 w-1/2 flex justify-center font-bold text-lg">For You</div>
        <div className="right bg-green-3001 w-1/2 flex justify-center font-bold text-lg">Following</div>
        <div className="settings mx-2">
          <span className="material-symbols-outlined">settings</span>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-700"></div>
      <div className="whatishapp flex gap-4 my-3">
        <div className="img m-2 w-16 rounded-full">
          <img className="rounded-full" src="https://pbs.twimg.com/profile_images/1688195378603278336/wZhJ6B8q_400x400.jpg" alt="" />
        </div>
        <div className="w-full">
          <input className="w-full h-7 my-2 text-xl bg-black outline-none text-white" type="text" placeholder="What is happening?!" />
          <div className="text-blue-400 flex items-center gap-1 w-full my-4">
            <span className="material-symbols-outlined">globe_asia</span>
            <span className="font-bold">Everyone can reply</span>
          </div>
          <div className="w-[90%] h-[0.2px] bg-gray-700 my-3"></div>
          <div className="flex justify-between">
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
      <div className="posts">
        <div className="post border-[1px] border-y-gray-600 border-x-0">
          <div className="flex">
            <div className="image m-4">
              <img className="w-16" src="https://pbs.twimg.com/profile_images/1697299503198646273/GTnwCVUC_x96.jpg" alt="" />
            </div>
            <div className="content my-3">
              <span className="font-bold hover:underline cursor-pointer text-white">BCCI</span> <span className="text-gray-500">@BCCI · 29 June </span>
              <div className="postimg m-2 ml-0">
                𝗖.𝗛.𝗔.𝗠.𝗣.𝗜.𝗢.𝗡.𝗦 🏆
                #TeamIndia 🇮🇳 HAVE DONE IT! 🔝👏
                ICC Men's T20 World Cup 2024 Champions 😍
                #T20WorldCup | #SAvIND
                <div className="postimg m-4 ml-0">
                  <img className="rounded-xl" src="https://pbs.twimg.com/media/GRQk26taYAAt5_k?format=jpg&name=small" alt="" />
                </div>
              </div>
              <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined">chat_bubble</span> 1k
                </div>
                <div className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined">repeat</span> 1k
                </div>
                <div className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                  <span className="material-symbols-outlined">Favorite</span> 1k
                </div>
                <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
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

export default Tweets;
