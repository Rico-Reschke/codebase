'use client';

import { AiFillCloseCircle } from 'react-icons/ai';

interface RulesPageProps {}

const rules = [
  {
    text: "😃 1. Adherence to Discord's official guidelines is required. Consult them here: https://discord.com/guidelines.",
  },
  {
    text: '🙋 3. Assistance is freely given. Refrain from pinging for quicker replies. Pose questions directly, using resources like https://dontasktoask.com/ and https://stackoverflow.com/help/how-to-ask for guidance.',
  },
  {
    text: '📵 4. Do not record or transmit video (including screen sharing and webcams) or audio (voice chats) on this server.',
  },
  {
    text: '📣 5. We prohibit any form of third-party advertising or personal promotions.',
  },
  {
    text: '👮 6. Our moderation team reserves the right to intervene as necessary, even in cases not explicitly covered by the rules.',
  },
  {
    text: '✉️ 7. Avoid sending direct messages to administrators unless absolutely necessary.',
  },
  {
    text: "🛡️ 8. It is forbidden to share anyone's personal information without their explicit permission; violations will lead to immediate expulsion.",
  },
  {
    text: '🤔 9. Rules are interpreted at the discretion of our administrators, guided by common sense.',
  },
  {
    text: '🚨 10. Refrain from engaging in or promoting hate speech, political or religious debates, or sharing content that is piratical, sexual, NSFW, or dubious.',
  },
];

export default function RulesPage({}: RulesPageProps) {
  return (
    <div className='bg-white h-screen flex items-center justify-center'>
      <div className='mx-auto w-full md:max-w-2xl'>
        <div className='rounded-lg border-2 border-[#83b7e4] bg-[#2272b7] p-6 shadow-2xl shadow-[#2272b7]'>
          <h2 className='mb-5 pl-5 text-2xl font-bold text-white'>Rules</h2>
          {rules.map(({ text }, index) => (
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
        </div>
      </div>
    </div>
  );
}
