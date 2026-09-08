export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  problem: string
  tech: string[]
  github?: string // REPLACE with the real repo link, or leave undefined to hide the link
  demo?: string // REPLACE with a live demo link, or leave undefined to hide the link
  status?: string
}

export const projects: Project[] = [
  // {
  //   id: 'edgeguard-ai',
  //   title: 'EdgeGuard AI',
  //   tagline: 'Edge-based real-time road hazard intelligence',
  //   description:
  //     'A real-time road hazard detection system designed to run on edge hardware, built for the Tata Technologies Edge AI for Automotive track. Aims to identify hazards on the road as they appear, without depending on a cloud round-trip.',
  //   problem:
  //     'Cloud-dependent driver-assist systems introduce latency that matters when a hazard appears without warning. EdgeGuard explores hazard detection running directly on the vehicle\u2019s edge hardware.',
  //   tech: ['Python', 'PyTorch', 'YOLO', 'OpenCV', 'Computer Vision', 'Edge AI'],
  //   status: 'Concept stage — architecture and system design in progress',
  //   github: undefined,
  //   demo: undefined,
  // },
  {
    id: 'food-spoilage-detection',
    title: 'Food Spoilage Detection System',
    tagline: 'IoT + AI-oriented food monitoring',
    description:
      'A food monitoring system that reads environmental and gas-composition data to flag early spoilage, combining low-cost IoT sensing with an ML-oriented analysis layer.',
    problem:
      'Manual spoilage checks are inconsistent. This system continuously monitors storage conditions and gas signatures associated with early decay.',
    tech: ['ESP32', 'MQ135', 'DHT11', 'Blynk', 'Python / ML'],
    github: undefined,
    demo: undefined,
  },
  {
    id: 'digital-eye-strain-detector',
    title: 'Digital Eye Strain Detector',
    tagline: 'Smart proximity and environment-aware alerts',
    description:
      'A monitoring system that uses proximity, ambient light, and motion sensing to detect conditions likely to cause digital eye strain, and alerts the user to adjust behavior.',
    problem:
      'Prolonged, unbroken screen exposure at poor distances and lighting is a common but under-monitored strain source. This system watches the physical conditions around screen use.',
    tech: ['ESP32', 'Ultrasonic Sensor', 'PIR', 'LDR', 'Blynk'],
    github: undefined,
    demo: undefined,
  },

]
