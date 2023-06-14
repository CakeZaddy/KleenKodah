import { getPosts } from '@/sanity/client'
import { PostCard, PostWidgets, Categories } from './components'
import Image from 'next/image'
import FeaturedPosts from './components/FeaturedPosts'
import FeaturedPostCard from './components/FeaturedPostCard'

export default async function Home() {
  const posts = await getPosts()

  posts.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))

  return (
    <main className='container mx-auto px-10 mb-8'>
      {/* <FeaturedPosts /> */}
      {/* {posts?.map((post) => (
        <FeaturedPostCard post={post} key={post._id} />
      ))} */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts?.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <PostWidgets />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  )
}
