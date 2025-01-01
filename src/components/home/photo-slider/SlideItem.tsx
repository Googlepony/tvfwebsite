import React from 'react';

interface SlideItemProps {
  url: string;
  caption: string;
}

export function SlideItem({ url, caption }: SlideItemProps) {
  return (
    <div className="px-4">
      <div className="relative h-[400px]">
        <img
          src={url}
          alt={caption}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <p className="text-lg font-semibold">{caption}</p>
        </div>
      </div>
    </div>
  );
}