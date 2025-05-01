'use client';
import React, { useState } from 'react';

export default function BookingForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const res = await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) {
      alert('Request submitted successfully!');
      e.currentTarget.reset();
    } else {
      alert('Failed to send request. Try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" required type="text" placeholder="Your Name" className="p-4 rounded-md bg-white/80 text-black" />
        <input name="phone" required type="tel" placeholder="Phone Number" className="p-4 rounded-md bg-white/80 text-black" />
      </div>
      <input name="email" required type="email" placeholder="Email Address" className="p-4 rounded-md bg-white/80 text-black" />
      <input name="pickup" required type="text" placeholder="Pickup Location" className="p-4 rounded-md bg-white/80 text-black" />
      <input name="drop" required type="text" placeholder="Drop Location" className="p-4 rounded-md bg-white/80 text-black" />
      <input name="datetime" required type="datetime-local" className="p-4 rounded-md bg-white/80 text-black" />

      <div className="text-yellow-300 font-semibold mt-4">Select Cab Type</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {['Sedan', 'SUV', 'Luxury'].map((type, idx) => (
          <label key={idx}>
            <input name="cabType" type="radio" value={type} required className="hidden peer" />
            <div className="peer-checked:bg-yellow-500 peer-checked:text-black bg-white/80 text-gray-800 text-center p-4 rounded-lg font-bold shadow">
              {type}
            </div>
          </label>
        ))}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 bg-yellow-500 hover:bg-yellow-600 p-4 rounded-md font-bold text-black text-lg shadow-md"
      >
        {loading ? 'Sending...' : 'Get My Ride Quote'}
      </button>
    </form>
  );
}
