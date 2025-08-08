import React from 'react'
import { FileItem } from '../../components/fileItem'
import { Outlet } from 'react-router-dom'

const Videos = () => {
  return (
    <div>
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
        <Outlet/>
      </div>
    </div>
  )
}

export default React.memo(Videos)