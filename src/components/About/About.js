// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { description, resume } = about
  // const handleResume = () => {
  //   window.open('https://drive.google.com/file/d/1zvn-HpJZs1dv0SIuQvTh_0x5AZ-YRWI5/view?usp=sharing', '_blank');
  //   const link = document.createElement('a');
  //   link.download = {resume};
  //   document.body.appendChild(link);
  //   link.click();
  // }

  return (
    <div className='about section center' id='about' style={{marginTop:"3em"}}>
      {/* <img src="https://avatars.githubusercontent.com/u/93419494?v=4" alt="" className="profile-image" />
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )} */}

      {/* {role && <h2 className='about__role'>A {role}.</h2>} */}
      <h2 className='section__title'>About</h2>
      <p className='about__desc' id='user-detail-intro'>{description && description}</p>
      {/* <a href={resume} onClick={handleResume} download>
            <button
              id="resume-button-2"
              style={{ border: "none", fontWeight: "bold", fontSize: "20px" }}
              // onClick={handleResume}
            >
              Resume
            </button>
          </a> */}
      {/* <div className='about__contact center'>
        {resume && (
          <a href={resume} download>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
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
                target="_blank"
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div> */}
    </div>
  )
}

export default About
