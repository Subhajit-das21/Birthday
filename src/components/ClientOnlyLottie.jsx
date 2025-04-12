'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function ClientOnlyLottie({ animationData, ...props }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <Lottie animationData={animationData} {...props} />;
}
