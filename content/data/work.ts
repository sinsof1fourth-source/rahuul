export interface Project {
  slug: string
  title: string
  subtitle: string
  category: string
  description: string
  longDescription?: string
  status: 'Research' | 'Testnet & Research' | 'Prototype' | 'In Development' | 'Active Venture' | 'Live' | 'Concept / Long-Horizon Research'
  year: string
  tags: string[]
  url?: string
  github?: string
  featured: boolean
}

export const PROJECTS: Project[] = [
  {
    slug: 'aion',
    title: 'AION',
    subtitle: 'Autonomous Deep-Space Systems Research',
    category: 'Deep-Space Systems & Autonomy',
    description:
      'A long-horizon private space-systems research concept developing autonomous spacecraft capable of operating independently for decades and eventually enabling safe, long-duration human deep-space missions.',
    status: 'Concept / Long-Horizon Research',
    year: '2026–2056',
    tags: ['Deep-Space Autonomy', 'Robotic Systems', 'Self-Healing Hardware', 'Long-Horizon Physics', 'Life Preservation Research'],
    featured: true,
  },
  {
    slug: 'vega-omega',
    title: 'VEGA OMEGA',
    subtitle: 'AI + Quantitative Systems Architecture',
    category: 'AI + Quantitative Systems',
    description:
      'A research and systems architecture initiative focused on quantitative strategy evaluation, market analysis, autonomous agents, and evidence-driven decision systems.',
    status: 'Research',
    year: '2026',
    tags: ['Python', 'Quantitative Research', 'Autonomous Agents', 'Systems Architecture'],
    featured: true,
  },
  {
    slug: 'rahuulbot',
    title: 'RAHUULBOT',
    subtitle: 'Automated Trading Research & Execution Engine',
    category: 'Automated Trading Research',
    description:
      'A modular trading system designed around exchange abstraction, deterministic execution, risk controls, position lifecycle management, logging, and validation.',
    status: 'Testnet & Research',
    year: '2026',
    tags: ['TypeScript', 'Execution Engine', 'Risk Controls', 'Exchange Abstraction'],
    featured: true,
  },
  {
    slug: 'shikrahq',
    title: 'SHIKRAHQ',
    subtitle: 'AI Media Pipeline & Video Processing Infrastructure',
    category: 'AI Media Infrastructure',
    description:
      'A multi-agent media pipeline designed to process gaming footage, transcribe audio, edit long-form and short-form content, generate thumbnails, and support publishing workflows.',
    status: 'Prototype',
    year: '2025–2026',
    tags: ['Whisper', 'Ollama', 'FFmpeg', 'FastAPI', 'Docker'],
    featured: true,
  },
  {
    slug: 'openclaw',
    title: 'OPENCLAW',
    subtitle: 'Multi-Agent Orchestration Framework',
    category: 'Agent Architecture',
    description:
      'An orchestration environment used to coordinate autonomous workflows, tools, structured tasks, and system-specific agents.',
    status: 'In Development',
    year: '2026',
    tags: ['Node.js', 'Agent Orchestration', 'Task Processing', 'Workflows'],
    featured: true,
  },
  {
    slug: 'sand-and-sins',
    title: 'SAND AND SINS',
    subtitle: 'AI-Assisted Storytelling & Digital Media Channel',
    category: 'Creative Media',
    description:
      'A creative channel exploring AI-assisted storytelling, gaming content, cinematic concepts, and digital production.',
    status: 'Active Venture',
    year: '2025–2026',
    tags: ['Creative Media', 'Digital Production', 'AI Storytelling', 'Cinematic Concepts'],
    featured: false,
  },
  {
    slug: 'rj-enterprises',
    title: 'RJ ENTERPRISES',
    subtitle: 'Software, Media & Quantitative Initiatives Umbrella',
    category: 'Business Ventures',
    description:
      'An umbrella structure for software, media, quantitative research, and digital product initiatives.',
    status: 'Active Venture',
    year: '2024–2026',
    tags: ['Business Ventures', 'Software', 'Digital Media', 'Research'],
    featured: false,
  },
]
