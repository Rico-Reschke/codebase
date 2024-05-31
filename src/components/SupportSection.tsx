'use client';

import { FaRegNewspaper } from 'react-icons/fa';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';

const cards = [
  {
    name: 'Contact Us',
    description:
      'For questions or support, contact us. Your concern is important to us.',
    icon: FiPhone,
  },
  {
    name: 'Technical Support',
    description:
      "For technical assistance or inquiries, reach out to us. We're committed to providing you with the solutions you need.",
    icon: FaScrewdriverWrench,
  },
  {
    name: 'Media Inquiries',
    description:
      "For all press-related questions, reach out to us. We're ready to share our story.",
    icon: FaRegNewspaper,
  },
];

interface ContainerPageProps {}

export default function ContainerPage({}: ContainerPageProps) {
  return (
    <div className='relative isolate overflow-hidden bg-[#ffffff] py-24 sm:py-32'>
      <div className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'>
        <div
          className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#8c1acf] to-[#9900ff] opacity-30'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'>
        <div
          className='aspect-[1097/845] w-[90.5625rem] bg-gradient-to-tr from-[#9439df] to-[#9b12f7] opacity-30'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            Support center
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            For technical questions or support, we are at your disposal. Our
            team is ready to provide you with efficient solutions and answers.
            Committed to your success, we address every concern with the highest
            priority.
          </p>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'>
          {cards.map((card) => (
            <div
              key={card.name}
              className='flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 transition-transform duration-300 hover:scale-105'
            >
              <card.icon
                className='h-7 w-5 flex-none text-indigo-400'
                aria-hidden='true'
              />
              <div className='text-base leading-7'>
                <h3 className='font-semibold text-white'>{card.name}</h3>
                <p className='mt-2 text-gray-300'>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
