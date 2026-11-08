// The rooms of the guesthouse. Prices are per night in FCFA (XAF). The Royal Apartment is real; edit the other rooms freely.
// Each room can have a slideshow in `photos`: images {src, thumb, alt} and videos {type:"video", src, poster, thumb, alt}, in any order.
// Add media from the terminal with:  node scripts/add-media.js <room-id> <file> "caption"
module.exports = [
  {
    "id": "royal-apartment",
    "name": "Royal Apartment",
    "tagline": "Fully furnished one-bedroom apartment",
    "price": 25000,
    "capacity": 2,
    "beds": "1 double bed",
    "amenities": [
      "Air-conditioned bedroom",
      "Air conditioning in the living room",
      "Living room with sofa and TV",
      "Dining area",
      "Fully equipped kitchen (fridge, microwave, kettle, cooker)",
      "Bathroom with shower and hot water",
      "Wardrobe",
      "Marble-tiled floors",
      "Parking available",
      "Security available"
    ],
    "description": "A bright, fully furnished apartment with a spacious air-conditioned bedroom, a stylish living room with sofa, TV and dining area, a fully equipped kitchen and a bathroom with hot water. Everything you need to feel at home, from a short stay to a longer visit.",
    "cover": "/media/apt-card.jpg",
    "photos": [
      {
        "src": "/media/apt-living.jpg",
        "alt": "Living room with sofa, TV and dining area",
        "thumb": "/media/apt-living-t.jpg"
      },
      {
        "src": "/media/apt-living2.jpg",
        "alt": "Living room in the evening light",
        "thumb": "/media/apt-living2-t.jpg"
      },
      {
        "src": "/media/apt-kitchen.jpg",
        "alt": "Fully equipped kitchen",
        "thumb": "/media/apt-kitchen-t.jpg"
      },
      {
        "src": "/media/apt-bedroom.jpg",
        "alt": "Air-conditioned bedroom",
        "thumb": "/media/apt-bedroom-t.jpg"
      },
      {
        "src": "/media/apt-bedroom2.jpg",
        "alt": "Bedroom with wooden ceiling",
        "thumb": "/media/apt-bedroom2-t.jpg"
      },
      {
        "src": "/media/apt-bathroom.jpg",
        "alt": "Bathroom with shower",
        "thumb": "/media/apt-bathroom-t.jpg"
      },
      {
        "type": "video",
        "src": "/media/apt-video.mp4",
        "poster": "/media/apt-video-poster.jpg",
        "thumb": "/media/apt-video-t.jpg",
        "alt": "Video tour of the apartment"
      }
    ]
  },
  {
    "id": "comfort-apartment",
    "name": "Comfort Apartment",
    "tagline": "Fully furnished two-bedroom apartment",
    "price": 35000,
    "capacity": 4,
    "beds": "2 bedrooms",
    "amenities": [
      "Air-conditioned bedroom",
      "Two bedrooms with wardrobe",
      "Living room with sofas and TV",
      "Dining area",
      "Kitchen with fridge and cooker",
      "Bathroom with shower",
      "Marble-tiled floors",
      "Parking available",
      "Security available"
    ],
    "description": "A bright, fully furnished two-bedroom apartment with a stylish living room and dining area, a kitchen with fridge and cooker, and a tiled bathroom with shower. Comfortable for couples, friends or a small family, with parking on site.",
    "cover": "/media/apt2-card.jpg",
    "photos": [
      {
        "src": "/media/apt2-living.jpg",
        "alt": "Living room with sofas, TV and chandelier",
        "thumb": "/media/apt2-living-t.jpg"
      },
      {
        "src": "/media/apt2-living2.jpg",
        "alt": "Living room and dining area",
        "thumb": "/media/apt2-living2-t.jpg"
      },
      {
        "src": "/media/apt2-kitchen.jpg",
        "alt": "Kitchen with fridge and cooker",
        "thumb": "/media/apt2-kitchen-t.jpg"
      },
      {
        "src": "/media/apt2-bedroom.jpg",
        "alt": "Air-conditioned bedroom",
        "thumb": "/media/apt2-bedroom-t.jpg"
      },
      {
        "src": "/media/apt2-bedroom2.jpg",
        "alt": "Second bedroom with wardrobe",
        "thumb": "/media/apt2-bedroom2-t.jpg"
      },
      {
        "src": "/media/apt2-bathroom.jpg",
        "alt": "Bathroom with shower",
        "thumb": "/media/apt2-bathroom-t.jpg"
      },
      {
        "src": "/media/apt2-hall.jpg",
        "alt": "Bright hallway with marble floor",
        "thumb": "/media/apt2-hall-t.jpg"
      },
      {
        "src": "/media/apt2-parking.jpg",
        "alt": "Secure parking area",
        "thumb": "/media/apt2-parking-t.jpg"
      }
    ]
  },
  {
    "id": "royal-suite",
    "name": "Royal Suite",
    "tagline": "Our finest suite with a private lounge",
    "price": 75000,
    "capacity": 3,
    "beds": "1 king bed + sofa bed",
    "size": 55,
    "amenities": [
      "Air conditioning",
      "Wi-Fi",
      "55\" Smart TV",
      "Private lounge",
      "Hot-water bathroom with bathtub",
      "Mini fridge",
      "Balcony",
      "Parking available",
      "Security available"
    ],
    "description": "A spacious suite with a king bed, separate lounge and private balcony. Fully furnished with a work desk, wardrobe and premium linen, it is perfect for special occasions and longer stays."
  },
  {
    "id": "executive-room",
    "name": "Executive Room",
    "tagline": "Comfort and workspace for business travellers",
    "price": 45000,
    "capacity": 2,
    "beds": "1 queen bed",
    "size": 32,
    "amenities": [
      "Air conditioning",
      "Wi-Fi",
      "Smart TV",
      "Work desk",
      "Hot-water shower",
      "Mini fridge",
      "Parking available",
      "Security available"
    ],
    "description": "A calm, well-lit room with a queen bed and a proper work desk. Fast Wi-Fi keeps you productive, and parking and security are available."
  },
  {
    "id": "deluxe-double",
    "name": "Deluxe Double",
    "tagline": "Elegant and bright for two",
    "price": 35000,
    "capacity": 2,
    "beds": "1 double bed",
    "size": 26,
    "amenities": [
      "Air conditioning",
      "Wi-Fi",
      "Smart TV",
      "Hot-water shower",
      "Wardrobe",
      "Parking available",
      "Security available"
    ],
    "description": "A comfortable double room with tasteful furnishings, ideal for couples and short stays."
  },
  {
    "id": "family-apartment",
    "name": "Family Apartment",
    "tagline": "Two bedrooms and a full kitchenette",
    "price": 95000,
    "capacity": 5,
    "beds": "1 double bed + 2 twin beds",
    "size": 78,
    "amenities": [
      "Air conditioning",
      "Wi-Fi",
      "2 Smart TVs",
      "Kitchenette",
      "Living room",
      "2 bathrooms",
      "Washing machine",
      "Parking available",
      "Security available"
    ],
    "description": "A fully furnished apartment for families and groups, with two bedrooms, a living room and a kitchenette so you can cook and relax like at home."
  },
  {
    "id": "garden-studio",
    "name": "Garden Studio",
    "tagline": "Quiet studio opening onto the garden",
    "price": 40000,
    "capacity": 2,
    "beds": "1 double bed",
    "size": 30,
    "amenities": [
      "Air conditioning",
      "Wi-Fi",
      "Smart TV",
      "Kitchenette",
      "Garden terrace",
      "Hot-water shower",
      "Parking available",
      "Security available"
    ],
    "description": "A peaceful studio with its own terrace on the garden. Includes a kitchenette for longer stays."
  }
];
