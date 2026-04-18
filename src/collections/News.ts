import type { CollectionConfig } from 'payload'

import { publishedOnly } from './access/publishedOnly'
import { publishControlFields } from './fields/publishControl'

export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: 'ニュース',
    plural: 'ニュース一覧',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'publishStartAt', 'publishEndAt'],
    livePreview: {
      url: ({ data }) => {
        const base = process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000'
        return `${base}/news/${data?.slug ?? ''}?preview=true`
      },
    },
  },
  access: {
    read: publishedOnly,
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
      name: 'category',
      label: 'カテゴリ',
      type: 'select',
      required: true,
      defaultValue: 'announcement',
      options: [
        { label: 'お知らせ', value: 'announcement' },
        { label: 'プレスリリース', value: 'press' },
        { label: 'イベント', value: 'event' },
        { label: 'メディア掲載', value: 'media' },
      ],
    },
    {
      name: 'thumbnail',
      label: 'サムネイル',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'excerpt',
      label: '抜粋',
      type: 'textarea',
      admin: {
        description: '一覧ページ等で表示する短い要約',
      },
    },
    {
      name: 'content',
      label: '本文',
      type: 'richText',
      required: true,
    },
    ...publishControlFields,
  ],
}
