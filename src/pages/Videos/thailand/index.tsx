import React from 'react'
import { FileItem } from '../../../components/fileItem'
import { useOutlet } from 'react-router-dom'

const Thailand = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Videos / Thailand</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem name="day-1" type="folder" path="/videos/thailand/day-1" />
        <FileItem name="day-2" type="folder" path="/videos/thailand/day-2" />
      </div>
    </div>
  )
}

export default React.memo(Thailand)