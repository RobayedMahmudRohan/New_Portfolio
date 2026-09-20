export interface Project {
  name: string
  description: string
  tech: string[]
  image?: string
  githubUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    name: 'CivicBridge',
    description:
      'A civic engagement platform built with React and TypeScript, using Firebase for authentication and data storage.',
    tech: ['React', 'TypeScript', 'Firebase'],
    image: '/images/civicbridge.png',
  },
  {
    name: 'SiliconRow / Microchip Shop',
    description:
      'A web application built with Next.js and TypeScript.',
    tech: ['Next.js', 'TypeScript'],
  },
  {
    name: 'Evenboo',
    description: 'A web application built with React.',
    tech: ['React'],
    image: '/images/Evenboo.png',
  },
  {
    name: 'Maze Runner',
    description: 'A graphics application built with C++ and GLUT.',
    tech: ['C++', 'GLUT'],
    image: '/images/maze-runner.png',
  },
  {
    name: 'Shomvob',
    description: 'An application built with C#.',
    tech: ['C#'],
    image: '/images/shomvob.png',
  },
]
