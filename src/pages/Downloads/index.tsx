import React from 'react'
import { FileItem } from '../../components/fileItem'
import { useOutlet } from 'react-router-dom'
import DynamicFolders from '../../components/DynamicFolders'
import Breadcrumbs from '../../components/Breadcrumbs'

const Downloads = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-6">Downloads</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem 
          name="images" 
          type="folder" 
          path="/downloads/images" 
        />
        <FileItem 
          name="telegram" 
          type="folder" 
          path="/downloads/telegram" 
        />
        <DynamicFolders section="downloads" basePath="/downloads" />
      </div>
    </div>
  )
}

export default React.memo(Downloads)