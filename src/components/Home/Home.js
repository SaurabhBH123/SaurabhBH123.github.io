import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import {  NavLink } from 'react-router-dom';
// import PhoneIcon from '@mui/icons-material/Phone';
import { about } from '../../portfolio'
import { contact } from '../../portfolio'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const { name, role, resume, social } = about
  // const navigate=useNavigate()
  const handleResume = () => {
    window.open('https://drive.google.com/file/d/1zvn-HpJZs1dv0SIuQvTh_0x5AZ-YRWI5/view?usp=sharing', '_blank');
    // const link = document.createElement('a');
    // link.download = 'Saurabh_Bhandari_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
  }
  // const resumedown2 = () => {
      
  //     // window.open("https://drive.google.com/uc?export=download&id=1zvn-HpJZs1dv0SIuQvTh_0x5AZ-YRWI5")
  //     window.open(
  //       " https://drive.google.com/file/d/1zvn-HpJZs1dv0SIuQvTh_0x5AZ-YRWI5/view?usp=sharing",
  //       "_blank"
  //     );
  // };
  return (
    <div className='about center' id='home'>
      <img src="https://avatars.githubusercontent.com/u/93419494?v=4" alt="" className="profile-image home-img" />
      {name && (
        <h1>
          Hi, I am <span className='about__name' id='user-detail-name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      {/* <p className='about__desc'>{description && description}</p> */}

      <div className='about__contact center'>
        {/* <a id="resume-button-2"
        href="https://drive.google.com/u/0/uc?id=1zvn-HpJZs1dv0SIuQvTh_0x5AZ-YRWI5&export=download"
        >
            <button
              
              style={{ border: "none", fontWeight: "bold", fontSize: "20px" }}
  
            >
              Resume
            </button>
          </a> */}
          {/* {resume && (
          <a href={resume} className='nav-link resume' id='resume-button-1' onClick={handleResume} download>
            <span type='button' className='btn btn--outline' >
              Resume
            </span>
          </a>
        )} */}
        {resume && (
          <a href={resume} id='resume-button-2' onClick={handleResume} download>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}
        {/* <NavLink to="https://drive.google.com/uc?export=download&id=1zvn-HpJZs1dv0SIuQvTh_0x5AZ-YRWI5">
            <button
              id="resume-button-2"
              style={{ border: "none", fontWeight: "bold", fontSize: "20px" }}
              onClick={handleResume}
            >
              Resume
            </button>
          </NavLink> */}
          {/* <a href={resume} onClick={handleResume} download>
            <button
              id="resume-button-2"
              style={{ border: "none", fontWeight: "bold", fontSize: "20px" }}
              // onClick={handleResume}
            >
              Resume
            </button>
          </a> */}
          
        {/* <a href='Saurabh-Bhandari-Resume.pdf' download={true} rel='noreferrer' target="_blank">Resume</a> */}
        <a href={`mailto:${contact.email}`} target="_blank" rel='noreferrer'>
          <span type='button' className='btn btn--outline' id='contact-email'>
          Email me
          </span>
        </a>
              {/* <a
                href={contact.number}
                className='link link--icon'
                id='contact-phone'
                target="_blank"
                rel='noreferrer'
              >
                <PhoneIcon />
              </a> */}
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                id='contact-github'
                target="_blank"
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                id='contact-linkedin'
                target="_blank"
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Home
