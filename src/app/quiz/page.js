'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const questions = [
  {
    question: "What’s Tuaaa’s superpower?",
    options: [
      "Turning frowns into smiles",
      "Flying with cuteness",
      "Making hearts skip a beat",
      "All of the above 💙"
    ],
  },
  {
    question: "If Tuaaa were a season, she would be...",
    options: [
      "Spring – full of life and color",
      "Winter – calm and cozy",
      "Summer – bright and full of energy",
      "Monsoon – peaceful and pretty"
    ],
  },
  {
    question: "What song starts playing in my head when I see Tuaaa?",
    options: [
      "Perfect by Ed Sheeran",
      "Just The Way You Are by Bruno Mars",
      "Tujh Mein Rab Dikhta Hai",
      "Every love song ever"
    ],
  },
  {
    question: "What’s the best gift Tuaaa gives to the world?",
    options: [
      "Her smile 😊",
      "Her kindness",
      "Her laughter",
      "Herself – she’s the whole gift! 🎁"
    ],
  },
  {
    question: "What should Tuaaa do today?",
    options: [
      "Smile more (as always)",
      "Feel loved and celebrated",
      "Eat lots of cake 🍰",
      "All of the above x 1000"
    ],
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center p-4">
      <div className="max-w-xl w-full text-center space-y-8 backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-pink-300 drop-shadow">
                {questions[currentQuestion].question}
              </h2>
              <div className="grid gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={index}
                    onClick={handleAnswer}
                    className="px-4 py-2 rounded-xl bg-white/80 text-black font-medium hover:bg-blue-100 transition-all border border-blue-400 shadow-md"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-pink-400 drop-shadow-md">You are a genius, Tuhina! 💖</h2>
              <p className="text-lg text-blue-200">You just aced the sweetest quiz ever 💙</p>
            </motion.div>
          )}
        </AnimatePresence>

        <Link
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition-all"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </main>
  );
}
