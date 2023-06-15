import moment from 'moment'
import Link from 'next/link'
import { getPosts } from '@/sanity/client'
import Image from 'next/image'

export default async function PostWidgets({ categories, slug }) {
  const posts = await getPosts()
  let filteredPosts = posts

  filteredPosts.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))

  const cutPosts = filteredPosts.slice(0, 5)

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {/* {slug ? 'Related Posts' : 'Recent Posts'} */}
        Recent Posts
      </h3>
      {cutPosts.map((post) => (
        <div key={post.key} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <Image
              alt={post.title}
              height={60}
              width={60}
              className='align-middle rounded-lg'
              src={post.mainImage}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'>
              {moment(post._createdAt).format('MMM DD, YYYY')}{' '}
            </p>
            <Link
              href={`/posts/${post.slug}`}
              className='text-md transition duration-500 hover:text-pink-600'
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
