import React from 'react'
import './Navbar.css'

const falsarefe = "#"




const navbar = () => {


  const list = document.querySelectorAll('.list')
function activeLink(item) {
  list.forEach(() => 
  item.classList.remove('active'))
  this.classList.add('active')
}

list.forEach((item) => 
item.addEventListener('click', activeLink))

  return (
    <div className='bodyfalse'>
    <div className='navigation' >
      <ul>
        <li className='list active' >
          <a href={falsarefe}>
            <span className='icon' >
            <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className='text' >Home</span>
          </a>
        </li>
          <li className='list' >
          <a href={falsarefe}>
            <span className='icon' >
            <ion-icon name="logo-react"></ion-icon>
            </span>
            <span className='text' >Skills</span>
          </a>
        </li>
        <li className='list' >
        <a href={falsarefe}>
            <span className='icon' >
            <ion-icon name="logo-github"></ion-icon>
            </span>
            <span className='text' >Projects</span>
          </a>
        </li>
        <li className='list' >
        <a href={falsarefe}>
            <span className='icon' >
            <ion-icon name="chatbubbles-outline"></ion-icon>
            </span>
            <span className='text' >Topics</span>
          </a>
        </li>
        <li className='list' >
        <a href={falsarefe}>
            <span className='icon' >
            <ion-icon name="earth-outline"></ion-icon>
            </span>
            <span className='text' >Contact</span>
          </a>
        </li>
        <div className='indicator' ></div>
      </ul>
    </div>
    </div>
  )
}

export default navbar
