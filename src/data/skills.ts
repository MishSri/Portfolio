export interface SkillCategory {
  id: string
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    skills: ['C', 'C++', 'Python','JavaScript', 'TypeScript'],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    skills: [
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'PyTorch',
      'Matplotlib',
      'Deep Learning',
      'Machine Learning',
    ],
  },
  {
    id: 'genai',
    title: 'GenAI',
    skills: ['LLMs', 'Prompt Engineering', 'RAG', 'Embeddings', 'APIs', 'AI Agents'],
  },
  {
    id: 'web-software',
    title: 'Web / Software',
    skills: ['React', 'Node.js', 'Express', 'SQL', 'REST APIs', 'Git', 'GitHub'],
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    skills: [
      'Data Structures & Algorithms',
      'Competitive Programming',
      'Algorithms',
      'Probability',
      'Linear Algebra',
      'Optimization',
    ],
  },
]
