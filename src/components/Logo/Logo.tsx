import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      width={200}
      height="auto"
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[12.5rem] w-full h-auto', className)}
      src="https://raw.githubusercontent.com/harshluhar/ams-search-vercel/refs/heads/main/public/ams-logo.png"
    />
  )
}
