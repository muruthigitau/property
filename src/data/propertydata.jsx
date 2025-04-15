const propertyData = [
  {
    name: "Food & Beverage",
    slug: "food-and-beverage",
    image: "/images/shop/food-beverage.jpg",
    imageMin: "/images/shop/food-beverage-min.jpg",
    tag: "Delicious Deals",
    description: "Explore a wide range of restaurants, cafes, bakeries, and beverage shops offering everything from snacks to full-course meals. Perfect for foodies and casual diners alike.",
    shops: [
      {
        slug: "chandarana-foodplus",
        title: "Chandarana Foodplus",
        location: "Supermarket & Grocery, City Center, Nairobi",
        phone: "(+254) 123 456 789",
        features: ["Groceries", "Fresh Produce", "Free Parking", "24/7 Security"],
        description: "Chandarana Foodplus offers a vast space for grocery shopping...",
        content: "Chandarana Foodplus is a premium supermarket chain known for its quality service and expansive selection of grocery items. Strategically located in Nairobi's bustling City Center, this retail space boasts a prime spot that ensures constant foot traffic and visibility. The 1200 square foot store is designed to accommodate large customer volumes while maintaining an organized and spacious layout. With 24/7 security and over 100 parking spaces, shoppers enjoy convenience and safety. The store specializes in fresh produce, organic foods, pantry essentials, and imported goods, making it a go-to for both daily needs and specialty purchases. For entrepreneurs, this is a turnkey business opportunity in a growing urban market, surrounded by offices, residences, and key amenities. Chandarana’s strong brand appeal and loyal customer base add significant value, offering a solid return on investment. Whether you're expanding your retail portfolio or entering the food and beverage industry, this listing is ideal for those seeking long-term growth with minimal operational risks.",
        images: ["/images/shop/property-1.jpg", "/images/shop/property-2.jpg"],
      },
      {
        slug: "papa-johns-pizza",
        title: "Papa John's Pizza",
        location: "Dining & Takeout, Westlands, Nairobi",
        phone: "(+254) 987 654 321",
        features: ["Pizza", "Fast Food", "Takeaway", "Delivery Service"],
        description: "Papa John's Pizza offers a cozy dining experience...",
        content: "Papa John's Pizza in Westlands offers a high-traffic location perfect for a fast-food franchise. Known globally for its quality ingredients and distinctive pizza flavors, this outlet is already benefiting from strong brand recognition. With 800 square feet of functional space, the restaurant is optimized for both dine-in and takeaway services. Located in a commercial hotspot, it draws crowds from nearby offices, shopping centers, and residential areas. The outlet includes a professional kitchen, food prep stations, and ample customer seating. A key advantage is the built-in delivery infrastructure, ideal for Nairobi’s growing demand for food delivery services. Ample parking and easy access boost customer convenience. Entrepreneurs stepping into this space can leverage existing demand and a reliable operational model, making it a smart investment in the food and beverage industry.",
        images: ["/images/shop/property-2.jpg", "/images/shop/property-3.jpg"],
      },
      {
        slug: "chicken-cottage",
        title: "Chicken Cottage",
        location: "Quick Bites, Nairobi West",
        phone: "(+254) 345 678 901",
        features: ["Crispy Chicken", "Takeout", "Fast Food"],
        description: "Chicken Cottage offers delicious crispy chicken...",
        content: "Chicken Cottage in Nairobi West presents a compact and profitable opportunity for investors and foodpreneurs. With a 600 square foot layout, this quick-service restaurant has been designed to handle fast-paced customer service and high turnover. It's situated in a vibrant area frequented by students, residents, and office workers. Chicken Cottage is renowned for its crispy chicken recipes, flavorful side dishes, and affordable pricing, making it a favorite among casual diners. The interior layout accommodates both walk-in customers and efficient takeaway logistics. Ample parking, a visible storefront, and established foot traffic ensure continued growth. Whether franchised or independently managed, this setup is ideal for those looking to scale within the fast-food industry. It’s a low-risk, high-reward venture supported by a popular product line and an ever-growing customer base.",
        images: ["/images/shop/property-3.jpg", "/images/shop/property-4.jpg"],
      },
      {
        slug: "bubble-moon-cafe",
        title: "Bubble Moon Café",
        location: "Coffee & Treats, Westlands, Nairobi",
        phone: "(+254) 789 123 456",
        features: ["Specialty Coffee", "Pastries", "Free Wi-Fi"],
        description: "Bubble Moon Café is a cozy café specializing...",
        content: "Bubble Moon Café in Westlands provides a delightful mix of ambiance, quality beverages, and a warm customer experience. Designed for coffee lovers, students, and remote workers, this café is built with both efficiency and style. The 500 square foot space includes a brewing station, pastry display counter, and seating area with natural lighting. It has become a community favorite for its artisanal coffee blends, delectable pastries, and free Wi-Fi. Located in one of Nairobi’s trendiest districts, the café benefits from both regulars and walk-in customers from surrounding businesses and residential areas. Its Instagrammable interior, quality offerings, and inviting atmosphere have helped build strong social media traction. For aspiring café owners or investors in the hospitality sector, this listing offers an entry point into Nairobi’s booming café culture with minimal setup and strong branding potential.",
        images: ["/images/shop/property-5.jpg", "/images/shop/property-6.jpg"],
      },
      {
        slug: "the-goat-karen",
        title: "The G.O.A.T Karen",
        location: "Bar & Lounge, Karen, Nairobi",
        phone: "(+254) 444 555 666",
        features: ["Grill & Drinks", "Sports Bar", "Live Entertainment"],
        description: "The G.O.A.T Karen is a lively bar and lounge...",
        content: "The G.O.A.T Karen is a premium bar and lounge located in the heart of Karen, Nairobi’s upscale suburb. Spanning 2000 square feet, it features a modern design with ample indoor and outdoor seating. This entertainment hotspot is known for its expertly grilled meats, live performances, and large-screen TVs for sports events. With 50 dedicated parking spots and its location in an affluent neighborhood, The G.O.A.T attracts a loyal clientele of professionals, expatriates, and locals seeking quality entertainment. The interior layout includes a bar, private booths, a stage for live acts, and soundproof acoustics for music nights. Whether you're looking to run themed nights, host private events, or expand your restaurant portfolio, this bar-lounge setup offers everything needed for immediate business. It’s a top-tier investment for those eyeing hospitality with a focus on nightlife and fine dining.",
        images: ["/images/shop/property-4.jpg", "/images/shop/property-5.jpg"],
      }
    ]
  },
  {
    name: "Home & Living",
    slug: "home-and-living",
    image: "/images/shop/home-living.jpg",
    imageMin: "/images/shop/home-living-min.jpg",
    tag: "Comfort & Style",
    description: "Find everything you need to make your home cozy and stylish, from furniture to home decor, appliances, and essentials. Perfect for those looking to enhance their living spaces.",
    shops: [
      {
        slug: "dm-furniture",
        title: "DM Furniture",
        location: "Home & Décor, Industrial Area, Nairobi",
        phone: "(+254) 321 654 987",
        features: ["Sofas & Tables", "Bedroom Sets", "Home Décor"],
        description: "DM Furniture is a high-end furniture showroom...",
        content: "DM Furniture is a leading name in Nairobi’s home and living segment. This showroom in the Industrial Area spans 1,000 square feet and is tailored for luxury and modern décor items. It features an elegant floor plan that allows for full room-set displays including sofas, dining sets, bedroom furnishings, and lighting accessories. Designed to cater to both walk-in customers and B2B clients such as interior designers and contractors, DM Furniture offers a complete solution for residential and commercial setups. It has built a reputation for craftsmanship, durable materials, and custom design services. With a customer-centric approach, the store hosts frequent weekend sales, style consultations, and delivery logistics. Investors entering the space can expect excellent margins and a growing demand for lifestyle-focused retail, especially among Nairobi's expanding middle and upper classes.",
        images: ["/images/shop/property-1.jpg", "/images/shop/property-2.jpg"],
      },
      {
        slug: "dr-mattress",
        title: "Dr. Mattress",
        location: "Sleep Solutions, Mombasa Road, Nairobi",
        phone: "(+254) 234 567 890",
        features: ["Mattresses", "Bedroom Accessories", "Sleep Solutions"],
        description: "Dr. Mattress specializes in high-quality mattresses...",
        content: "Dr. Mattress is a trusted brand for sleep wellness in Nairobi. Located along Mombasa Road, the 800 square foot store showcases a wide range of mattress solutions designed for ergonomic comfort and restful sleep. It includes display beds, comfort test stations, and accessories such as pillows and bedframes. Dr. Mattress caters to individuals, couples, families, and hospitality clients like hotels and guest houses. The store layout maximizes product exposure and ease of navigation for customers. Staffed with trained sleep consultants, the store emphasizes quality service and customer education. As the demand for health-conscious products rises, Dr. Mattress has positioned itself as a leader in premium bedding solutions. It’s an ideal acquisition for those targeting retail in health, wellness, or home living niches.",
        images: ["/images/shop/property-2.jpg", "/images/shop/property-3.jpg"],
      }
    ]
  },
  {
    name: "Electronics & Lifestyle",
    slug: "electronics-and-lifestyle",
    image: "/images/shop/electronics-lifestyle.jpg",
    imageMin: "/images/shop/electronics-lifestyle-min.jpg",
    tag: "Tech & Innovation",
    description: "Explore the latest in electronics and lifestyle products. From cutting-edge gadgets to accessories that complement your lifestyle, find everything to enhance your tech-savvy world.",
    shops: [
      {
        slug: "phoneplace-kenya",
        title: "PhonePlace Kenya",
        location: "Electronics Hub, Moi Avenue, Nairobi",
        phone: "(+254) 712 345 678",
        features: ["Smartphones", "Accessories", "Warranties"],
        description: "PhonePlace Kenya is a tech-savvy retail store...",
        content: "PhonePlace Kenya is a well-established electronics retailer located in the bustling Moi Avenue corridor of Nairobi. Known for its cutting-edge smartphone collections, tablets, and accessories, the 600 sq ft store caters to a diverse tech audience including students, professionals, and gadget lovers. The store maintains a strong reputation for authenticity, competitive pricing, and reliable warranties on top brands like Apple, Samsung, Xiaomi, and more. PhonePlace Kenya also provides after-sales support and financing options, making it a preferred choice for both individuals and business resellers. Its customer-first approach, including online ordering and quick delivery, has contributed to significant online traction. The location enjoys high daily footfall from commuters, office-goers, and digital-savvy youth. For investors and entrepreneurs, this outlet offers a profitable venture with minimal operational complexity and huge scalability in Kenya’s growing electronics market.",
        images: ["/images/shop/property-1.jpg", "/images/shop/property-2.jpg"],
      },
      {
        slug: "hotpoint-electronics",
        title: "Hotpoint Electronics",
        location: "Appliances & Home Tech, Sarit Centre, Nairobi",
        phone: "(+254) 798 456 123",
        features: ["Home Appliances", "TVs", "Kitchenware"],
        description: "Hotpoint Electronics is a high-end appliance store...",
        content: "Hotpoint Electronics, located at Sarit Centre, is a major player in the home appliances retail segment. Covering 1500 square feet of floor space, this flagship store displays a full range of electronics — from refrigerators, microwaves, washing machines, to flat-screen TVs and audio systems. It is known for offering trusted brands like LG, Samsung, Bosch, and Philips. The store is professionally designed with demo areas, customer service desks, and a warehousing section to streamline deliveries. Hotpoint also provides extended warranties, installation services, and frequent promotional offers to enhance customer retention. Its prime location at Sarit Centre attracts shoppers from nearby affluent areas and corporates alike. The outlet is ideal for investors looking for high-value, steady-income retail businesses with solid supply chains and excellent brand equity.",
        images: ["/images/shop/property-3.jpg", "/images/shop/property-4.jpg"],
      }
    ]
  },
  {
    name: "Health & Wellness",
    slug: "health-and-wellness",
    image: "/images/shop/health-wellness.jpg",
    imageMin: "/images/shop/health-wellness-min.jpg",
    tag: "Fitness & Well-being",
    description: "Discover a wide range of health and wellness products designed to help you live a healthier and more balanced life. From fitness equipment to wellness supplements, we have everything you need to improve your well-being.",
    shops: [
      {
        slug: "healthy-u",
        title: "Healthy U",
        location: "Supplements & Natural Food, The Junction Mall, Nairobi",
        phone: "(+254) 701 888 888",
        features: ["Supplements", "Organic Groceries", "Natural Skincare"],
        description: "Healthy U is a wellness-focused retail store...",
        content: "Healthy U is Nairobi's go-to destination for health supplements, organic food, and wellness products. Situated at The Junction Mall, this 800 sq ft retail outlet is beautifully arranged to promote natural living. The shop stocks dietary supplements, gluten-free items, essential oils, protein powders, herbal teas, and natural skin-care brands. It attracts health-conscious individuals, fitness enthusiasts, and niche clientele seeking holistic wellness solutions. Trained nutritionists and wellness experts are on-site to guide customers. The brand also runs regular wellness campaigns and loyalty programs to deepen customer engagement. With increased demand for natural health products in Kenya, Healthy U stands out as a sustainable and profitable retail investment, backed by a loyal customer base and strong digital presence.",
        images: ["/images/shop/property-4.jpg", "/images/shop/property-5.jpg"],
      },
      {
        slug: "goodlife-pharmacy",
        title: "Goodlife Pharmacy",
        location: "Health & Beauty, Yaya Centre, Nairobi",
        phone: "(+254) 799 222 333",
        features: ["Prescription Drugs", "Cosmetics", "Wellness Items"],
        description: "Goodlife Pharmacy is a trusted name in healthcare...",
        content: "Goodlife Pharmacy is one of Kenya’s most reliable pharmaceutical chains, with a premium location at Yaya Centre. This 1000 sq ft store is not just a pharmacy but a complete health and wellness outlet. It provides prescription medication, over-the-counter products, beauty products, and wellness gear. Customers can access free consultation from certified pharmacists, blood pressure checks, and quick diagnostic services. The interior is well-lit, organized, and includes refrigerated units for sensitive medications. Its customer base spans walk-in clients, families, and working professionals from the neighborhood. Backed by technology, it offers e-prescriptions and home deliveries. Goodlife’s robust brand and expansive reach offer franchisees and investors a golden opportunity to earn from health-focused retail, with very high repeat customer rates and minimal risk.",
        images: ["/images/shop/property-1.jpg", "/images/shop/property-2.jpg"],
      }
    ]
  },
  { 
    name: "Fuel & Convenience",
    slug: "fuel-and-convenience",
    image: "/images/shop/fuel-convenience.jpg",
    imageMin: "/images/shop/fuel-convenience-min.jpg",
    tag: "Gas Stations & Essentials",
    description: "Find a variety of fuel and convenience products, including fuel services, snacks, drinks, and essential items for your everyday needs. Whether you're on the go or need quick access to fuel, we've got you covered.",  
    shops: [
      {
        slug: "shell-fuel-station",
        title: "Shell Fuel Station",
        location: "Petrol Station, Lang’ata Road, Nairobi",
        phone: "(+254) 798 765 432",
        features: ["Petrol", "Diesel", "Mini-mart", "Car Wash"],
        description: "Shell Fuel Station offers comprehensive fuel and auto services...",
        content: "Shell Fuel Station along Lang’ata Road is a strategically positioned service station offering fuel, car care, and convenience services. Covering 2500 square feet, it features multi-dispenser fueling units, a fully stocked mini-mart, a tire and oil change bay, and a drive-through car wash. The station is designed for high-volume throughput with an efficient traffic flow design and modern safety features. The convenience store sells snacks, drinks, car accessories, and mobile recharge services. Shell’s powerful global brand draws in daily commuters and fleets. It also offers loyalty programs and smart fuel payment apps for added customer convenience. This station is a high-return investment in a high-traffic area, ideal for those looking to diversify into infrastructure-based retail with consistent cash flow.",
        images: ["/images/shop/property-5.jpg", "/images/shop/property-6.jpg"],
      },
      {
        slug: "total-energies-express",
        title: "Total Energies Express",
        location: "Fuel & Mini-mart, Thika Road, Nairobi",
        phone: "(+254) 712 999 000",
        features: ["Fuel Station", "Convenience Store", "Lubricants"],
        description: "Total Energies Express provides essential fuel and convenience services...",
        content: "Total Energies Express is a modern fuel station and convenience store setup on Thika Road, one of Nairobi's busiest highways. With 2200 sq ft of space, this service point combines fueling operations with a strong retail arm — including a mini-mart, café counter, and quick-service pit stop for motorists. The setup includes surveillance systems, high-pressure fueling pumps, and fuel management tech for efficiency. The location benefits from commuter traffic, logistics companies, and private car owners. The attached shop boosts sales through daily essentials, travel snacks, and vehicle maintenance items. With growing demand for integrated services along highways, this is an ideal location for investors seeking consistent revenue, high visibility, and long-term value.",
        images: ["/images/shop/property-1.jpg", "/images/shop/property-3.jpg"],
      }
    ]
  }
  
];

export default propertyData;
