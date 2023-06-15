import { getCategories } from '@/sanity/client'
import Link from 'next/link'

export default async function Categories() {
  const categories = await getCategories()

  categories.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Categories</h3>
      {categories?.map((category) => (
        <Link key={category._id} href={`/category/${category.title}`}>
          <span className='flex pb-3 mb-3 transition duration-500 hover:text-pink-600'>
            {category.title}
          </span>
        </Link>
      ))}
    </div>
  )
}
