import { useContext, useState } from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { about } from '../../portfolio'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const { resume } = about
  console.log(resume)

  const toggleNavList = () => setShowNavList(!showNavList)

  const handleResume = () => {
    window.open('https://drive.google.com/file/d/1zvn-HpJZs1dv0SIuQvTh_0x5AZ-YRWI5/view?usp=sharing', '_blank');
    const link = document.createElement('a');
    link.download = 'Saurabh-Bhandari-Resume.pdf';
    document.body.appendChild(link);
    link.click();
  }

  return (
    <nav className='center nav' id='nav-menu'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item nav-link home'><Link to="/">Home</Link></li>

          <li className='nav__list-item nav-link about' style={{marginTop:"0px"}}>
            <a
              href='#about'
              onClick={toggleNavList}
              className='link link--nav'
            >
              About
            </a>
          </li>

        {projects.length ? (
          <li className='nav__list-item nav-link projects'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item nav-link skills'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item nav-link contact' style={{marginTop:"-17px"}}>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
          
          <li className='nav__list-item'>
          {/* {resume && (
          <Link className='nav-link resume'>
            <button className='btn btn--outline' id='resume-button-1' onClick={handleClick}>
              Resume
            </button>
          </Link>
          )} */}
          {/* <a href='Saurabh-Bhandari-Resume.pdf' target="_blank" download={true} rel="noreferrer" onClick={handleResume} className={"nav-link resume"} id="resume-link-1">Resume</a> */}
          {/* {resume && (
          <a href={resume} className='nav-link resume' id='resume-button-1' onClick={handleResume} download>
            <span type='button' className='btn btn--outline' >
              Resume
            </span>
          </a>
        )} */}
        <a href="https://drive.google.com/uc?export=download&id=1zvn-HpJZs1dv0SIuQvTh_0x5AZ-YRWI5" className='nav-link resume'>
            <button
              id="resume-button-1"
              style={{ border: "none", fontWeight: "bold", fontSize: "20px" }}
              onClick={handleResume}
            >
              Resume
            </button>
          </a>
          </li>
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
