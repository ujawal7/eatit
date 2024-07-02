import Head from 'next/head'
import Image from 'next/image'

import Naruto from '@/assets/naruto_logo.png'
import Talkies from '@/assets/talkies.png'
import Portfoli from '@/assets/html_portfoli.png'

const Portfolio = () => {
  return (
    <div className="bg-transparent p-5">
      <Head>
        <title>My Portfolio</title>
      </Head>

      <div className="text-center text-3xl font-bold my-5">
        MY PORTFOLIO
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Add Image components for each portfolio item here */}
        {/* Example for one item: */}
        <div className=" p-4 flex justify-center items-center">
          {/* Replace with actual path to your image */}
          <Image src= { Naruto } alt="Description" width={50} height={50} />
        </div>
        <div className=" p-4 flex justify-center items-center border-4 border-green-500">
          {/* Replace with actual path to your image */}
          <Image src={ Talkies }  alt="Description" width={300} height={300} />
        </div>
        <div className=" p-4 flex justify-center items-center">
          {/* Replace with actual path to your image */}
          <Image src= {Portfoli} alt="Description" width={300} height={300} />
        </div>
        <div className="bg-gray-100 p-4 flex justify-center items-center">
          {/* Replace with actual path to your image */}
          <Image src="/path-to-your-image.jpg" alt="Description" width={100} height={100} />
        </div>
        <div className="bg-gray-100 p-4 flex justify-center items-center">
          {/* Replace with actual path to your image */}
          <Image src="/path-to-your-image.jpg" alt="Description" width={100} height={100} />
        </div>
        <div className="bg-gray-100 p-4 flex justify-center items-center">
          {/* Replace with actual path to your image */}
          <Image src="/path-to-your-image.jpg" alt="Description" width={100} height={100} />
        </div>
        
        {/* Repeat above div for each portfolio item */}
        {/* Add more items here */}
        
      </div>
    </div>
  )
}

export default Portfolio
