import React from 'react'
import { FileItem } from '../../components/fileItem'
import { useOutlet } from 'react-router-dom'
import DynamicFolders from '../../components/DynamicFolders'
import Breadcrumbs from '../../components/Breadcrumbs'
const Music = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-6">Music</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem 
          name="1990" 
          type="folder" 
          path="/music/1990" 
        />
        <FileItem 
          name="2018" 
          type="folder" 
          path="/music/2018" 
        />
        <FileItem 
          name="newModa" 
          type="folder" 
          path="/music/newModa" 
        />
        <DynamicFolders section="music" basePath="/music" />
      </div>
    </div>
  )
}

export default React.memo(Music)