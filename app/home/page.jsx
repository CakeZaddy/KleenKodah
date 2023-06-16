'use client'
import { getPosts } from '@/sanity/client'
import { PostCard, PostWidgets, Categories } from '../components'
import FeaturedPosts from '../components/FeaturedPosts'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'

export default async function Page() {
  const [posts, setPosts] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getPosts().then((result) => {
      setPosts(result)
      setDataLoaded(true)
    })
  }, [])

  posts.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))

  return (
    <main className='container mx-auto px-10 mb-8'>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          {dataLoaded &&
            posts.map((post) => <PostCard post={post} key={post._id} />)}
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
