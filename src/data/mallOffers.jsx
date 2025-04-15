// src/data/mallOffers.js

const mallOffers = [
    {
      slug: 'shopping-1',
      type: 'Shopping',
      name: '50% Off Fashion Week',
      location: 'Lifestyle Mall, Nairobi',
      image: '/images/offer/offer-1.jpg',
      images: [
        '/images/offer/offer-1.jpg',
        '/images/offer/offer-2.jpg',
        '/images/offer/offer-3.jpg',
      ],
      details: ['Up to 50% off', 'Brands: Zara, H&M, LC Waikiki', 'Valid till: Aug 30'],
      price: 'Up to 50% Off',
      shop: 'the-goat-karen', // Changed to string
    },
    {
      slug: 'dining-1',
      type: 'Dining',
      name: 'Buy 1 Get 1 Free Pizza',
      location: 'Pizza Palace, Food Court - 2nd Floor',
      image: '/images/offer/offer-2.jpg',
      images: [
        '/images/offer/offer-2.jpg',
        '/images/offer/offer-3.jpg',
      ],
      details: ['Available Mon–Thu', 'Applicable on Medium & Large Pizzas'],
      price: 'BOGO Offer',
      shop: 'the-goat-karen', // Changed to string
    },
    {
      slug: 'fuel-1',
      type: 'Fuel Station',
      name: 'Fuel & Win Promo',
      location: 'Shell Station, Basement Parking',
      image: '/images/offer/offer-3.jpg',
      images: [
        '/images/offer/offer-3.jpg',
        '/images/offer/offer-4.jpg',
      ],
      details: ['Fuel above KSH 2,000', 'Get a raffle ticket to win shopping vouchers'],
      price: 'Win KSH 5,000!',
      shop: 'the-goat-karen', // Changed to string
    },
  ];
  
  export default mallOffers;
  