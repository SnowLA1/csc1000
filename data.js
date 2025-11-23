// Simple mock data. Replace with your DB/API later.
window.LISTINGS = [
  {
    id: 1,
    title: "123 Yellow Brick Road",
    area: "Dublin 2",
    priceMonthly: 2300,
    beds: 3,
    type: "apartment",
    lat: 53.3429,
    lng: -6.2585,
    img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Modern Studio Near Trinity",
    area: "Dublin 2",
    priceMonthly: 1750,
    beds: 1,
    type: "studio",
    lat: 53.3442,
    lng: -6.2620,
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Family House w/ Garden",
    area: "Dublin 15",
    priceMonthly: 2600,
    beds: 4,
    type: "house",
    lat: 53.3920,
    lng: -6.3940,
    img: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Shared Room in City Centre",
    area: "Dublin 1",
    priceWeekly: 180,
    beds: 1,
    type: "room",
    lat: 53.3540,
    lng: -6.2660,
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Canal-Side 2 Bed Apartment",
    area: "Dublin 8",
    priceMonthly: 2100,
    beds: 2,
    type: "apartment",
    lat: 53.3381,
    lng: -6.2763,
    img: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Bright Studio in Rathmines",
    area: "Dublin 6",
    priceMonthly: 1450,
    beds: 1,
    type: "studio",
    lat: 53.3218,
    lng: -6.2675,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "3 Bed Semi-Detached, Clontarf",
    area: "Dublin 3",
    priceMonthly: 2900,
    beds: 3,
    type: "house",
    lat: 53.3637,
    lng: -6.2108,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Student Room Near DCU",
    area: "Dublin 9",
    priceWeekly: 160,
    beds: 1,
    type: "room",
    lat: 53.3878,
    lng: -6.2597,
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Luxury 1 Bed Docklands",
    area: "Dublin 4",
    priceMonthly: 2500,
    beds: 1,
    type: "apartment",
    lat: 53.3413,
    lng: -6.2376,
    img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Cozy 2 Bed in Tallaght",
    area: "Dublin 24",
    priceMonthly: 1700,
    beds: 2,
    type: "house",
    lat: 53.2877,
    lng: -6.3636,
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Penthouse Apartment, Smithfield",
    area: "Dublin 7",
    priceMonthly: 3200,
    beds: 2,
    type: "apartment",
    lat: 53.3487,
    lng: -6.2785,
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Affordable Studio, Ballymun",
    area: "Dublin 11",
    priceMonthly: 1100,
    beds: 1,
    type: "studio",
    lat: 53.3994,
    lng: -6.2633,
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 13,
    title: "4 Bed House, Dundrum",
    area: "Dublin 14",
    priceMonthly: 3000,
    beds: 4,
    type: "house",
    lat: 53.2897,
    lng: -6.2430,
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 14,
    title: "Room in Shared House, Blanchardstown",
    area: "Dublin 15",
    priceWeekly: 140,
    beds: 1,
    type: "room",
    lat: 53.3928,
    lng: -6.3910,
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 15,
    title: "Seaside Apartment, Howth",
    area: "Dublin 13",
    priceMonthly: 2200,
    beds: 2,
    type: "apartment",
    lat: 53.3890,
    lng: -6.0653,
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
  },

  // --- 10 NEW REALISTIC LISTINGS BELOW ---
  {
    id: 16,
    title: "Modern 1 Bed in Stoneybatter",
    area: "Dublin 7",
    priceMonthly: 1800,
    beds: 1,
    type: "apartment",
    lat: 53.3551,
    lng: -6.2780,
    img: "https://images.unsplash.com/photo-1572120360610-d971b9b78827?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 17,
    title: "Large Shared Room, Phibsborough",
    area: "Dublin 7",
    priceWeekly: 165,
    beds: 1,
    type: "room",
    lat: 53.3604,
    lng: -6.2721,
    img: "https://images.unsplash.com/photo-1552321554-5f4b8f0470d1?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 18,
    title: "2 Bed Apartment, Grand Canal Dock",
    area: "Dublin 2",
    priceMonthly: 2800,
    beds: 2,
    type: "apartment",
    lat: 53.3421,
    lng: -6.2385,
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 19,
    title: "Studio, Rathgar Village",
    area: "Dublin 6",
    priceMonthly: 1350,
    beds: 1,
    type: "studio",
    lat: 53.3103,
    lng: -6.2825,
    img: "https://images.unsplash.com/photo-1593598017817-50b03372b4ec?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 20,
    title: "3 Bed House, Malahide",
    area: "Dublin",
    priceMonthly: 2600,
    beds: 3,
    type: "house",
    lat: 53.4500,
    lng: -6.1500,
    img: "https://images.unsplash.com/photo-1600585154013-9897a02ab45c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 21,
    title: "Room Near UCD, Stillorgan",
    area: "Dublin 18",
    priceWeekly: 170,
    beds: 1,
    type: "room",
    lat: 53.2888,
    lng: -6.2183,
    img: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 22,
    title: "City Centre 2 Bed, Parnell St",
    area: "Dublin 1",
    priceMonthly: 2400,
    beds: 2,
    type: "apartment",
    lat: 53.3531,
    lng: -6.2624,
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 23,
    title: "Suburban 4 Bed in Knocklyon",
    area: "Dublin 16",
    priceMonthly: 2700,
    beds: 4,
    type: "house",
    lat: 53.2812,
    lng: -6.3081,
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 24,
    title: "Budget Studio, Lucan",
    area: "Dublin",
    priceMonthly: 1150,
    beds: 1,
    type: "studio",
    lat: 53.3572,
    lng: -6.4485,
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 25,
    title: "Modern 1 Bed in Drumcondra",
    area: "Dublin 9",
    priceMonthly: 1850,
    beds: 1,
    type: "apartment",
    lat: 53.3687,
    lng: -6.2513,
    img: "https://images.unsplash.com/photo-1598928506311-c55dedbf7885?q=80&w=1200&auto=format&fit=crop"
  }
];
