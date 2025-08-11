import React from 'react'
import { FileItem } from '../../components/fileItem'
import { useOutlet } from 'react-router-dom'
import DynamicFolders from '../../components/DynamicFolders'
import Breadcrumbs from '../../components/Breadcrumbs'

const Pictures = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-6">Pictures</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem 
          name="downloads" 
          type="folder" 
          path="/pictures/downloads" 
        />
        <FileItem 
          name="screenshots" 
          type="folder" 
          path="/pictures/screenshots" 
        />
        <FileItem 
          name="wallpapers" 
          type="folder" 
          path="/pictures/wallpapers" 
        />
        <DynamicFolders section="pictures" basePath="/pictures" />
      </div>
    </div>
  )
}

export default React.memo(Pictures)