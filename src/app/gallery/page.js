'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import img1 from '@/assets/gallery/img1.jpg';
import img2 from '@/assets/gallery/img2.jpg';
import img3 from '@/assets/gallery/img3.jpg';
import img4 from '@/assets/gallery/img4.jpg';
import img5 from '@/assets/gallery/img5.jpg';
import img6 from '@/assets/gallery/img6.jpg';
import img7 from '@/assets/gallery/img7.jpg';
import img8 from '@/assets/gallery/img8.jpg';
import img9 from '@/assets/gallery/img9.jpg';
import img10 from '@/assets/gallery/img10.jpg';
import img11 from '@/assets/gallery/img11.jpg';
import img12 from '@/assets/gallery/img12.jpg';

const images = [
  { src: img1.src },
  { src: img2.src },
  { src: img3.src },
  { src: img4.src },
  { src: img5.src },
  { src: img6.src },
  { src: img7.src },
  { src: img8.src },
  { src: img9.src },
  { src: img10.src },
  { src: img11.src },
  { src: img12.src },
];

export default function GalleryPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const handleUnlock = () => {
    if (password === 'August28th') {
      setUnlocked(true);
    } else {
      alert('Wrong password! Try again 💙');
    }
  };

  useEffect(() => {
    if (unlocked && audioRef.current) {
      const playAudio = async () => {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.log('Auto-play failed:', err);
        }
      };
      playAudio();
    }
  }, [unlocked]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!unlocked) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-black to-zinc-900 text-white text-center space-y-4">
        <h1 className="text-3xl font-bold text-pink-400 animate-pulse">Private Gallery 🔐</h1>
        <p className="text-sm text-gray-400">This space is just for you, Tuaaa 💙</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded border border-gray-500 bg-white text-black w-64 text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter password"
        />
        <button
          onClick={handleUnlock}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
        >
          Unlock Gallery
        </button>
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-black to-zinc-800 text-white relative overflow-hidden">
      <h1 className="text-4xl font-bold mb-4 text-pink-400">Your Moments 📸</h1>
      <p className="text-sm text-gray-400 mb-6">Every smile here tells a story 💫</p>

      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <PhotoView key={idx} src={image.src}>
              <Image
                src={image.src}
                alt={`Gallery Image ${idx + 1}`}
                width={300}
                height={200}
                className="cursor-pointer rounded-lg shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 object-cover"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>

      <Link
        href="/"
        className="mt-8 inline-block px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-all"
      >
        ← Back to Home
      </Link>

      {/* Music */}
      <audio ref={audioRef} loop>
        <source src="/music/your-music-file.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-all"
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? '🔊' : '🔈'}
      </button>
    </div>
  );
}
