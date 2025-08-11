import React from 'react'
import { FileItem } from '../../../../components/fileItem'
import { useOutlet } from 'react-router-dom'

const family_2010 = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Videos / Family / 2010 Tashkent</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem name="wedding" type="folder" path="/videos/family/2010_tashkent/wedding" />
        <FileItem name="birthday" type="folder" path="/videos/family/2010_tashkent/birthday" />
      </div>
    </div>
  )
}

export default React.memo(family_2010)