import { useState, useEffect } from 'react';
import { words } from '../data/words';

interface WordOfTheDay {
  word: string;
  meaning: string;
  imageUrl: string;
}

export function useWordOfTheDay() {
  const [wordOfTheDay, setWordOfTheDay] = useState<WordOfTheDay | null>(null);

  useEffect(() => {
    const checkAndUpdateWord = () => {
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000; // IST offset from UTC in milliseconds
      const istDate = new Date(now.getTime() + istOffset);
      const todayKey = istDate.toISOString().split('T')[0];
      
      const storedData = localStorage.getItem('wordOfTheDay');
      const storedWord = storedData ? JSON.parse(storedData) : null;
      
      if (!storedWord || storedWord.date !== todayKey) {
        // Get a new random word
        const randomIndex = Math.floor(Math.random() * words.length);
        const newWord = words[randomIndex];
        
        const wordData = {
          ...newWord,
          date: todayKey
        };
        
        localStorage.setItem('wordOfTheDay', JSON.stringify(wordData));
        setWordOfTheDay(newWord);
      } else {
        const { word, meaning, imageUrl } = storedWord;
        setWordOfTheDay({ word, meaning, imageUrl });
      }
    };

    checkAndUpdateWord();

    // Check for updates every minute
    const interval = setInterval(checkAndUpdateWord, 60000);
    return () => clearInterval(interval);
  }, []);

  return wordOfTheDay;
}