import React from 'react'
import { FileItem } from '../../../components/fileItem'
import { useOutlet } from 'react-router-dom'

const NT = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Desktop / NT</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem name="projects" type="folder" path="/desktop/nt/projects" />
        <FileItem name="notes" type="folder" path="/desktop/nt/notes" />
      </div>
    </div>
  )
}

export default React.memo(NT)