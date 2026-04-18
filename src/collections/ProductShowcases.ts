import type { CollectionConfig } from 'payload'

import { publishControlFields } from './fields/publishControl'

export const ProductShowcases: CollectionConfig = {
  slug: 'product-showcases',
  labels: {
    singular: '商品紹介',
    plural: '商品紹介一覧',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'product', 'status', 'publishStartAt', 'publishEndAt'],
    livePreview: {
      url: ({ data }) => {
        const base = process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000'
        return `${base}/product-showcases/${data?.slug ?? ''}?preview=true`
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'タイトル',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'スラッグ',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'product',
      label: '対象商品',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
    {
      name: 'heroImage',
      label: 'ヒーロー画像',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'lead',
      label: 'リード文',
      type: 'textarea',
    },
    {
      name: 'content',
      label: '本文',
      type: 'richText',
    },
    ...publishControlFields,
  ],
}
