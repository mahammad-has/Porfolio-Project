import { Achievement, Project } from '@/types/content-items';

export const aboutPageContent = {
  name: 'Mahammad Hashimov',
  title: 'Data Analyst',
  description:
    "As a data analyst, I specialize in turning raw data into actionable insights. Whether it's  building predictive models, or creating intuitive visualizations, I thrive on solving problems and extracting meaningful information from data.",
  image: '/images/cat.avif',
  cv: '/assets/cv.pdf',
};

export const achievements: Achievement[] = [
  {
    title: 'Python',
    type: 'Udemy Certificate',
    description:
      'I have experience in data analysis, data visualization, and machine learning. I have worked with Python, SQL, and Tableau.',
    link: 'https://www.udemy.com/certificate/UC-7b3b3b3b-7b3b-4b3b-7b3b-7b3b3b3b3b3b/',
  },
  {
    title: 'Tableau',
    type: 'Udemy Certificate',
    description:
      'I have experience in data analysis, data visualization, and machine learning. I have worked with Python, SQL, and Tableau.',
    link: 'https://www.udemy.com/certificate/UC-7b3b3b3b-7b3b-4b3b-7b3b-7b3b3b3b3b3b/',
  },
  {
    title: 'SQL',
    type: 'Udemy Certificate',
    description:
      'I have experience in data analysis, data visualization, and machine learning. I have worked with Python, SQL, and Tableau.',
    link: 'https://www.udemy.com/certificate/UC-7b3b3b3b-7b3b-4b3b-7b3b-7b3b3b3b3b3b/',
  },
];

export const projects: Project[] = [
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipis elit. Maecenas ac nisl',
    image: '/images/python.png',
    link: 'https://github.com',
    techStack: 'Python, SQL',
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, conse adipiscing elit.',
    image: '/images/python.png',
    link: 'https://github.com',
    techStack: 'Python, SQL',
  },
  {
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consec adipiscing elit.',
    image: '/images/python.png',
    link: 'https://github.com',
    techStack: 'Python, SQL',
  },
];

export const contactPageContent = {
  email: 'mahammad.hashimov.1@gmail.com',
  phoneNumber: '+48 510 273 627',
  linkedin: 'https://www.linkedin.com/in/mahammad-hashimov/',
  github: 'github.com/mahammad-hashimov',
  address: 'Wroclaw, Poland',
};
