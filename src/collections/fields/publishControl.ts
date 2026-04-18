import type { Field } from 'payload'

export const publishControlFields: Field[] = [
  {
    name: 'status',
    label: '公開ステータス',
    type: 'select',
    required: true,
    defaultValue: 'draft',
    index: true,
    options: [
      { label: '下書き', value: 'draft' },
      { label: '公開中', value: 'published' },
      { label: 'アーカイブ', value: 'archived' },
    ],
  },
  {
    name: 'publishStartAt',
    label: '公開開始日時',
    type: 'date',
    index: true,
    admin: {
      date: { pickerAppearance: 'dayAndTime' },
      description: '未設定の場合は即時公開扱い',
    },
  },
  {
    name: 'publishEndAt',
    label: '公開終了日時',
    type: 'date',
    index: true,
    admin: {
      date: { pickerAppearance: 'dayAndTime' },
      description: '未設定の場合は終了日なし',
    },
  },
]
