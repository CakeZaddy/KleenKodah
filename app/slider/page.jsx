'use client'
import { getPosts } from '@/sanity/client'
import { PostCard, PostWidgets, Categories } from '../components'
import FeaturedPosts from '../components/FeaturedPosts'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'

export default async function Page() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const posts = await getPosts()
  posts.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))
  if (loading) {
    return <Loader />
  }

  return (
    <main className='container mx-auto px-10 mb-8'>
      <div className='col-span-1 lg:col-span-8'>
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </main>
  )
}
