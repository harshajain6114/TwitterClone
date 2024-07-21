import React from 'react';

const Grok = () => {
  return (
    <div className="w-4/5 border-x border-gray-600 p-3">
      <div className="text-center">
        <video
          className="mx-auto mb-4"
          width="320"
          height="240"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://abs.twimg.com/sticky/videos/inapp_dark_square_v4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-4xl font-bold text-center text-white">Grok Something</div>
      <div className="text-xl font-semibold text-slate-400 mb-8 text-center">
        <p>Premium subscribers can now use our most advanced AI, Grok, on X.</p>
      </div>
      <div className="text-center">
        <button className="bg-blue-500 text-white rounded-full px-6 py-2 font-bold hover:bg-blue-600 mb-10">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Grok;


