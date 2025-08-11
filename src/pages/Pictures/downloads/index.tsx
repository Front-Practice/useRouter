import React from 'react'
import { FileItem } from '../../../components/fileItem'
import { useOutlet } from 'react-router-dom'

const Downloads = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Pictures / Downloads</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem name="memes" type="folder" path="/pictures/downloads/memes" />
        <FileItem name="stickers" type="folder" path="/pictures/downloads/stickers" />
      </div>
    </div>
  )
}

export default React.memo(Downloads)