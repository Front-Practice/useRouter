import React from 'react'
import { FileItem } from '../../../components/fileItem'
import { useOutlet } from 'react-router-dom'

const Screen = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Pictures / Screenshots</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem name="apps" type="folder" path="/pictures/screenshots/apps" />
        <FileItem name="games" type="folder" path="/pictures/screenshots/games" />
      </div>
    </div>
  )
}

export default React.memo(Screen)