'use client';

import { AiFillCloseCircle, AiFillInfoCircle } from 'react-icons/ai';

interface RulesPageProps {}

const rules = [
  {
    text: "😃 1. Adherence to Discord's official guidelines is required. Consult them here: https://discord.com/guidelines.",
    color: 'text-green-500',
  },
  {
    text: '🙋 3. Assistance is freely given. Refrain from pinging for quicker replies. Pose questions directly, using resources like https://dontasktoask.com/ and https://stackoverflow.com/help/how-to-ask for guidance.',
    color: 'text-green-500',
  },
  {
    text: '📵 4. Do not record or transmit video (including screen sharing and webcams) or audio (voice chats) on this server.',
    color: 'text-green-500',
  },
  {
    text: '📣 5. We prohibit any form of third-party advertising or personal promotions.',
    color: 'text-green-500',
  },
  {
    text: '👮 6. Our moderation team reserves the right to intervene as necessary, even in cases not explicitly covered by the rules.',
    color: 'text-green-500',
  },
  {
    text: '✉️ 7. Avoid sending direct messages to administrators unless absolutely necessary.',
    color: 'text-red-600',
  },
  {
    icon: AiFillCloseCircle,
    text: "🛡️ 8. It is forbidden to share anyone's personal information without their explicit permission; violations will lead to immediate expulsion.",
    color: 'text-red-600',
  },
];

export default function RulesPage({}: RulesPageProps) {
  return (
    <div className='bg-white h-screen flex items-center justify-center'>
      <div className='mx-auto w-full md:max-w-2xl'>
        <div className='rounded-lg border-2 border-[#83b7e4] bg-[#2272b7] p-6 shadow-2xl shadow-[#2272b7]'>
          <h2 className='mb-5 pl-5 text-2xl font-bold text-white'>Rules</h2>
          {rules.map(({ icon: Icon, text, color }, index) => (
            <div
              key={index}
              className={`pl-5 text-white ${index === 5 ? 'mt-5' : ''}`}
            >
              <p className='font-semibold'>
                {index === 0 && 'We will process your transaction even if you'}
              </p>
              <ul className=''>
                <li className='mt-2 flex items-start'>
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
