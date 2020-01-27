import React, { useState, useEffect } from 'react'
import './toggle.css'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    if (window.localStorage.getItem('dark') === 'false') {
      setDark(false)
      document.body.className = 'light'
    }
  }, [])
  function toggle() {
    document.body.className = dark ? 'light' : ''
    window.localStorage.setItem('dark', dark ? 'false' : 'true')
    setDark(!dark)
  }
  return (
    <button onClick={toggle} className="dark-mode-toggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="dark-mode-icon"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z" />
      </svg>
    </button>
  )
}
