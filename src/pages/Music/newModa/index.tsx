import React from 'react'
import { FileItem } from '../../../components/fileItem'
import { useOutlet } from 'react-router-dom'
import Breadcrumbs from '../../../components/Breadcrumbs'
import DynamicFolders from '../../../components/DynamicFolders'
import EmptyState from '../../../components/EmptyState'

const NewModa = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-6">New Moda</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem name="2022" type="folder" path="/music/newModa/2022" />
        <FileItem name="2025" type="folder" path="/music/newModa/2025" />
        <DynamicFolders section="music" basePath="/music" parentPath="newModa" />
      </div>
      <div className="mt-4">
        <EmptyState message="Empty folder" />
      </div>
    </div>
  )
}

export default React.memo(NewModa)
