export interface NavLink {
  id: string;
  title: string;
  type: 'item' | 'group';
  url: string;
  arialabel?: string;
}

export const navLinks: NavLink[] = [
  {
    id: 'software',
    title: 'Software & Design',
    type: 'item',
    url: '/software',
  },
  {
    id: 'gis',
    title: 'GIS',
    type: 'item',
    url: '/gis',
    arialabel: 'G I S'
  },
  {
    id: 'photography',
    title: 'Photography',
    type: 'item',
    url: '/photography'
  },
  {
    id: 'about',
    title: 'About',
    type: 'item',
    url: '/about-me'
  }
];