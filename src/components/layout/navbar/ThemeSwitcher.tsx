'use client';

import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { AiOutlineBgColors } from 'react-icons/ai';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

interface ThemeSwitcherProps {}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({}) => {
  const [theme, setTheme] = useState('original');

  const changeTheme = (newTheme: any) => setTheme(newTheme);

  const themeOptions = [
    {
      key: 'original',
      icon: <AiOutlineBgColors className='h-5 w-5 text-gray-700' />,
    },
    { key: 'light', icon: <RiSunFill className='h-5 w-5 text-gray-700' /> },
    { key: 'dark', icon: <RiMoonFill className='h-5 w-5 text-gray-700' /> },
  ];

  const filteredThemeOptions = themeOptions.filter(
    (option) => option.key !== theme
  );

  const ThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <RiSunFill className='h-6 w-6' />;
      case 'dark':
        return <RiMoonFill className='h-6 w-6' />;
      default:
        return <AiOutlineBgColors className='h-6 w-6' />;
    }
  };

  return (
    <div>
      <Menu as='div' className='relative mr-2'>
        <div className='flex'>
          <Menu.Button className='mr-2 flex h-6 w-6 items-center justify-center rounded-full transition duration-75 ease-in-out hover:scale-125'>
            <ThemeIcon />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-200'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white px-0.5 py-1 '>
            {filteredThemeOptions.map((option, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    className='group flex items-center justify-center rounded-full p-2 transition duration-75 ease-in-out hover:scale-125'
                    onClick={() => {
                      setTimeout(() => {
                        changeTheme(option.key);
                      }, 70); // Delayed the change by 1 second
                    }}
                  >
                    {option.icon}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
