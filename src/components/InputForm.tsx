'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import arrowImg from '../assets/images/icon-arrow.svg';

interface ChildProps {
  onCalcAge: (day: number, month: number, year: number) => void;
  children?: React.ReactNode;
}

const InputForm: React.FC<ChildProps> = ({ onCalcAge }) => {
  const [input, setInput] = useState<Record<string, string>>({
    day: '',
    month: '',
    year: '',
  });

  const [isValid, setIsValid] = useState<Record<string, boolean>>({
    day: true,
    month: true,
    year: true,
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const field = e.target.name;
    setInput({ ...input, [field]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { day, month, year } = input;

    if (day && month && year) {
      onCalcAge(Number(day), Number(month), Number(year));
      setInput({
        day: '',
        month: '',
        year: '',
      });
    }
  };

  return (
    <form
      className="flex flex-col w-screen gap-10 px-8 justify-center items-center"
      onSubmit={submitHandler}
    >
      <div className="flex w-screen gap-5 px-8 justify-center">
        <label className="text-xs tracking-xtrawide text-smokeygrey flex flex-col font-bold flex-1 gap-1">
          DAY
          <input
            type="text"
            className="w-full text-black text-xl w-21 p-3 border border-lightgrey rounded-xl focus:outline-purple"
            placeholder="DD"
            name="day"
            value={input.day}
            onChange={inputHandler}
          />
          {isValid.day && <p className="">This Field is required.</p>}
        </label>
        <label className="text-xs tracking-xtrawide text-smokeygrey flex flex-col font-bold flex-1 gap-1">
          MONTH
          <input
            type="text"
            className="w-full text-black text-xl w-21 p-3 border border-lightgrey rounded-xl focus:outline-purple"
            name="month"
            placeholder="MM"
            value={input.month}
            onChange={inputHandler}
          />
        </label>
        <label className="text-xs tracking-xtrawide text-smokeygrey flex flex-col font-bold flex-1 gap-1">
          YEAR
          <input
            type="text"
            className="w-full text-black text-xl w-21 p-3 border border-lightgrey rounded-xl focus:outline-purple"
            name="year"
            placeholder="YYYY"
            value={input.year}
            onChange={inputHandler}
          />
        </label>
      </div>
      <button
        type="submit"
        className="p-5 bg-purple rounded-full hover:bg-black active:bg-black"
      >
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
