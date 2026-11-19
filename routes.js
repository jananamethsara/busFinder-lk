
/*
  BusFinder LK - Complete Routes
  Total unique route pairs: 53

  Search works in both directions through index.html.
  Booking availability must be checked
  on each provider's website.
*/

// Booking website helper
function bookingSite(name, url, verified = false) {
  return {
    name: name,
    url: url,
    status: "Check route on booking website",
    verified: verified,
    source: url,
    lastChecked: null
  };
}

// Booking websites
const Magiya = () =>
  bookingSite("Magiya.lk", "https://magiya.lk/journeys/search");

const Superline = () =>
  bookingSite("Superline.lk", "https://www.superline.lk/");

const BookMyBus = () =>
  bookingSite("BookMyBus.lk", "https://bookmybus.lk");

const WayToGo = () =>
  bookingSite("WayToGo.lk", "https://waytogo.lk");

const RADBookings = () =>
  bookingSite("RADBookings.lk", "https://radbookings.lk");

const BusSeat = () =>
  bookingSite("BusSeat.lk", "https://busseat.lk");

const BusLK = () =>
  bookingSite("Bus.lk", "https://bus.lk");

const HelloBooking = () =>
  bookingSite("HelloBooking", "https://hellobooking.lk");

const Nuwantha = () =>
  bookingSite(
    "Nuwantha Enterprises",
    "https://nuwanthaenterprises.com"
  );

const SLTB = () =>
  bookingSite("SLTB eSeat", "https://sltb.eseat.lk");

