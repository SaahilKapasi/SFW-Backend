import { useState, FormEvent } from 'react';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-blue-300 rounded-xl p-4 sm:p-8 w-full flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-800 font-bold mb-4 sm:mb-6">Exclusive updates!</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="first-name" className="block text-sm sm:text-md md:text-lg">First Name:</label>
          <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full p-2 rounded" placeholder="First Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm sm:text-md md:text-lg">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 rounded" placeholder="Email" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full text-sm sm:text-md md:text-lg">Subscribe</button>
      </form>
    </div>
  );
}
