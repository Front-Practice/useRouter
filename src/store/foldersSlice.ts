import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type RootSection = 'desktop' | 'documents' | 'downloads' | 'music' | 'pictures' | 'videos'

export interface Folder {
  id: string
  section: RootSection
  // full path under the section, e.g., "fullstack", "images/wallpapers"
  path: string
  name: string
}

export interface FoldersState {
  folders: Folder[]
}

const initialState: FoldersState = {
  folders: [],
}

export const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    createFolder: {
      prepare: (data: Omit<Folder, 'id'>) => ({ payload: { id: nanoid(), ...data } }),
      reducer: (state, action: PayloadAction<Folder>) => {
        state.folders.push(action.payload)
      },
    },
    removeFolder: (state, action: PayloadAction<string>) => {
      state.folders = state.folders.filter(f => f.id !== action.payload)
    },
    clearFolders: state => {
      state.folders = []
    },
  },
})

export const { createFolder, removeFolder, clearFolders } = foldersSlice.actions
export default foldersSlice.reducer

