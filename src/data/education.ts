export interface Qualification {
  degree: string
  institution: string
  period: string
  result: string
}

export const education: Qualification[] = [
  {
    degree: 'Bachelor of Science in Computer Science & Engineering',
    institution: 'American International University-Bangladesh',
    period: '2022 – Present',
    result: 'CGPA: 3.86/4.0',
  },
  {
    degree: 'Higher Secondary School Certificate (Science)',
    institution: 'Comilla Victoria Government College',
    period: '2019 – 2020',
    result: 'GPA: 5.0/5.0',
  },
  {
    degree: 'Secondary School Certificate (Science)',
    institution: 'Comilla Zilla School',
    period: '2017 – 2018',
    result: 'GPA: 5.0/5.0',
  },
]
