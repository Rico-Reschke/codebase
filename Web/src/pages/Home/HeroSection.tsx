/* eslint-disable react/no-unescaped-entities */
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Project Jobs', href: '/jobs' },
  { name: 'Discord', href: '/discord' },
  { name: 'Team', href: '/team' },
  { name: 'Rules', href: '/rules' },
];

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className='bg-white'>
        <header className='absolute inset-x-0 top-0 z-50'>
          <Dialog
            as='div'
            className='lg:hidden'
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className='fixed inset-0 z-50' />
            <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
              <div className='flex items-center justify-between'>
                <Link href='#' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Your Company</span>
                  <Image
                    className='h-8 w-auto'
                    width={100}
                    height={100}
                    src='/logo.png'
                    alt=''
                  />
                </Link>
                <button
                  type='button'
                  className='-m-2.5 rounded-md p-2.5 text-gray-700'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50'
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className='py-6'>
                    <Link
                      href='#'
                      className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50'
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        <div className='relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14'>
          <div
            className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96'
            aria-hidden='true'
          />
          <div className='mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
              <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-black sm:text-6xl lg:col-span-2 xl:col-auto'>
                Welcome to Our Discord Community
              </h1>
              <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
                <p className='text-lg leading-8 text-gray-600'>
                  Join our vibrant coding community where collaboration meets
                  innovation. Connect with like-minded individuals, share
                  knowledge, and build your skills. Whether you're a beginner or
                  an expert, there's a place for you here.
                </p>
                <div className='mt-10 flex items-center gap-x-6'>
                  <Link
                    href='https://discord.gg/codebase'
                    className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Join Our Discord Community
                  </Link>
                </div>
              </div>
              <Image
                src='/hero.png'
                width={1080}
                height={1920}
                alt=''
                className='mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'
              />
            </div>
          </div>
          <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
        </div>
      </div>
    </>
  );
};
