export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'PHP', 'C#', '.NET', '.NET Core MVC', 'C++'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Firebase'],
  },
  {
    title: 'Practices & Tools',
    skills: [
      'REST APIs',
      'Testing',
      'System Design',
      'Security (Auth, OWASP, JWT)',
      'Git/GitHub',
    ],
  },
]
