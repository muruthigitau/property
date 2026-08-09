const shopData = [
  {
    name: "Fuel & Convenience Shopping",
    slug: "fuel-and-convenience-shopping",
    image: "/images/shop/fuel-convenience.jpg",
    imageMin: "/images/shop/fuel-convenience-min.jpg",
    tag: "On-the-Go Essentials",
    description:
      "Convenient stops for fuel, everyday essentials, quick snacks, and forex services. Ideal for travelers, commuters, and anyone needing a quick, reliable pit stop.",
    shops: [
      {
        slug: "total",
        title: "TotalEnergies Service Station",
        instaLink: "https://www.instagram.com/totalenergies_ke?igsh=ZGcwc3B5a2JkN2h0",
        phone: "(+254) 701 234 567",
        features: [
          "Fuel Station",
          "Convenience Store",
          "Car Wash",
          "24/7 Service"
        ],
        description:
          "A full-service station offering fuel, car services, and a stocked convenience store for travelers and commuters.",
        content:
          "TotalEnergies Service Station is a well-established fuel station offering a variety of services including fuel, car wash, and a convenience store. Open 24/7, it provides quick snacks, drinks, and essentials for travelers and daily commuters. The station's prime location and reliable services make it a popular choice for those needing a quick pit stop with quality service.",
        images: ["/images/shops/convinience/total.jpg", "/images/shops/convinience/total-1.png", "/images/shops/convinience/total-2.jpg", "/images/shops/convinience/total-3.jpg","/images/shops/convinience/total-4.jpg"]
      },
      {
        slug: "regional-forex-bureau",
        title: "Regional Forex Bureau",
        instaLink: "",
        phone: "(+254) 722 123 456",
        features: [
          "Currency Exchange",
          "Secure Location",
          "Licensed Bureau",
          "Competitive Rates"
        ],
        description: "Offers fast, reliable currency exchange services at competitive rates for tourists, business travelers, and locals.",
        content:
          "Regional Forex Bureau provides licensed currency exchange services with competitive rates and secure transactions. Located in Nairobi's CBD, it serves tourists, business travelers, and locals needing reliable forex services. The bureau is known for its transparency, efficiency, and professional service in a convenient central location.",
        images: ["/images/shops/convinience/regional-forex-bureau.png"]
      },
      {
        slug: "the-whisky-shop",
        title: "The Whisky Shop",
        instaLink: "https://www.instagram.com/thewhiskyshopke?igsh=c3h2NmJmb3o0NXE4",
        phone: "(+254) 789 456 123",
        features: [
          "Premium Spirits",
          "Gift Hampers",
          "Tasting Events",
          "Loyalty Program"
        ],
        description:
          "Kenya's premier whisky destination featuring exclusive global labels and curated tasting experiences.",
        content:
          "The Whisky Shop offers an exclusive selection of premium whiskies and spirits, including rare global labels. Located at Westgate Mall, it provides tasting events, gift hampers, and a loyalty program for enthusiasts. The shop is a destination for both connoisseurs and those exploring quality spirits.",
        images: [
          "/images/shops/convinience/The-Whisky-Shop.jpg",
          "/images/shops/convinience/the-whisky-shop.png"
        ]
      }
    ]
  },
  {
    name: "Electronics & Lifestyle",
    slug: "electronics-and-lifestyle",
    image: "/images/shop/electronics-lifestyle.jpg",
    imageMin: "/images/shop/electronics-lifestyle-min.jpg",
    tag: "Tech Meets Comfort",
    description:
      "Explore premium electronics, grooming essentials, salon services, and modern appliances tailored for contemporary lifestyles.",
    shops: [
      {
        slug: "azone-appliance-zone",
        instaLink: "https://www.instagram.com/azone_theapplianceexperts?igsh=MWhtYm9nNXAyZmtuYQ==",
        title: "Azone Appliance Zone",
        phone: "(+254) 700 111 222",
        features: ["Home Appliances", "Electronics", "Smart Devices"],
        description:
          "Leading supplier of household electronics and smart gadgets for modern, connected homes.",
        content:
          "Azone Appliance Zone offers the latest home appliances, electronics, and smart devices for modern living. Their selection includes kitchen appliances, entertainment systems, and home automation solutions. The store provides quality products with reliable warranties and customer support.",
        images: ["/images/shops/lifestyle/azone-appliance-zone.png"]
      },
      {
        slug: "lorenzo-dry-cleaners",
        title: "Lorenzo Dry Cleaners",
        instaLink: "https://www.instagram.com/lorenzodrycleaners?igsh=MTM1MXJ4dTB4aGJmcw==",
        phone: "(+254) 722 555 666",
        features: ["Dry Cleaning", "Laundry Services", "Express Service"],
        description:
          "Professional garment care with same-day service and meticulous fabric attention.",
        content:
          "Lorenzo Dry Cleaners offers professional dry cleaning and laundry services with same-day options. Specializing in delicate fabrics and everyday garments, they provide reliable, high-quality cleaning with careful attention to detail.",
        images: [
          "/images/shops/lifestyle/lorenzo-dry-cleaners.png",
          "/images/shops/lifestyle/lorenzo-drycleaners.png"
        ]
      },
      {
        slug: "carys-salon",
        title: "Cary's Salon, Barber & Spa",
        instaLink: "https://www.instagram.com/carys_salonke?igsh=MXM1dTF5Mzdkdmg4OQ==",
        phone: "(+254) 733 777 888",
        features: ["Haircuts", "Beauty Services", "Unisex Salon"],
        description:
          "Modern salon offering comprehensive grooming services for men and women in a relaxing space.",
        content:
          "Cary's Salon provides haircuts, styling, and beauty treatments for men and women in a comfortable environment. Known for professional service and modern techniques, it's a go-to for quality grooming and relaxation.",
        images: [
          "/images/shops/lifestyle/cary's-salon-barber-salon-1.png",
          "/images/shops/lifestyle/cary's-salon-barber-salon.png",
          "/images/shops/lifestyle/cary's-salon.jfif"
        ]
      },
      {
        slug: "african-magic-deo",
        title: "African Magic Deo",
        instaLink: "https://www.instagram.com/africanmagic_deodorant?igsh=MXdrN295bmsyenB6cA==",
        phone: "(+254) 744 999 000",
        features: ["Fragrance", "Personal Care", "Locally Made"],
        description:
          "Unique African-inspired deodorants and body care products using natural ingredients.",
        content:
          "African Magic Deo creates natural personal care products inspired by African heritage. Their deodorants and body care items use local ingredients for effective, eco-friendly solutions in daily grooming routines.",
        images: ["/images/shops/lifestyle/african-magic.png"]
      }
    ]
  },
  {
    name: "Health & Wellness",
    slug: "health-and-wellness",
    image: "/images/shop/health-wellness.jpg",
    imageMin: "/images/shop/health-wellness-min.jpg",
    tag: "Wellbeing First",
    description:
      "Discover services and products dedicated to enhancing your health, vision, and overall wellness.",
    shops: [
      {
        slug: "optica",
        title: "Optica Vision Care",
        instaLink: "https://www.instagram.com/opticakenya/?hl=en",
        phone: "(+254) 700 123 456",
        features: ["Eyewear", "Eye Tests", "Prescription Glasses", "Contact Lenses"],
        description:
          "Comprehensive vision care services including eye tests, prescription glasses, and contact lenses.",
        content:
          "Optica Vision Care provides professional eye tests and a wide selection of prescription glasses and contact lenses. Their certified optometrists ensure accurate vision correction with fashionable and functional eyewear options.",
        images: ["/images/shops/health/optica-1.png", "/images/shops/health/optica.png"]
      },
      {
        slug: "visage-aesthetics",
        title: "Visage Aesthetics",
        instaLink: "",
        phone: "(+254) 722 345 678",
        features: ["Facial Treatments", "Skin Care", "Anti-aging Solutions", "Beauty Consultations"],
        description:
          "Advanced facial treatments and skin care services for glowing, youthful complexion.",
        content:
          "Visage Aesthetics offers specialized facial treatments and skin care solutions for anti-aging and complexion enhancement. Their expert estheticians provide personalized services in a relaxing spa environment.",
        images: ["/images/shops/health/visage-asthetics.png"]
      },
      {
        slug: "lifemed-pharmacy",
        title: "Lifemed Pharmacy",
        instaLink: "https://www.instagram.com/lifemedpharmacy_ke?igsh=czlla3Fuc29ldnc0",
        phone: "(+254) 733 456 789",
        features: ["Pharmaceuticals", "Health Supplements", "Consultations", "Prescription Services"],
        description:
          "Trusted in offering medications, health supplements, and professional consultations.",
        content:
          "Lifemed Pharmacy provides pharmaceutical products, health supplements, and professional medication consultations. Their knowledgeable staff helps customers find the right solutions for their health needs.",
        images: ["/images/shops/health/lifemed-pharmacy.png", "/images/shops/health/lifemed-pharmacy.jfif"]
      }
    ]
  },
  {
    name: "Home & Living",
    slug: "home-and-living",
    image: "/images/shop/home-living.jpg",
    imageMin: "/images/shop/home-living-min.jpg",
    tag: "Comfort and Style",
    description:
      "Transform your living space with quality furniture, home decor, and essential items designed to suit every taste and budget.",
    cta: {
      text: "Shop Now",
      link: "/shop/home-and-living"
    },
    shops: [
      {
        slug: "drmattress",
        title: "Dr. Mattress",
        instaLink: "https://www.instagram.com/drmattresskenya?igsh=MTBlY3c3ZGd2bW8xMg==",
        phone: "(+254) 700 123 456",
        features: ["Mattresses", "Bedding", "Sleep Accessories", "Custom Sizes"],
        description:
          "High-quality mattresses and sleep products designed for optimal comfort and support.",
        content:
          "Dr. Mattress offers premium mattresses in various types including memory foam and orthopedic options. They provide custom sizes and sleep accessories to ensure perfect rest and comfort for every customer.",
        images: ["/images/shops/home/drmattress.png", "/images/shops/home/drmattress.jfif"]
      },
      {
        slug: "carpetpoint",
        title: "CarpetPoint",
        instaLink: "https://www.instagram.com/carpet_point1?igsh=MWJibDBxZGt4Z2w0MA==",
        phone: "(+254) 711 234 567",
        features: ["Carpets", "Rugs", "Flooring Solutions", "Home Delivery"],
        description:
          "Stylish carpets, rugs, and flooring solutions to enhance your home's aesthetic appeal.",
        content:
          "CarpetPoint specializes in quality carpets, rugs, and flooring options for residential spaces. Their wide selection includes various textures and designs to complement any home decor style.",
        images: ["/images/shops/home/carpet-point.png", "/images/shops/home/carpetpoint.png"]
      },
     {
      slug: "thecrazystore",
      title: "The Crazy Store",
      instaLink: "https://www.instagram.com/thecrazystore.kenya?igsh=YWVwcG84NG1uemZj",
      phone: "(+254) 700 890 123",
      features: [
        "Home & Kitchenware",
        "Toys & Games",
        "Ornaments",
        "Stationery",
        "Party Items",
        "Beauty Items"
      ],
      description:
        "A vibrant gift and convenience store offering unique items from House of Leather & Gifts.",
      content:
        "The Crazy Store is your go-to destination for a wide range of affordable and unique products including home & kitchenware, toys, games, ornaments, stationery, party items, beauty products, and much more. As part of House of Leather & Gifts, we bring fun, convenience, and creativity to your everyday shopping experience.",
      images: [
        "/images/shops/home/the-crazy-store.png",
        "/images/shops/home/thecrazystore.png",
        "/images/shops/home/the-crazy-store.png"
      ]
    },

    ]
  },
  {
      name: "Food & Beverage",
      slug: "food-and-beverage",
      image: "/images/shop/food-beverage.jpg",
      imageMin: "/images/shop/food-beverage-min.jpg",
      tag: "Delicious Deals",
      description:
      "Explore a wide range of restaurants, cafes, bakeries, and beverage shops offering everything from snacks to full-course meals.",
      shops: [
      {
          slug: "buble-moon-cafe",
          title: "Buble Moon Cafe",
          instaLink: "https://www.instagram.com/bubblemoon.caffe?igsh=Y3dnM2k2OWJqbDJk",
          phone: "(+254) 700 123 456",
          features: ["Cafe", "Coffee", "Pastries", "Free WiFi"],
          description: "Cozy cafe serving quality coffee, teas, and freshly baked pastries.",
          content:
          "Buble Moon Cafe offers a relaxing atmosphere with quality coffee, teas, and homemade pastries. Featuring free WiFi and comfortable seating, it's ideal for casual meetings or solo relaxation in Nairobi's city center.",
          images: ["/images/shops/food/buble-moon-cafe.png", "/images/shops/food/buble-moon-cafe.jfif"]
      },
      {
          slug: "papa-johns-pizza",
          title: "Papa John's Pizza",
          instaLink: "https://www.instagram.com/papajohnskenya?igsh=aHBrOWI3ZnVvbXly",
          phone: "(+254) 711 234 567",
          features: ["Pizza", "Delivery", "Takeout", "Special Offers"],
          description: "Globally recognized pizza chain known for quality ingredients and fast service.",
          content:
          "Papa John's Pizza serves signature pizzas with premium toppings and crust options. Offering delivery and takeout with special deals, it's a favorite for pizza lovers seeking consistent quality and flavor.",
          images: [
            "/images/shops/food/papa-john's-pizza.png",
          "/images/shops/food/Papa_John's_Pizza.png"
          ]
      },
      {
          slug: "chicken-cottage",
          title: "Chicken Cottage",
          instaLink: "https://www.instagram.com/chickencottageke?igsh=MXd4bzdvb2xvcXA4Ng==",
          phone: "(+254) 700 987 654",
          features: ["Fried Chicken", "Burgers", "Family Meals", "Delivery"],
          description: "Popular fast-food spot specializing in crispy fried chicken and burgers.",
          content:
          "Chicken Cottage is known for its crispy fried chicken, juicy burgers, and hearty meal combos. With family deals and delivery options, it provides satisfying fast-food for dine-in or takeout customers.",
          images: [
            "/images/shops/food/chicken-cottage-1.png",
          "/images/shops/food/chicken-cottage.png"
          ]
      },
      {
          slug: "the-goat-karen",
          title: "The G.O.A.T Karen",
          instaLink: "https://www.instagram.com/the_g.o.a.t_ke?igsh=Ym1taHZoOXJiNzZn",
          phone: "(+254) 711 678 901",
          features: ["Barbecue", "Grilled Meat", "Family Dining", "Outdoor Seating"],
          description: "Premium restaurant specializing in quality grilled meats and barbecue.",
          content:
          "The G.O.A.T Karen offers premium grilled meats and barbecue in an upscale outdoor setting. Known for steaks, ribs, and specialty cocktails, it's ideal for family gatherings and special dining occasions.",
          images: [
            "/images/shops/food/the-g.o.a.t-karen.png",
          "/images/shops/food/the-goat-karen.png"
          ]
      },
      {
          slug: "chandarana-foodplus",
          title: "Chandarana Foodplus",
          instaLink: "https://www.instagram.com/chandaranafoodplus?igsh=MWM3bDRzdTYwZjRwNQ==",
          phone: "(+254) 123 456 789",
          features: ["Groceries", "Fresh Produce", "Free Parking", "24/7 Security"],
          description:
          "Premium supermarket offering fresh produce, groceries, and specialty food items.",
          content:
          "Chandarana Foodplus provides high-quality groceries, fresh produce, and specialty foods in a secure shopping environment. With ample parking and 24/7 security, it caters to both daily and specialty shopping needs.",
          images: [
          "/images/shops/food/chandarana-foodplus.png",
          "/images/shops/food/Chandarana-Foodplus.jpg"
          ]
      }, 
      {
        slug: "alexandre-patiserrie",
        title: "Alexandre Patiserrie",
        instaLink: "https://www.instagram.com/alexandre_patisserie.ke?igsh=cnZ3MHd3c3hubjN3",
        phone: "(+254) 700 123 456",
        features: ["Bakery", "Pastries", "Cakes", "Desserts"],
        description:
          "Artisan bakery specializing in French pastries, cakes, and desserts made with high-quality ingredients.",
        content:
          "Alexandre Patiserrie is an artisan bakery known for its exquisite French pastries, cakes, and desserts. Using high-quality ingredients and traditional techniques, it offers a range of sweet treats perfect for any occasion.",
        images: [
          "/images/shops/food/alexandre-patiserrie.jpeg",
          "/images/shops/food/alexandre-patiserrie-1.jpeg",
          "/images/shops/food/alexandre-patiserrie-2.jpeg",
          "/images/shops/food/alexandre-patiserrie-3.jpeg"
        ],

      }
    ]
  },
  {
    name: "Coming Soon",
    slug: "coming-soon",
    image: "/images/shop/coming-soon.jpg",
    imageMin: "/images/shop/coming-soon-min.jpg",
    tag: "Exciting New Additions",
    description:
      "Stay tuned for our upcoming shops and services, designed to enhance your shopping experience.",
    shops : [
      {
          slug: "măm-măm-vietnamese-kitchen",
          title: "Măm Măm Vietnamese Kitchen",
          instaLink: "https://www.instagram.com/mammam.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          phone: "(+254) 123 456 789",
          features: ["Groceries", "Fresh Produce", "Free Parking", "24/7 Security"],
          description:
          "Coming soon!",
          content:
          "Măm Măm Vietnamese Kitchen is a new restaurant specializing in authentic Vietnamese cuisine. With a focus on fresh ingredients and traditional recipes, it promises to deliver a unique dining experience in Nairobi.",
          images: [
          "/images/shops/food/măm-măm-vietnamese-kitchen.jpeg"
          ]
      },
      {
          slug: "sidian-bank",
          title: "Sidian Bank",
          instaLink: "https://www.instagram.com/sidianbank?igsh=Z2F2bG5nZ3JvZ3Rr",
          phone: "(+254) 123 456 789",
          features: ["Banking", "Loans", "Investment Services", "Financial Advice"],
          description:
          "Coming soon!",
          content:"Sidian Bank is a financial institution offering a range of banking services including loans, investment options, and financial advice. With a focus on customer service and innovative solutions, it aims to meet the diverse financial needs of its clients.",
          images: [
          "/images/shops/coming-soon/sidian-bank.jpeg",
          ]
      }
    ]
  }
];

export default shopData;