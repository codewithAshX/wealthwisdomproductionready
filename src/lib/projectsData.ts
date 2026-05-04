export interface ProjectSpec {
  id: string;
  title: string;
  image: string;
  location: string;
  status: "completed" | "ongoing" | "upcoming";
  year: number;
  description: string;
  specifications: {
    area: string;
    units: string;
    floors: string;
    investment: string;
    roi: string;
    completion: string;
    amenities: string[];
    materials: string[];
  };
  highlights: string[];
}

export const projectsData: ProjectSpec[] = [
  {
    id: "pearl-heights",
    title: "Pearl Heights Residency",
    image: "/gallery/project1.jpg",
    location: "Downtown Metropolitan",
    status: "completed",
    year: 2023,
    description: "A luxurious mixed-use residential complex combining modern architecture with sustainable living spaces.",
    specifications: {
      area: "45,000 sq ft",
      units: "120 residential units",
      floors: "18 floors",
      investment: "$25M+",
      roi: "12-15% per annum",
      completion: "January 2023",
      amenities: [
        "Smart home automation",
        "Olympic swimming pool",
        "Fitness center & spa",
        "Rooftop garden",
        "24/7 security system",
        "Underground parking",
        "Community lounge",
        "Kids play area"
      ],
      materials: [
        "High-grade concrete",
        "Reinforced steel",
        "Energy-efficient glass",
        "Sustainable flooring"
      ]
    },
    highlights: [
      "LEED Silver Certified",
      "AI-powered energy management",
      "Zero-carbon footprint construction",
      "State-of-the-art security infrastructure"
    ]
  },
  {
    id: "emerald-plaza",
    title: "Emerald Plaza Commercial Hub",
    image: "/gallery/project2.jpg",
    location: "Business District",
    status: "completed",
    year: 2022,
    description: "Premium commercial complex designed for modern enterprises with flexible workspaces.",
    specifications: {
      area: "62,000 sq ft",
      units: "450+ commercial spaces",
      floors: "22 floors",
      investment: "$32M+",
      roi: "10-13% per annum",
      completion: "August 2022",
      amenities: [
        "High-speed internet connectivity",
        "Multi-level parking",
        "Conference centers",
        "Co-working spaces",
        "Fine dining restaurants",
        "Business lounges",
        "Retail outlets",
        "Helipad access"
      ],
      materials: [
        "Reinforced concrete",
        "Curtain wall systems",
        "Smart glass technology",
        "Fire-resistant materials"
      ]
    },
    highlights: [
      "Smart building technology",
      "ISO certified facility",
      "Multi-tenant flexibility",
      "Premium finishes throughout"
    ]
  },
  {
    id: "sunset-villas",
    title: "Sunset Villas Gated Community",
    image: "/gallery/project3.jpg",
    location: "Suburban Enclave",
    status: "completed",
    year: 2023,
    description: "Exclusive gated community featuring luxury villas with modern amenities and green spaces.",
    specifications: {
      area: "35 acres",
      units: "85 luxury villas",
      floors: "3-4 floors per villa",
      investment: "$18M+",
      roi: "14-17% per annum",
      completion: "May 2023",
      amenities: [
        "Private golf course",
        "Tennis courts",
        "Swimming pool complex",
        "Clubhouse",
        "Landscaped gardens",
        "Jogging trails",
        "Security gates",
        "Concierge service"
      ],
      materials: [
        "Premium marble",
        "Natural stone",
        "Hardwood flooring",
        "Double-glazed windows"
      ]
    },
    highlights: [
      "Gated security with CCTV",
      "Green sustainability practices",
      "Luxury spa facilities",
      "Smart villa systems"
    ]
  },
  {
    id: "skyline-tower",
    title: "Skyline Tower Metropolitan",
    image: "/gallery/project4.jpg",
    location: "City Center",
    status: "ongoing",
    year: 2024,
    description: "Ultra-modern skyscraper featuring mixed-use spaces with residential, commercial, and hospitality segments.",
    specifications: {
      area: "85,000 sq ft per floor",
      units: "200+ mixed-use units",
      floors: "35 floors",
      investment: "$45M+",
      roi: "13-16% per annum",
      completion: "December 2024",
      amenities: [
        "5-star hotel section",
        "Luxury residences",
        "Corporate offices",
        "High-end restaurants",
        "Observation deck",
        "Multi-level parking",
        "Premium spa",
        "Investment lounge"
      ],
      materials: [
        "Structural steel",
        "Advanced composite materials",
        "High-performance glazing",
        "Sustainable insulation"
      ]
    },
    highlights: [
      "Mixed-use integrated development",
      "World-class architecture",
      "Smart vertical city concept",
      "High-speed vertical transportation"
    ]
  },
  {
    id: "green-meadows",
    title: "Green Meadows Eco Park",
    image: "/gallery/project5.jpg",
    location: "Outskirts Development Zone",
    status: "ongoing",
    year: 2024,
    description: "Sustainable eco-friendly residential community with green spaces and renewable energy.",
    specifications: {
      area: "50 acres",
      units: "150+ eco homes",
      floors: "2-3 floors per unit",
      investment: "$22M+",
      roi: "11-14% per annum",
      completion: "October 2024",
      amenities: [
        "Solar power generation",
        "Rainwater harvesting",
        "Eco-lodges",
        "Nature trails",
        "Organic farming area",
        "Community center",
        "Bike paths",
        "Natural water features"
      ],
      materials: [
        "Recycled materials",
        "Eco-friendly concrete",
        "Natural wood",
        "Solar panels"
      ]
    },
    highlights: [
      "Carbon-neutral construction",
      "100% renewable energy",
      "Organic waste management",
      "Biodiversity preservation"
    ]
  },
  {
    id: "diamond-ridge",
    title: "Diamond Ridge Luxury Complex",
    image: "/gallery/project6.jpg",
    location: "Premium Highland Zone",
    status: "upcoming",
    year: 2025,
    description: "Ultra-luxury residential development with premium amenities and exclusive access.",
    specifications: {
      area: "40,000 sq ft",
      units: "95 ultra-luxury units",
      floors: "15 floors",
      investment: "$35M+",
      roi: "15-18% per annum",
      completion: "June 2025",
      amenities: [
        "Private cinema",
        "Wine cellar",
        "Steam rooms",
        "Infinity pools",
        "Private elevators",
        "Chef kitchens",
        "Smart home systems",
        "Rooftop lounges"
      ],
      materials: [
        "Italian marble",
        "Premium granite",
        "Crystal glass",
        "Teak wood"
      ]
    },
    highlights: [
      "Ultra-luxury positioning",
      "Exclusive membership",
      "Bespoke interiors",
      "Personalized concierge 24/7"
    ]
  }
];
