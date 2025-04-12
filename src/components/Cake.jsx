'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Cake() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    import('@/assets/cake.json').then((data) => {
      setAnimationData(data.default);
    });
  }, []);

  if (!animationData) return <p className="text-blue-900">Loading Cake... 🎂</p>;

  return (
    <div className="max-w-md mx-auto my-10">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
