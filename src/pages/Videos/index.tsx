import React from 'react'
import { FileItem } from '../../components/fileItem'
import { useOutlet } from 'react-router-dom'
import DynamicFolders from '../../components/DynamicFolders'
import Breadcrumbs from '../../components/Breadcrumbs'

const Videos = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-6">Videos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem 
          name="family" 
          type="folder" 
          path="/videos/family" 
        />
        <FileItem 
          name="thailand" 
          type="folder" 
          path="/videos/thailand" 
        />
        <DynamicFolders section="videos" basePath="/videos" />
      </div>
    </div>
  )
}

export default React.memo(Videos)