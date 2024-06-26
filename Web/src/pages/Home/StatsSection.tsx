'use client';

interface ContainerPageProps {}

const stats = [
  { id: 1, name: 'Total Members', value: '5,000+' },
  { id: 2, name: 'Active Channels', value: '20+' },
  { id: 3, name: 'Daily Messages', value: '1,000+' },
  { id: 4, name: 'Events Hosted', value: '100+' },
];

export default function ContainerPage({}: ContainerPageProps) {
  return (
    <div className='relative isolate overflow-hidden bg-[#ffffff] py-24 sm:py-32'>
      <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl'>
          <p className='mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl'>
            Trusted by thousands of developers&nbsp;worldwide
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-700'>
            Our coding community fosters growth and collaboration through a
            wealth of resources, expert support, and a network of thousands of
            developers worldwide. We provide programmers and tech enthusiasts
            with a vibrant environment for sharing knowledge and advancing their
            skills. Discover how we are transforming the coding landscape.
          </p>
        </div>
        <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-black sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='flex flex-col gap-y-3 border-l border-[#1b6cb3] pl-6'
            >
              <dt className='text-sm leading-6'>{stat.name}</dt>
              <dd className='order-first text-3xl font-semibold tracking-tight'>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
