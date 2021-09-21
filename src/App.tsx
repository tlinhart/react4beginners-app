import React from 'react'

import './App.css'
import { DayPicker, NavBar, NoteView } from './components'
import { formatDay } from './utils'
import { useStoreProvider } from './Store'

export function App() {

  // Challenge 1: Import and render NoteView and NavBar
  // Challenge 2: Comment out NoteView and import and render DayPicker
  // Challenge 3: Lift state up from DayPicker here and pass it to DayPicker and NoteView
  // Challenge 4: Use API from `store.ts` to store the notes

  // Class name tips:
  // - app__navbar
  // - app__content

  const [selectedDay, selectDay] = React.useState<Date | null>(null);

  const store = useStoreProvider();

  const title = React.useMemo(() => {
    return selectedDay !== null ? formatDay(selectedDay) : 'Done App';
  }, [selectedDay]);

  const handleBack = React.useCallback(() => {
    selectDay(null)
  }, [selectDay]);

  return (
    <div className="app">
      <NavBar
        className='app__navbar'
        title={title}
        canGoBack={selectedDay !== null}
        onBack={handleBack}
      />
      {!selectedDay && (
        <DayPicker
          className='app__content'
          selectedDay={selectedDay}
          onSelectDay={selectDay}
          store={store}
        />
      )}
      {selectedDay && <NoteView store={store} selectedDay={selectedDay} className='app__content' />}
    </div>
  )
}

export default App
