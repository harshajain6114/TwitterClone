import React from 'react';

const Messages = () => {
  return (
    <div className="w-full md:w-3/5 lg:w-2/5 border-x border-gray-600 p-3 min-h-screen">
      <div className="top flex items-center p-3 sticky top-0 bg-black backdrop-blur-3xl opacity-80 z-10">
        <div className="flex flex-1 items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Messages</h2>
          <div className="settings mx-2">
            <span className="material-symbols-outlined text-white">
              settings
            </span>
          </div>
        </div>
      </div>
      
      <div className="top flex items-center p-3 sticky top-0 bg-transparent backdrop-blur-3xl opacity-80 border-gray-600">
        <input
          type="text"
          placeholder="Select direct Messages"
          className="w-full py-2 px-4 rounded-full bg-transparent text-white placeholder-slate-300 border border-slate-300 focus:outline-none focus:ring-0"
        />
      </div>
      <div>
        <h2 className='font-bold text-4xl mt-40 ml-6'>
          Your messages appear here.
        </h2>
      </div>
      
      {/* Content goes here */}
    </div>
  );
}

export default Messages;
