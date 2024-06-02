'use client';

import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillInfoCircle,
} from 'react-icons/ai';

interface RulesPageProps {}

const tips = [
  {
    icon: AiFillCheckCircle,
    text: 'Send a deposit in a wrong network',
    color: 'text-green-500',
  },
  {
    icon: AiFillCheckCircle,
    text: 'Create a transaction with a wrong coin',
    color: 'text-green-500',
  },
  {
    icon: AiFillCheckCircle,
    text: 'Select an amount and then send a different one',
    color: 'text-green-500',
  },
  {
    icon: AiFillCheckCircle,
    text: 'Send more than one deposit for the same transaction',
    color: 'text-green-500',
  },
  {
    icon: AiFillCheckCircle,
    text: 'Send a deposit long after the exchange was created or completed',
    color: 'text-green-500',
  },
  {
    icon: AiFillCloseCircle,
    text: 'Send a deposit for a fixed-rate exchange after the rate expires, provided that the rate declines over this timeframe',
    color: 'text-red-600',
  },
  {
    icon: AiFillCloseCircle,
    text: 'Make a transaction using the wrong contract address',
    color: 'text-red-600',
  },
];

export default function RulesPage({}: RulesPageProps) {
  return (
    <div className='bg-white'>
      <div className='mx-auto mt-20 w-full md:max-w-2xl'>
        <div className='rounded-lg border-2 border-[#A324FF] bg-[#520D80] p-6 shadow-2xl shadow-[#A324FF]'>
          <h2 className='mb-5 pl-5 text-2xl font-bold text-white'>
            Useful tips to know
          </h2>
          {tips.map(({ icon: Icon, text, color }, index) => (
            <div
              key={index}
              className={`pl-5 text-white ${index === 5 ? 'mt-5' : ''}`}
            >
              <p className='font-semibold'>
                {index === 0 && 'We will process your transaction even if you'}
                {index === 5 &&
                  'We will not be able to proceed with the transaction on the initial terms if you'}
              </p>
              <ul className=''>
                <li className='mt-2 flex items-start'>
                  <Icon
                    className={`h-6 w-6 flex-shrink-0 ${color}`}
                    size={22}
                  />
                  <span className='ml-2 text-lg'>{text}</span>
                </li>
              </ul>
            </div>
          ))}
          <div className='mt-5 pl-5 text-white'>
            <span className='font-bold'>How to cancel an exchange</span>
            <ul className='mt-2'>
              <li className='flex items-start'>
                <AiFillInfoCircle
                  className='h-6 w-6 flex-shrink-0 text-blue-500'
                  size={22}
                />
                <span className='ml-2 text-lg'>
                  If you didn’t send any funds yet, there is no need to cancel
                  the transaction, you can simply create a new one
                </span>
              </li>
              <li className='flex items-start'>
                <AiFillInfoCircle
                  className='h-6 w-6 flex-shrink-0 text-blue-500'
                  size={22}
                />
                <span className='ml-2 text-lg'>
                  If you have already sent the funds for the exchange,
                  immediately contact our support team for assistance
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
