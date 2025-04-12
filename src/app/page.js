'use client';

import { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import balloons from '@/assets/balloons.json';
import HeartAnimation from '@/components/HeartAnimation';
import Cake from '@/components/Cake';
import ClientOnly from '@/components/ClientOnly';
import { motion } from 'framer-motion';

export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  // Wait for user interaction before enabling autoplay
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
      if (audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log('Autoplay blocked:', err));
      }
      window.removeEventListener('click', handleUserInteraction);
    };

    window.addEventListener('click', handleUserInteraction);

    return () => window.removeEventListener('click', handleUserInteraction);
  }, [isPlaying]);

  // Toggle play/pause
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Play failed:', err));
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* 💖 Floating Heart Animation */}
      <HeartAnimation />

      {/* 🎈 Balloons */}
      <ClientOnly>
        <div className="absolute top-0 left-0 w-full h-72 pointer-events-none z-10">
          <Lottie animationData={balloons} loop={true} />
        </div>
      </ClientOnly>

      {/* ✨ Frosted Glass Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-20 backdrop-blur-sm bg-white/5 p-8 rounded-xl border border-white/10 shadow-xl text-center max-w-2xl w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 text-blue-300 drop-shadow"
        >
          Happy Birthday, Tuaaa! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-blue-100 mb-6"
        >
          A most special day of your 💙
        </motion.p>

        {/* 🎂 Cake */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Cake />
        </motion.div>

        {/* 🚪 Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="/gallery"
            className="px-6 py-2 bg-white text-black rounded-full border-2 border-blue-400 hover:bg-blue-100 hover:text-black transition-all shadow-lg hover:scale-105"
          >
            📸 Gallery
          </a>
          <a
            href="/letter"
            className="px-6 py-2 bg-white text-black rounded-full border-2 border-pink-400 hover:bg-pink-100 hover:text-black transition-all shadow-lg hover:scale-105"
          >
            💌 Letter
          </a>
          <a
            href="/quiz"
            className="px-6 py-2 bg-white text-black rounded-full border-2 border-purple-400 hover:bg-purple-100 hover:text-black transition-all shadow-lg hover:scale-105"
          >
            🧠 Quiz
          </a>
        </motion.div>
      </motion.div>

      {/* 🔊 Background Music */}
      <audio ref={audioRef} loop>
        <source src="/music/perfect.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* 🎛 Music Control Button */}
      {userInteracted && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-all"
          title={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? '🔊' : '🔈'}
        </button>
      )}
    </main>
  );
}
