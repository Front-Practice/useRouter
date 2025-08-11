import React from 'react'
import { useAppSelector } from '../store/hooks'
import type { RootSection } from '../store/foldersSlice'
import { FileItem } from './fileItem'

interface Props {
  section: RootSection
  basePath: string
  parentPath?: string
}

const DynamicFolders: React.FC<Props> = ({ section, basePath, parentPath = '' }) => {
  const folders = useAppSelector(s => s.folders.folders)
  const normalizedParent = parentPath.replace(/^\/+|\/+$/g, '')

  const list = folders.filter(f => {
    if (f.section !== section) return false
    const dir = f.path.includes('/') ? f.path.split('/').slice(0, -1).join('/') : ''
    return dir === normalizedParent
  })

  if (list.length === 0) return null

  return (
    <>
      {list.map(f => (
        <FileItem key={f.id} name={f.name} type="folder" path={`${basePath}/${f.path}`} />
      ))}
    </>
  )
}

export default React.memo(DynamicFolders)

