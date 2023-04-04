const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://saurabhbh123.github.io',
  title: 'SB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Saurabh Bhandari',
  role: 'Full Stack Web Developer',
  description:
    'A hard-working and innovative problem solver with proficiency in HTML, CSS, and Javascript,  React JS, Redux, Chakra UI, etc. Eager to learn new skills and help the organization in development.',
  resume: 'https://drive.google.com/u/0/uc?id=1zvn-HpJZs1dv0SIuQvTh_0x5AZ-YRWI5&export=download',
  social: {
    linkedin: 'https://www.linkedin.com/in/saurabh-bhandari-47a6ba13a/',
    github: 'https://github.com/SaurabhBH123',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'happyfox-clone',
    image: "./images/hf.png",
    description:
      'Happyfox is a practical help desk and customer support software solution.',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/NAYANKUMAR21/closed-mask-38',
    livePreview: 'https://cheerful-duckanoo-d5d1ea.netlify.app/',
  },
  {
    name: 'uboric-clone',
    image: "./images/uboric.png",
    description:
      'Uboric is an e-commerce website for clothes.',
    stack: ['React', 'React-redux', 'Chakra UI'],
    sourceCode: 'https://github.com/SaurabhBH123/chivalrous-nest-1322/tree/main/uboric-clone',
    livePreview: 'https://taupe-pony-c6ff0a.netlify.app/',
  },
  {
    name: 'outlookIndia-clone',
    image: "./images/outlook.png",
    description:
      'Outlook is a weekly general interest English and Hindi news magazine published in India.',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/SaurabhBH123/bizarre-religion-9925/tree/main/outlookindia-clone',
    livePreview: 'https://boisterous-tiramisu-64ec9e.netlify.app/',
  },
  {
    name: 'lenskart-clone',
    image: "./images/lenskart.png",
    description:
      'Lenskart is the leading e-commerce portal for eyewear in India.',
    stack: ['React', 'React-redux', 'Chakra UI'],
    sourceCode: 'https://github.com/akashfulari18/thoughtless-scarecrow-7735',
    livePreview: 'https://thoughtless-scarecrow-7735-akashfulari18.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    url:"./images/html.png",
    name:'HTML',
  },
  {
    url:"./images/css.png",
    name:'CSS'
  },
  {
    url:"./images/js.png",
    name:'Javascript'
  },
  {
    url:"./images/ts.jpg",
    name:'Typescript'
  },
  {
    url:"./images/react.png",
    name:'React'
  },
  {
    url:"./images/redux.png",
    name:'Redux'
  },
  {
    url:"./images/chakra.jpg",
    name:'Chakra UI'
  },
  {
    url:"./images/gh.png",
    name:'Github'
  },
  {
    url:"./images/nj.png",
    name:'Next JS'
  },
  // 'HTML',
  // 'CSS',
  // 'JavaScript',
  // 'TypeScript',
  // 'React',
  // 'Redux',
  // 'Chakra UI',
  // 'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bhandarisaurabh143@gmail.com',
  number:8605200451
}

export { header, about, projects, skills, contact }
