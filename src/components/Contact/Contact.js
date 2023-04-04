import { contact } from '../../portfolio'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone';
import { about } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const { social } = about
  if (!contact.email) return null

  return (
    <>
    <h2 className='section__title' style={{marginTop:"50px"}}>Contact</h2>
    <section className='section contact center' id='contact'>
      <a href={`mailto:${contact.email}`} target="_blank" rel='noreferrer'>
        <span type='button' className='btn btn--outline' id='contact-email'>
          Email me
        </span>
      </a>

      {social && (
          <>
            {/* {contact.number && (
              <a
              href={contact.number}
              className='link link--icon'
              id='contact-phone'
              target="_blank"
              rel='noreferrer'
            >
              <PhoneIcon />
            </a>
            )} */}
            <p id='contact-phone'>+918605200451</p>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon contact-github'
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
                className='link link--icon contact-linkedin'
                target="_blank"
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
    </section>
    </>
  )
}

export default Contact
