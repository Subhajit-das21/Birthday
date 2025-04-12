'use client';
import { useState } from 'react';
import Image from 'next/image';

const images = [
  require('@/assets/gallery/img1.jpg'),
  require('@/assets/gallery/img2.jpg'),
  require('@/assets/gallery/img3.jpg'),
  require('@/assets/gallery/img4.jpg'),
  require('@/assets/gallery/img5.jpg'),
  require('@/assets/gallery/img6.jpg'),
  require('@/assets/gallery/img7.jpg'),
  require('@/assets/gallery/img8.jpg'),
  require('@/assets/gallery/img9.jpg'),
];

export default function GalleryGrid() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} onClick={() => setSelectedImg(src)} className="cursor-pointer">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="rounded-lg shadow-md transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <Image
            src={selectedImg}
            alt="Selected"
            className="rounded-lg max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
}
