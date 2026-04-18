'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'

import type { News } from '@/payload-types'

type Props = {
  initialData: News
  serverURL: string
}

export const LivePreviewClient: React.FC<Props> = ({ initialData, serverURL }) => {
  const { data } = useLivePreview<News>({
    initialData,
    serverURL,
    depth: 2,
  })

  return (
    <article style={{ maxWidth: 720, margin: '0 auto', padding: '2rem 1rem' }}>
      <header>
        <p style={{ color: '#888', fontSize: 14 }}>
          {data.category} ・{' '}
          {data.publishStartAt ? new Date(data.publishStartAt).toLocaleString('ja-JP') : '—'}
        </p>
        <h1>{data.title}</h1>
        {data.excerpt && <p style={{ color: '#555' }}>{data.excerpt}</p>}
      </header>
      <pre
        style={{
          marginTop: '2rem',
          whiteSpace: 'pre-wrap',
          fontFamily: 'inherit',
          fontSize: 14,
          lineHeight: 1.7,
        }}
      >
        {JSON.stringify(data.content, null, 2)}
      </pre>
    </article>
  )
}
