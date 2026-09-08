export interface TimelineEntry {
  id: string
  period: string
  title: string
  description: string
}

export const timeline: TimelineEntry[] = [
  {
    id: 'iiit-start',
    period: '2023',
    title: 'Began B.Tech in Computer Engineering',
    description: 'Started at IIIT Bhubaneswar, building a foundation in algorithms, systems, and mathematics.',
  },
  {
    id: 'cp-dsa',
    period: 'Ongoing',
    title: 'Data Structures & Algorithms practice',
    description: 'Consistent practice in competitive programming and algorithmic problem solving.',
  },
  {
    id: 'ml-focus',
    period: 'Ongoing',
    title: 'AI / ML specialization',
    description: 'Deepening skills across machine learning, deep learning, and generative AI — from model fundamentals to applied systems.',
  },
  // {
  //   id: 'edgeguard',
  //   period: '2026',
  //   title: 'EdgeGuard AI',
  //   description: 'Building an edge-based road hazard detection concept for the Tata Technologies Edge AI for Automotive track.',
  // },
  {
    id: 'hardware-projects',
    period: 'Ongoing',
    title: 'IoT + embedded systems projects',
    description: 'Applied sensor-driven systems spanning food safety, ergonomics, and vehicle safety.',
  },
]
