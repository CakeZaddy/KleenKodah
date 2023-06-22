'use client'
import React, { useEffect, useState } from 'react'
import moment from 'moment/moment'
import Link from 'next/link'
import Image from 'next/image'

import { getPosts } from '@/sanity/client'

export default function Posts() {
  // const posts = await getPosts()

  // const [mounted, steMounted] = useState(false)
  // useEffect(() => steMounted(true), [])

  const [posts, setPosts] = useState([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts()
      setPosts(fetchedPosts)
      setMounted(true)
    }

    fetchPosts()
  }, [])

  if (!mounted) {
    return null
  }

  posts.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))

  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </div>
  )
}

const PostCard = ({ post }) => (
  <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
    <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
      <Image
        src={post.mainImage}
        width={832}
        height={492}
        alt={post.title}
        className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
      />
    </div>
    <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
      <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
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
    <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
      {post.description}
    </p>
    <div className='text-center'>
      <Link href={`/posts/${post.slug}`}>
        <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer '>
          Continue Reading
        </span>
      </Link>
    </div>
  </div>
)
