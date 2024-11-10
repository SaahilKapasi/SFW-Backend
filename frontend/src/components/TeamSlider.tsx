'use client'
import { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
    { src: '/images/baylee.png', name: 'Baylee', role: 'Co-President' },
    { src: '/images/jennifer.png', name: 'Jennifer', role: 'Sponsorship Director' },
    { src: '/images/pallavi.png', name: 'Pallavi', role: 'Sponsorship Director' },
    { src: '/images/max.png', name: 'Max', role: 'Finance Director' },
    { src: '/images/fatima.png', name: 'Fatima', role: 'Marketing Director' },
]

export default function TeamSlider() {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % teamMembers.length)
    }
  
    const prevImage = () => {
      setCurrentImage((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
    }
  return (
    <div className='bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-10 space-y-4'>
      <div className="image-container" style={{ width: '300px', height: '300px', position: 'relative', overflow: 'hidden' }}>
        <Image src={teamMembers[currentImage].src} layout="fill" objectFit="cover" alt="Team" />
      </div>
      <div className="text-center">
        <p className="text-xl font-bold">{teamMembers[currentImage].name}</p>
        <p className="text-lg">{teamMembers[currentImage].role}</p>
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={prevImage} className="px-4 py-2 rounded bg-[#1F457E] text-white">Previous</button>
        <button onClick={nextImage} className="px-4 py-2 rounded bg-[#1F457E] text-white">Next</button>
      </div>
    </div>
  )
}