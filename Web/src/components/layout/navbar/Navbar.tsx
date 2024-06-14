'use client';

import {
  MainAuthSwitcher,
  MobileAuthSwitcher,
} from '@/components/layout/navbar/AuthSwitcher';
import { LanguageSwitcher } from '@/components/layout/navbar/LanguageSwitcher';
import { MainNavigationLinks } from '@/components/layout/navbar/NavigationLinks';
import { ThemeSwitcher } from '@/components/layout/navbar/ThemeSwitcher';
import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { RenderOptions, Spin } from '../../ui/burgermenu';
//
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <Disclosure as='nav' className='bg-transparent'>
      {({ open }) => (
        <div className='absolute inset-x-0 top-0 z-50'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='ml-2 inline-flex justify-center transition duration-200 ease-in-out hover:scale-125'>
                  <span className='sr-only'>Open main menu</span>
                  <div className=''>
                    {open ? (
                      <Spin
                        size={25}
                        toggled={isOpen}
                        toggle={setOpen}
                        render={function (o: RenderOptions): ReactNode {
                          throw new Error('Function not implemented.');
                        }}
                      />
                    ) : (
                      <Spin
                        size={25}
                        toggled={false}
                        toggle={setOpen}
                        render={function (o: RenderOptions): ReactNode {
                          throw new Error('Function not implemented.');
                        }}
                      />
                    )}
                  </div>
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <Image
                    width={200}
                    height={200}
                    className='block h-8 w-auto lg:hidden'
                    src='/logo.png'
                    alt='Narco Service'
                  />
                  <Image
                    width={200}
                    height={200}
                    className='hidden h-8 w-auto lg:block'
                    src='/logo.png'
                    alt='Narco Service'
                  />
                </div>
                <MainNavigationLinks currentPath={pathName || ''} />
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 md:ml-0'>
                <LanguageSwitcher />
                <ThemeSwitcher />
                <MainAuthSwitcher />
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              <MainNavigationLinks currentPath={pathName || ''} />
            </div>
            <div className='border-t border-gray-200 pt-4 pb-3'>
              <div className='flex items-center px-5'>
                <div className='ml-3'>
                  <div className='text-base font-medium leading-none text-white'>
                    <MobileAuthSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
