'use client';
import Image from 'next/image';

interface ContainerPageProps {}

export default function DekoSection({}: ContainerPageProps) {
  return (
    <div className='bg-[#ffffff]'>
      <div className='relative isolate pt-14'>
        <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40'>
          <Image
            className='w-full max-w-lg rounded-2xl object-cover lg:max-w-none'
            height={300}
            width={300}
            src='/deko.png'
            alt=''
          />
          <div className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto lg:ml-10'>
            <div className='flex'>
              <div className='relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'></div>
            </div>
            <h1 className='mt-10 max-w-lg text-4xl font-bold tracking-tight text-black sm:text-6xl'>
              We’re changing the way people connect.
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Enhance your Discord experience with us. Discover community,
              support, and fun. Our server provides a safe, friendly environment
              with various channels and events. Join us and become part of our
              growing family!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
