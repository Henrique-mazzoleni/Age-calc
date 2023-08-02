'use client';

import { useState } from 'react';

import InputForm from '@/components/InputForm';

export default function Home() {
  const [age, setAge] = useState({ days: '--', months: '--', years: '--' });

  const submitHandler = (day: number, month: number, year: number) => {
    const now = new Date();
    const then = new Date(year, month - 1, day);

    let isLeap = false;
    const thenYear = then.getFullYear();
    if (thenYear % 4 === 0) {
      if (thenYear % 100 === 0) {
        if (thenYear % 400 === 0) isLeap = true;
      } else {
        isLeap = true;
      }
    }

    const prevMonth = then.getMonth() + 1;
    let plusDays = 0;
    if ([1, 3, 5, 7, 8, 10, 12].includes(prevMonth)) plusDays = 31;
    else if ([4, 6, 9, 11].includes(prevMonth)) plusDays = 30;
    else plusDays = isLeap ? 29 : 28;

    let years = now.getFullYear() - then.getFullYear();

    let months = now.getMonth() - then.getMonth();
    if (months < 0) {
      months += 12;
      years--;
    }

    let days = now.getDate() - then.getDate();
    if (days < 0) {
      days += plusDays;
      months--;
    }

    setAge({
      days: String(days),
      months: String(months),
      years: String(years),
    });
  };

  return (
    <main className="flex flex-col items-center justify-center gap-12 min-h-screen w-full">
      <InputForm onCalcAge={submitHandler} />

      <div id="display" className="flex flex-col gap-2">
        <h1 className="text-6xl italic font-extrabold">
          <span className="text-purple">{age.years}</span> years
        </h1>
        <h1 className="text-6xl italic font-extrabold">
          <span className="text-purple">{age.months}</span> months
        </h1>
        <h1 className="text-6xl italic font-extrabold">
          <span className="text-purple">{age.days}</span> days
        </h1>
      </div>
    </main>
  );
}
