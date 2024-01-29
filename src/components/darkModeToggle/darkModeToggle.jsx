"use client"
import React, { useContext } from 'react'
import styles from './DarkModeToggle.css'
import { ThemeContext } from '@/context/ThemeContext'

export default function DarkModeToggle() {
    const { toggle} = useContext(ThemeContext)
  return (
    

    <label class="switch">
    <input type="checkbox" onClick={toggle}/>
    <span class="slider"></span>
    </label>

   
  )
}

