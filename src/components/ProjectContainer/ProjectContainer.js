import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project project-card'>
    <h3 className="project-title">{project.name}</h3>
    <img src={project.image} alt="project-img" style={{width:"100%",height:"200px",objectFit:"contain"}}/>
    <p className='project__description project-description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item project-tech-stack'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon project-github-link'
        target="_blank"
        rel='noreferrer'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon project-deployed-link'
        target="_blank"
        rel='noreferrer'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
