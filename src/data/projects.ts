export interface Project {
  name: string
  description: string
  tech: string[]
  tags?: string[]
  image?: string
  isNew?: boolean
  githubUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    name: 'CivicBridge',
    description:
      'A civic complaint reporting and tracking platform where citizens can report public issues and track their progress.',
    tech: ['React', 'TypeScript', 'Firebase'],
    image: '/images/civicbridge.png',
    isNew: true,
  },
  {
    name: 'EvenBoo: An Event Booking System',
    description:
      'Contributed to the database design and developed the administrative panel, enabling event organizers to manage events efficiently. Implemented the ticket purchasing system, ensuring secure and seamless transactions.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    tags: ['Database Design', 'Admin Panel', 'Authentication'],
    image: '/images/Evenboo.png',
  },
  {
    name: 'Shomvob: Bringing Revolution in Transportation System',
    description:
      'Designed and implemented the backend database and developed the administrative panel for managing trips, users, and system configurations in a transportation platform. Ensured robust data integrity, streamlined management workflows, and provided efficient tools for system monitoring and administration.',
    tech: ['C#', 'SQL Server'],
    tags: ['Database Design', 'Admin Panel', 'System Management'],
    image: '/images/shomvob.png',
  },
  {
    name: 'Maze Runner',
    description:
      "Led the end-to-end development of Level 2, encompassing the full design, animation, and implementation of gameplay mechanics. Responsible for crafting an engaging and immersive player experience by optimizing level flow, ensuring smooth animations, and integrating interactive elements. Collaborated on overall game architecture while independently handling all aspects of this level's creation.",
    tech: ['C++', 'OpenGL / GLUT'],
    tags: ['Level Design', 'Animations', 'Gameplay Mechanics'],
    image: '/images/maze-runner.png',
  },
]
