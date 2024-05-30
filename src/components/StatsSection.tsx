'use client';

interface ContainerPageProps {}

const stats = [
  { id: 1, name: 'Total Members', value: '5,000+' },
  { id: 2, name: 'Active Channels', value: '120+' },
  { id: 3, name: 'Daily Messages', value: '10,000+' },
  { id: 4, name: 'Events Hosted', value: '300+' },
];

export default function ContainerPage({}: ContainerPageProps) {
  return (
    <div className='relative isolate overflow-hidden bg-[#ffffff] py-24 sm:py-32'>
      <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl'>
          <p className='mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl'>
            Trusted by thousands of customers&nbsp;worldwide
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-800'>
            Our exchange platform simplifies currency exchange through low fees,
            high availability, and the trust of thousands of users worldwide. We
            offer traders and investors a solid foundation for secure and
            efficient transactions. Discover now how we are redefining currency
            exchange.
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
