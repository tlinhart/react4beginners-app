import { useCallback, useEffect, useMemo, useState } from "react"

export interface Store {
  hasNote(day: Date): boolean
  saveNote(note: string, day: Date): void
  getNote(day: Date): string | null
}

type NotesPerDay = { [dayTimestamp: number]: string }
const NOTES_PER_DAY_KEY = '@done-app/notes-per-day'

function load() {
  try {
    return JSON.parse(localStorage.getItem(NOTES_PER_DAY_KEY) ?? '{}')
  } catch (err) {
    console.error(err)
    return {}
  }
}

function store(state: NotesPerDay) {
  localStorage.setItem(NOTES_PER_DAY_KEY, JSON.stringify(state))
}

export function useStoreProvider(): Store {
  const [notesPerDay, setNotesPerDay] = useState<NotesPerDay>(load())
  
  useEffect(() => {
    store(notesPerDay)
  }, [notesPerDay])

  const hasNote = useCallback((day: Date): boolean => {
    const note = notesPerDay[day.getTime()]
    return (note?.length ?? 0) > 0
  }, [notesPerDay])

  const saveNote = useCallback((note: string, day: Date) => {
    setNotesPerDay((notesPerDay) => {
      return {
        ...notesPerDay,
        [day.getTime()]: note
      }
    })
  }, [])

  const getNote = useCallback((day: Date): string | null => {
    return notesPerDay[day.getTime()] ?? null
  }, [notesPerDay])

  return useMemo(() => ({
    hasNote,
    saveNote,
    getNote
  }), [hasNote, saveNote, getNote])
}