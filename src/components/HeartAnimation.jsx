'use client';
import React, { useEffect } from 'react';

export default function HeartAnimation() {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'fixed bottom-0 left-1/2 text-pink-400 text-2xl animate-pulse pointer-events-none';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animation = 'floatHeart 3s linear forwards';
      heart.textContent = '💖';
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 3000);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return null;
}