// All routes
const busRoutes = [

  // 1. Colombo ↔ Jaffna
  {
    from: "Colombo",
    to: "Jaffna",
    websites: [
      Magiya(),
      BookMyBus(),
      BusSeat(),
      BusLK()
    ]
  },

  // 2. Colombo ↔ Kandy
  {
    from: "Colombo",
    to: "Kandy",
    websites: [
      Magiya(),
      bookingSite(
        "Bus.lk",
        "https://bus.lk/bus-tickets/colombo-to-kandy",
        true
      ),
      WayToGo()
    ]
  },

  // 3. Colombo ↔ Trincomalee
  {
    from: "Colombo",
    to: "Trincomalee",
    websites: [
      Magiya(),
      BookMyBus(),
      Superline(),
      bookingSite(
        "Soyuru Sampath (via Magiya)",
        "https://magiya.lk/journeys/search"
      ),
      HelloBooking(),
      BusLK()
    ]
  },

  // 4. Colombo ↔ Ampara
  {
    from: "Colombo",
    to: "Ampara",
    websites: [
      Magiya(),
      Nuwantha(),
      BusLK()
    ]
  },

  // 5. Katunayake ↔ Badulla
  {
    from: "Katunayake",
    to: "Badulla",
    websites: [
      Nuwantha()
    ]
  },

  // 6. Colombo ↔ Badulla
  {
    from: "Colombo",
    to: "Badulla",
    websites: [
      Magiya(),
      Superline(),
      Nuwantha(),
      WayToGo(),
      BusLK()
    ]
  },

  // 7. Colombo ↔ Meegahakiula
  {
    from: "Colombo",
    to: "Meegahakiula",
    websites: [
      Nuwantha()
    ]
  },

  // 8. Colombo ↔ Mahiyanganaya
  {
    from: "Colombo",
    to: "Mahiyanganaya",
    websites: [
      Magiya(),
      Nuwantha()
    ]
  },

  // 9. Panadura ↔ Kandy
  {
    from: "Panadura",
    to: "Kandy",
    websites: [
      Magiya()
    ]
  },

  // 10. Colombo ↔ Nintavur
  {
    from: "Colombo",
    to: "Nintavur",
    websites: [
      Magiya()
    ]
  },

  // 11. Colombo ↔ Kalmunai
  {
    from: "Colombo",
    to: "Kalmunai",
    websites: [
      Magiya(),
      Superline(),
      BusSeat(),
      BusLK()
    ]
  },

  // 12. Colombo ↔ Sammanthurai
  {
    from: "Colombo",
    to: "Sammanthurai",
    websites: [
      Magiya()
    ]
  },

  // 13. Makumbura ↔ Badulla
  {
    from: "Makumbura",
    to: "Badulla",
    websites: [
      Magiya(),
      WayToGo()
    ]
  },

  // 14. Colombo ↔ Passara
  {
    from: "Colombo",
    to: "Passara",
    websites: [
      Magiya(),
      Superline(),
      BusLK()
    ]
  },

  // 15. Colombo ↔ Panama
  {
    from: "Colombo",
    to: "Panama",
    websites: [
      Magiya()
    ]
  },

  // 16. Colombo ↔ Vavuniya
  {
    from: "Colombo",
    to: "Vavuniya",
    websites: [
      Magiya(),
      HelloBooking(),
      BusLK(),
      BusSeat()
    ]
  },

  // 17. Colombo ↔ Rathnapura
  {
    from: "Colombo",
    to: "Rathnapura",
    websites: [
      HelloBooking()
    ]
  },

  // 18. Colombo ↔ Anuradhapura
  {
    from: "Colombo",
    to: "Anuradhapura",
    websites: [
      Magiya(),
      BookMyBus(),
      HelloBooking(),
      BusLK(),
      BusSeat()
    ]
  },

  // 19. Colombo ↔ Akkaraipattu
  {
    from: "Colombo",
    to: "Akkaraipattu",
    websites: [
      Magiya(),
      Superline(),
      BusLK(),
      BusSeat()
    ]
  },

  // 20. Raddolugama ↔ Maharagama
  {
    from: "Raddolugama",
    to: "Maharagama",
    websites: [],
    phoneBuses: [
      {
        name: "Euro Express",
        departureTimes: {
          Raddolugama: ["06:15 AM", "10:15 AM"],
          Maharagama: ["07:50 AM", "04:30 PM"]
        },
        phoneNumbers: ["0703301020"],
        verified: false
      }
    ]
  },

  // 21. Diyathalawa ↔ Jaffna
  {
    from: "Diyathalawa",
    to: "Jaffna",
    websites: [],
    phoneBuses: [
      {
        name: "Charitha Travels",
        departureTimes: {
          Diyathalawa: ["08:00 PM"],
          Jaffna: ["05:45 PM"]
        },
        phoneNumbers: [
          "0777778106",
          "0776121499",
          "0772133201",
          "0775559510"
        ],
        verified: false
      },
      {
        name: "Rohana Powerline",
        departureTimes: {
          Diyathalawa: ["05:30 PM"],
          Jaffna: ["06:45 PM"]
        },
        phoneNumbers: [
          "0778004812",
          "0775354564",
          "0718507212"
        ],
        verified: false
      }
    ]
  },

  // 22. Deniyaya ↔ Colombo
  {
    from: "Deniyaya",
    to: "Colombo",
    websites: [],
    phoneBuses: [
      {
        name: "Ranyana Express",
        departureTimes: {
          Deniyaya: ["08:20 AM"],
          Colombo: ["05:20 PM"]
        },
        phoneNumbers: [
          "0762096910",
          "0702086910"
        ],
        verified: false
      }
    ]
  },

  // 23. Colombo ↔ Embilipitiya
  {
    from: "Colombo",
    to: "Embilipitiya",
    websites: [
      BusLK()
    ],
    phoneBuses: [
      {
        name: "PRM Express",
        departureTimes: {
          Colombo: [
            "10:45 AM",
            "06:45 AM",
            "12:45 PM"
          ],
          Embilipitiya: [
            "04:00 AM",
            "04:00 PM",
            "05:50 AM"
          ]
        },
        phoneNumbers: [
          "0764253700",
          "0777143700",
          "0779153700"
        ],
        verified: false
      }
    ]
  },

  // 24. Negombo ↔ Embilipitiya
  {
    from: "Negombo",
    to: "Embilipitiya",
    websites: [],
    phoneBuses: [
      {
        name: "SLTB AC Bus",
        departureTimes: {
          Negombo: ["02:00 PM"],
          Embilipitiya: ["08:45 AM"]
        },
        phoneNumbers: [
          "0711970888",
          "0719135630"
        ],
        verified: false
      }
    ]
  },

  // 25. Tangalle ↔ Jaffna
  {
    from: "Tangalle",
    to: "Jaffna",
    websites: [],
    phoneBuses: [
      {
        name: "Samarasinhe Jet Liner",
        departureTimes: {
          Tangalle: ["05:10 PM"],
          Jaffna: ["06:30 PM"]
        },
        phoneNumbers: ["0713080001"],
        verified: false
      }
    ]
  },

  // 26. Tangalle ↔ Mulativu
  {
    from: "Tangalle",
    to: "Mulativu",
    websites: [],
    phoneBuses: [
      {
        name: "Saman Full Night Express",
        departureTimes: {
          Tangalle: ["07:10 PM"],
          Mulativu: ["07:00 PM"]
        },
        phoneNumbers: [
          "0773961613",
          "0713400430"
        ],
        verified: false
      }
    ]
  },

  // 27. Colombo ↔ Nuwara Eliya
  {
    from: "Colombo",
    to: "Nuwara Eliya",
    websites: [
      Magiya(),
      RADBookings(),
      BusLK()
    ]
  },

  // 28. Colombo ↔ Welimada
  {
    from: "Colombo",
    to: "Welimada",
    websites: [
      Magiya(),
      RADBookings(),
      WayToGo()
    ]
  },

  // 29. Colombo ↔ Mannar
  {
    from: "Colombo",
    to: "Mannar",
    websites: [
      Magiya(),
      BookMyBus(),
      BusLK()
    ]
  },

  // 30. Kadawatha ↔ Trincomalee
  {
    from: "Kadawatha",
    to: "Trincomalee",
    websites: [
      BookMyBus()
    ]
  },

  // 31. Matara ↔ Trincomalee
  {
    from: "Matara",
    to: "Trincomalee",
    websites: [
      BookMyBus()
    ]
  },

  // 32. Colombo ↔ Mulativu
  {
    from: "Colombo",
    to: "Mulativu",
    websites: [
      BookMyBus()
    ]
  },

  // 33. Colombo ↔ Batticaloa
  {
    from: "Colombo",
    to: "Batticaloa",
    websites: [
      Magiya(),
      BookMyBus(),
      BusLK(),
      BusSeat()
    ]
  },

  // 34. Jaffna ↔ Trincomalee
  {
    from: "Jaffna",
    to: "Trincomalee",
    websites: [
      BookMyBus()
    ]
  },

  // 35. Colombo ↔ Kataragama
  {
    from: "Colombo",
    to: "Kataragama",
    websites: [
      Magiya(),
      WayToGo(),
      BusLK()
    ]
  },

  // 36. Kandy ↔ Kalmunai
  {
    from: "Kandy",
    to: "Kalmunai",
    websites: [
      Magiya()
    ]
  },

  // 37. Kandy ↔ Anuradhapura
  {
    from: "Kandy",
    to: "Anuradhapura",
    websites: [
      Magiya()
    ]
  },

  // 38. Colombo ↔ Hambantota
  {
    from: "Colombo",
    to: "Hambantota",
    websites: [
      Magiya()
    ]
  },

  // 39. Colombo ↔ Monaragala
  {
    from: "Colombo",
    to: "Monaragala",
    websites: [
      Magiya(),
      BusLK()
    ]
  },

  // 40. Colombo ↔ Bibila
  {
    from: "Colombo",
    to: "Bibila",
    websites: [
      Magiya(),
      BusLK()
    ]
  },

  // 41. Colombo ↔ Matale
  {
    from: "Colombo",
    to: "Matale",
    websites: [
      Magiya()
    ]
  },

  // 42. Galle ↔ Negombo
  {
    from: "Galle",
    to: "Negombo",
    websites: [
      Magiya()
    ]
  },

  // 43. Negombo ↔ Aluthgama
  {
    from: "Negombo",
    to: "Aluthgama",
    websites: [
      Magiya()
    ]
  },

  // 44. Colombo ↔ Janakapura
  {
    from: "Colombo",
    to: "Janakapura",
    websites: [
      Magiya()
    ]
  },

  // 45. Colombo ↔ Matara
  {
    from: "Colombo",
    to: "Matara",
    websites: [
      Magiya()
    ]
  },

  // 46. Kandy ↔ Jaffna
  // SLTB ONLY
  {
    from: "Kandy",
    to: "Jaffna",
    websites: [
      SLTB()
    ],
    phoneBuses: [],
    sltbOnly: true
  },

  // 47. Monaragala ↔ Jaffna
  // SLTB ONLY
  {
    from: "Monaragala",
    to: "Jaffna",
    websites: [
      SLTB()
    ],
    phoneBuses: [],
    sltbOnly: true
  },

  // 48. Jaffna ↔ Akkaraipattu
  {
    from: "Jaffna",
    to: "Akkaraipattu",
    websites: [
      BusLK()
    ]
  },

  // 49. Jaffna ↔ Batticaloa
  {
    from: "Jaffna",
    to: "Batticaloa",
    websites: [
      BusLK()
    ]
  },

  // 50. Jaffna ↔ Kalmunai
  {
    from: "Jaffna",
    to: "Kalmunai",
    websites: [
      BusLK()
    ]
  },

  // 51. Colombo ↔ Polonnaruwa
  {
    from: "Colombo",
    to: "Polonnaruwa",
    websites: [
      BusSeat()
    ]
  },

  // 52. Jaffna ↔ Nuwara Eliya
  {
    from: "Jaffna",
    to: "Nuwara Eliya",
    websites: [],
    phoneBuses: [
      {
        name: "Danidi Express",
        departureTimes: {
          Jaffna: ["05:10 PM"],
          "Nuwara Eliya": ["03:40 PM"]
        },
        phoneNumbers: ["0716803752"],
        verified: false
      }
    ]
  },

  // 53. Jaffna ↔ Badulla
  // UPDATED: SLTB eSeat + Dilmi Express
  {
    from: "Jaffna",
    to: "Badulla",
    websites: [
      SLTB()
    ],
    phoneBuses: [
      {
        name: "Dilmi Express",
        departureTimes: {
          Jaffna: ["08:30 PM"],
          Badulla: ["09:30 PM"]
        },
        phoneNumbers: [
          "0722182377",
          "0767187377"
        ],
        verified: false
      }
    ]
  }
];

