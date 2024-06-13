'use client';

import { MobileNavigationLinks } from '@/components/layout/navbar/NavigationLinks';
import { useToast } from '@/context/ToastContext';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';

interface AuthSwitcherProps {}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const MainAuthSwitcher: React.FC<AuthSwitcherProps> = ({}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { notify } = useToast();

  useEffect(() => {
    const handleAuthUpdate = (event: CustomEvent<{ isLoggedIn: boolean }>) => {
      setIsLoggedIn(event.detail.isLoggedIn);
    };

    window.addEventListener('authUpdate', handleAuthUpdate as EventListener);

    return () => {
      window.removeEventListener(
        'authUpdate',
        handleAuthUpdate as EventListener
      );
    };
  }, []);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const response = await fetch('http://127.0.0.1:3001/auth/status', {
        credentials: 'include', // wichtig, um Cookies mitzusenden
      });
      const data = await response.json();
      setIsLoggedIn(data.isLoggedIn);
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    await fetch('http://127.0.0.1:3001/auth/logout', {
      method: 'POST',
      credentials: 'include', // Sehr wichtig, damit Cookies mitgesendet werden
    });
    notify('Logout successful', 'success');
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Menu as='div' className='relative'>
        <Menu.Button className='mr-2 flex items-center justify-center rounded-full text-sm'>
          <span className='sr-only'>Open user menu</span>
          {isLoggedIn ? (
            <AiOutlineLogout className='h-6 w-6 transition duration-75 ease-in-out hover:scale-125' />
          ) : (
            <AiOutlineLogin className='h-6 w-6 transition duration-75 ease-in-out hover:scale-125' />
          )}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-200'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white py-1 text-sm font-medium shadow-lg'>
            {isLoggedIn ? (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block w-full px-4 py-2 text-left text-gray-700'
                    )}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            ) : (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href='/login'
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-gray-700'
                      )}
                    >
                      Login
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href='/register'
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-gray-700'
                      )}
                    >
                      Register
                    </Link>
                  )}
                </Menu.Item>
              </>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export const MobileAuthSwitcher: React.FC<AuthSwitcherProps> = ({}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <Disclosure.Panel className='bg-white sm:hidden'>
        <div className='ml-5 mr-5 mt-6 flow-root'>
          <div className='-my-6 divide-y divide-gray-500/10'>
            <MobileNavigationLinks currentPath={pathName || ''} />
            <div className='py-7'>
              <div className='-mt-5'>
                <Link
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Log in
                </Link>
                <Link
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Disclosure.Panel>
    </>
  );
};
