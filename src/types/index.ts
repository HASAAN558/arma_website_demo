export interface ResourceItem {
  id: string;
  title: string;
  category: 'Technical Bulletins' | 'Publications' | 'Research' | 'Guides' | 'Standards' | 'Reports';
  date: string;
  code: string;
  description: string;
  fileSize: string;
  pages: number;
  downloadUrl?: string;
  tags: string[];
  summary: string;
  keyTakeaways: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Press Release' | 'Industry News' | 'Technical Update' | 'Event';
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string;
  author: string;
  featured?: boolean;
}

export interface AwardProject {
  id: string;
  title: string;
  year: number;
  tier: 'Gold Winner' | 'Silver Winner' | 'Bronze Winner' | 'Innovation Award';
  category: 'Commercial Roofing' | 'Residential Roofing' | 'Architectural Marvel';
  location: string;
  contractor: string;
  manufacturer: string;
  image: string;
  description: string;
  highlights: string[];
  specs: {
    shingleType: string;
    squareFootage: string;
    slope: string;
    windRating: string;
  };
}

export interface IndustryStat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface ShingleLayer {
  id: string;
  number: number;
  name: string;
  material: string;
  thickness: string;
  function: string;
  benefits: string[];
  color: string;
}
