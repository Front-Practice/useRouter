import React from 'react'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import EmptyState from '../../../../components/EmptyState'

const NewMode2 = () => {
  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-6">New Moda / 2025</h1>
      <EmptyState />
    </div>
  )
}

export default React.memo(NewMode2)