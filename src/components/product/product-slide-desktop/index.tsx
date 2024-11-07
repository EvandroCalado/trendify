'use client';

import Image from 'next/image';
import React, { FC, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type ProductSlideDesktopProps = {
  images: string[];
  title: string;
};

export const ProductSlideDesktop: FC<ProductSlideDesktopProps> = ({
  images,
  title,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="mb-5 w-full overflow-hidden max-md:hidden">
      {/* gallery */}
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#1d4ed8',
            '--swiper-pagination-color': '#1d4ed8',
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 2500 }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mb-5 w-full md:rounded-lg"
      >
        {images.map((image) => (
          <SwiperSlide key={image} className="w-full bg-white">
            <Image
              src={`/products/${image}`}
              alt={title}
              width={500}
              height={500}
              className="mx-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mb-5 [&_.swiper-slide-thumb-active]:rounded-lg [&_.swiper-slide-thumb-active]:border [&_.swiper-slide-thumb-active]:border-blue-700"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={`/products/${image}`}
              alt={title}
              width={500}
              height={500}
              className="rounded-lg object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
