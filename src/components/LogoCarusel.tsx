import Image from 'next/image';
import SwiperCore from 'swiper/core';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const logos = [
  {
    imgSrc: '/images/partner/assembly.png',
    targetPath: 'https://www.binance.com',
  },
  {
    imgSrc: '/images/partner/C.png',
    targetPath: 'https://www.blockchain.com/',
  },
  {
    imgSrc: '/images/partner/C1.png',
    targetPath: 'https://metamask.io/',
  },
  {
    imgSrc: '/images/partner/C2.png',
    targetPath: 'https://www.kraken.com/',
  },
  {
    imgSrc: '/images/partner/F1.png',
    targetPath: 'https://www.coinbase.com/',
  },
  {
    imgSrc: '/images/partner/go.png',
    targetPath: 'https://www.ledger.com/',
  },
  {
    imgSrc: '/images/partner/html.png',
    targetPath: 'https://crypto.com/',
  },
  {
    imgSrc: '/images/partner/java.png',
    targetPath: 'https://trezor.io/',
  },
  {
    imgSrc: '/images/partner/javascript.png',
    targetPath: 'https://trezor.io/',
  },
  {
    imgSrc: '/images/partner/kotlin.png',
    targetPath: 'https://trezor.io/',
  },
  {
    imgSrc: '/images/partner/lua.png',
    targetPath: 'https://trezor.io/',
  },
  {
    imgSrc: '/images/partner/php.png',
    targetPath: 'https://trezor.io/',
  },
  {
    imgSrc: '/images/partner/python.png',
    targetPath: 'https://trezor.io/',
  },
  {
    imgSrc: '/images/partner/ruby.png',
    targetPath: 'https://trezor.io/',
  },
  {
    imgSrc: '/images/partner/rust.png',
    targetPath: 'https://trezor.io/',
  },
  {
    imgSrc: '/images/partner/typescript.png',
    targetPath: 'https://trezor.io/',
  },
];

export default function LogoCarousel() {

  return (
    <div className='bg-white border border-t'>
      <Swiper
        className='select-none'
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={7}
        loop={true}
        onInit={(swiper) => {}}
        speed={15000}
        grabCursor={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 40,
          },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div
              className='ml-5 transition-transform hover:scale-110'
              onClick={() => (window.location.href = logo.targetPath)}
            >
              <Image
                src={logo.imgSrc}
                width={1000}
                height={1000}
                alt={`Logo ${index}`}
                className='logo-img'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
