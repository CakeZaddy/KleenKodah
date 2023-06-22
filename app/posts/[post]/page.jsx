import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidgets,
} from '@/app/components'
import { getPost } from '@/sanity/client'

export default async function Post({ params }) {
  const slug = params.post
  const post = await getPost(slug)

  return (
    <div className='container mx-auto px-2 lg:px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author} />
          {/* <CommentsForm slug={post.slug} /> */}
          {/* <Comments slug={post.slug} /> */}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <PostWidgets slug={post.slug} />
          <Categories />
        </div>
      </div>
    </div>
  )
}
