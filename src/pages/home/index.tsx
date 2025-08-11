import React, { useMemo, useState } from 'react'
import Modal from '../../components/Modal'
import { useAppDispatch } from '../../store/hooks'
import { addUser } from '../../store/usersSlice'
import { createFolder } from '../../store/foldersSlice'
import type { RootSection } from '../../store/foldersSlice'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const dispatch = useAppDispatch()
  const [openUser, setOpenUser] = useState(false)
  const [openFolder, setOpenFolder] = useState(false)

  // User form state
  const [name, setName] = useState('')
  const [age, setAge] = useState<number | ''>('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  // Folder form state
  const sectionOptions: RootSection[] = useMemo(() => ['desktop','documents','downloads','music','pictures','videos'], [])
  const [section, setSection] = useState<RootSection>('desktop')
  const [parentPath, setParentPath] = useState('')
  const [folderName, setFolderName] = useState('')

  const submitUser = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !age || !email || !address || !phone) return
    dispatch(addUser({ name, age: Number(age), email, address, phone }))
    setOpenUser(false)
    setName(''); setAge(''); setEmail(''); setAddress(''); setPhone('')
  }

  const submitFolder = (e: React.FormEvent) => {
    e.preventDefault()
    if (!folderName) return
    const fullPath = parentPath ? `${parentPath.replace(/^\/+|\/+$/g,'')}/${folderName}` : folderName
    dispatch(createFolder({ section, path: fullPath, name: folderName }))
    setOpenFolder(false)
    setFolderName(''); setParentPath(''); setSection('desktop')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={() => setOpenUser(true)} className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Add User</button>
        <button onClick={() => setOpenFolder(true)} className="rounded bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">New Folder</button>
      </div>

      {/* Users link only */}
      <div>
        <Link className="text-blue-600 hover:underline" to="/users">Go to Users</Link>
      </div>

      <Modal open={openUser} title="Add User" onClose={() => setOpenUser(false)}>
        <form onSubmit={submitUser} className="space-y-3">
          <div>
            <label className="mb-1 block text-sm">Name</label>
            <input className="w-full rounded border px-3 py-2" value={name} onChange={e=>setName(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-sm">Age</label>
            <input type="number" className="w-full rounded border px-3 py-2" value={age} onChange={e=>setAge(e.target.value ? Number(e.target.value) : '')} required />
          </div>
          <div>
            <label className="mb-1 block text-sm">Email</label>
            <input type="email" className="w-full rounded border px-3 py-2" value={email} onChange={e=>setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-sm">Address</label>
            <input className="w-full rounded border px-3 py-2" value={address} onChange={e=>setAddress(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-sm">Phone</label>
            <input className="w-full rounded border px-3 py-2" value={phone} onChange={e=>setPhone(e.target.value)} required />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={()=>setOpenUser(false)} className="rounded px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Create</button>
          </div>
        </form>
      </Modal>

      <Modal open={openFolder} title="New Folder" onClose={() => setOpenFolder(false)}>
        <form onSubmit={submitFolder} className="space-y-3">
          <div>
            <label className="mb-1 block text-sm">Section</label>
            <select className="w-full rounded border px-3 py-2" value={section} onChange={e=>setSection(e.target.value as RootSection)}>
              {sectionOptions.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm">Parent path inside section (optional)</label>
            <input placeholder="e.g. images or images/wallpapers" className="w-full rounded border px-3 py-2" value={parentPath} onChange={e=>setParentPath(e.target.value)} />
          </div>
          <div>
            <label className="mb-1 block text-sm">Folder name</label>
            <input className="w-full rounded border px-3 py-2" value={folderName} onChange={e=>setFolderName(e.target.value)} required />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={()=>setOpenFolder(false)} className="rounded px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-emerald-600 px-4 py-2 text-white">Create</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default React.memo(HomePage)