import { createClient, groq } from 'next-sanity'

import clientConfig from './config/client-config'

export async function getPosts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'post']{
    _id,
      title,
      author -> {
        name,
          'image': image.asset->url,
      },
    _createdAt,
    'slug': slug.current,
    'mainImage': mainImage.asset->url,
      description,
      
  }`
  )
}

export async function getPost(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'post' && slug.current == $slug][0]{
    _id,
      title,
      author -> {
        name,
          'image': image.asset->url,
          bio,
      },
    _createdAt,
    'slug': slug.current,
    'mainImage': mainImage.asset->url,
      description,
      body,
      
  }`,
    { slug }
  )
}

export async function getCategories() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'category']{
    _id,
      title,  
  }`
  )
}
