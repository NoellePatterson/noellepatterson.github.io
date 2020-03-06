import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Toggle from 'react-toggle'
import './ThemeToggle.css'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ToggleBtn = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <Toggle
          defaultChecked={theme === 'dark'}
          className="custom-classname"
          icons={{
            checked: <FaMoon color="yellow" />,
            unchecked: <FaSun color="yellow" />,
          }}
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
        />
      </label>
    )}
  </ThemeToggler>
)
