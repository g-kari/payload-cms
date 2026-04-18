import type { CollectionConfig } from 'payload'

import { publishControlFields } from './fields/publishControl'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: '商品',
    plural: '商品一覧',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'sku', 'price', 'status', 'publishStartAt', 'publishEndAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: '商品名',
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
      admin: {
        description: 'URLに使用する識別子（例: product-001）',
      },
    },
    {
      name: 'sku',
      label: 'SKU',
      type: 'text',
      unique: true,
      index: true,
    },
    {
      name: 'price',
      label: '価格（税抜）',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'category',
      label: 'カテゴリ',
      type: 'select',
      options: [
        { label: 'アパレル', value: 'apparel' },
        { label: '雑貨', value: 'goods' },
        { label: '食品', value: 'food' },
        { label: 'その他', value: 'other' },
      ],
    },
    ...publishControlFields,
    {
      name: 'shortDescription',
      label: '短い説明',
      type: 'textarea',
    },
    {
      name: 'featuredImage',
      label: 'メイン画像',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      label: 'ギャラリー',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: '画像',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          label: 'キャプション',
          type: 'text',
        },
      ],
    },
  ],
}
