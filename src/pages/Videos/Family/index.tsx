import React from 'react'
import { useOutlet } from 'react-router-dom'
import { FileItem } from '../../../components/fileItem'
import Breadcrumbs from '../../../components/Breadcrumbs'
import DynamicFolders from '../../../components/DynamicFolders'
import EmptyState from '../../../components/EmptyState'

const Family = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-6">Family</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem name="2010_tashkent" type="folder" path="/videos/family/2010_tashkent" />
        <DynamicFolders section="videos" basePath="/videos" parentPath="family" />
      </div>
      <div className="mt-4">
        <EmptyState message="Empty folder" />
      </div>
    </div>
  )
}

export default React.memo(Family)