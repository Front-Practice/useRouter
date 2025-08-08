import React from 'react'
import { FileItem } from '../../components/fileItem'
import { Outlet } from 'react-router-dom'

const Downloads = () => {
  return (
    <div>
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
        <Outlet/>
      </div>
    </div>
  )
}

export default React.memo(Downloads)