import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'

import { LivePreviewClient } from './LivePreviewClient'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'news',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const doc = docs[0]
  if (!doc) notFound()

  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000'

  return <LivePreviewClient initialData={doc} serverURL={serverURL} />
}
