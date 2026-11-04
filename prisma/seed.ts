import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Virasat Real Estate Database...");

  // 1. Clear existing seed data safely
  await prisma.leadNote.deleteMany({});
  await prisma.enquiry.deleteMany({});
  await prisma.projectDocument.deleteMany({});
  await prisma.projectMedia.deleteMany({});
  await prisma.nearbyLandmark.deleteMany({});
  await prisma.projectAmenity.deleteMany({});
  await prisma.projectConfiguration.deleteMany({});
  await prisma.project.deleteMany({});
  await prisma.projectCategory.deleteMany({});
  await prisma.blogPost.deleteMany({});
  await prisma.websiteSetting.deleteMany({});
  await prisma.adminUser.deleteMany({});

  // 2. Create Admin User (default dev credentials)
  await prisma.adminUser.create({
    data: {
      email: "admin@virasatdevelopments.com",
      name: "Virasat Executive Admin",
      password: "virasat@admin2026", // For production, replace with hashed password
      role: "SUPER_ADMIN",
    },
  });

  // 3. Website Settings
  const settings = [
    { key: "company_name", value: "VIRASAT DEVELOPMENTS", description: "Official corporate trade name" },
    { key: "company_tagline", value: "Creating Spaces. Building Legacies.", description: "Brand slogan" },
    { key: "office_address", value: "Virasat Corporate Tower, Ring Road Corridor, Varanasi, Uttar Pradesh - 221002, India", description: "Primary headquarters address" },
    { key: "phone_primary", value: "+91 98765 43210", description: "Primary customer assistance phone" },
    { key: "phone_secondary", value: "+91 98765 43211", description: "Secondary VIP enquiry line" },
    { key: "whatsapp_number", value: "+919876543210", description: "Official WhatsApp concierge" },
    { key: "email_general", value: "contact@virasatdevelopments.com", description: "Official contact email" },
    { key: "email_enquiry", value: "sales@virasatdevelopments.com", description: "Sales lead notification email" },
    { key: "rera_disclaimer", value: "Disclaimer: All images, plans, specifications, dimensions, amenities, and details contained in this website are for conceptual and presentation purposes only. Projects are developed in strict adherence with UP-RERA guidelines and municipal statutory approvals. Actual deliverables shall be governed by the registered agreement for sale. RERA registration numbers are displayed on each respective project page.", description: "Standard regulatory legal footer disclaimer" },
    { key: "google_maps_embed", value: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.24588741364!2d82.9087063!3d25.321684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin", description: "Varanasi corporate office map embed" },
    { key: "facebook_url", value: "https://facebook.com/virasatdevelopments", description: "Facebook page" },
    { key: "instagram_url", value: "https://instagram.com/virasatdevelopments", description: "Instagram profile" },
    { key: "linkedin_url", value: "https://linkedin.com/company/virasatdevelopments", description: "LinkedIn company page" },
    { key: "youtube_url", value: "https://youtube.com/@virasatdevelopments", description: "YouTube official channel" },
  ];

  for (const s of settings) {
    await prisma.websiteSetting.create({ data: s });
  }

  // 4. Project Categories
  const catPlots = await prisma.projectCategory.create({
    data: {
      name: "Residential & Luxury Plots",
      slug: "residential-plots",
      description: "Carefully curated plotted developments offering sprawling greens, wide internal boulevards, and freehold ownership.",
      order: 1,
    },
  });

  const catApartments = await prisma.projectCategory.create({
    data: {
      name: "Luxury Apartments",
      slug: "luxury-apartments",
      description: "Iconic high-rise residences combining panoramic skyline views with resort-style wellness amenities.",
      order: 2,
    },
  });

  const catVillas = await prisma.projectCategory.create({
    data: {
      name: "Boutique Villas & Estates",
      slug: "villas-and-estates",
      description: "Private sanctuaries with bespoke architecture, personal courtyards, and tranquil landscaped surroundings.",
      order: 3,
    },
  });

  const catCommercial = await prisma.projectCategory.create({
    data: {
      name: "Commercial & Retail Hubs",
      slug: "commercial-retail",
      description: "High-street retail galleries and Grade-A business spaces positioned at prime Varanasi transit corridors.",
      order: 4,
    },
  });

  // 5. Create Flagship Projects

  // Project 0: Virasat Kashi Lake City (41.31-Acre Flagship Masterplan Plotted Estate)
  const projectKashiLake = await prisma.project.create({
    data: {
      title: "Virasat Kashi Lake City",
      slug: "kashi-lake-city",
      tagline: "Varanasi's Flagship 41-Acre Lakefront Plotted Sanctuary",
      shortDescription: "An expansive 41.31-acre master-planned plotted development comprising 434 freehold villa plots, an internal freshwater lake with promenade, 24m grand boulevard, and an exclusive 3,000 m² clubhouse.",
      fullDescription: `Envisioned as Eastern Uttar Pradesh's most sophisticated gated plotted township, Virasat Kashi Lake City spans 41.31 acres of pristine, freehold land in the high-growth corridor of Varanasi. 

The masterplan harmoniously balances high-end residential privacy with expansive natural recreation, dedicating over 15% of the estate (25,100 m² / ~6.2 Acres) to pure botanical parks, shaded woodlands, and open community greens. At the heart of the estate lies an inland freshwater lake (3,500 m²) with a continuous timber promenade, stepped cascading rain gardens, illuminated walking bridges, and scenic waterside seating.

Residents enjoy an unmatched road and mobility network anchored by a 24-metre wide Grand Boulevard, 12-metre collector boulevards, and 9-metre traffic-calmed residential avenues with dedicated bicycle tracks and bioswales. The estate is fortified with 100% subterranean utilities (concealed electrical cabling, high-speed fiber conduits, underground stormwater drainage, and sewage treatment), a monumental sandstone civic entrance gate, 3-tier 24x7 security, and a 3,000 m² luxury clubhouse featuring an infinity pool and sports arena.`,
      categoryId: catPlots.id,
      status: "New Launch",
      propertyType: "Plotted Development",
      locationName: "Gudiya, Outer Ring Road Corridor, Varanasi",
      fullAddress: "Virasat Kashi Lake City, Ring Road Phase-2 Extension, Gudiya, Varanasi, UP 221003",
      city: "Varanasi",
      state: "Uttar Pradesh",
      pincode: "221003",
      heroImage: "/images/projects/kashi-lake-city/civic-entrance-gate.jpg",
      masterPlanImage: "/images/projects/kashi-lake-city/plotted-development-aerial.jpg",
      brochureUrl: "/downloads/kashi-lake-city-brochure.pdf",
      reraNumber: "[UP-RERA Registration in Progress / Statutory Planning Reference V4]",
      priceStarting: "₹36 Lakhs onwards",
      possessionDate: "Phased Handover 2026 - 2027",
      totalArea: "41.31 Acres Masterplan (1,67,188 m²)",
      totalUnits: "434 Curated Freehold Plots (5 Phases)",
      openSpaceRatio: "15.01% Dedicated Botanical Parks (25,100 m²)",
      roadWidth: "24m Grand Boulevard, 12m Collectors & 9m Streets",
      isFeatured: true,
      isPublished: true,
      order: 1,
      metaTitle: "Virasat Kashi Lake City | 41-Acre Luxury Plotted Township in Varanasi",
      metaDescription: "Explore 434 freehold residential plots at Virasat Kashi Lake City, Varanasi. 41.31-acre gated estate featuring internal freshwater lake, 3,000 m² clubhouse, and 24m grand boulevard.",
    },
  });

  // Project 0 Configurations (Plot Sizes from Masterplan Schedule)
  await prisma.projectConfiguration.createMany({
    data: [
      {
        projectId: projectKashiLake.id,
        title: "The Classic Villa Plot",
        type: "PLOT",
        dimensions: "30 ft x 40 ft (1,200 sq.ft.) — 109 Plots in Mix",
        plotSizeSqFt: 1200,
        priceEstimate: "₹36 Lakhs* onwards",
        floorPlanImage: "/images/projects/kashi-lake-city/local-street-plot-edge.jpg",
        order: 1,
      },
      {
        projectId: projectKashiLake.id,
        title: "The Signature Family Plot",
        type: "PLOT",
        dimensions: "30 ft x 50 ft (1,500 sq.ft.) — 239 Plots in Mix",
        plotSizeSqFt: 1500,
        priceEstimate: "₹45 Lakhs* onwards",
        floorPlanImage: "/images/projects/kashi-lake-city/traffic-calmed-avenue.jpg",
        order: 2,
      },
      {
        projectId: projectKashiLake.id,
        title: "The Royale Parkside Plot",
        type: "PLOT",
        dimensions: "30 ft x 60 ft (1,800 sq.ft.) — 22 Plots in Mix",
        plotSizeSqFt: 1800,
        priceEstimate: "₹54 Lakhs* onwards",
        floorPlanImage: "/images/projects/kashi-lake-city/corner-plot-parklet.jpg",
        order: 3,
      },
      {
        projectId: projectKashiLake.id,
        title: "The Imperial Estate Plot",
        type: "PLOT",
        dimensions: "40 ft x 60 ft (2,400 sq.ft.) — 64 Plots in Mix",
        plotSizeSqFt: 2400,
        priceEstimate: "₹72 Lakhs* onwards",
        floorPlanImage: "/images/projects/kashi-lake-city/villa-street-boundary.jpg",
        order: 4,
      },
    ],
  });

  // Project 0 Amenities
  await prisma.projectAmenity.createMany({
    data: [
      { projectId: projectKashiLake.id, title: "The Grand Residents Clubhouse (3,000 m²)", category: "Leisure", description: "Resort infinity swimming pool, wellness gym, banquet event lawn, indoor games lounge, and poolside dining.", iconName: "Building2", order: 1 },
      { projectId: projectKashiLake.id, title: "Freshwater Lake & Aquatic Promenade (3,500 m²)", category: "Wellness", description: "Inland natural lake featuring timber boardwalk, illuminated arched bridge, water lily ponds, and sunset viewing deck.", iconName: "Waves", order: 2 },
      { projectId: projectKashiLake.id, title: "Sports & Active Recreation Arena (3,500 m²)", category: "Wellness", description: "Multi-sport basketball & tennis courts, mini football turf, fitness equipment, and dedicated children's play arena.", iconName: "Dumbbell", order: 3 },
      { projectId: projectKashiLake.id, title: "Heritage Sandstone Civic Entrance Gate (1,500 m²)", category: "Security", description: "Monumental triple-arched gate inspired by Kashi architecture, 24/7 RFID boom barriers, and estate administration office.", iconName: "ShieldCheck", order: 4 },
      { projectId: projectKashiLake.id, title: "Woodland Shaded Park & Yoga Lawn (2,200 m²)", category: "Wellness", description: "Canopied woodland retreat with open-air meditation lawn, yoga circle, and senior citizen reflexology walking trails.", iconName: "Trees", order: 5 },
      { projectId: projectKashiLake.id, title: "24-Metre Grand Arrival Boulevard", category: "Infrastructure", description: "Arterial dual carriageway with landscaped flowering medians, solar-powered illumination, and dedicated cycle tracks.", iconName: "Compass", order: 6 },
      { projectId: projectKashiLake.id, title: "100% Subterranean Utilities & Cabling", category: "Infrastructure", description: "Zero overhead wires with concealed underground electrical lines, fiber conduits, storm drainage, and sewage treatment.", iconName: "Zap", order: 7 },
      { projectId: projectKashiLake.id, title: "Stepped Rain Gardens & Natural Cascades", category: "Eco-living", description: "Terraced natural stone waterfalls and bio-retention swales preventing waterlogging and recharging groundwater.", iconName: "Sparkles", order: 8 },
    ],
  });

  // Project 0 Nearby Landmarks
  await prisma.nearbyLandmark.createMany({
    data: [
      { projectId: projectKashiLake.id, name: "Varanasi Ring Road Junction (Phase-2)", category: "Transit", distanceKm: "1.5 Km", travelTimeMin: "4 Mins", order: 1 },
      { projectId: projectKashiLake.id, name: "Lal Bahadur Shastri Int'l Airport (Babatpur)", category: "Airport", distanceKm: "14.5 Km", travelTimeMin: "18 Mins", order: 2 },
      { projectId: projectKashiLake.id, name: "Varanasi Cantt Railway Station & Hub", category: "Transit", distanceKm: "11.0 Km", travelTimeMin: "20 Mins", order: 3 },
      { projectId: projectKashiLake.id, name: "Kashi Vishwanath Corridor & Dashashwamedh", category: "Spiritual", distanceKm: "14.2 Km", travelTimeMin: "28 Mins", order: 4 },
      { projectId: projectKashiLake.id, name: "Heritage Multi-Speciality Hospital", category: "Healthcare", distanceKm: "7.8 Km", travelTimeMin: "12 Mins", order: 5 },
      { projectId: projectKashiLake.id, name: "DPS & St. Francis International School Corridor", category: "Education", distanceKm: "3.5 Km", travelTimeMin: "6 Mins", order: 6 },
    ],
  });

  // Project 0 Media Gallery (24 High-Res Real Clean Renders)
  await prisma.projectMedia.createMany({
    data: [
      { projectId: projectKashiLake.id, title: "Monumental Civic Entrance Gate", caption: "Triple-arched sandstone arrival gateway with 24x7 security", url: "/images/projects/kashi-lake-city/civic-entrance-gate.jpg", category: "Architecture", isFeatured: true, order: 1 },
      { projectId: projectKashiLake.id, title: "The Grand Residents Clubhouse", caption: "3,000 m² clubhouse pavilion with swimming pool and event lawn", url: "/images/projects/kashi-lake-city/grand-clubhouse.jpg", category: "Architecture", isFeatured: true, order: 2 },
      { projectId: projectKashiLake.id, title: "Natural Freshwater Lake & Pedestrian Bridge", caption: "3,500 m² inland lake crossed by scenic arched bridge", url: "/images/projects/kashi-lake-city/lake-pedestrian-bridge.jpg", category: "Landscape", isFeatured: true, order: 3 },
      { projectId: projectKashiLake.id, title: "Waterfront Timber Boardwalk", caption: "Illuminated evening boardwalk along natural lotus wetlands", url: "/images/projects/kashi-lake-city/lake-timber-boardwalk.jpg", category: "Landscape", isFeatured: false, order: 4 },
      { projectId: projectKashiLake.id, title: "Clubhouse Reflected on the Lake at Dusk", caption: "Stunning destination precinct blending water and architecture", url: "/images/projects/kashi-lake-city/clubhouse-lake-dusk.jpg", category: "Architecture", isFeatured: false, order: 5 },
      { projectId: projectKashiLake.id, title: "Lakefront Promenade at Night", caption: "Warm bollard illumination and serene lake walk", url: "/images/projects/kashi-lake-city/lake-promenade-night.jpg", category: "Landscape", isFeatured: false, order: 6 },
      { projectId: projectKashiLake.id, title: "Sports & Active Recreation Complex", caption: "Basketball, tennis courts, and football sports arena", url: "/images/projects/kashi-lake-city/sports-recreation-arena.jpg", category: "Landscape", isFeatured: false, order: 7 },
      { projectId: projectKashiLake.id, title: "Yoga & Senior Fitness Pavilion", caption: "Dedicated open-air meditation circle in Phase 4", url: "/images/projects/kashi-lake-city/yoga-senior-fitness-park.jpg", category: "Landscape", isFeatured: false, order: 8 },
      { projectId: projectKashiLake.id, title: "Phase 1 Usable Family Park", caption: "Lush botanical gardens with walking paths and pergolas", url: "/images/projects/kashi-lake-city/family-park-greenery.jpg", category: "Landscape", isFeatured: false, order: 9 },
      { projectId: projectKashiLake.id, title: "Phase 4 Shaded Woodland Park", caption: "Canopy trees providing cool natural shade throughout", url: "/images/projects/kashi-lake-city/woodland-shaded-park.jpg", category: "Landscape", isFeatured: false, order: 10 },
      { projectId: projectKashiLake.id, title: "Lake Green Arrival Pathway", caption: "Stone-paved walkway with natural waterfall cascade", url: "/images/projects/kashi-lake-city/lake-green-arrival.jpg", category: "Landscape", isFeatured: false, order: 11 },
      { projectId: projectKashiLake.id, title: "Stepped Rain Garden Cascade", caption: "Natural stone water feature designed for eco-filtration", url: "/images/projects/kashi-lake-city/lake-rain-garden-cascade.jpg", category: "Landscape", isFeatured: false, order: 12 },
      { projectId: projectKashiLake.id, title: "Universal Accessible Lake Ramp", caption: "Barrier-free access to all waterfront amenities", url: "/images/projects/kashi-lake-city/lake-accessible-promenade.jpg", category: "Landscape", isFeatured: false, order: 13 },
      { projectId: projectKashiLake.id, title: "Nature Learning Gazebo & Bird Habitat", caption: "Serene flora and fauna sanctuary at the lake edge", url: "/images/projects/kashi-lake-city/lake-nature-gazebo.jpg", category: "Landscape", isFeatured: false, order: 14 },
      { projectId: projectKashiLake.id, title: "Plotted Development Aerial Perspective", caption: "Well-demarcated freehold plot clusters and wide roads", url: "/images/projects/kashi-lake-city/plotted-development-aerial.jpg", category: "Architecture", isFeatured: false, order: 15 },
      { projectId: projectKashiLake.id, title: "Villa Boundaries & Sidewalks", caption: "Coordinated stone boundary walls and pedestrian paths", url: "/images/projects/kashi-lake-city/villa-street-boundary.jpg", category: "Architecture", isFeatured: false, order: 16 },
      { projectId: projectKashiLake.id, title: "Main Gate Drop-Off Plaza", caption: "Spacious multi-lane arrival zone with visitor parking", url: "/images/projects/kashi-lake-city/main-gate-dropoff.jpg", category: "Architecture", isFeatured: false, order: 17 },
      { projectId: projectKashiLake.id, title: "Landscaped Traffic Roundabout", caption: "Decorative central planter island for smooth traffic flow", url: "/images/projects/kashi-lake-city/landscaped-roundabout.jpg", category: "Landscape", isFeatured: false, order: 18 },
      { projectId: projectKashiLake.id, title: "Pedestrian & Cycling Green Spine", caption: "Dedicated bicycle tracks separated from motor vehicles", url: "/images/projects/kashi-lake-city/pedestrian-cycling-spine.jpg", category: "Landscape", isFeatured: false, order: 19 },
      { projectId: projectKashiLake.id, title: "Traffic-Calmed Residential Street", caption: "Cobblestone pedestrian crosswalks and flowering verges", url: "/images/projects/kashi-lake-city/traffic-calmed-avenue.jpg", category: "Architecture", isFeatured: false, order: 20 },
      { projectId: projectKashiLake.id, title: "Clubhouse Arrival Drop-Off at Dusk", caption: "Grand illuminated circular porch at the destination club", url: "/images/projects/kashi-lake-city/clubhouse-dropoff-dusk.jpg", category: "Architecture", isFeatured: false, order: 21 },
    ],
  });

  // Project 1: Virasat Ganga Enclave (Plotted Development)
  const projectGanga = await prisma.project.create({
    data: {
      title: "Virasat Ganga Enclave",
      slug: "virasat-ganga-enclave",
      tagline: "Varanasi's Most Coveted River-Corridor Plotted Enclave",
      shortDescription: "An expansive 32-acre secured plotted township featuring 40 & 60 ft tree-lined boulevards, subterranean cabling, and an exclusive residents' clubhouse.",
      fullDescription: `Nestled along the flourishing Ring Road Phase-2 corridor in Varanasi, Virasat Ganga Enclave redefines plotted living in Eastern Uttar Pradesh. 

Designed for discerning families who value generational wealth and architectural independence, the enclave blends traditional spiritual heritage with international master-planning standards. Every plot is strategically oriented to maximize natural ventilation and daylight, flanked by 70% landscaped green open spaces, private parks, and wellness trails.

Equipped with underground utility lines, 24x7 multi-tier biometric security, dedicated rainwater harvesting, and an expansive 15,000 sq.ft. community clubhouse, Virasat Ganga Enclave represents an enduring legacy for your family.`,
      categoryId: catPlots.id,
      status: "New Launch",
      propertyType: "Plotted Development",
      locationName: "Ring Road Phase-2, Near Shivpur, Varanasi",
      fullAddress: "Virasat Ganga Enclave, Sector 4, Outer Ring Road Corridor, Varanasi, UP 221003",
      city: "Varanasi",
      state: "Uttar Pradesh",
      pincode: "221003",
      heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
      masterPlanImage: "https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80",
      brochureUrl: "#brochure-download-modal",
      reraNumber: "[UP-RERA Registration in Progress / Formal Notification Pending]",
      priceStarting: "₹48 Lakhs onwards",
      possessionDate: "December 2026",
      totalArea: "32 Acres Masterplan",
      totalUnits: "164 Curated Plots",
      openSpaceRatio: "70% Landscaped Greens & Parks",
      roadWidth: "40 ft & 60 ft Wide Internal Concrete Boulevards",
      isFeatured: true,
      isPublished: true,
      order: 1,
      metaTitle: "Virasat Ganga Enclave | Luxury Plots on Ring Road, Varanasi",
      metaDescription: "Explore premium freehold residential plots in Varanasi at Virasat Ganga Enclave. Gated community with 70% greens, underground utilities, and luxury clubhouse.",
    },
  });

  // Project 1 Configurations
  await prisma.projectConfiguration.createMany({
    data: [
      {
        projectId: projectGanga.id,
        title: "The Regal Plot — Type A",
        type: "PLOT",
        dimensions: "30 ft x 40 ft (1,200 sq.ft.)",
        plotSizeSqFt: 1200,
        priceEstimate: "₹48 Lakhs* onwards",
        floorPlanImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        order: 1,
      },
      {
        projectId: projectGanga.id,
        title: "The Heritage Plot — Type B",
        type: "PLOT",
        dimensions: "36 ft x 50 ft (1,800 sq.ft.)",
        plotSizeSqFt: 1800,
        priceEstimate: "₹72 Lakhs* onwards",
        floorPlanImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
        order: 2,
      },
      {
        projectId: projectGanga.id,
        title: "The Sovereign Villa Plot — Type C",
        type: "PLOT",
        dimensions: "40 ft x 60 ft (2,400 sq.ft.)",
        plotSizeSqFt: 2400,
        priceEstimate: "₹96 Lakhs* onwards",
        floorPlanImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        order: 3,
      },
    ],
  });

  // Project 1 Amenities
  await prisma.projectAmenity.createMany({
    data: [
      { projectId: projectGanga.id, title: "Grand Clubhouse 'Virasat Club'", category: "Leisure", description: "15,000 sq.ft. private pavilion with banquet, games room, and library lounge.", iconName: "Building2", order: 1 },
      { projectId: projectGanga.id, title: "Subterranean Cabling & Utilities", category: "Infrastructure", description: "Zero overhead wires with concealed electric, fiber-optic, and drainage conduits.", iconName: "Zap", order: 2 },
      { projectId: projectGanga.id, title: "3-Tier Biometric Security & CCTV", category: "Security", description: "24x7 manned boom barriers, perimeter surveillance, and digital guest passes.", iconName: "ShieldCheck", order: 3 },
      { projectId: projectGanga.id, title: "Central Botanical Parkland", category: "Wellness", description: "Over 5 acres of landscaped theme gardens, gazebo pavilions, and reflexology paths.", iconName: "Trees", order: 4 },
      { projectId: projectGanga.id, title: "Olympic-Length Swimming Pool", category: "Wellness", description: "Heated swimming pool with sun-deck loungers and dedicated children's splash pool.", iconName: "Waves", order: 5 },
      { projectId: projectGanga.id, title: "60-Ft Wide Tree-Lined Boulevards", category: "Infrastructure", description: "Smooth concrete internal roads with pedestrian walkways and solar streetlamps.", iconName: "Compass", order: 6 },
    ],
  });

  // Project 1 Landmarks
  await prisma.nearbyLandmark.createMany({
    data: [
      { projectId: projectGanga.id, name: "Varanasi Ring Road Junction", category: "Transit", distanceKm: "1.2 Km", travelTimeMin: "3 Mins", order: 1 },
      { projectId: projectGanga.id, name: "Shivpur Railway Station", category: "Transit", distanceKm: "4.5 Km", travelTimeMin: "8 Mins", order: 2 },
      { projectId: projectGanga.id, name: "Lal Bahadur Shastri Int'l Airport (Babatpur)", category: "Airport", distanceKm: "16.8 Km", travelTimeMin: "20 Mins", order: 3 },
      { projectId: projectGanga.id, name: "Varanasi Cantt Railway Station", category: "Transit", distanceKm: "9.5 Km", travelTimeMin: "18 Mins", order: 4 },
      { projectId: projectGanga.id, name: "Kashi Vishwanath Corridor & Ghats", category: "Spiritual", distanceKm: "12.5 Km", travelTimeMin: "25 Mins", order: 5 },
      { projectId: projectGanga.id, name: "Apex Multi-Speciality Hospital", category: "Healthcare", distanceKm: "6.2 Km", travelTimeMin: "12 Mins", order: 6 },
    ],
  });

  // Project 1 Media
  await prisma.projectMedia.createMany({
    data: [
      { projectId: projectGanga.id, title: "Grand Gateway & Entrance Boulevard", caption: "Architectural impression of the triple-height entry gate", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", category: "Architecture", isFeatured: true, order: 1 },
      { projectId: projectGanga.id, title: "Central Botanical Promenade", caption: "Tree-shaded pathways and manicured lawns", url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80", category: "Landscape", isFeatured: false, order: 2 },
      { projectId: projectGanga.id, title: "The Virasat Club Clubhouse", caption: "15,000 sq.ft. luxury recreation and sports club", url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80", category: "Architecture", isFeatured: false, order: 3 },
      { projectId: projectGanga.id, title: "Sunken Gazebo & Water Features", caption: "Tranquil water bodies and evening reflection zones", url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80", category: "Landscape", isFeatured: false, order: 4 },
    ],
  });

  // Project 2: The Kashi Grandeur (Luxury Apartments)
  const projectKashi = await prisma.project.create({
    data: {
      title: "The Kashi Grandeur",
      slug: "the-kashi-grandeur",
      tagline: "Sculpted High-Rise Residences Elevating Varanasi's Skyline",
      shortDescription: "A rare collection of 3 & 4 BHK sky residences featuring panoramic cityscape vistas, cantilevered balconies, and a private rooftop infinity pool.",
      fullDescription: `Standing tall as an architectural tribute to Varanasi's eternal grace, The Kashi Grandeur introduces ultra-luxury high-rise residences designed for those accustomed to the finest in life.

Every home features triple-aspect ventilation, 11-foot clear floor-to-ceiling heights, imported marble finishes, and expansive wraparound sundecks. Residents enjoy private elevator access, round-the-clock five-star concierge services, and a sky lounge overlooking the historic cultural landscape of Varanasi.`,
      categoryId: catApartments.id,
      status: "Upcoming",
      propertyType: "Luxury Apartments",
      locationName: "Cantt High-Street Corridor, Varanasi",
      fullAddress: "The Kashi Grandeur, Near Mall Road, Cantt, Varanasi, UP 221002",
      city: "Varanasi",
      state: "Uttar Pradesh",
      pincode: "221002",
      heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85",
      masterPlanImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      brochureUrl: "#brochure-download-modal",
      reraNumber: "[Awaiting Formal Regulatory Filing / Pre-Launch Expression of Interest]",
      priceStarting: "Price on Request",
      possessionDate: "March 2028",
      totalArea: "6.5 Acres Gated Enclave",
      totalUnits: "180 Sky Suites across 3 Signature Towers",
      openSpaceRatio: "75% Dedicated Greens & Sky Decks",
      roadWidth: "60 ft Wide Access Arterial",
      isFeatured: true,
      isPublished: true,
      order: 2,
      metaTitle: "The Kashi Grandeur | Ultra-Luxury 3 & 4 BHK Apartments in Varanasi",
      metaDescription: "Discover luxury high-rise living in Varanasi. The Kashi Grandeur offers 3 & 4 BHK sky residences with concierge, infinity pool, and sky lounge in Cantt.",
    },
  });

  // Project 2 Configurations
  await prisma.projectConfiguration.createMany({
    data: [
      {
        projectId: projectKashi.id,
        title: "3 BHK Grand Residence",
        type: "APARTMENT",
        dimensions: "Carpet Area: 1,850 sq.ft. | Super Area: 2,450 sq.ft.",
        carpetAreaSqFt: 1850,
        superAreaSqFt: 2450,
        bedrooms: 3,
        bathrooms: 3,
        balconies: 3,
        priceEstimate: "Price on Request",
        floorPlanImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
        order: 1,
      },
      {
        projectId: projectKashi.id,
        title: "4 BHK Presidential Sky Suite",
        type: "APARTMENT",
        dimensions: "Carpet Area: 2,650 sq.ft. | Super Area: 3,500 sq.ft.",
        carpetAreaSqFt: 2650,
        superAreaSqFt: 3500,
        bedrooms: 4,
        bathrooms: 5,
        balconies: 4,
        priceEstimate: "Price on Request",
        floorPlanImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
        order: 2,
      },
    ],
  });

  // Project 2 Amenities
  await prisma.projectAmenity.createMany({
    data: [
      { projectId: projectKashi.id, title: "Rooftop Horizon Infinity Pool", category: "Leisure", description: "Perched 22 floors high with temperature control and cabana sunbeds.", iconName: "Waves", order: 1 },
      { projectId: projectKashi.id, title: "24/7 White-Glove Concierge", category: "Security", description: "Valet parking, postal desk, resident assistance, and guest escorting.", iconName: "UserCheck", order: 2 },
      { projectId: projectKashi.id, title: "State-of-the-Art Fitness Arena", category: "Wellness", description: "Technogym-equipped gymnasium, personal training studio, and steam sauna.", iconName: "Dumbbell", order: 3 },
      { projectId: projectKashi.id, title: "Private Screening Cinema", category: "Leisure", description: "18-seater acoustic Dolby Atmos private preview theatre for residents.", iconName: "Tv", order: 4 },
    ],
  });

  // Project 3: Virasat Prime Pavilion (Commercial)
  const projectPavilion = await prisma.project.create({
    data: {
      title: "Virasat Prime Pavilion",
      slug: "virasat-prime-pavilion",
      tagline: "Varanasi's Landmark Commercial & High-Street Retail Galleria",
      shortDescription: "A boutique commercial destination featuring high-visibility double-height retail shops, anchor anchor outlets, and premium corporate suites.",
      fullDescription: `Situated on the fast-growing transit nexus connecting Babatpur Airport and Varanasi City, Virasat Prime Pavilion offers forward-thinking businesses and retail brands high footfall and prestigious corporate stature.

Featuring open-to-sky pedestrian piazzas, multi-level dedicated parking, 100% power backup, and intelligent climate control, it sets a new benchmark for Varanasi's commercial prosperity.`,
      categoryId: catCommercial.id,
      status: "Under Development",
      propertyType: "Commercial Properties",
      locationName: "Babatpur Highway Hub, Varanasi",
      fullAddress: "Virasat Prime Pavilion, Airport Highway, Varanasi, UP 221006",
      city: "Varanasi",
      state: "Uttar Pradesh",
      pincode: "221006",
      heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85",
      brochureUrl: "#brochure-download-modal",
      reraNumber: "[UP-RERA Registration in Progress / Formal Filing Pending]",
      priceStarting: "₹65 Lakhs onwards",
      possessionDate: "September 2027",
      totalArea: "3.2 Acres Commercial Complex",
      totalUnits: "84 High-Street Retail & Office Suites",
      openSpaceRatio: "45% Pedestrian Piazza & Promenade",
      roadWidth: "80 ft Wide Main Highway Frontage",
      isFeatured: false,
      isPublished: true,
      order: 3,
      metaTitle: "Virasat Prime Pavilion | Commercial Retail & Offices in Varanasi",
      metaDescription: "Invest in high-street retail shops and office spaces at Virasat Prime Pavilion on Babatpur Highway, Varanasi. High returns and strategic connectivity.",
    },
  });

  // Project 3 Configurations
  await prisma.projectConfiguration.createMany({
    data: [
      {
        projectId: projectPavilion.id,
        title: "Double-Height Ground Retail Shop",
        type: "COMMERCIAL",
        dimensions: "Super Area: 650 sq.ft. to 1,200 sq.ft.",
        superAreaSqFt: 850,
        priceEstimate: "₹65 Lakhs* onwards",
        order: 1,
      },
      {
        projectId: projectPavilion.id,
        title: "Executive Corporate Suite",
        type: "COMMERCIAL",
        dimensions: "Super Area: 1,100 sq.ft. to 2,500 sq.ft.",
        superAreaSqFt: 1400,
        priceEstimate: "₹85 Lakhs* onwards",
        order: 2,
      },
    ],
  });

  // 6. Seed Editorial Blogs / Market Insights
  await prisma.blogPost.createMany({
    data: [
      {
        title: "Why Varanasi's Infrastructure Boom is Fueling High-End Real Estate Growth",
        slug: "varanasi-infrastructure-boom-luxury-real-estate",
        excerpt: "An in-depth analysis of how Ring Road Phase-2, airport expansions, and national freight corridors are transforming property appreciation in Varanasi.",
        content: `Varanasi, one of the world's most ancient and revered living cities, is experiencing an unprecedented structural renaissance. 

With the commissioning of the 63-km Varanasi Ring Road, multi-modal logistics terminals along National Waterway-1, and direct expressway linkages to Lucknow and Kolkata, the city has evolved from a historic pilgrimage destination into Eastern Uttar Pradesh's prime economic powerhouse.

For real estate buyers, this transition represents a once-in-a-generation window of opportunity. Demand is surging for well-planned, secured plotted communities and luxury high-rise developments that combine modern infrastructure with clean, tranquil environments away from congested city cores.`,
        coverImage: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80",
        category: "Varanasi Growth",
        authorName: "Virasat Research & Advisory Desk",
        readTimeMinutes: 6,
        isFeatured: true,
        isPublished: true,
      },
      {
        title: "The Art of Plotted Development: Why Land Ownership Remains India's Ultimate Asset",
        slug: "the-art-of-plotted-development-land-ownership-india",
        excerpt: "Discover the enduring financial security, architectural independence, and multigenerational value of investing in master-planned plotted enclaves.",
        content: `While apartments offer convenience, freehold land ownership has always occupied a revered status in the Indian psyche. 

A plotted development combines the best of both worlds: the freedom to construct your bespoke architectural dream home on your own timelines, combined with the safety, infrastructure, and amenities of a gated community.

At Virasat Developments, our plotting philosophy centers around generous road widths, underground utility networks, and expansive botanical parks that ensure your family's investment appreciates steadily across generations.`,
        coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        category: "Investment Guide",
        authorName: "Virasat Architectural Team",
        readTimeMinutes: 5,
        isFeatured: false,
        isPublished: true,
      },
      {
        title: "Sustainable Architecture in Modern Indian Homes: Designing for Generational Comfort",
        slug: "sustainable-architecture-modern-indian-homes",
        excerpt: "How passive solar orientation, rainwater harvesting, and native landscaping are shaping resilient luxury developments.",
        content: `True luxury today is defined by light, air, greenery, and responsible environmental stewardship. 

In our developments across Varanasi, every master plan incorporates microclimate management principles. From optimizing street alignments to harness the prevalent Gangetic breezes to incorporating extensive groundwater recharge reservoirs and native flora, our spaces are engineered to endure for decades.`,
        coverImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
        category: "Architectural Insights",
        authorName: "Virasat Design Studio",
        readTimeMinutes: 7,
        isFeatured: false,
        isPublished: true,
      },
    ],
  });

  // 7. Seed Sample Initial Leads
  await prisma.enquiry.create({
    data: {
      fullName: "Vikramaditya Singhania",
      phone: "+91 98390 12345",
      email: "vikram.singhania@example.com",
      interestedProjectName: "Virasat Ganga Enclave",
      propertyType: "Plotted Development",
      budgetRange: "₹50 Lakhs - ₹1 Crore",
      preferredConfiguration: "The Sovereign Villa Plot — Type C (2,400 sq.ft.)",
      enquiryType: "SITE_VISIT_BOOKING",
      message: "Interested in visiting the Ring Road site this weekend. Please confirm executive availability.",
      leadSource: "WEBSITE_HERO",
      status: "SITE_VISIT_SCHEDULED",
      notes: {
        create: [
          {
            note: "Client spoke with sales concierge. Scheduled site inspection for Saturday 11:30 AM.",
            author: "Admin Concierge",
          },
        ],
      },
    },
  });

  await prisma.enquiry.create({
    data: {
      fullName: "Dr. Ananya Mishra",
      phone: "+91 98891 98765",
      email: "ananya.mishra@example.com",
      interestedProjectName: "The Kashi Grandeur",
      propertyType: "Luxury Apartments",
      budgetRange: "₹1 Crore - ₹2 Crore",
      preferredConfiguration: "4 BHK Presidential Sky Suite",
      enquiryType: "BROCHURE_DOWNLOAD",
      message: "Looking for possession in Cantt area for family relocation.",
      leadSource: "PROJECT_PAGE",
      status: "NEW",
    },
  });

  console.log("Database seeded successfully with Virasat luxury real estate data!");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
