'use client';

import { useState } from 'react';

import InputForm from '@/components/InputForm';

export default function Home() {
  const [age, setAge] = useState({ days: '--', months: '--', years: '--' });

  const submitHandler = (
    day: number,
    month: number,
    year: number,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setAge({
      days: String(day),
      months: String(month),
      years: String(year),
    });
    const now = new Date();
    console.log(now, day, month, year);
  };

  return (
    <main className="flex flex-col items-center justify-center gap-12 min-h-screen w-full">
      <InputForm onCalcAge={submitHandler} />

      <div id="display" className="flex flex-col gap-2">
        <h1 className="text-6xl italic font-extrabold">
          <span className="text-purple">{age.years}</span>years
        </h1>
        <h1 className="text-6xl italic font-extrabold">
          <span className="text-purple">{age.months}</span>months
        </h1>
        <h1 className="text-6xl italic font-extrabold">
          <span className="text-purple">{age.days}</span>days
        </h1>
      </div>
    </main>
  );
}
