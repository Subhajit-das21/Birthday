'use client';

import BackgroundMusic from './BackgroundMusic';

export default function ClientProviders({ children }) {
  return (
    <div suppressHydrationWarning>
      <BackgroundMusic />
      {children}
    </div>
  );
}
