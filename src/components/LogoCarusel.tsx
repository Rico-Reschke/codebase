import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SwiperCore from 'swiper/core';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const logos = [
  {
    imgSrc: '/images/partner/binance.svg',
    targetPath: 'https://www.binance.com',
  },
  {
    imgSrc: '/images/partner/blockchain.svg',
    targetPath: 'https://www.blockchain.com/',
  },
  {
    imgSrc: '/images/partner/metamask.svg',
    targetPath: 'https://metamask.io/',
  },
  {
    imgSrc: '/images/partner/kraken.svg',
    targetPath: 'https://www.kraken.com/',
  },
  {
    imgSrc: '/images/partner/coinbase.svg',
    targetPath: 'https://www.coinbase.com/',
  },
  {
    imgSrc: '/images/partner/ledger.svg',
    targetPath: 'https://www.ledger.com/',
  },
  {
    imgSrc: '/images/partner/crypto.com.svg',
    targetPath: 'https://crypto.com/',
  },
  {
    imgSrc: '/images/partner/trezor.svg',
    targetPath: 'https://trezor.io/',
  },
];

export default function LogoCarousel() {
  const router = useRouter();

  return (
    <div className='bg-[#44056E]'>
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
                width={40}
                height={40}
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
