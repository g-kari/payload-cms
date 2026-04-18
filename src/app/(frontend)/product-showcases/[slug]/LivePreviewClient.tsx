'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'

import type { ProductShowcase } from '@/payload-types'

type Props = {
  initialData: ProductShowcase
  serverURL: string
}

export const LivePreviewClient: React.FC<Props> = ({ initialData, serverURL }) => {
  const { data } = useLivePreview<ProductShowcase>({
    initialData,
    serverURL,
    depth: 2,
  })

  const product = typeof data.product === 'object' ? data.product : null

  return (
    <article style={{ maxWidth: 720, margin: '0 auto', padding: '2rem 1rem' }}>
      <header>
        <h1>{data.title}</h1>
        {product && (
          <p style={{ color: '#888', fontSize: 14 }}>
            対象商品: {product.name}（¥{product.price.toLocaleString('ja-JP')}）
          </p>
        )}
        {data.lead && <p style={{ color: '#555' }}>{data.lead}</p>}
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
