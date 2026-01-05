export interface NavLink {
  id: string;
  title: string;
  type: 'item' | 'group';
  url: string;
}

export const navLinks: NavLink[] = [
  {
    id: 'projects',
    title: 'Projects',
    type: 'item',
    url: '/projects'
  },
  {
    id: 'experience',
    title: 'Experience',
    type: 'item',
    url: '/experience'
  },
  {
    id: 'about',
    title: 'About',
    type: 'item',
    url: '/about-me'
  }
];