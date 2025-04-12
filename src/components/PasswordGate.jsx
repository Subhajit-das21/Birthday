'use client';
import { useState } from 'react';

export default function PasswordGate({ children }) {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleCheck = () => {
    if (password === 'August28th') {
      setIsUnlocked(true);
    } else {
      alert('Oops! Wrong password.');
    }
  };

  if (isUnlocked) return children;

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white text-center px-4">
      <h2 className="text-2xl font-semibold mb-4">Enter the Secret Password 🔒</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border border-white bg-transparent rounded mb-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Password"
      />
      <button onClick={handleCheck} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Unlock
      </button>
    </div>
  );
}
