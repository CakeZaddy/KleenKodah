import { createClient, groq } from 'next-sanity'

export async function getProjects() {
  const client = createClient({
    projectId: 'k56muow6',
    dataset: 'testing',
    apiVersion: '2023-06-11',
  })

  return client.fetch(
    groq`*[_type == 'project']{
    _id,
    _createdAt,
    name,
    'slug': slug.current,
    'image': image.asset->url,
    url,
    content
   }`
  )
}
