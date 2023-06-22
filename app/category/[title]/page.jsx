// import { Categories, PostCard } from '@/app/components'
// import { getCategoryPosts } from '@/sanity/client'
// import React from 'react'

// export default async function Category({ params }) {
//   const category = params.post
//   const posts = await getCategoryPosts(category)
//   console.log(posts)

//   posts.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))

//   return (
//     <div className='container mx-auto px-10 mb-8'>
//       <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
//         <div className='col-span-1 lg:col-span-8'>
//           {posts.map((post) => (
//             <PostCard key={post._id} post={post} />
//           ))}
//         </div>
//         <div className='col-span-1 lg:col-span-4'>
//           <div className='relative lg:sticky top-8'>
//             <Categories />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
