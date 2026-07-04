import { Project, Skill, Experience } from './types';

export const AVATAR_IMAGE = '/src/assets/images/mehedi_avatar_photo_1783141613879.jpg';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AURA Identity System',
    category: 'branding',
    description: 'A complete branding guidelines book and identity suite featuring modern Swiss typography.',
    longDescription: 'AURA is a minimalist brand identity system designed for an architectural research group. The project establishes a visual language of stark contrasts, bold Swiss layout designs, and deep violet pigments to suggest both high tech and artistic depth. The typography is purely structured, allowing negative space to define content boundaries.',
    image: '/src/assets/images/branding_showcase_1783018102268.jpg',
    date: 'Feb 2026',
    client: 'AURA Labs',
    tags: ['Brand Guidelines', 'Identity', 'Swiss Grid', 'Typography'],
    dimensions: '3200 x 2400 px',
    fileSize: '4.2 MB',
    colors: ['#0B0B0C', '#8B5CF6', '#F3F4F6', '#1E1B4B'],
    role: 'Lead Visual Designer'
  },
  {
    id: '2',
    title: 'Pulse Analytics Suite',
    category: 'ui-ux',
    description: 'Dark mode user interface for cloud computing metrics and streaming servers.',
    longDescription: 'A comprehensive dashboard designed for high-density monitoring of cloud infrastructures. Focused on immediate readability, high-contrast states, and neon purple signal curves. Every card, layout, and control was engineered using responsive grids with micro-interactions that elevate data comprehension.',
    image: '/src/assets/images/ui_ux_showcase_1783018113501.jpg',
    date: 'Apr 2026',
    client: 'Pulse Networks',
    tags: ['UI/UX', 'Product Design', 'Dark Mode', 'Design System'],
    dimensions: '2560 x 1920 px',
    fileSize: '3.8 MB',
    colors: ['#09090B', '#A78BFA', '#10B981', '#18181B'],
    role: 'Product Designer'
  },
  {
    id: '3',
    title: 'Iridescent Orbs 3D',
    category: 'render',
    description: 'An abstract exploration of metallic glass, liquid textures, and ambient lighting.',
    longDescription: 'A set of abstract 3D illustrations investigating refractive indices, sub-surface scattering, and cosmic color values. Using iridescent materials, the render captures light paths in a vacuum, creating a series of glowing spheres. These visuals serve as immersive hero backdrops and branding assets for digital clients.',
    image: '/src/assets/images/render_showcase_1783018124929.jpg',
    date: 'May 2026',
    client: 'Self-Initiated',
    tags: ['3D Render', 'CGI', 'Materials Study', 'Iridescence'],
    dimensions: '3840 x 2880 px',
    fileSize: '7.1 MB',
    colors: ['#1E1E2E', '#C084FC', '#38BDF8', '#020617'],
    role: '3D Artist'
  },
  {
    id: '4',
    title: 'Typographic Swiss Poster',
    category: 'typography',
    description: 'High-contrast geometric layout demonstrating asymmetric spacing and neon pathways.',
    longDescription: 'A physical and digital hybrid poster focusing on the strict principles of Swiss typography. Utilizing asymmetric structures, extreme weight variations, and contrasting violet trajectories, this poster explores the tension between written language and graphic geometry. It is designed to stand out across print and digital screens.',
    image: '/src/assets/images/typography_showcase_1783018135744.jpg',
    date: 'Jun 2026',
    client: 'Zurich Design Guild',
    tags: ['Poster Art', 'Typography', 'Swiss Design', 'Editorial'],
    dimensions: '2400 x 3200 px',
    fileSize: '5.4 MB',
    colors: ['#09090B', '#C084FC', '#FFFFFF', '#1E1B4B'],
    role: 'Graphic Designer'
  }
];

export const SKILLS: Skill[] = [
  {
    name: 'Figma',
    level: 98,
    category: 'Software',
    iconName: 'Figma',
    description: 'Design systems, high-fidelity UI layout, interactive prototyping'
  },
  {
    name: 'Adobe Illustrator',
    level: 95,
    category: 'Software',
    iconName: 'Illustrator',
    description: 'Vector construction, custom logo paths, typography architecture'
  },
  {
    name: 'Adobe Photoshop',
    level: 92,
    category: 'Software',
    iconName: 'Photoshop',
    description: 'Digital art compositing, photo retouching, high-end visual texturing'
  },
  {
    name: 'Blender & 3D Render',
    level: 85,
    category: 'Software',
    iconName: 'Blender',
    description: 'Sub-division modeling, node-based procedural shaders, Cycles lighting'
  },
  {
    name: 'Typography Systematics',
    level: 96,
    category: 'Core Design',
    iconName: 'Type',
    description: 'Kerning balances, modular typographic scales, grid-system layout'
  },
  {
    name: 'Brand Guideline Architect',
    level: 94,
    category: 'Core Design',
    iconName: 'Layers',
    description: 'Logo creation, brand ecosystem definition, visual tone documentation'
  },
  {
    name: 'Color Theory & Harmony',
    level: 90,
    category: 'Aesthetics',
    iconName: 'Palette',
    description: 'Accessible WCAG contrast selection, emotional color mapping, ink formulas'
  },
  {
    name: 'Motion Design',
    level: 80,
    category: 'Aesthetics',
    iconName: 'Play',
    description: 'Keyframe curves, micro-interaction transitions, video intro layouts'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Lead Visual Designer',
    company: 'Vapor Studio Inc.',
    period: '2025 - Present',
    description: 'Directing visual architecture and custom design systems for enterprise SaaS and digital hardware startups.',
    type: 'agency'
  },
  {
    role: 'Senior Graphic Designer',
    company: 'Apex Creative Studio',
    period: '2023 - 2025',
    description: 'Developed complete branding guidelines, physical exhibition designs, and typography posters for corporate and cultural institutions.',
    type: 'agency'
  },
  {
    role: 'Independent Brand Consultant',
    company: 'Mehedi.Design',
    period: '2021 - 2023',
    description: 'Crafted distinct visual identities, high-fidelity landing pages, and customized 3D assets for early-stage web applications worldwide.',
    type: 'freelance'
  },
  {
    role: 'Best Swiss Poster Nominee',
    company: 'Zurich Design Guild Awards',
    period: '2026',
    description: 'Nominated for the typographical Swiss poster Series in the Modern Graphics & Innovation track.',
    type: 'award'
  }
];
