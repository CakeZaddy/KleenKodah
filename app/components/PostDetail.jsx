import Image from 'next/image'
import React from 'react'
import moment from 'moment/moment'
import PortableText from 'react-portable-text'

const PostDetail = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <Image
          src={post.mainImage}
          width={832}
          height={492}
          className='object-top h-full w-full rounded-t-lg'
        />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-8 w-full'>
          <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <Image
              src={post.author.image}
              width={30}
              height={30}
              alt={post.author.name}
              className='align-middle rounded-full'
            />
            <p className='inline align-middle text-gray-700 ml-2 text-lg '>
              {post.author.name}
            </p>
          </div>
          <div className='font-medium text-gray-700'>
            {moment(post._createdAt).format('MMM DD, YYYY')}
          </div>
        </div>
        <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
        <PortableText
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          content={post.body}
          serializers={{
            h1: (props) => (
              <h1 className='text-3xl font-bold my-5' {...props} />
            ),
            h2: (props) => (
              <h2 className='text-2xl font-bold my-5' {...props} />
            ),
            h3: (props) => (
              <h3 className='text-2xl font-bold my-5' {...props} />
            ),
            normal: (props) => <p className=' mb-5' {...props} />,
            li: ({ children }) => (
              <li className='list-disc ml-4'>{children}</li>
            ),
            link: ({ href, children }) => (
              <a href={href} className='text-cyan-500 hover:underline'>
                {children}
              </a>
            ),
          }}
        />
      </div>
    </div>
  )
}

export default PostDetail
