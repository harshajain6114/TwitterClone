import React from 'react';

const Happenings = () => {
  return (
    <div className="w-1/4 bg-black text-white p-3">
      <div className="mb-6">
        <div className="border border-white rounded-lg p-4 mt-4 bg-black">
          <h2 className="text-xl font-bold">What's Happening</h2>
          <ul className="space-y-3">
            <li>
              <div className="item p-3 hover:bg-black cursor-pointer px-3">
                <div className="text-sm text-gray-200">Trending in India</div>
                <div className="font-bold">#Divorce</div>
                <div className="text-sm text-gray-200">40.2k Posts</div>
              </div>
            </li>
            <li>
              <div className="item p-3 hover:bg-black cursor-pointer px-3">
                <div className="text-sm text-gray-200">Trending in Sports</div>
                <div className="font-bold">#BCCI</div>
                <div className="text-sm text-gray-200">17M Posts</div>
              </div>
            </li>
            <li>
              <div className="item p-3 hover:bg-black cursor-pointer px-3">
                <div className="text-sm text-gray-200">Entertainment</div>
                <div className="font-bold">#KatrinaKaif</div>
                <div className="text-sm text-gray-200">40.2k Posts</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="terms sticky top-[84vh] m-3 text-xs text-gray-500 px-3 py-5 space-y-1">
        <span className="hover:underline cursor-pointer mr-2">Terms of Service</span>
        <span className="hover:underline cursor-pointer mr-2">Privacy Policy</span>
        <span className="hover:underline cursor-pointer mr-2">Cookie Policy</span>
        <span className="hover:underline cursor-pointer mr-2">Accessibility</span>
        <span className="hover:underline cursor-pointer mr-2">Ads info</span>
        <span className="hover:underline cursor-pointer mr-2">More</span>
        <span className="hover:underline cursor-pointer mr-2">© 2024 X Corp.</span>
      </div>
    </div>
  );
};

export default Happenings;

