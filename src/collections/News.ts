import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: 'ニュース',
    plural: 'ニュース一覧',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', 'status', 'updatedAt'],
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
    {
      name: 'publishedAt',
      label: '公開日時',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'status',
      label: '公開ステータス',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: '下書き', value: 'draft' },
        { label: '公開中', value: 'published' },
      ],
    },
  ],
}
