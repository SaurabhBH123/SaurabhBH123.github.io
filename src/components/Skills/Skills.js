import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain skills-card'>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"10px"}}>
              <img src={skill.url} alt="skill_logo" style={{
                width:"50px",
                height:"50px",
                objectFit:"contain"
              }} className='skills-card-img'/>
              <p className='skills-card-name'>{skill.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
