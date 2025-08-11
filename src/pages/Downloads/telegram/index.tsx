import React from 'react'
import { FileItem } from '../../../components/fileItem'
import { useOutlet } from 'react-router-dom'
import Breadcrumbs from '../../../components/Breadcrumbs'
import DynamicFolders from '../../../components/DynamicFolders'
import EmptyState from '../../../components/EmptyState'

const Telegram = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-6">Downloads / Telegram</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem name="docs" type="folder" path="/downloads/telegram/docs" />
        <FileItem name="images" type="folder" path="/downloads/telegram/images" />
        <FileItem name="videos" type="folder" path="/downloads/telegram/videos" />
        <DynamicFolders section="downloads" basePath="/downloads" parentPath="telegram" />
      </div>
      <div className="mt-4">
        <EmptyState message="Empty folder" />
      </div>
    </div>
  )
}

export default React.memo(Telegram)