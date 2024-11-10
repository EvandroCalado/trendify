'use client';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
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
        spaceBetween={10}
        navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
        autoplay={{ delay: 2500 }}
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

        <button className="arrow-left absolute left-4 top-1/2 z-30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-zinc-300 text-white duration-150 hover:bg-zinc-400 disabled:pointer-events-none disabled:bg-zinc-200/50">
          <IconChevronLeft />
        </button>
        <button className="arrow-right absolute right-4 top-1/2 z-30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-zinc-300 text-white duration-150 hover:bg-zinc-400 disabled:pointer-events-none disabled:bg-zinc-200/50">
          <IconChevronRight />
        </button>
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
