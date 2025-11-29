interface SkillCategory {
  title: string;
  items: string[];
}

export const skillsData: Record<'en' | 'es', SkillCategory[]> = {
  en: [
    {
      title: 'Frontend',
      items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML / CSS'],
    },
    {
      title: 'Backend',
      items: [
        'Node.js',
        'Express',
        'PostgreSQL',
        'MongoDB',
        'REST APIs',
        'Sequelize',
      ],
    },
    {
      title: 'Tools & Others',
      items: ['Git', 'Docker', 'Netlify', 'Postman', 'Render'],
    },
  ],
  es: [
    {
      title: 'Frontend',
      items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML / CSS'],
    },
    {
      title: 'Backend',
      items: [
        'Node.js',
        'Express',
        'PostgreSQL',
        'MongoDB',
        'APIs REST',
        'Sequelize',
      ],
    },
    {
      title: 'Herramientas & Otros',
      items: ['Git', 'Docker', 'Netlify', 'Postman', 'Render'],
    },
  ],
};
