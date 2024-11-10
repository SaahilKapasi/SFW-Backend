'use client'
import { useSearchParams } from 'next/navigation';

export default function NewsletterPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div>
      <h1>Newsletter {id}</h1>
    </div>
  );
};