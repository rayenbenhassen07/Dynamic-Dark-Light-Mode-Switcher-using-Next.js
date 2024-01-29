"use client"
import styles from './Navbar.module.css'
import blackLogo from './img/blackLogo.png'
import whiteLogo from './img/whiteLogo.png'
import Link from 'next/link'
import { links } from './data'
import Image from 'next/image'
import 'boxicons/css/boxicons.min.css'
import DarkModeToggle from '../darkModeToggle/darkModeToggle'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export default function Navbar() {

  const {mode} =  useContext(ThemeContext)
  return (
    <div className={styles.navbar}>

      
      {mode === "dark" ? <Link href="/"><Image src={whiteLogo} className={styles.navbarLogo} alt="Black Logo" /></Link> :  <Link href="/"><Image src={blackLogo} className={styles.navbarLogo} alt="Black Logo" /></Link> }
      

      <div className={styles.navbarUl}>

        <div className={styles.toolParty}>

          <div className={styles.toolClick}>  
          <Link href="/" className={styles.menuType1}>Tools  <i class='bx bxs-chevron-down'></i></Link>
          </div>

          <div className={styles.toolblaka}>
            <Link href="/" className={styles.toolType}><i class='bx bx-images'></i> Remove Background</Link>
            <Link href="/" className={styles.toolType}><i class='bx bx-images'></i> Recolor Image</Link>
            <Link href="/" className={styles.toolType}><i class='bx bx-images'></i> Image Upscaler</Link>
          </div>

        </div>
        
        {links.map(link => 
          <Link key={link.id} href={link.url} className={styles.menuType}>{link.title}</Link>
          )}

        <DarkModeToggle/> 
        <div className={styles.auth}>
          
          <Link href="/login"><button class={styles.buttonL}>Log in</button></Link>
          <Link href="/signup"><button class={styles.buttonS}>Sign up</button></Link>
        </div>
        
      </div>

      

          
    </div>
  )
}
