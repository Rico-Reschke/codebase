'use client';

import { useState } from 'react';

interface RulesPageProps {}

const initialRules = [
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
];

const additionalRules = [
  {
    text: "🛡️ 8. It is forbidden to share anyone's personal information without their explicit permission; violations will lead to immediate expulsion.",
  },
  {
    text: '🤔 9. Rules are interpreted at the discretion of our administrators, guided by common sense.',
  },
  {
    text: '🚨 10. Refrain from engaging in or promoting hate speech, political or religious debates, or sharing content that is piratical, sexual, NSFW, or dubious.',
  },
  {
    text: '🎮 11. Honor copyright laws; avoid distributing or endorsing pirated games, software, or media.',
  },
  {
    text: '🚫 12. Harassment, bullying, or any form of discrimination, including but not limited to racism and sexism, is strictly forbidden.',
  },
  {
    text: '🔞 13. Ensure all shared content is suitable for all ages, particularly avoiding violent or explicit material, especially around minors.',
  },
  {
    text: '🔕 14. Abide by the specific rules and guidelines of each channel.',
  },
  {
    text: '💬 15. Channels should be used for their intended purposes; maintain topic relevance in discussions.',
  },
  {
    text: '🎤 16. When using voice channels, be considerate of others. Keep background noise, music, or any other disturbances to a minimum.',
  },
  {
    text: '👥 17. Impersonation of any members or staff is strictly prohibited.',
  },
  {
    text: '🔗 18. Do not share misleading links or disseminate false information.',
  },
];

export default function RulesPage({}: RulesPageProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='bg-white h-screen flex items-center justify-center'>
      <div className='mx-auto w-full md:max-w-2xl'>
        <div className='rounded-lg border-2 border-[#83b7e4] bg-[#2272b7] p-6 shadow-2xl shadow-[#2272b7]'>
          <h2 className='mb-5 pl-5 text-2xl font-bold text-white'>Rules</h2>
          {initialRules.map(({ text }, index) => (
            <div key={index} className='pl-5 text-white mt-5'>
              <ul className=''>
                <li className='mt-2 flex items-start'>
                  <span className='ml-2 text-lg'>{text}</span>
                </li>
              </ul>
            </div>
          ))}
          <div
            className={`pl-5 text-white mt-5 overflow-hidden transition-max-height duration-500 ease-in-out ${
              showMore ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            {additionalRules.map(({ text }, index) => (
              <div key={index} className='mt-5'>
                <ul className=''>
                  <li className='mt-2 flex items-start'>
                    <span className='ml-2 text-lg'>{text}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className='pl-5 text-white mt-5'>
            <button
              onClick={() => setShowMore(!showMore)}
              className='bg-[#83b7e4] text-white px-4 py-2 rounded-md transition-transform duration-500 transform hover:scale-105'
            >
              {showMore ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