/*
  WEBSITE CLEANUP

  1. Remove duplicate website entries
  2. Keep Magiya.lk first
  3. Add SLTB eSeat to online routes
  4. Preserve SLTB-only routes
  5. Preserve phone booking details
*/

// Clean websites
busRoutes.forEach(route => {

  if (!Array.isArray(route.websites)) {
    route.websites = [];
  }

  if (!Array.isArray(route.phoneBuses)) {
    route.phoneBuses = [];
  }

  // Remove duplicate websites
  const seenWebsites = new Set();

  route.websites = route.websites.filter(site => {
    const key = site.name.trim().toLowerCase();

    if (seenWebsites.has(key)) {
      return false;
    }

    seenWebsites.add(key);
    return true;
  });

  // SLTB-only routes
  if (route.sltbOnly === true) {
    route.websites = [SLTB()];
    route.phoneBuses = [];
    return;
  }

  // Magiya.lk first
  route.websites.sort((a, b) => {
    const aIsMagiya =
      a.name.toLowerCase() === "magiya.lk";

    const bIsMagiya =
      b.name.toLowerCase() === "magiya.lk";

    if (aIsMagiya && !bIsMagiya) return -1;
    if (!aIsMagiya && bIsMagiya) return 1;

    return 0;
  });

  // Add SLTB eSeat to website routes
  const hasSLTB = route.websites.some(
    site => site.name === "SLTB eSeat"
  );

  if (route.websites.length > 0 && !hasSLTB) {
    route.websites.push(SLTB());
  }
});

// Check duplicate route pairs
const routeKeys = new Set();

busRoutes.forEach(route => {
  const key = [
    route.from.trim().toLowerCase(),
    route.to.trim().toLowerCase()
  ].sort().join("|");

  if (routeKeys.has(key)) {
    console.warn(
      "Duplicate route found:",
      route.from,
      route.to
    );
  } else {
    routeKeys.add(key);
  }
});

console.log(
  "BusFinder LK loaded:",
  busRoutes.length,
  "route pairs"
);
