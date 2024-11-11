'use client';

import { getImageBySlug } from '@/actions/products';
import Image from 'next/image';
import { FC, useCallback, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductSlideSkeleton } from '../product-slide-skeleton';

type ProductSlideMobileProps = {
  slug: string;
};

export const ProductSlideMobile: FC<ProductSlideMobileProps> = ({ slug }) => {
  const [images, setImages] = useState<string[] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getImages = useCallback(async () => {
    const allImages = await getImageBySlug({ slug });

    setImages(allImages);
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    getImages();
  }, [getImages, slug]);

  return (
    <div className="mb-5 w-full overflow-hidden md:hidden">
      {/* skeleton */}
      {loading && <ProductSlideSkeleton />}

      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="w-full md:rounded-lg"
      >
        {images?.map((image) => (
          <SwiperSlide key={image} className="w-full bg-white">
            <Image
              src={`/products/${image}`}
              alt={image}
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
