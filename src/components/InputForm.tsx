'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import arrowImg from '../assets/images/icon-arrow.svg';

interface ChildProps {
  onCalcAge: (
    day: number,
    month: number,
    year: number,
    e: React.FormEvent<HTMLFormElement>
  ) => void;
  children?: React.ReactNode;
}

const InputForm: React.FC<ChildProps> = ({ onCalcAge }) => {
  const [day, setDay] = useState(19);
  const [month, setMonth] = useState(9);
  const [year, setYear] = useState(1984);

  return (
    <form
      className="flex w-screen gap-5 px-8 justify-center"
      onSubmit={onCalcAge.bind(null, day, month, year)}
    >
      <label className="text-xs tracking-xtrawide text-smokeygrey flex flex-col font-bold flex-1 gap-1">
        DAY
        <input
          type="text"
          className="w-full text-black text-xl w-21 p-3 border border-lightgrey rounded-xl"
          value={day}
          onChange={(e) => setDay(Number(e.target.value))}
        />
      </label>
      <label className="text-xs tracking-xtrawide text-smokeygrey flex flex-col font-bold flex-1 gap-1">
        MONTH
        <input
          type="text"
          className="w-full text-black text-xl w-21 p-3 border border-lightgrey rounded-xl"
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
        />
      </label>
      <label className="text-xs tracking-xtrawide text-smokeygrey flex flex-col font-bold flex-1 gap-1">
        YEAR
        <input
          type="text"
          className="w-full text-black text-xl w-21 p-3 border border-lightgrey rounded-xl"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />
      </label>
      <button type="submit" className="p-5 bg-purple rounded-full">
        <div className="relative h-7 w-7">
          <Image
            src={arrowImg}
            alt="arrow icon"
            fill={true}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </button>
    </form>
  );
};

export default InputForm;
