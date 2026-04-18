import type { Access } from 'payload'

export const publishedOnly: Access = ({ req: { user } }) => {
  if (user) return true

  const now = new Date().toISOString()
  return {
    and: [
      { status: { equals: 'published' } },
      {
        or: [
          { publishStartAt: { exists: false } },
          { publishStartAt: { less_than_equal: now } },
        ],
      },
      {
        or: [
          { publishEndAt: { exists: false } },
          { publishEndAt: { greater_than_equal: now } },
        ],
      },
    ],
  }
}
