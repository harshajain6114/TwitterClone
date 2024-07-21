import React from 'react';

const Left = () => {
  return (
    <div className="fixed right-0 top-0 w-96 h-screen bg-black border-l border-gray-700 overflow-hidden">
      <div className="relative flex flex-col h-full">
        <div className="sticky top-0 bg-black backdrop-blur-3xl opacity-80 z-10 p-3">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-4 rounded-full bg-gray-800 text-white placeholder-gray-500"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          <div className="border border-slate-400 rounded-lg p-4 bg-black">
            <h2 className="text-xl font-bold text-white mb-2">Subscribe To Premium</h2>
            <p className="text-gray-300 mb-4">Subscribe to unlock new features and, if eligible, receive a share of ads revenue.</p>
            <button className="w-48 py-3 px-6 rounded-full bg-blue-500 text-white font-semibold text-lg hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </div>

          <div className="border border-slate-400 rounded-lg p-4 bg-black">
            <h2 className="text-xl font-bold text-white">What's Happening</h2>
            <ul className="space-y-3">
              <li>
                <div className="item p-3 hover:bg-gray-800 cursor-pointer px-3">
                  <div className="text-sm text-gray-200">Trending in India</div>
                  <div className="font-bold">#Divorce</div>
                  <div className="text-sm text-gray-200">40.2k Posts</div>
                </div>
              </li>
              <li>
                <div className="item p-3 hover:bg-gray-800 cursor-pointer px-3">
                  <div className="text-sm text-gray-200">Trending in Sports</div>
                  <div className="font-bold">#BCCI</div>
                  <div className="text-sm text-gray-200">17M Posts</div>
                </div>
              </li>
              <li>
                <div className="item p-3 hover:bg-gray-800 cursor-pointer px-3">
                  <div className="text-sm text-gray-200">Entertainment</div>
                  <div className="font-bold">#KatrinaKaif</div>
                  <div className="text-sm text-gray-200">40.2k Posts</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="sticky bottom-0 bg-black text-xs text-gray-500 px-3 py-5 space-y-1">
          <span className="hover:underline cursor-pointer mr-2">Terms of Service</span>
          <span className="hover:underline cursor-pointer mr-2">Privacy Policy</span>
          <span className="hover:underline cursor-pointer mr-2">Cookie Policy</span>
          <span className="hover:underline cursor-pointer mr-2">Accessibility</span>
          <span className="hover:underline cursor-pointer mr-2">Ads info</span>
          <span className="hover:underline cursor-pointer mr-2">More</span>
          <span className="hover:underline cursor-pointer mr-2">© 2024 X Corp.</span>
        </div>
      </div>
    </div>
  );
};

export default Left;

