import { create } from 'zustand'

type Project = { id: string; name: string }

type ProjectState = {
  projects: Project[]
  setProjects: (projects: Project[]) => void
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
}))
