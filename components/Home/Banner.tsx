"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Swiper React components & modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Swiper styles import
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const BannerSlider: React.FC = () => {

  const slides = [
    {
      id: 1,
      image: '/images/Hero1.svg',
      alt: 'Banner 1',
      buttonText: 'SHOP NOW',
      link: '/shop',
    },
    {
      id: 2,
      image: '/images/Hero1.svg',
      alt: 'Banner 2',
      buttonText: 'EXPLORE COLLECTION',
      link: '/shop',
    },
    {
      id: 3,
      image: '/images/Hero1.svg',
      alt: 'Banner 3',
      buttonText: 'VIEW SALE',
      link: '/sale',
    },
  ];

  return (
    <section className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[620px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }} // এটি স্মুথ ট্রানজিশন নিশ্চিত করে
        speed={1500} // ১.৫ সেকেন্ডে খুব ধীরে ও স্মুথভাবে ইমেজ চেঞ্জ হবে
        autoplay={{
          delay: 4000, // ৪ সেকেন্ড পর পর চেঞ্জ হবে
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="w-full h-full banner-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={slide.id === 1}
                className="object-cover object-center"
              />
            </div>

            {/* Light Black Overlay (হালকা কালো লেআউট) */}
            <div className="absolute inset-0 bg-black/25 z-10" />

            {/* Centered Button on Top */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <Link
                href={slide.link}
                className="bg-white/90 hover:bg-white text-black text-xs sm:text-sm font-semibold tracking-[0.2em] px-8 sm:px-10 py-3 sm:py-3.5 uppercase transition-all duration-300 shadow-md hover:scale-105"
              >
                {slide.buttonText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styling for Swiper Dots Color (Optional) */}
      <style jsx global>{`
        .banner-swiper .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.6;
        }
        .banner-swiper .swiper-pagination-bullet-active {
          background: #ffffff !important;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default BannerSlider;