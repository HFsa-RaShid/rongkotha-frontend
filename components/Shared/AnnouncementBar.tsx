"use client";

import React from 'react';
import Marquee from 'react-fast-marquee';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-[#800000] text-white py-2 text-xs tracking-wider overflow-hidden">
      <Marquee speed={80} gradient={false}>
        <span className="mx-48">
          &quot;20% OFF চলছে LIMITED TIME এর জন্য&quot; &nbsp; CASH ON DELIVERY AVAILABLE &bull; EASY RETURN AND EXCHANGE
        </span>
        <span className="mx-48">
          &quot;20% OFF চলছে LIMITED TIME এর জন্য&quot; &nbsp; CASH ON DELIVERY AVAILABLE &bull; EASY RETURN AND EXCHANGE
        </span>
      </Marquee>
    </div>
  );
};

export default AnnouncementBar;