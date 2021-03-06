import uuid from 'react-uuid';

import PortfolioScreenshot from '../img/portfolio-v1.PNG';
import SentimentAnalysisScreenshot from '../img/sentiment-analysis.PNG';
import NoImagePreview from '../img/noimage.jpg'; // reference: https://luxmage.com/solution/the-retail-window-61.html

const projectTypes = {
  RECREATION: 'Recreation',
  COLLEGE: 'College',
};

const previewType = {
  UNAVAILABLE: 'Unavailable',
  PRIVATE: 'Private',
};

const portfolio = {
  title: 'Online Portfolio V1',
  description:
    'The first iteration of my personal online portfolio. I was interested in learning React.js, so I decided to design and build my first version of online portfolio over the weekend would be the best way to learn the fundamentals of React.js.',
  date: '2020',
  tech: ['React.JS', 'HTML', 'CSS', 'Material UI'],
  github: 'https://github.com/dejongyeong/web-portfolio',
  preview: '#',
};

const sentimentAnalysis = {
  title: 'Sentiment Analysis Approach for Brand Reputation Evaluation',
  description:
    'Final Year Project at Institute of Technology, Tralee. Objective is to evaluate and compare the selected sentiment classification techniques used for evaluating brand reviews. The findings are presented to make informative decisions regarding the adoption of classification techniques.',
  date: '2019',
  tech: ['Python'],
  github: 'https://github.com/dejongyeong/sentiment-analysis',
  preview: previewType.UNAVAILABLE,
};

const mongoDbProject = {
  title: 'Book Management System',
  description:
    'MongoDB Portfolio for Advanced Database Programming in IT Tralee. Aim of this portfolio is to show the study outcome for performing MongoDB CRUD operation and MapReduce with the use of selected APIs from UI.',
  date: '2019',
  tech: [
    'PHP Laravel 5',
    'MongoDB',
    'HTML',
    'CSS',
    'Bootstrap 4',
    'JS',
    'jQuery',
  ],
  github: 'https://github.com/dejongyeong/mongodb',
  preview: previewType.UNAVAILABLE,
};

export const sideProjects = [
  {
    key: uuid(),
    type: projectTypes.RECREATION,
    image: PortfolioScreenshot,
    date: portfolio.date,
    title: portfolio.title,
    description: portfolio.description,
    tech: portfolio.tech,
    github: portfolio.github,
    preview: portfolio.preview,
  },
  {
    key: uuid(),
    type: projectTypes.COLLEGE,
    image: SentimentAnalysisScreenshot,
    date: sentimentAnalysis.date,
    title: sentimentAnalysis.title,
    description: sentimentAnalysis.description,
    tech: sentimentAnalysis.tech,
    github: sentimentAnalysis.github,
    preview: sentimentAnalysis.preview,
  },
  {
    key: uuid(),
    type: projectTypes.COLLEGE,
    image: NoImagePreview,
    date: mongoDbProject.date,
    title: mongoDbProject.title,
    description: mongoDbProject.description,
    tech: mongoDbProject.tech,
    github: mongoDbProject.github,
    preview: mongoDbProject.preview,
  },
];
