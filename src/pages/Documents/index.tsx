import React from 'react'
import { FileItem } from '../../components/fileItem'
import { useOutlet } from 'react-router-dom'
import DynamicFolders from '../../components/DynamicFolders'
import Breadcrumbs from '../../components/Breadcrumbs'

const Documents = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-6">Documents</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem 
          name="important" 
          type="folder" 
          path="/documents/important" 
        />
        <FileItem 
          name="monthly" 
          type="folder" 
          path="/documents/monthly" 
        />
        <DynamicFolders section="documents" basePath="/documents" />
      </div>
    </div>
  )
}

export default React.memo(Documents)