import React from 'react'
import { FileItem } from '../../../components/fileItem'
import { useOutlet } from 'react-router-dom'

const Homework = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Desktop / Homework</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <FileItem name="week-1" type="folder" path="/desktop/homework/week-1" />
        <FileItem name="week-2" type="folder" path="/desktop/homework/week-2" />
      </div>
    </div>
  )
}

export default React.memo(Homework)