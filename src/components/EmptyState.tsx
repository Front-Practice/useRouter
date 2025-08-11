import React from 'react'

const EmptyState: React.FC<{ message?: string }> = ({ message = 'Empty folder' }) => {
  return (
    <div className="rounded border bg-white p-8 text-center text-gray-500">
      {message}
    </div>
  )
}

export default React.memo(EmptyState)

