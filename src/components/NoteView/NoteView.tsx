import classNames from 'classnames';
import React from 'react';
import { Store } from '../../Store';

import './NoteView.css';

export interface NoteViewProps {
  className?: string
  selectedDay: Date
  store: Store
}

export function NoteView(props: NoteViewProps) {
  const { className, selectedDay, store } = props

  const { getNote, saveNote } = store
  
  const [note, setNote] = React.useState(
    getNote(selectedDay) ?? ''
  );

  React.useEffect(() => {
    saveNote(note, selectedDay);
  }, [note, saveNote, selectedDay]);
  
  return (
    <section className={classNames("note-view", className)}>
      <textarea
        className='note-view__textarea'
        placeholder="What have you done this day?"
        autoFocus
        value={note}
        onChange={(event) => { setNote(event.target.value) }}
      />
    </section>
  )
}
