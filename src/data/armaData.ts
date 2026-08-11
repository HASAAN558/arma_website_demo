import type { ResourceItem, NewsArticle, AwardProject, IndustryStat, ShingleLayer } from '../types';


export const RECENT_RESOURCES: ResourceItem[] = [
  {
    id: 'tb-2025-01',
    title: 'Fastener Selection & Placement Guidelines for Steep-Slope Roofing',
    category: 'Technical Bulletins',
    date: 'Jan 2025',
    code: 'ARMA-TB-2025-01',
    description: 'Updated comprehensive technical guidance detailing corrosion resistance, shank diameter, nail head specs, and high-wind nailing zone patterns.',
    fileSize: '2.4 MB',
    pages: 14,
    tags: ['Fasteners', 'Nailing Patterns', 'High-Wind Zone', 'Steep Slope'],
    summary: 'Proper attachment is critical to the wind performance and weather-tightness of asphalt shingle roofs. This technical bulletin covers required fastener materials, minimum depth penetration into deck lumber, corrosion protection (zinc coating & stainless steel standards ASTM F1667), and high-wind nailing configurations.',
    keyTakeaways: [
      'Nails must be minimum 12-gauge corrosion-resistant steel or stainless steel.',
      'Head diameter must be at least 3/8-inch (9.5mm) flat head design.',
      'High-wind installations require 6 fasteners per shingle placed in the enhanced nailing zone.',
      'Penetration must be minimum 3/4-inch into wood deck or fully through nominal 1/2-inch plywood.'
    ]
  },
  {
    id: 'tb-2024-08',
    title: 'Asphalt Shingle Wind Resistance Ratings & Testing Standards (ASTM D3161 & D7158)',
    category: 'Technical Bulletins',
    date: 'Nov 2024',
    code: 'ARMA-TB-2024-08',
    description: 'Technical analysis of Class D, F, and H wind resistance ratings, fan-induced uplift testing, and cold weather sealant thermal activation requirements.',
    fileSize: '3.1 MB',
    pages: 18,
    tags: ['Wind Resistance', 'ASTM D7158', 'Uplift Resistance', 'Thermal Sealant'],
    summary: 'Explains how asphalt shingles achieve Class H wind resistance up to 150 mph. Details laboratory testing procedures under ASTM D3161 (fan-induced wind load up to 110 mph) and ASTM D7158 (uplift resistance calculation for basic wind speeds up to 150 mph).',
    keyTakeaways: [
      'Class H rating indicates shingle resistance to 150 mph basic wind speed under ASCE 7.',
      'Self-sealing thermogrip adhesives require solar warmth to activate optimal bonding after installation.',
      'Manual sealing procedures are specified for cold-weather installations where ambient temperature is below 40°F.'
    ]
  },
  {
    id: 'pub-2024-manual',
    title: 'ARMA Residential Asphalt Roofing System Manual (6th Edition)',
    category: 'Publications',
    date: 'Oct 2024',
    code: 'ARMA-MAN-2024',
    description: 'The definitive industry standard guide covering design, deck preparation, underlayment selection, valley flashings, ridge ventilation, and maintenance.',
    fileSize: '14.8 MB',
    pages: 112,
    tags: ['Residential Roofing', 'System Manual', 'Installation Code', 'Underlayment'],
    summary: 'The 6th Edition of the ARMA Residential Manual provides comprehensive specifications for contractors, architects, building code officials, and manufacturers across North America.',
    keyTakeaways: [
      'Comprehensive deck inspection criteria including OSB moisture thresholds and plank spacing.',
      'Ice & Water shield membrane requirements for eave protection in snow load regions.',
      'Ridge & soffit balanced net free vent area calculations (1:150 vs 1:300 ratio rule).'
    ]
  },
  {
    id: 'res-2024-recycling',
    title: 'Circular Asphalt Shingle Recycling & Reclaimed Asphalt Pavement (RAP) Study',
    category: 'Research',
    date: 'Dec 2024',
    code: 'ARMA-RES-2024-09',
    description: 'Joint research study detailing how tear-off shingles are recycled into hot-mix asphalt (HMA) paving mixtures, saving 2+ million tons of virgin asphalt annually.',
    fileSize: '4.5 MB',
    pages: 36,
    tags: ['Sustainability', 'Recycling', 'RAP', 'Paving Mix', 'Circular Economy'],
    summary: 'Evaluates the physical properties of RAS (Recycled Asphalt Shingles) mixed into paving applications. Shows how processing 1 ton of scrap shingles conserves approximately 1 barrel of crude oil and reduces landfill waste.',
    keyTakeaways: [
      'Over 2 million tons of tear-off asphalt shingles recycled annually into North American roads.',
      'RAS increases rut resistance and fatigue durability in warm-mix and hot-mix asphalt roads.',
      'ARMA manufacturer initiatives target zero waste to landfill across primary manufacturing plants by 2030.'
    ]
  },
  {
    id: 'guide-2024-cold',
    title: 'Cold Weather Storage, Handling, and Installation Practices',
    category: 'Guides',
    date: 'Aug 2024',
    code: 'ARMA-GD-2024-04',
    description: 'Best practice guidelines for storing asphalt bundles in freezing temperatures, preventing tab cracking, and manual hand-sealing procedures.',
    fileSize: '1.9 MB',
    pages: 10,
    tags: ['Cold Weather', 'Installation', 'Hand Sealing', 'Storage'],
    summary: 'Provides step-by-step procedures for roofing contractors working in sub-40°F conditions to ensure shingles achieve full seal integrity and structural longevity.',
    keyTakeaways: [
      'Store bundle pallets flat in warm indoors prior to site delivery during freezing weather.',
      'Apply 1/4-inch diameter spots of SBS asphalt plastic cement under each shingle tab when ambient temperatures prevent thermal seal activation.'
    ]
  },
  {
    id: 'std-2025-epd',
    title: 'Industry-Wide Environmental Product Declaration (EPD) for North American Asphalt Shingles',
    category: 'Standards',
    date: 'Jan 2025',
    code: 'ARMA-EPD-2025',
    description: 'Third-party ISO 14025 verified LCA transparency report measuring Global Warming Potential (GWP), embodied energy, and raw material sourcing.',
    fileSize: '5.8 MB',
    pages: 28,
    tags: ['EPD', 'LCA', 'LEED v4', 'Embodied Carbon', 'Green Building'],
    summary: 'Provides transparent third-party audited lifecycle assessment data for fiberglass asphalt shingles, helping architectural specifiers earn LEED v4.1 MR credits.',
    keyTakeaways: [
      'Third-party ISO 14040/14044 verified lifecycle assessment from cradle-to-grave.',
      'Demonstrates continuous reduction in manufacturing energy intensity per square.',
      'Qualifies specifiers for LEED v4.1 Building Product Disclosure and Optimization credits.'
    ]
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-01',
    title: 'ARMA Announces Winners of the 2025 Excellence in Asphalt Roofing Awards Program',
    category: 'Press Release',
    date: 'Feb 10, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    summary: 'Highlighting North America’s most complex commercial and residential roofing projects demonstrating craftsmanship, architectural beauty, and technical performance.',
    content: 'WASHINGTON, D.C. — The Asphalt Roofing Manufacturers Association (ARMA) has officially unveiled the winners of the 2025 Excellence in Asphalt Roofing Awards. From dramatic architectural residential estates to sprawling commercial facilities featuring solar integration and extreme slope geometries, the award recipients showcase the durability, versatility, and aesthetic brilliance of modern asphalt shingles.',
    author: 'ARMA Communications Team',
    featured: true
  },
  {
    id: 'news-02',
    title: 'Advancing Asphalt Shingle Recycling: Industry Achieves 2.2 Million Ton Benchmark',
    category: 'Industry News',
    date: 'Jan 28, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    summary: 'New survey data reveals significant growth in recycled shingle usage across state DOT road infrastructure projects, conserving millions of barrels of virgin petroleum.',
    content: 'Recent data compiled by ARMA’s Sustainability Committee shows a 14% year-over-year increase in post-consumer asphalt shingle recycling into regional road paving mixes. Collaborations with local contractors and state departments of transportation continue to expand processing infrastructure nationwide.',
    author: 'ARMA Sustainability Taskforce'
  },
  {
    id: 'news-03',
    title: 'Updated Technical Bulletin Released: High Wind Performance and Class H Testing Protocols',
    category: 'Technical Update',
    date: 'Jan 15, 2025',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
    summary: 'ARMA Technical Committee releases revised guidance regarding wind resistance testing, thermal seal activation, and severe climate nailing specs.',
    content: 'ARMA’s Technical Committee has released an updated revision of Technical Bulletin ARMA-TB-2024-08. The document provides crucial clarity for building inspectors and specifiers operating in coastal high-velocity hurricane zones (HVHZ).',
    author: 'Technical Advisory Board'
  },
  {
    id: 'news-04',
    title: 'Registration Opens for the 2025 North American Roofing Technology Symposium',
    category: 'Event',
    date: 'Jan 05, 2025',
    readTime: '2 min read',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    summary: 'Join leading material scientists, roof system designers, and manufacturing executives in Chicago for 3 days of cutting-edge research presentations.',
    content: 'ARMA invites industry professionals to attend the annual Roofing Technology Symposium in Chicago, Illinois. Topics include polymer modification, cool roof granule technology, solar tile integration, and climate resilience.',
    author: 'Events Directorate'
  }
];

