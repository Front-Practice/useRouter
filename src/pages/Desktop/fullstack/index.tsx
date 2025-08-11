import React from 'react'
import { FileItem } from '../../../components/fileItem'
import { useOutlet } from 'react-router-dom'

const FullStack = () => {
  const outlet = useOutlet()
  if (outlet) return <>{outlet}</>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">FullStack</h1>
      <div className="grid grid-cols-4 gap-4">
        <FileItem name="1-lesson" type="folder" path="/desktop/fullstack/1-lesson" />
        <FileItem name="2-lesson" type="folder" path="/desktop/fullstack/2-lesson" />
        <FileItem name="3-lesson" type="folder" path="/desktop/fullstack/3-lesson" />
        <FileItem name="4-lesson" type="folder" path="/desktop/fullstack/4-lesson" />
        <FileItem name="5-lesson" type="folder" path="/desktop/fullstack/5-lesson" />
        <FileItem name="6-lesson" type="folder" path="/desktop/fullstack/6-lesson" />
        <FileItem name="7-lesson" type="folder" path="/desktop/fullstack/7-lesson" />
        <FileItem name="8-lesson" type="folder" path="/desktop/fullstack/8-lesson" />
      </div>
    </div>
  )
}

export default React.memo(FullStack)