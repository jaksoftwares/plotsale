const properties = {
  '1': {
    id: '1',
    title: 'Prime Agricultural Land',
    location: 'Nakuru County, Kenya',
    price: 'KES 32,500,000',
    size: '5.2 acres',
    type: 'Agricultural',
    status: 'Available',
    description: 'Exceptional agricultural land located in the fertile highlands of Nakuru County. This prime property offers excellent soil quality, reliable water access, and strategic location for both crop farming and livestock keeping. The land is fully titled and ready for immediate development.',
    images: [
      'https://images.pexels.com/photos/248337/pexels-photo-248337.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: [
      'Water Access',
      'Fertile Soil',
      'Road Access',
      'Electricity Nearby',
      'Title Deed Available',
      'Fenced Perimeter',
      'Irrigation System',
      'Storage Facilities'
    ],
    specifications: {
      'Land Size': '5.2 acres',
      'Soil Type': 'Clay Loam',
      'Water Source': 'Borehole & River',
      'Access Road': 'All Weather Road',
      'Electricity': '500m to Grid',
      'Title': 'Freehold',
      'Zoning': 'Agricultural',
      'Topography': 'Gently Sloping'
    },
    seller: {
      name: 'John Kamau',
      company: 'Kamau Properties Ltd',
      phone: '+254 712 345 678',
      email: 'john@kamauproperties.co.ke',
      avatar: '/api/placeholder/100/100',
      verified: true,
      rating: 4.8,
      totalSales: 23
    },
    coordinates: { lat: -0.3031, lng: 36.0800 },
    nearbyAmenities: [
      { name: 'Nakuru Town', distance: '15 km', type: 'Town Center' },
      { name: 'Egerton University', distance: '8 km', type: 'Education' },
      { name: 'Nakuru Level 5 Hospital', distance: '12 km', type: 'Healthcare' },
      { name: 'Nakuru Airport', distance: '20 km', type: 'Transport' }
    ]
  },

  '2': {
    id: '2',
    title: 'Modern 3-Bedroom Apartment',
    location: 'Kileleshwa, Nairobi',
    price: 'KES 18,000,000',
    size: '145 sqm',
    type: 'Residential',
    status: 'Available',
    description: 'Spacious 3-bedroom apartment located in a secure and serene neighborhood. Features include high ceilings, modern kitchen, en-suite bedrooms, and a private balcony with city views.',
    images: [
      'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    features: [
      'Swimming Pool',
      'Backup Generator',
      'CCTV Surveillance',
      '24/7 Security',
      'Borehole Water',
      'Underground Parking',
      'Lift Access',
      'Gym Facility'
    ],
    specifications: {
      'Bedrooms': '3',
      'Bathrooms': '2',
      'Parking': '2',
      'Floor Level': '3rd Floor',
      'Year Built': '2020',
      'Balcony': 'Yes',
      'Internet Ready': 'Yes',
      'Pet Friendly': 'Yes'
    },
    seller: {
      name: 'Grace Njeri',
      company: 'Elite Homes Agency',
      phone: '+254 733 456 789',
      email: 'grace@elitehomes.co.ke',
      avatar: '/api/placeholder/100/100',
      verified: true,
      rating: 4.6,
      totalSales: 18
    },
    coordinates: { lat: -1.2895, lng: 36.7771 },
    nearbyAmenities: [
      { name: 'Valley Arcade', distance: '2 km', type: 'Shopping' },
      { name: 'Kileleshwa Police Station', distance: '1.5 km', type: 'Security' },
      { name: 'Java House', distance: '1.2 km', type: 'Restaurant' },
      { name: 'Prestige Hospital', distance: '3 km', type: 'Healthcare' }
    ]
  },

  '3': {
    id: '3',
    title: 'Office Space in CBD',
    location: 'Moi Avenue, Nairobi CBD',
    price: 'KES 250,000/month',
    size: '1,200 sq ft',
    type: 'Commercial',
    status: 'Available',
    description: 'Strategically located office space in the heart of Nairobi. Ideal for corporate offices, startups, or consultancy firms. Fully partitioned, air-conditioned, and serviced.',
    images: [
      'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    features: [
      'High-Speed Internet',
      '24/7 Security',
      'Backup Generator',
      'Air Conditioning',
      'Shared Reception',
      'Kitchenette',
      'Lift Access',
      'Conference Room'
    ],
    specifications: {
      'Floor': '5th',
      'Partitioned': 'Yes',
      'Security Access': 'Biometric',
      'Parking': 'Optional',
      'WiFi Ready': 'Yes',
      'Lease Terms': 'Minimum 1 Year',
      'Furnishing': 'Semi-furnished'
    },
    seller: {
      name: 'Peter Otieno',
      company: 'Metro Realty Ltd',
      phone: '+254 701 123 456',
      email: 'peter@metrorealty.co.ke',
      avatar: '/api/placeholder/100/100',
      verified: true,
      rating: 4.9,
      totalSales: 35
    },
    coordinates: { lat: -1.2833, lng: 36.8167 },
    nearbyAmenities: [
      { name: 'Hilton Hotel', distance: '100 m', type: 'Hospitality' },
      { name: 'Kenya National Archives', distance: '250 m', type: 'Landmark' },
      { name: 'Kencom Bus Station', distance: '400 m', type: 'Transport' }
    ]
  },

  '4': {
    id: '4',
    title: 'Industrial Plot for Sale',
    location: 'Athi River, Machakos County',
    price: 'KES 45,000,000',
    size: '2 acres',
    type: 'Industrial',
    status: 'Available',
    description: 'Strategically located industrial plot ideal for warehousing, factories, or logistics hubs. Flat terrain, fully accessible by trucks, and close proximity to Mombasa Road.',
    images: [
      'https://images.pexels.com/photos/532570/pexels-photo-532570.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3057960/pexels-photo-3057960.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    features: [
      'Truck Access',
      'Proximity to Highway',
      'Power Connection',
      'Water Available',
      'Perimeter Wall',
      'Flat Terrain',
      'Industrial Zoning'
    ],
    specifications: {
      'Zoning': 'Light Industrial',
      'Topography': 'Flat',
      'Power': '3-Phase Available',
      'Water Source': 'County Water',
      'Access Road': 'Tarmac',
      'Title': 'Freehold',
      'Security': 'Fenced with Gate'
    },
    seller: {
      name: 'Lucy Wambui',
      company: 'Eastern Industrial Agents',
      phone: '+254 719 333 888',
      email: 'lucy@eiafrica.co.ke',
      avatar: '/api/placeholder/100/100',
      verified: true,
      rating: 4.7,
      totalSales: 29
    },
    coordinates: { lat: -1.4446, lng: 36.9826 },
    nearbyAmenities: [
      { name: 'Mavoko Town', distance: '5 km', type: 'Urban Center' },
      { name: 'Mombasa Road', distance: '1 km', type: 'Transport' },
      { name: 'EPZ', distance: '3.5 km', type: 'Industrial Zone' }
    ]
  },

  '5': {
    id: '5',
    title: 'Coastal Beachfront Land',
    location: 'Diani Beach, Kwale County',
    price: 'KES 120,000,000',
    size: '3 acres',
    type: 'Commercial/Resort',
    status: 'Available',
    description: 'Unmatched beachfront property in Diani ideal for luxury resort development. White sandy beach, palm-lined perimeter, and direct ocean access make this a rare investment opportunity.',
    images: [
      'https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/221455/pexels-photo-221455.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    features: [
      'Beach Access',
      'Mature Palm Trees',
      'Secure Title',
      'Tourism Zone',
      'Private Entry',
      'Ocean View',
      'Road Access'
    ],
    specifications: {
      'Zoning': 'Commercial/Resort',
      'Frontage': '90 meters beachfront',
      'Topography': 'Flat with Slight Dune',
      'Water Source': 'On Site Borehole',
      'Access Road': 'Tarmac',
      'Electricity': 'Nearby Grid',
      'Title': 'Leasehold - 99 Years'
    },
    seller: {
      name: 'David Musyoka',
      company: 'Coastal Realty Ventures',
      phone: '+254 720 555 444',
      email: 'david@coastalrv.co.ke',
      avatar: '/api/placeholder/100/100',
      verified: true,
      rating: 5.0,
      totalSales: 41
    },
    coordinates: { lat: -4.2807, lng: 39.5951 },
    nearbyAmenities: [
      { name: 'Ukunda Airstrip', distance: '2.5 km', type: 'Transport' },
      { name: 'Diani Shopping Center', distance: '3 km', type: 'Retail' },
      { name: 'Leisure Lodge Golf Club', distance: '1 km', type: 'Recreation' }
    ]
  },
  '6': {
  id: '6',
  title: 'Luxury Villa with Private Pool',
  location: 'Runda, Nairobi',
  price: 'KES 95,000,000',
  size: '0.6 acres',
  type: 'Residential',
  status: 'Available',
  description: 'An exclusive luxury villa located in the affluent suburb of Runda. The property boasts 5 en-suite bedrooms, a private swimming pool, mature gardens, and modern finishes throughout.',
  images: [
    'https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  features: [
    'Private Pool',
    '5 Ensuite Bedrooms',
    'Landscaped Garden',
    'Detached DSQ',
    'Solar Water Heating',
    'Home Office',
    'Electric Fence',
    'Gated Community'
  ],
  specifications: {
    'Plot Size': '0.6 acres',
    'Bedrooms': '5',
    'Bathrooms': '6',
    'Garage': '2',
    'Security': '24/7 Guards + Electric Fence',
    'Water Source': 'Borehole + County Supply',
    'Backup Power': 'Generator & Inverter',
    'Internet': 'Fiber Optic Installed'
  },
  seller: {
    name: 'Ann Muthoni',
    company: 'Runda Estates Ltd',
    phone: '+254 734 555 333',
    email: 'ann@rundaestates.co.ke',
    avatar: '/api/placeholder/100/100',
    verified: true,
    rating: 4.9,
    totalSales: 16
  },
  coordinates: { lat: -1.2200, lng: 36.8400 },
  nearbyAmenities: [
    { name: 'UN Gigiri Complex', distance: '3.2 km', type: 'Government' },
    { name: 'Rosslyn Riviera Mall', distance: '2 km', type: 'Retail' },
    { name: 'Nairobi International School', distance: '2.5 km', type: 'Education' }
  ]
},

'7': {
  id: '7',
  title: 'Serviced Plots in Gated Estate',
  location: 'Kangundo Road, Nairobi Metropolis',
  price: 'KES 1,200,000 per plot',
  size: '50x100 ft',
  type: 'Residential Plot',
  status: 'Available',
  description: 'Affordable serviced plots in a gated, family-friendly estate. Each plot is ready for immediate development with water, electricity, perimeter wall, and estate roads already in place.',
  images: [
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/2119710/pexels-photo-2119710.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  features: [
    'Gated Community',
    'Perimeter Wall',
    'Water & Power Onsite',
    'Estate Roads',
    'Street Lighting',
    'Green Spaces',
    'Playground',
    'Drainage System'
  ],
  specifications: {
    'Plot Size': '50x100 ft',
    'Title': 'Freehold',
    'Zoning': 'Residential',
    'Water Source': 'Borehole + Tanks',
    'Electricity': 'Onsite',
    'Access Road': 'Murram',
    'Estate Type': 'Controlled Development'
  },
  seller: {
    name: 'Kevin Mwangi',
    company: 'Future Acres Ltd',
    phone: '+254 722 888 111',
    email: 'kevin@futureacres.co.ke',
    avatar: '/api/placeholder/100/100',
    verified: true,
    rating: 4.5,
    totalSales: 42
  },
  coordinates: { lat: -1.3295, lng: 37.1481 },
  nearbyAmenities: [
    { name: 'Ruai Market', distance: '4.5 km', type: 'Retail' },
    { name: 'Kangundo Road Superhighway', distance: '2 km', type: 'Transport' },
    { name: 'Sunshine Academy', distance: '3 km', type: 'Education' }
  ]
},

'8': {
  id: '8',
  title: 'Commercial Retail Space for Lease',
  location: 'Thika Town, Kiambu County',
  price: 'KES 75,000/month',
  size: '850 sq ft',
  type: 'Commercial',
  status: 'Available',
  description: 'Ground floor retail space suitable for a pharmacy, electronics shop, or mini-mart. Located in a high foot traffic area near public transport and schools.',
  images: [
    'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3968065/pexels-photo-3968065.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  features: [
    'High Foot Traffic',
    'Glass Frontage',
    'Power Backup',
    'Tiled Floor',
    'Security Grills',
    'Water Connection',
    'Private Washroom'
  ],
  specifications: {
    'Floor': 'Ground Floor',
    'Shop Width': '25 ft',
    'Depth': '34 ft',
    'Power': 'Prepaid Meter',
    'Security': 'Steel Roll-Up Shutters',
    'Lease Terms': 'Minimum 1 Year',
    'Furnishing': 'Unfurnished'
  },
  seller: {
    name: 'Martin Karanja',
    company: 'Thika Prime Spaces',
    phone: '+254 715 456 222',
    email: 'martin@thikaprimespaces.co.ke',
    avatar: '/api/placeholder/100/100',
    verified: true,
    rating: 4.4,
    totalSales: 12
  },
  coordinates: { lat: -1.0344, lng: 37.0706 },
  nearbyAmenities: [
    { name: 'Mount Kenya University', distance: '700 m', type: 'Education' },
    { name: 'Thika Main Stage', distance: '300 m', type: 'Transport' },
    { name: 'Naivas Supermarket', distance: '150 m', type: 'Retail' }
  ]
}

};

export default properties;
