"use client";

import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

interface LanguageSwitcherProps {}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({}) => {
  const [language, setLanguage] = useState("us");

  const changeLanguage = (newLanguage: any) => setLanguage(newLanguage);

  const languageOptions = [
    {
      key: "us",
      imagePath: "/images/locales/us.png",
      label: "English (US)",
    },
    {
      key: "es",
      imagePath: "/images/locales/es.png",
      label: "Español",
    },
    {
      key: "cn",
      imagePath: "/images/locales/cn.png",
      label: "中文",
    },
    {
      key: "de",
      imagePath: "/images/locales/de.png",
      label: "Deutsch",
    },
    {
      key: "ar",
      imagePath: "/images/locales/ar.png",
      label: "العربية",
    },
    {
      key: "ru",
      imagePath: "/images/locales/ru.png",
      label: "Русский",
    },
  ];

  const filteredLanguageOptions = languageOptions.filter(
    (option) => option.key !== language,
  );

  const LanguageIcon = () => {
    const currentLanguageOption = languageOptions.find(
      (option) => option.key === language,
    );

    const fallbackLanguageOption = languageOptions.find(
      (option) => option.key === "us",
    );

    return (
      <Image
        src={
          currentLanguageOption?.imagePath ??
          fallbackLanguageOption?.imagePath ??
          "/images/locales/us.png"
        }
        alt={
          currentLanguageOption?.label || fallbackLanguageOption?.label || ""
        }
        width={100}
        height={100}
        className="h-6 rounded-full"
      />
    );
  };

  return (
    <>
      <Menu as="div" className="relative mr-2">
        <div className="flex">
          <Menu.Button className="mr-2 flex h-6 w-6 items-center justify-center rounded-full transition duration-75 ease-in-out hover:scale-125">
            <LanguageIcon />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 -mx-1.5 mr-2 mt-2 origin-top-right rounded-md bg-white py-1">
            {filteredLanguageOptions.map((option) => (
              <Menu.Item key={option.key}>
                {({ active }) => (
                  <button
                    className="group flex items-center justify-center p-1 px-2 transition duration-75 ease-in-out hover:scale-125"
                    onClick={() => {
                      setTimeout(() => {
                        changeLanguage(option.key);
                      }, 70);
                    }}
                  >
                    <Image
                      src={option.imagePath}
                      alt={option.label}
                      width={100}
                      height={100}
                      className="mx-2.5 h-5 rounded-full"
                    />
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
