'use client'
import { getPosts } from '@/sanity/client'
import FeaturedPostCard from './FeaturedPostCard'
import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import 'swiper/css'
import { Pagination, Navigation } from 'swiper'
import Loader from './Loader'

export default function FeaturedPosts() {
  // const posts = await getPosts()

  // posts.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))

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

  return (
    <div className='mb-8'>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {posts.map((post) => (
          <SwiperSlide>
            <FeaturedPostCard post={post} key={post._id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
