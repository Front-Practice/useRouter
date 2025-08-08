import React from 'react'
import { FileItem } from '../../components/fileItem'
import { Outlet } from 'react-router-dom'

const Documents = () => {
  return (
    <div>
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
        <Outlet/>
      </div>
    </div>
  )
}

export default React.memo(Documents)