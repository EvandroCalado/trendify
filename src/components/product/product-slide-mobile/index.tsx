'use client';

import Image from 'next/image';
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type ProductSlideMobileProps = {
  images: string[];
  title: string;
};

export const ProductSlideMobile: FC<ProductSlideMobileProps> = ({
  images,
  title,
}) => {
  return (
    <div className="mb-5 w-full overflow-hidden md:hidden">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="w-full md:rounded-lg"
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
    </div>
  );
};
