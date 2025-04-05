import React from 'react';
import { useWordOfTheDay } from './hooks/useWordOfTheDay';
import { BookOpen } from 'lucide-react';

function App() {
  const wordOfTheDay = useWordOfTheDay();

  if (!wordOfTheDay) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-64 sm:h-80">
            <img
              src={wordOfTheDay.imageUrl}
              alt={wordOfTheDay.word}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center gap-2 text-sm font-medium text-blue-200 mb-2">
                <BookOpen size={18} />
                <span>Word of the Day</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                {wordOfTheDay.word}
              </h1>
            </div>
          </div>
          
          <div className="p-6 sm:p-8">
            <div className="prose prose-lg">
              <p className="text-gray-600 text-lg leading-relaxed">
                {wordOfTheDay.meaning}
              </p>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              Updates daily at 12:00 AM IST
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;