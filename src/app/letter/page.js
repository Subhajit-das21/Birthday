'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function LetterPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [typedLetter, setTypedLetter] = useState('');
  const fullLetter = ` Hi Tuaaa 💙

Happy Birthday! 🥳 I hope your day is filled with smiles, sweet surprises, and all the little things that make you happiest.

You are one of the kindest and most amazing people I know, and I feel lucky to be part of your story—even in the smallest ways.

Keep being you, because the world (and we) are better with you in it.

Here’s to more laughter, growth, and beautiful memories ahead. Have the best day ever—you totally deserve it. 🎂✨

– Subhajit`;

  const audioRef = useRef(null);

  const handleUnlock = () => {
    if (password === 'August28th') {
      setUnlocked(true);
      setTimeout(() => {
        audioRef.current?.play();
      }, 500);
    } else {
      alert('Wrong password! Try again 💙');
    }
  };

  useEffect(() => {
    if (unlocked) {
      let index = 0;
      const interval = setInterval(() => {
        setTypedLetter((prev) => prev + fullLetter.charAt(index));
        index++;
        if (index >= fullLetter.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [fullLetter, unlocked]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black text-white p-6 relative overflow-hidden text-center">
      {/* Background Audio */}
      <audio ref={audioRef} loop>
        <source src="/music/snow-fluff.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Password Section */}
      {!unlocked ? (
        <div className="space-y-4 bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md">
          <h1 className="text-3xl font-semibold text-pink-300">Enter the secret code 💌</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded-md border border-gray-400 text-black bg-white w-64 text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter password"
          />
          <button
            onClick={handleUnlock}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Unlock
          </button>
          <Link
            href="/"
            className="inline-block mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      ) : (
        <div className="space-y-6 max-w-2xl mt-10 animate-fadeInSlow">
          <h2 className="text-4xl font-bold text-pink-400 mb-6">💖 A Letter for Tuaaa 💖</h2>
          <pre className="whitespace-pre-wrap text-left text-lg font-light leading-relaxed text-white bg-white/5 p-6 rounded-lg shadow-md backdrop-blur-md border border-white/10">
            {typedLetter}
          </pre>
          <Link
            href="/"
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}