export const AWARD_PROJECTS: AwardProject[] = [
  {
    id: 'award-gold-2025',
    title: 'The Mountain Ridge Alpine Estate',
    year: 2025,
    tier: 'Gold Winner',
    category: 'Architectural Marvel',
    location: 'Aspen, Colorado',
    contractor: 'High Country Roofing Specialists',
    manufacturer: 'CertainTeed / GAF Architectural Series',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'A striking 14,000 sq ft luxury alpine residence engineered with heavy-laminate polymer-modified asphalt shingles designed to withstand 140 mph mountain wind shears and 90 lb/sq ft winter snow loads.',
    highlights: [
      'Custom multi-pitch 12:12 roof geometry with copper valley accents.',
      'High-wind 6-nail attachment pattern with ice-shield eave membrane.',
      'Class 4 impact resistance rating protecting against severe alpine hail.'
    ],
    specs: {
      shingleType: 'Polymer-Modified Heavyweight Slate Shingles',
      squareFootage: '14,200 sq ft',
      slope: '12:12 steep pitch',
      windRating: 'Class H (150 mph resistance)'
    }
  },
  {
    id: 'award-silver-2025',
    title: 'Coastal Horizon Oceanfront Resort',
    year: 2025,
    tier: 'Silver Winner',
    category: 'Commercial Roofing',
    location: 'Outer Banks, North Carolina',
    contractor: 'Atlantic Coast Commercial Roofing',
    manufacturer: 'IKO Industries & Owens Corning',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'Sprawling oceanfront resort complex spanning 42,000 sq ft. Utilized cool-roof reflective asphalt shingles to combat salt fog corrosion, intense UV radiation, and severe tropical wind gusts.',
    highlights: [
      'Solar-reflective granules reducing summer cooling loads by 18%.',
      'Corrosion-resistant stainless steel ring-shank fastener system.',
      'Integrated hidden ridge ventilation for continuous humidity exhaust.'
    ],
    specs: {
      shingleType: 'Cool Roof Reflective Architectural Shingle',
      squareFootage: '42,500 sq ft',
      slope: '6:12 dual-gable',
      windRating: '140 mph HVHZ Rated'
    }
  },
  {
    id: 'award-bronze-2025',
    title: 'Historic Saint Clair Community Cathedral',
    year: 2025,
    tier: 'Bronze Winner',
    category: 'Residential Roofing',
    location: 'Savannah, Georgia',
    contractor: 'Heritage Restoration Roofers',
    manufacturer: 'TAMKO Building Products',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    description: 'Precision restoration of an 1890s gothic revival spire structure. Replaced deteriorating slate with lightweight dimensional asphalt shingles that perfectly mimicked original hand-cut slate.',
    highlights: [
      'Preserved century-old timber roof framing by reducing dead weight by 60%.',
      'Intricate turrets and valleys cut with traditional artisan technique.',
      'Class 4 impact & Class A fire resistance certification.'
    ],
    specs: {
      shingleType: 'Historic Designer Slate-Look Shingles',
      squareFootage: '18,800 sq ft',
      slope: '16:12 extreme spire pitch',
      windRating: '130 mph Rated'
    }
  }
];

