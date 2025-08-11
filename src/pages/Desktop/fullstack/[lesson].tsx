import React from 'react'
import { useParams, Link } from 'react-router-dom'

const FullstackLesson = () => {
  const { lesson } = useParams()
  return (
    <div>
      <div className="mb-4">
        <Link className="text-blue-600 hover:underline" to="/desktop/fullstack">← Back to FullStack</Link>
      </div>
      <h2 className="text-xl font-semibold">{lesson}</h2>
      <p className="text-gray-600 mt-2">This is the {lesson} folder.</p>
    </div>
  )
}

export default React.memo(FullstackLesson)

