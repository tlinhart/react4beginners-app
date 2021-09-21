import React from 'react'
import classnames from 'classnames'

import './NavBar.css'
import leftArrow from '../../assets/left-arrow.svg'
import logo from '../../assets/logo.svg'

export interface NavBarProps {
  className?: string
  title: string
  canGoBack: boolean
  onBack?: () => void
}

export function NavBar(props: NavBarProps) {
  const { className, title, canGoBack, onBack } = props

  // TODO:
  // - Define a prop to receive title (string), button whether to display back button (boolean) and action to do when back button is clicked (function)
  // - Render the title
  // - Render back button if can go back with icon located in ../../assets/left-arrow.svg
  // - Render a logo if can't go back, located in ../../assets/logo.svg

  // Tips for classnames:
  // - navbar__back-btn
  // - navbar__back-btn__icon
  // - navbar__logo
  // - navbar__label

  return (
    <nav className={classnames("navbar", className)}>
      {canGoBack && (
          <button className='navbar__back-btn' onClick={onBack}>
            <img src={leftArrow} alt='Back icon' className='navbar__back-btn__icon' />
          </button>
      )}
      {!canGoBack && (
        <img src={logo} alt='Logo' className='navbar__logo' />
      )}
      <h1 className='navbar__label'>
        {title}
      </h1>
    </nav>
  )
}