export const INDUSTRY_STATS: IndustryStat[] = [
  {
    id: 'stat-01',
    label: 'North American Manufacturers',
    value: 95,
    suffix: '%+',
    description: 'ARMA represents the overwhelming majority of asphalt shingle and roll roofing manufacturers in North America.',
    iconName: 'Building2'
  },
  {
    id: 'stat-02',
    label: 'Annual Roofing Shingle Production',
    value: 4.5,
    suffix: 'B+',
    description: 'Billion square feet of asphalt roofing installed annually on North American homes and commercial buildings.',
    iconName: 'Layers'
  },
  {
    id: 'stat-03',
    label: 'Years of Technical Leadership',
    value: 110,
    suffix: '+',
    description: 'Continuous leadership in building code standards, fire testing, and material science since 1915.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'stat-04',
    label: 'Shingles Recycled Annually',
    value: 2.2,
    suffix: 'M',
    description: 'Million tons of tear-off shingles recycled into paving mixtures and sustainable road infrastructure.',
    iconName: 'Recycle'
  }
];

export const SHINGLE_LAYERS: ShingleLayer[] = [
  {
    id: 'layer-1',
    number: 1,
    name: 'Ceramic-Coated Mineral Granules',
    material: 'Algae-Resistant Ceramic Basalt Granules',
    thickness: '1.2 mm',
    function: 'Deflects UV solar radiation, provides permanent color aesthetics, and delivers Class A fire resistance.',
    benefits: ['100% UV Protection', 'Class A Fire Barrier', 'Copper Algae Defense', 'Architectural Depth'],
    color: '#334155'
  },
  {
    id: 'layer-2',
    number: 2,
    name: 'Weathering-Grade Modified Asphalt',
    material: 'SBS Polymer-Modified Weathering Asphalt',
    thickness: '2.0 mm',
    function: 'Forms an impermeable waterproof barrier that resists thermal cracking, freeze-thaw cycles, and water intrusion.',
    benefits: ['Waterproof Barrier', 'Extreme Flexibility', 'Thermal Resistance', 'SBS Rubber Impact Shield'],
    color: '#0f172a'
  },
  {
    id: 'layer-3',
    number: 3,
    name: 'Woven Fiberglass Mat Core',
    material: 'High-Tensile Inorganic Fiberglass Fibers',
    thickness: '0.8 mm',
    function: 'Serves as the structural backbone of the shingle, providing tear strength, dimensional stability, and fire retardancy.',
    benefits: ['Zero Mold Growth', 'High Tear Strength', 'Dimensional Stability', 'Rot Proof Structural Core'],
    color: '#f97316'
  },
  {
    id: 'layer-4',
    number: 4,
    name: 'Secondary Asphalt Encapsulant',
    material: 'High-Adhesion Asphalt Coating',
    thickness: '1.5 mm',
    function: 'Binds the fiberglass mat to the back release backing and reinforces overall shingle thickness.',
    benefits: ['Dual Substrate Bond', 'High Adhesion', 'Additional Water Protection', 'Puncture Resistance'],
    color: '#1e293b'
  },
  {
    id: 'layer-5',
    number: 5,
    name: 'Thermogrip Self-Sealing Adhesive & Fastener Zone',
    material: 'Thermally Activated SBS Sealant Strip',
    thickness: '0.5 mm',
    function: 'Activates under solar warmth to bond overlapping shingles into a unified wind-resistant monolithic roof shield.',
    benefits: ['Class H 150mph Wind Bond', 'Nailing Zone Reinforcement', 'Cold Weather Hand Seal Compatible', 'Water Backup Seal'],
    color: '#ea580c'
  }
];
