import React from 'react'
import { FileItem } from '../../../components/fileItem'
import { useOutlet } from 'react-router-dom'
import Breadcrumbs from '../../../components/Breadcrumbs'
import DynamicFolders from '../../../components/DynamicFolders'
import EmptyState from '../../../components/EmptyState'

const Eight = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-6">Music / 2018</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem name="hiphop" type="folder" path="/music/2018/hiphop" />
        <FileItem name="lofi" type="folder" path="/music/2018/lofi" />
        <DynamicFolders section="music" basePath="/music" parentPath="2018" />
      </div>
      <div className="mt-4">
        <EmptyState message="Empty folder" />
      </div>
    </div>
  )
}

export default React.memo(Eight)