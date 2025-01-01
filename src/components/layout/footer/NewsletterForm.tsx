import React from 'react';

export function NewsletterForm() {
  return (
    <form className="flex">
      <input
        type="email"
        placeholder="Your email"
        className="px-4 py-2 rounded-l-md w-full text-black"
      />
      <button
        type="submit"
        className="bg-[#FFD101] text-black px-4 py-2 rounded-r-md hover:bg-opacity-90"
      >
        Subscribe
      </button>
    </form>
  );
}