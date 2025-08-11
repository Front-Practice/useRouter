import React from 'react'
import { FileItem } from '../../../components/fileItem'
import { useOutlet } from 'react-router-dom'

const Wallpaper = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Pictures / Wallpapers</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem name="nature" type="folder" path="/pictures/wallpapers/nature" />
        <FileItem name="abstract" type="folder" path="/pictures/wallpapers/abstract" />
      </div>
    </div>
  )
}

export default React.memo(Wallpaper)