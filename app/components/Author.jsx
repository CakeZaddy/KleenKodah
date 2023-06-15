import Image from 'next/image'
import React from 'react'
import PortableText from 'react-portable-text'

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-50'>
      <div className='absolute left-0 right-0 -top-16'>
        <div className='flex justify-center items-center'>
          <Image
            src={author.image}
            height={100}
            width={100}
            className='rounded-full'
          />
        </div>
      </div>
      <h3 className='text-white mt-6 mb-4 text-xl font-bold'>{author.name}</h3>
      <PortableText
        className='text-white text-lg'
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={author.bio}
      />
    </div>
  )
}

export default Author
