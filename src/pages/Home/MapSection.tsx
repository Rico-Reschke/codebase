/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect, useState } from 'react';

interface ExchangeMapSectionProps {}

interface ValuePosition {
  sentValue: string;
  gotValue: string;
  position: { top: string; left: string };
  id: number;
  isVisible: boolean;
}

const paymentMethods = ['PSC', 'PP', 'BTC', 'LTC', 'ETH', 'XMR', 'DOGE'];

export const MapSection: React.FC<ExchangeMapSectionProps> = ({}) => {
  const [values, setValues] = useState<ValuePosition[]>([]);
  const [showMap, setShowMap] = useState<boolean>(true);

  // define a list of fixed positions
  const fixedPositions = [
    { top: '21%', left: '22%' },
    { top: '52%', left: '24%' },
    { top: '43%', left: '70%' },
    { top: '33%', left: '61%' },
    { top: '47%', left: '67%' },
    { top: '60%', left: '57%' },
    { top: '30%', left: '8%' },
    { top: '70%', left: '85%' },
    { top: '75%', left: '30%' },
    { top: '60%', left: '35%' },
    { top: '50%', left: '21%' },
    { top: '20%', left: '75%' },
    { top: '27%', left: '69%' },
    { top: '50%', left: '50%' },
    { top: '40%', left: '48%' },
    { top: '37%', left: '55%' },
    { top: '24%', left: '55%' },
  ];

  const cryptoMethods = ['BTC', 'LTC', 'ETH', 'XMR', 'DOGE'];

  const generateValue = () => {
    // decide randomly whether the transaction is in crypto or fiat
    const isCryptoTransaction = Math.random() < 0.5; // 50% Chance
    let paymentMethodsSubset;

    if (isCryptoTransaction) {
      paymentMethodsSubset = paymentMethods.filter((method) =>
        cryptoMethods.includes(method)
      );
    } else {
      paymentMethodsSubset = paymentMethods.filter(
        (method) => !cryptoMethods.includes(method)
      );
    }

    const index1 = Math.floor(Math.random() * paymentMethodsSubset.length);
    let index2 = Math.floor(Math.random() * paymentMethodsSubset.length);
    // Make sure that index2 is different to index1
    while (index1 === index2) {
      index2 = Math.floor(Math.random() * paymentMethodsSubset.length);
    }

    const paymentMethod1 = paymentMethodsSubset[index1];
    const paymentMethod2 = paymentMethodsSubset[index2];

    let amount;
    if (isCryptoTransaction) {
      // generate crypto amounts between 0.05,000 and 1,00,000
      amount = Math.random() * (1 - 0.05) + 0.05;
    } else {
      // generate Fiat amounts between 20 and 500
      amount = Math.random() * (500 - 20) + 20;
    }

    const sentValue = isCryptoTransaction
      ? `Sent ${amount.toFixed(5)} ${paymentMethod1}`
      : `Sent €${amount.toFixed(2)} ${paymentMethod1}`;

    const gotAmount = amount * 0.75; // 20% less

    const gotValue = isCryptoTransaction
      ? `Got ${gotAmount.toFixed(5)} ${paymentMethod2}`
      : `Got €${gotAmount.toFixed(2)} ${paymentMethod2}`;

    return { sentValue, gotValue };
  };

  useEffect(() => {
    let idCounter = 0;

    const interval = setInterval(() => {
      const { sentValue, gotValue } = generateValue();
      const newPosition =
        fixedPositions[Math.floor(Math.random() * fixedPositions.length)];

      const newValue = {
        sentValue,
        gotValue,
        position: newPosition,
        id: idCounter++,
        isVisible: false,
      };

      setValues((prevValues) => [...prevValues, newValue]);

      setTimeout(() => {
        setValues((currentValues) =>
          currentValues.map((v) =>
            v.id === newValue.id ? { ...v, isVisible: true } : v
          )
        );
      }, 50);

      setTimeout(() => {
        setValues((currentValues) =>
          currentValues.map((v) =>
            v.id === newValue.id ? { ...v, isVisible: false } : v
          )
        );
      }, 3_000);
    }, 2_000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowMap(window.innerWidth > 1000);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!showMap) {
    return null;
  }

  return (
    <div className='map-container w-full bg-[#ffffff] transition-all duration-500'>
      {showMap && (
        <div className='mx-auto max-w-[1000px]'>
          <div className="relative flex h-[700px] justify-center bg-[#ffffff] bg-[url('/dotted-worldmap.svg')] bg-contain bg-center bg-no-repeat">
            {values.map((value) => (
              <div
                key={value.id}
                className={`absolute transition-opacity duration-1000 ${value.isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  top: value.position.top,
                  left: value.position.left,
                }}
              >
                <div className='-ml-5 w-2 rounded-full bg-[#33ff63] p-2'></div>
                <div className='-mt-4 flex flex-col items-center'>
                  <div className='flex items-center'>
                    <div
                      className='flex items-center whitespace-nowrap rounded bg-green-500 p-1 text-xs font-semibold text-white'
                    >
                      <p>a user has joined</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
