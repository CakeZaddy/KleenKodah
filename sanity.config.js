import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schema } from './sanity/schema'
import { apiVersion, dataset, projectId } from './sanity/env'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  projectId,
  dataset,
  apiVersion: '2023-06-11',
  basePath: '/studio',
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema,
})
