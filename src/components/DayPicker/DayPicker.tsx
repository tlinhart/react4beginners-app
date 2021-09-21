import React from 'react'
import classNames from 'classnames'
import Calendar from 'react-calendar'
import { Store } from '../../Store'

import 'react-calendar/dist/Calendar.css'
import './DayPicker.css'

export interface DayPickerProps {
  className?: string
  selectedDay: Date | null
  onSelectDay: (day: Date | null) => void
  store: Store
}

export function DayPicker(props: DayPickerProps) {
  const { className, store } = props

  // TODO:
  // - Integrate a react-calendar library (don't forget to import it's CSS)
  // - Lift the state containing picked day up via props
  // - Use `tileClassName` prop to set certain class name if day has a prop and other class name if it doesn't

  // Class name tips:
  // - day-picker
  // - day-picker__day--non-empty
  // - day-picker__day--empty

  const { selectedDay, onSelectDay } = props;

  return (
    <Calendar
      className={classNames('day-picker', className)}
      value={selectedDay}
      onChange={onSelectDay}
      tileClassName={(props) => {
        return store.hasNote(props.date)
          ? 'day-picker__day--non-empty'
          : 'day-picker__day--empty'
      }}
    />
  )
}
