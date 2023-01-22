import { useState } from 'react';

export function useDate() {
  const locale = 'en';
  const [today] = useState(new Date());

  let day;
  let date;
  let time;

  (async function() {
    while (true) {
      day = today.toLocaleDateString(locale, { weekday: 'long' });
      date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
      time = today.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric', hourCycle: 'h23' });
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  })()

  return {
    date,
    time
  };
}