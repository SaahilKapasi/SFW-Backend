import Image from 'next/image';
import Link from 'next/link';
import thumbnailPlaceholder from '../../../public/images/max.png'; 

export default function NewslettersPage() {
  const newsletters = [
    { id: 1, name: 'Newsletter 1 Name', description: 'Newsletter 1 Description', date: 'DATE', image: thumbnailPlaceholder },
    { id: 2, name: 'Newsletter 2 Name', description: 'Newsletter 2 Description', date: 'DATE', image: thumbnailPlaceholder },
    { id: 3, name: 'Newsletter 3 Name', description: 'Newsletter 3 Description', date: 'DATE', image: thumbnailPlaceholder },
  ];

  return (
    <>
    <div className="bg-[#C6E1F4] pt-5 pb-5 md:pt-10 md:pb-10 flex flex-col items-center justify-center">
    <h1 className="font-bold text-3xl md:text-8xl text-[#1F457E] text-center">Newsletters</h1>
    </div>
    <div className="bg-[#97BDE7] min-h-screen p-5">
      <div className="max-w-6xl mx-auto">
        {newsletters.map((newsletter, index) => (
            <Link key={newsletter.id} href={`/newpages`} passHref>
          <div key={newsletter.id} className={`flex ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'} items-center bg-white p-5 rounded-xl shadow-lg mb-10`}>
            {/* Thumbnail image */}
            <div className="flex-1">
              <Image src={newsletter.image} alt="Newsletter Thumbnail" width={320} height={180} layout="responsive" className="rounded-lg" />
            </div>
            {/* Newsletter details */}
            <div className="flex-1 px-6">
              <h3 className="text-2xl text-[#1F457E] font-bold mb-3">{newsletter.name}</h3>
              <p className="text-gray-700 mb-2">{newsletter.description}</p>
              <span className="text-gray-600 text-sm">{newsletter.date}</span>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
