
// import Image from 'next/image'

import Link from "next/link";

// import profile from '@/assets/profile.png'

export default function Home() {
  const title = "Hi There, Ujawal Here!";
  return (
    <div className="flex h-screen">
      <div className="flex m-auto">
        <div className="image mr-8"> {/* Added margin-right for spacing */}
          {/* <Image src={profile} alt='Profile' priority/> */}
        </div>
        <div> {/* Wrapped text and button in a div */}
          <h1 className="text-red-800 text-4xl font-normal hover:font-bold bg-none">
            {title.split("").map((char, index) => (
              <span key={index} className={`fade-in ${char.trim() ? 'colorful-text' : ''}`} style={{ animationDelay: `${index * 0.5}s`, marginRight: char.trim() ? '0' : '0.25rem' }}>
                {char}
              </span>
            ))}
          </h1>
          <br />
          <p className="text-blue-800 text-3xl">
            I am a Software Developer.
          </p>
          <br />
          <Link href= '/about'><button className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-slate-300 transition duration-300 ease-in-out">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
