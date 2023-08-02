'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
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

  const [isEmpy, setIsEmpy] = useState<Record<string, boolean>>({
    day: true,
    month: true,
    year: true,
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

    setIsEmpy({
      day: day !== '',
      month: month !== '',
      year: year !== '',
    });

    let isLeap = 0;
    const thenYear = Number(year);
    if (thenYear % 4 === 0) {
      if (thenYear % 100 === 0) {
        if (thenYear % 400 === 0) isLeap = 1;
      } else {
        isLeap = 1;
      }
    }

    const numDays = [1, 3, 5, 7, 8, 10, 12].includes(Number(month))
      ? 31
      : [4, 6, 9, 11].includes(Number(month))
      ? 30
      : 28 + isLeap;

    setIsValid({
      day: !day || (Number(day) <= numDays && Number(day) > 0),
      month: !month || (Number(month) < 13 && Number(month) > 0),
      year: !year || Number(year) <= new Date().getFullYear(),
    });

    setIsValid((state) => {
      if (
        Object.values(state).every((value) => value) &&
        day &&
        month &&
        year
      ) {
        onCalcAge(Number(day), Number(month), Number(year));
      }
      return state;
    });
  };

  return (
    <form
      className="flex flex-col w-screen gap-10 px-8 justify-center items-center"
      onSubmit={submitHandler}
    >
      <div className="flex w-screen gap-5 px-8 justify-center">
        <label
          className={twMerge(
            'text-xs tracking-xtrawide text-smokeygrey flex flex-col font-bold flex-1 gap-1',
            (!isEmpy.day || !isValid.day) && 'text-lightred'
          )}
        >
          DAY
          <input
            type="text"
            className={twMerge(
              'w-full text-black text-xl p-3 border border-lightgrey rounded-xl focus:outline-purple',
              (!isEmpy.day || !isValid.day) &&
                'border-lightred focus:outline-lightred'
            )}
            placeholder="DD"
            name="day"
            value={input.day}
            onChange={inputHandler}
          />
          {!isEmpy.day && (
            <p className="text-center tracking-normal italic font-normal text-lightred">
              This field is required.
            </p>
          )}
          {!isValid.day && (
            <p className="text-center tracking-normal italic font-normal text-lightred">
              Must be a valid day.
            </p>
          )}
        </label>
        <label
          className={twMerge(
            'text-xs tracking-xtrawide text-smokeygrey flex flex-col font-bold flex-1 gap-1',
            (!isEmpy.month || !isValid.month) && 'text-lightred'
          )}
        >
          MONTH
          <input
            type="text"
            className={twMerge(
              'w-full text-black text-xl p-3 border border-lightgrey rounded-xl focus:outline-purple',
              (!isEmpy.month || !isValid.month) &&
                'border-lightred focus:outline-lightred'
            )}
            name="month"
            placeholder="MM"
            value={input.month}
            onChange={inputHandler}
          />
          {!isEmpy.month && (
            <p className="text-center tracking-normal italic font-normal text-lightred">
              This field is required.
            </p>
          )}
          {!isValid.month && (
            <p className="text-center tracking-normal italic font-normal text-lightred">
              Must be a valid month.
            </p>
          )}
        </label>
        <label
          className={twMerge(
            'text-xs tracking-xtrawide text-smokeygrey flex flex-col font-bold flex-1 gap-1',
            (!isEmpy.year || !isValid.year) &&
              'text-lightred focus:outline-lightred'
          )}
        >
          YEAR
          <input
            type="text"
            className={twMerge(
              'w-full text-black text-xl p-3 border border-lightgrey rounded-xl focus:outline-purple',
              (!isEmpy.year || !isValid.year) && 'border-lightred'
            )}
            name="year"
            placeholder="YYYY"
            value={input.year}
            onChange={inputHandler}
          />
          {!isEmpy.year && (
            <p className="text-center tracking-normal italic font-normal text-lightred">
              This field is required.
            </p>
          )}
          {!isValid.year && (
            <p className="text-center tracking-normal italic font-normal text-lightred">
              Must be in the past.
            </p>
          )}
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
