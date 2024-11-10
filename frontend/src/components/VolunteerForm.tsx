'use client'
import { useState, FormEvent, ChangeEvent } from 'react';

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="bg-blue-200 rounded-xl p-4 sm:p-8 w-full flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-800 font-bold mb-4 sm:mb-6">Volunteer!</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm sm:text-md md:text-lg">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 rounded" placeholder="Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm sm:text-md md:text-lg">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 rounded" placeholder="Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm sm:text-md md:text-lg">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 rounded" placeholder="Phone Number" />
        </div>
        <div className="mb-4">
          <label htmlFor="availability" className="block text-sm sm:text-md md:text-lg">Day Availability</label>
          <input type="text" id="availability" name="availability" value={formData.availability} onChange={handleChange} className="w-full p-2 rounded" placeholder="Day Availability" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full text-sm sm:text-md md:text-lg">Submit</button>
      </form>
    </div>
  );
}
