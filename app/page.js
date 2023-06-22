import { Posts, PostWidgets, Categories } from './components'
import FeaturedPosts from './components/FeaturedPosts'

export default async function Page() {
  return (
    <main className='container mx-auto px-10 mb-8'>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <Posts />
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
