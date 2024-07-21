import React, { useState } from 'react';

const Explore = () => {
  const [activeTab, setActiveTab] = useState('forYou');

  const renderContent = () => {
    switch (activeTab) {
      case 'forYou':
        return <div>
           <div className="space-y-4 mt-4">
            <div className="p-4 hover:bg-gray-800 cursor-pointer">
              <div className="text-xs text-gray-500">Chennai Super Kings · Trending</div>
              <div className="font-bold text-white">#RuturajGaikwad</div>
              <div className="text-xs text-gray-500">27.8K posts</div>
            </div>
          </div>
          <div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Entertainment · Trending</div>
  <div className="font-bold text-white">#ElvishYadav</div>
  <div className="text-xs text-gray-500">127K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Sports · Trending</div>
  <div className="font-bold text-white">#IPL2025</div>
  <div className="text-xs text-gray-500">Trending with KL Rahul, #RishabhPant</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Entertainment · Trending</div>
  <div className="font-bold text-white">#ShehnaazGill</div>
  <div className="text-xs text-gray-500">29.4K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Entertainment · Trending</div>
  <div className="font-bold text-white">#KeerthySuresh</div>
  <div className="text-xs text-gray-500">8,127 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in India</div>
  <div className="font-bold text-white">#FearSong</div>
  <div className="text-xs text-gray-500">21.4K posts</div>
</div>

        </div>;
      case 'trending':
        return <div>
          <div className="p-4">
  <div className="text-lg font-bold text-white mb-4">Trending in India</div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">1 · Events · Trending</div>
    <div className="font-bold text-white">गुरु बिन</div>
    <div className="text-xs text-gray-500">21.4K posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">2 · Politics · Trending</div>
    <div className="font-bold text-white">भारतीय राष्ट्रीय कांग्रेस</div>
    <div className="text-xs text-gray-500">2,391 posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">3 · Events · Trending</div>
    <div className="font-bold text-white">कोटि प्रणाम</div>
    <div className="text-xs text-gray-500">1,689 posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">4 · Events · Trending</div>
    <div className="font-bold text-white">गुरु कृपा</div>
    <div className="text-xs text-gray-500">5,230 posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">5 · Events · Trending</div>
    <div className="font-bold text-white">गुरु देव</div>
    <div className="text-xs text-gray-500">11.9K posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">6 · Trending</div>
    <div className="font-bold text-white">Population</div>
    <div className="text-xs text-gray-500">125K posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">7 · Trending</div>
    <div className="font-bold text-white">सूर्य देव</div>
    <div className="text-xs text-gray-500">7,679 posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">8 · Events · Trending</div>
    <div className="font-bold text-white">गुरु ब्रह्मा</div>
    <div className="text-xs text-gray-500">8,970 posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">9 · Events · Trending</div>
    <div className="font-bold text-white">व्यास पूर्णिमा</div>
    <div className="text-xs text-gray-500">1,525 posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">10 · Events · Trending</div>
    <div className="font-bold text-white">प्रथम गुरु</div>
    <div className="text-xs text-gray-500">5,969 posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">11 · Events · Trending</div>
    <div className="font-bold text-white">गुरु गोविंद</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">12 · Events · Trending</div>
    <div className="font-bold text-white">सच्चा गुरु</div>
    <div className="text-xs text-gray-500">95.1K posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">13 · Only on X · Trending</div>
    <div className="font-bold text-white">भीम आर्मी</div>
    <div className="text-xs text-gray-500">4,170 posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">14 · Politics · Trending</div>
    <div className="font-bold text-white">अखिल भारतीय कांग्रेस कमेटी</div>
    <div className="text-xs text-gray-500">1,292 posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">15 · Trending</div>
    <div className="font-bold text-white">Justice4SSR Movement Of Masses</div>
    <div className="text-xs text-gray-500">6,374 posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">16 · Events · Trending</div>
    <div className="font-bold text-white">चरण स्पर्श</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">17 · Trending</div>
    <div className="font-bold text-white">कबीर सागर</div>
    <div className="text-xs text-gray-500">5,683 posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">18 · Events · Trending</div>
    <div className="font-bold text-white">गुरु ज्ञान</div>
    <div className="text-xs text-gray-500">38.4K posts</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">19 · Events · Trending</div>
    <div className="font-bold text-white">ज्ञान रूपी प्रकाश</div>
  </div>

  <div className="p-4 hover:bg-gray-800 cursor-pointer">
    <div className="text-xs text-gray-500">20 · Trending</div>
    <div className="font-bold text-white">लालजी टंडन</div>
  </div>
</div>

        </div>;
      case 'news':
        return <div>
          <div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Politics</div>
  <div className="font-bold">AIDS</div>
  <div className="text-xs text-gray-500">17.4K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Politics</div>
  <div className="font-bold">Low IQ</div>
  <div className="text-xs text-gray-500">21.7K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Politics · Trending</div>
  <div className="font-bold">Kerala</div>
  <div className="text-xs text-gray-500">31.2K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Politics</div>
  <div className="font-bold">Hillary</div>
  <div className="text-xs text-gray-500">216K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Politics</div>
  <div className="font-bold">Navy</div>
  <div className="text-xs text-gray-500">48.2K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Business & finance</div>
  <div className="font-bold">#OKXSummer</div>
  <div className="text-xs text-gray-500">5,045 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Politics</div>
  <div className="font-bold">#insiders</div>
  <div className="text-xs text-gray-500">6,822 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Business & finance</div>
  <div className="font-bold">#ULTI</div>
  <div className="text-xs text-gray-500">2,982 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Politics</div>
  <div className="font-bold">El Salvador</div>
  <div className="text-xs text-gray-500">36.4K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in News</div>
  <div className="font-bold">Nate</div>
  <div className="text-xs text-gray-500">45K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Politics</div>
  <div className="font-bold">Christie</div>
  <div className="text-xs text-gray-500">13.6K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Politics</div>
  <div className="font-bold">Bukele</div>
  <div className="text-xs text-gray-500">35.6K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Politics</div>
  <div className="font-bold">Michigan</div>
  <div className="text-xs text-gray-500">358K posts</div>
</div>

        </div>;
      case 'sports':
        return <div>
<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Chennai Super Kings · Trending</div>
  <div className="font-bold">#RuturajGaikwad</div>
  <div className="text-xs text-gray-500">28.2K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Sports · Trending</div>
  <div className="font-bold">#RishabhPant</div>
  <div className="text-xs text-gray-500">Trending with KL Rahul, IPL 2025</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Sports · Trending</div>
  <div className="font-bold">Shami</div>
  <div className="text-xs text-gray-500">10.4K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">#Boxing</div>
  <div className="text-xs text-gray-500">9,092 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">Team USA</div>
  <div className="text-xs text-gray-500">104K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">Olympic</div>
  <div className="text-xs text-gray-500">67.1K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Sports · Trending</div>
  <div className="font-bold">#OnThisDay</div>
  <div className="text-xs text-gray-500">10.2K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">Mike Tyson</div>
  <div className="text-xs text-gray-500">2,758 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">#TNAWrestling</div>
  <div className="text-xs text-gray-500">5,304 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">Caitlin</div>
  <div className="text-xs text-gray-500">61.8K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">Reese</div>
  <div className="text-xs text-gray-500">59.5K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">Angel</div>
  <div className="text-xs text-gray-500">271K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">South Sudan</div>
  <div className="text-xs text-gray-500">92.4K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">Astros</div>
  <div className="text-xs text-gray-500">18.7K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">WNBA</div>
  <div className="text-xs text-gray-500">121K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">Mariners</div>
  <div className="text-xs text-gray-500">9,662 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">#Slammiversary</div>
  <div className="text-xs text-gray-500">6,068 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">Joe Hendry</div>
  <div className="text-xs text-gray-500">4,975 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">#AEWCollision</div>
  <div className="text-xs text-gray-500">21.1K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Sports</div>
  <div className="font-bold">#Dodgers</div>
  <div className="text-xs text-gray-500">6,005 posts</div>
</div>

        </div>;
      case 'entertainment':
        return <div>
          <div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending</div>
  <div className="font-bold">Punjabi</div>
  <div className="text-xs text-gray-500">5,389 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Entertainment</div>
  <div className="font-bold">Deadpool 2</div>
  <div className="text-xs text-gray-500">13.3K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Music</div>
  <div className="font-bold">Camila</div>
  <div className="text-xs text-gray-500">29.3K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Music</div>
  <div className="font-bold">CONGRATULATIONS TAEHYUNG</div>
  <div className="text-xs text-gray-500">18.9K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Entertainment</div>
  <div className="font-bold">#Oppenheimer</div>
  <div className="text-xs text-gray-500">1,218 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Anupamaa · Trending</div>
  <div className="font-bold">#AnujKapadia</div>
  <div className="text-xs text-gray-500">7,622 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Entertainment · Trending</div>
  <div className="font-bold">Sonu Sood</div>
  <div className="text-xs text-gray-500">79K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Korean music</div>
  <div className="font-bold">#SEUNGKWAN_onTtakdae</div>
  <div className="text-xs text-gray-500">3,536 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Music</div>
  <div className="font-bold">Melanie Martinez</div>
  <div className="text-xs text-gray-500">37K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Music</div>
  <div className="font-bold">Tidal</div>
  <div className="text-xs text-gray-500">30.1K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Music</div>
  <div className="font-bold">Jaejoong</div>
  <div className="text-xs text-gray-500">22.3K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in K-pop</div>
  <div className="font-bold">#HONGJOONG</div>
  <div className="text-xs text-gray-500">11.7K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Fashion & beauty</div>
  <div className="font-bold">Bella</div>
  <div className="text-xs text-gray-500">286K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Music</div>
  <div className="font-bold">MY ATEEZ</div>
  <div className="text-xs text-gray-500">15.1K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Music</div>
  <div className="font-bold">Dr. Dre</div>
  <div className="text-xs text-gray-500">2,387 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Music</div>
  <div className="font-bold">chungha</div>
  <div className="text-xs text-gray-500">1,149 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Anupamaa · Trending</div>
  <div className="font-bold">#GauravKhanna</div>
  <div className="text-xs text-gray-500">4,532 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Music</div>
  <div className="font-bold">#WHObyJimin</div>
  <div className="text-xs text-gray-500">4,886 posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Music</div>
  <div className="font-bold">#LoveMeAgain700Million</div>
  <div className="text-xs text-gray-500">16.3K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Music</div>
  <div className="font-bold">Lauren</div>
  <div className="text-xs text-gray-500">29.3K posts</div>
</div>

<div className="p-4 hover:bg-gray-800 cursor-pointer">
  <div className="text-xs text-gray-500">Trending in Music</div>
  <div className="font-bold">#MostRequestedLive</div>
  <div className="text-xs text-gray-500">40.5K posts</div>
</div>

        </div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-4/5 border-x border-gray-600 p-3 min-h-screen">
      <div className="top flex items-center p-3 sticky top-0 bg-black backdrop-blur-3xl opacity-80 z-10">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 px-4 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="settings mx-2">
          <span className="material-symbols-outlined text-white">
            settings
          </span>
        </div>
      </div>

      <div className="h-[1px] bg-gray-700"></div>
      
      <div className="flex justify-between text-slate-500 text-lg py-3">
        <span
          onClick={() => setActiveTab('forYou')}
          className={`px-4 py-2 bg-transparent hover:bg-gray-800 hover:rounded-none hover:font-bold hover:text-white cursor-pointer ${activeTab === 'forYou' ? 'font-bold text-white border-b-4 border-blue-500' : ''}`}
        >
          For you
        </span>
        <span
          onClick={() => setActiveTab('trending')}
          className={`px-4 py-2 bg-transparent hover:bg-gray-800 hover:rounded-none hover:font-bold hover:text-white cursor-pointer ${activeTab === 'trending' ? 'font-bold text-white border-b-4 border-blue-500' : ''}`}
        >
          Trending
        </span>
        <span
          onClick={() => setActiveTab('news')}
          className={`px-4 py-2 bg-transparent hover:bg-gray-800 hover:rounded-none hover:font-bold hover:text-white cursor-pointer ${activeTab === 'news' ? 'font-bold text-white border-b-4 border-blue-500' : ''}`}
        >
          News
        </span>
        <span
          onClick={() => setActiveTab('sports')}
          className={`px-4 py-2 bg-transparent hover:bg-gray-800 hover:rounded-none hover:font-bold hover:text-white cursor-pointer ${activeTab === 'sports' ? 'font-bold text-white border-b-4 border-blue-500' : ''}`}
        >
          Sports
        </span>
        <span
          onClick={() => setActiveTab('entertainment')}
          className={`px-4 py-2 bg-transparent hover:bg-gray-800 hover:rounded-none hover:font-bold hover:text-white cursor-pointer ${activeTab === 'entertainment' ? 'font-bold text-white border-b-4 border-blue-500' : ''}`}
        >
          Entertainment
        </span>
      </div>

      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default Explore;


