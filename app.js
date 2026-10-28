/**
 * ALL NAILS & SPA LAKE NONA — Interactive Atelier & Live Google Reviews Engine
 */

(() => {
  'use strict';

  /* ========================================================================
     1. MOBILE HERO 2-SECOND CONTINUOUS FADE LOOP (Starts on Middle Photo #1)
     ======================================================================== */
  const heroTriptych = document.getElementById('heroTriptych');
  const panels = Array.from(document.querySelectorAll('.triptych-panel'));
  const dots = Array.from(document.querySelectorAll('.triptych-dot'));

  let activeSlide = 1; // Strictly starts on the middle photo (index 1)
  let heroTimer = null;

  function setHeroSlide(index) {
    activeSlide = ((index % panels.length) + panels.length) % panels.length;
    if (heroTriptych) {
      heroTriptych.setAttribute('data-active-slide', String(activeSlide));
    }
    panels.forEach((panel, i) => {
      panel.classList.toggle('is-active', i === activeSlide);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === activeSlide);
    });
  }

  function startHeroLoop() {
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(() => {
      setHeroSlide(activeSlide + 1);
    }, 2000);
  }

  setHeroSlide(1);
  startHeroLoop();

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const target = Number(dot.getAttribute('data-target-slide') || 1);
      setHeroSlide(target);
      startHeroLoop();
    });
  });

  /* ========================================================================
     2. ORIGINAL SALON LOOKBOOK (48 CURATED ORIGINAL IG / FB / GOOGLE PHOTOS)
        Mapped to the Exact 7 Services:
        Acrylic Nails, Gel Manicure, Builder Gel, Gel X, Spa Pedicure, Nail Art, Waxing
     ======================================================================== */
  const LOOKBOOK_ITEMS = [
    // Featured Initial 12 across all 7 services
    {
      thumb: 'assets/images/social/fb-post-18-122096833059308328.webp',
      full: 'assets/images/social/fb-post-18-122096833059308328.jpg',
      service: 'Nail Art',
      tags: ['Nail Art', 'Acrylic Nails'],
      label: 'Nail Art · 3D Spring Blossom',
      shape: 'shape-almond'
    },
    {
      thumb: 'assets/images/social/ig-post-34-DatQzk1st74.webp',
      full: 'assets/images/social/ig-post-34-DatQzk1st74.jpg',
      service: 'Acrylic Nails',
      tags: ['Acrylic Nails', 'Gel X'],
      label: 'Acrylic Nails · Crisp V-French',
      shape: 'shape-oval'
    },
    {
      thumb: 'assets/images/social/ig-post-03-DaJkdhXsruD.webp',
      full: 'assets/images/social/ig-post-03-DaJkdhXsruD.jpg',
      service: 'Spa Pedicure',
      tags: ['Spa Pedicure'],
      label: 'Spa Pedicure · Botanical Scrub & Citrus',
      shape: 'shape-squoval'
    },
    {
      thumb: 'assets/images/social/fb-post-46-122110230921308328.webp',
      full: 'assets/images/social/fb-post-46-122110230921308328.jpg',
      service: 'Builder Gel',
      tags: ['Builder Gel', 'Nail Art'],
      label: 'Builder Gel · Milky Pink & 3D Florals',
      shape: 'shape-petal'
    },
    {
      thumb: 'assets/images/social/ig-post-28-Da-QHfdNFy8.webp',
      full: 'assets/images/social/ig-post-28-Da-QHfdNFy8.jpg',
      service: 'Gel X',
      tags: ['Gel X', 'Gel Manicure'],
      label: 'Gel X · Glazed Chrome Almond',
      shape: 'shape-oval'
    },
    {
      thumb: 'assets/images/social/fb-post-06-122115192009308328.webp',
      full: 'assets/images/social/fb-post-06-122115192009308328.jpg',
      service: 'Nail Art',
      tags: ['Nail Art', 'Gel X'],
      label: 'Nail Art · Ruby Cat-Eye & Gold Frame',
      shape: 'shape-almond'
    },
    {
      thumb: 'assets/images/social/ig-post-39-DaXmrmYBsdu.webp',
      full: 'assets/images/social/ig-post-39-DaXmrmYBsdu.jpg',
      service: 'Gel Manicure',
      tags: ['Gel Manicure', 'Builder Gel'],
      label: 'Gel Manicure · Classic White French',
      shape: 'shape-petal'
    },
    {
      thumb: 'assets/images/social/fb-post-32-122108434089308328.webp',
      full: 'assets/images/social/fb-post-32-122108434089308328.jpg',
      service: 'Spa Pedicure',
      tags: ['Spa Pedicure'],
      label: 'Spa Pedicure · Glossy French & Bow',
      shape: 'shape-squoval'
    },
    {
      thumb: 'assets/images/social/fb-post-53-122108916489308328.webp',
      full: 'assets/images/social/fb-post-53-122108916489308328.jpg',
      service: 'Acrylic Nails',
      tags: ['Acrylic Nails', 'Nail Art'],
      label: 'Acrylic Nails · Celestial Gold Aura',
      shape: 'shape-almond'
    },
    {
      thumb: 'assets/images/social/ig-post-27-DbBFVH2ABbY.webp',
      full: 'assets/images/social/ig-post-27-DbBFVH2ABbY.jpg',
      service: 'Builder Gel',
      tags: ['Builder Gel', 'Gel X'],
      label: 'Builder Gel · Bridal Pearl Almond',
      shape: 'shape-oval'
    },
    {
      thumb: 'assets/images/social/fb-post-23-122113098909308328.webp',
      full: 'assets/images/social/fb-post-23-122113098909308328.jpg',
      service: 'Nail Art',
      tags: ['Nail Art', 'Acrylic Nails'],
      label: 'Nail Art · Wine Aura & Hibiscus',
      shape: 'shape-squoval'
    },
    {
      thumb: 'assets/images/social/fb-post-40-122112604929308328.webp',
      full: 'assets/images/social/fb-post-40-122112604929308328.jpg',
      service: 'Waxing',
      tags: ['Waxing', 'Spa Pedicure'],
      label: 'Waxing & Spa Sanctuary · Lake Nona',
      shape: 'shape-petal'
    },

    // Expanded Original Collection (36 Additional Original Photos = 48 Total)
    {
      thumb: 'assets/images/social/fb-post-08-122116909737308328.webp',
      full: 'assets/images/social/fb-post-08-122116909737308328.jpg',
      service: 'Acrylic Nails',
      tags: ['Acrylic Nails', 'Nail Art'],
      label: 'Acrylic Nails · Sky Blue & 3D Floral',
      shape: 'shape-almond'
    },
    {
      thumb: 'assets/images/social/ig-post-15-Db3Of7sgtqh.webp',
      full: 'assets/images/social/ig-post-15-Db3Of7sgtqh.jpg',
      service: 'Gel X',
      tags: ['Gel X', 'Nail Art'],
      label: 'Gel X · Mint Coffin & Plumeria',
      shape: 'shape-oval'
    },
    {
      thumb: 'assets/images/social/fb-post-66-122108933445308328.webp',
      full: 'assets/images/social/fb-post-66-122108933445308328.jpg',
      service: 'Builder Gel',
      tags: ['Builder Gel', 'Gel Manicure'],
      label: 'Builder Gel · Dusty Rose Aura Almond',
      shape: 'shape-squoval'
    },
    {
      thumb: 'assets/images/social/ig-post-19-DblJhAtg-na.webp',
      full: 'assets/images/social/ig-post-19-DblJhAtg-na.jpg',
      service: 'Gel X',
      tags: ['Gel X', 'Nail Art'],
      label: 'Gel X · Gold Chrome Flame French',
      shape: 'shape-petal'
    },
    {
      thumb: 'assets/images/social/fb-post-62-122108933469308328.webp',
      full: 'assets/images/social/fb-post-62-122108933469308328.jpg',
      service: 'Nail Art',
      tags: ['Nail Art', 'Acrylic Nails'],
      label: 'Nail Art · Sculpted 3D White Orchids',
      shape: 'shape-almond'
    },
    {
      thumb: 'assets/images/social/ig-post-02-DdVGeTXsUNM.webp',
      full: 'assets/images/social/ig-post-02-DdVGeTXsUNM.jpg',
      service: 'Acrylic Nails',
      tags: ['Acrylic Nails', 'Nail Art'],
      label: 'Acrylic Nails · Espresso Tortoiseshell',
      shape: 'shape-oval'
    },
    {
      thumb: 'assets/images/social/fb-post-26-122107954563308328.webp',
      full: 'assets/images/social/fb-post-26-122107954563308328.jpg',
      service: 'Spa Pedicure',
      tags: ['Spa Pedicure'],
      label: 'Spa Pedicure · Milk & Honey Hot Steam',
      shape: 'shape-squoval'
    },
    {
      thumb: 'assets/images/social/ig-post-04-DengC3wMclt.webp',
      full: 'assets/images/social/ig-post-04-DengC3wMclt.jpg',
      service: 'Gel Manicure',
      tags: ['Gel Manicure', 'Builder Gel'],
      label: 'Gel Manicure · Double-Line Almond French',
      shape: 'shape-petal'
    },
    {
      thumb: 'assets/images/social/fb-post-22-122096954487308328.webp',
      full: 'assets/images/social/fb-post-22-122096954487308328.jpg',
      service: 'Builder Gel',
      tags: ['Builder Gel', 'Acrylic Nails'],
      label: 'Builder Gel · Deep Curved Rosy French',
      shape: 'shape-almond'
    },
    {
      thumb: 'assets/images/social/ig-post-12-DcBr7zlgZS-.webp',
      full: 'assets/images/social/ig-post-12-DcBr7zlgZS-.jpg',
      service: 'Nail Art',
      tags: ['Nail Art', 'Acrylic Nails'],
      label: 'Nail Art · Royal Blue 3D Blossom',
      shape: 'shape-oval'
    },
    {
      thumb: 'assets/images/social/fb-post-28-122107957179308328.webp',
      full: 'assets/images/social/fb-post-28-122107957179308328.jpg',
      service: 'Gel X',
      tags: ['Gel X', 'Builder Gel'],
      label: 'Gel X · Espresso Swirl & White V-Tip',
      shape: 'shape-squoval'
    },
    {
      thumb: 'assets/images/social/ig-post-38-DabfcKMhHD8.webp',
      full: 'assets/images/social/ig-post-38-DabfcKMhHD8.jpg',
      service: 'Acrylic Nails',
      tags: ['Acrylic Nails', 'Gel X'],
      label: 'Acrylic Nails · Crimson Stiletto French',
      shape: 'shape-petal'
    },
    {
      thumb: 'assets/images/social/fb-post-47-122108901495308328.webp',
      full: 'assets/images/social/fb-post-47-122108901495308328.jpg',
      service: 'Nail Art',
      tags: ['Nail Art', 'Acrylic Nails'],
      label: 'Nail Art · Blush Leopard & 3D Bows',
      shape: 'shape-almond'
    },
    {
      thumb: 'assets/images/social/ig-post-13-Db_IeWHgA-v.webp',
      full: 'assets/images/social/ig-post-13-Db_IeWHgA-v.jpg',
      service: 'Gel Manicure',
      tags: ['Gel Manicure', 'Nail Art'],
      label: 'Gel Manicure · Tortoiseshell & Gold Trim',
      shape: 'shape-oval'
    },
    {
      thumb: 'assets/images/social/ig-post-01-DaMHY2ysd0l.webp',
      full: 'assets/images/social/ig-post-01-DaMHY2ysd0l.jpg',
      service: 'Spa Pedicure',
      tags: ['Spa Pedicure', 'Waxing'],
      label: 'Spa Pedicure · Luxury Foot & Leg Care',
      shape: 'shape-squoval'
    },
    {
      thumb: 'assets/images/social/fb-post-57-122108933427308328.webp',
      full: 'assets/images/social/fb-post-57-122108933427308328.jpg',
      service: 'Gel X',
      tags: ['Gel X', 'Nail Art'],
      label: 'Gel X · Coral Peach Tropical 3D',
      shape: 'shape-petal'
    },
    {
      thumb: 'assets/images/social/ig-post-22-DbMfkMPvbmW.webp',
      full: 'assets/images/social/ig-post-22-DbMfkMPvbmW.jpg',
      service: 'Builder Gel',
      tags: ['Builder Gel', 'Gel Manicure'],
      label: 'Builder Gel · Polka-Dot Almond Tips',
      shape: 'shape-almond'
    },
    {
      thumb: 'assets/images/social/fb-post-60-122108933433308328.webp',
      full: 'assets/images/social/fb-post-60-122108933433308328.jpg',
      service: 'Acrylic Nails',
      tags: ['Acrylic Nails', 'Nail Art'],
      label: 'Acrylic Nails · Pastel Aura Square',
      shape: 'shape-oval'
    },
    {
      thumb: 'assets/images/social/ig-post-32-Da4MiOesdwh.webp',
      full: 'assets/images/social/ig-post-32-Da4MiOesdwh.jpg',
      service: 'Nail Art',
      tags: ['Nail Art', 'Gel X'],
      label: 'Nail Art · Magenta Marble & Orchid',
      shape: 'shape-squoval'
    },
    {
      thumb: 'assets/images/social/fb-post-35-122112604947308328.webp',
      full: 'assets/images/social/fb-post-35-122112604947308328.jpg',
      service: 'Waxing',
      tags: ['Waxing', 'Gel Manicure'],
      label: 'Marble Stations & Beauty Care',
      shape: 'shape-petal'
    },
    {
      thumb: 'assets/images/social/ig-post-48-DaCMCd_M93Y.webp',
      full: 'assets/images/social/ig-post-48-DaCMCd_M93Y.jpg',
      service: 'Gel Manicure',
      tags: ['Gel Manicure', 'Builder Gel'],
      label: 'Gel Manicure · Clean Square French',
      shape: 'shape-almond'
    },
    {
      thumb: 'assets/images/social/fb-post-63-122108933457308328.webp',
      full: 'assets/images/social/fb-post-63-122108933457308328.jpg',
      service: 'Acrylic Nails',
      tags: ['Acrylic Nails', 'Nail Art'],
      label: 'Acrylic Nails · Espresso & Gold Starburst',
      shape: 'shape-oval'
    },
    {
      thumb: 'assets/images/social/ig-post-42-DaRpeDbMH0b.webp',
      full: 'assets/images/social/ig-post-42-DaRpeDbMH0b.jpg',
      service: 'Nail Art',
      tags: ['Nail Art', 'Acrylic Nails'],
      label: 'Nail Art · Rainbow 3D Dewdrop French',
      shape: 'shape-squoval'
    },
    {
      thumb: 'assets/images/social/ig-post-43-DaOzzxesDW-.webp',
      full: 'assets/images/social/ig-post-43-DaOzzxesDW-.jpg',
      service: 'Gel X',
      tags: ['Gel X', 'Nail Art'],
      label: 'Gel X · Tangerine Hibiscus Almond',
      shape: 'shape-petal'
    }
  ];

  const lookbookMosaic = document.getElementById('lookbookMosaic');
  const toggleAllPhotosBtn = document.getElementById('toggleAllPhotosBtn');
  const swatchBtns = Array.from(document.querySelectorAll('.nail-swatch'));

  let currentServiceFilter = 'all';
  let showAllLookbook = false;

  function renderLookbook() {
    if (!lookbookMosaic) return;
    const filtered = currentServiceFilter === 'all'
      ? LOOKBOOK_ITEMS
      : LOOKBOOK_ITEMS.filter((item) => item.service === currentServiceFilter || item.tags.includes(currentServiceFilter));

    const isMobile = window.innerWidth <= 820;
    const defaultLimit = isMobile ? 8 : 12;
    const visibleItems = showAllLookbook ? filtered : filtered.slice(0, defaultLimit);

    lookbookMosaic.innerHTML = visibleItems.map((item) => `
      <figure
        class="lookbook-tile ${item.shape}"
        data-lightbox-src="${item.full}"
        data-lightbox-caption="${item.label} — All Nails &amp; Spa Lake Nona"
        tabindex="0"
        role="button"
        aria-label="Inspect ${item.label}"
      >
        <img
          src="${item.thumb}"
          alt="${item.label}"
          loading="lazy"
          width="360"
          height="450"
        />
        <figcaption class="tile-badge">${item.label}</figcaption>
      </figure>
    `).join('');

    if (toggleAllPhotosBtn) {
      if (filtered.length <= defaultLimit) {
        toggleAllPhotosBtn.style.display = 'none';
      } else {
        toggleAllPhotosBtn.style.display = 'inline-block';
        toggleAllPhotosBtn.textContent = showAllLookbook
          ? 'Show Compact Selection'
          : `Show All ${filtered.length} Original Salon Photos`;
      }
    }
  }

  swatchBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      swatchBtns.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      currentServiceFilter = btn.getAttribute('data-filter') || 'all';
      showAllLookbook = false;
      renderLookbook();
    });
  });

  if (toggleAllPhotosBtn) {
    toggleAllPhotosBtn.addEventListener('click', () => {
      showAllLookbook = !showAllLookbook;
      renderLookbook();
    });
  }

  renderLookbook();

  /* ========================================================================
     3. LIVE GOOGLE MAPS REVIEWS ENGINE (/api/google-reviews.php -> /data/google-reviews.json)
        Pulls directly from Google Maps so any new review automatically updates!
     ======================================================================== */
  const reviewsContainer = document.getElementById('reviewsContainer');
  const reviewPhotoStrip = document.getElementById('reviewPhotoStrip');
  const googleRatingNumber = document.getElementById('googleRatingNumber');
  const googleTotalReviews = document.getElementById('googleTotalReviews');
  const googleSyncText = document.getElementById('googleSyncText');
  const refreshGoogleReviewsBtn = document.getElementById('refreshGoogleReviewsBtn');
  const revFilterBtns = Array.from(document.querySelectorAll('.rev-filter-btn'));

  let allReviewsData = [{"reviewId": "Ci9DQUlRQUNvZENodHljRjlvT25Wb1JtdDJaWFpuTUhORExVWmZibWd6V2taRmJIYxAB", "reviewerName": "Cindy Acevedo", "badge": "2 reviews", "avatar": "assets/images/reviews/avatar-01-cindy-acevedo.webp", "rating": 5, "relativeDate": "Edited 5 days ago", "text": "Amazing experience!!!! 🤩", "photos": ["assets/images/reviews/review-01-cindy-acevedo-1.webp", "assets/images/reviews/review-01-cindy-acevedo-2.webp"], "photosOriginal": ["assets/images/reviews/review-01-cindy-acevedo-1.jpg", "assets/images/reviews/review-01-cindy-acevedo-2.jpg"], "profileUrl": "https://www.google.com/maps/contrib/114404629653713210223?hl=en-US"}, {"reviewId": "Ci9DQUlRQUNvZENodHljRjlvT21ST2JUY3hkRXRqVEZnM2NFdDBlRE5EWVRSSWJVRRAB", "reviewerName": "Isa Ortiz", "badge": "3 reviews", "avatar": "assets/images/reviews/avatar-02-isa-ortiz.webp", "rating": 5, "relativeDate": "Edited 2 weeks ago", "text": "very pleasant atmosphere! nicole did an amazing job on my nails", "photos": [], "photosOriginal": [], "profileUrl": "https://www.google.com/maps/contrib/105163320105573834749?hl=en-US"}, {"reviewId": "Ci9DQUlRQUNvZENodHljRjlvT2paMlVGTm1Xa0oxTkdGWldVUlNWRVZvWkc5S2MxRRAB", "reviewerName": "Sara i.", "badge": "Local Guide · 14 reviews", "avatar": "assets/images/reviews/avatar-04-sara-i.webp", "rating": 5, "relativeDate": "a month ago", "text": "Nicole is the best and super attentive when it comes to her work !!!", "photos": ["assets/images/reviews/review-04-sara-i-1.webp", "assets/images/reviews/review-04-sara-i-2.webp", "assets/images/reviews/review-04-sara-i-3.webp"], "photosOriginal": ["assets/images/reviews/review-04-sara-i-1.jpg", "assets/images/reviews/review-04-sara-i-2.jpg", "assets/images/reviews/review-04-sara-i-3.jpg"], "profileUrl": "https://www.google.com/maps/contrib/106132126148385799840?hl=en-US"}, {"reviewId": "Ci9DQUlRQUNvZENodHljRjlvT2tsbVZsbEJhamd6VG14MU5EQkdlVzVOVms1TFdHYxAB", "reviewerName": "Rosa Reyes Malla", "badge": "Local Guide · 112 reviews", "avatar": "assets/images/reviews/avatar-05-rosa-reyes-malla.webp", "rating": 5, "relativeDate": "a month ago", "text": "I think this is the first nail salon where I see a great variety of nail polish and they all look brand new. The place is impeccably clean and needless to say the hands of Nicole for that foot massage are #1 highly recommend it. New administration and all new and super clean.", "photos": [], "photosOriginal": [], "profileUrl": "https://www.google.com/maps/contrib/102822374931677275567?hl=en-US"}, {"reviewId": "Ci9DQUlRQUNvZENodHljRjlvT2pBeU4yUXhNelJyY1ZCU2QxQnJhVGRPTmpWc09VRRAB", "reviewerName": "duda -", "badge": "2 reviews", "avatar": "assets/images/reviews/avatar-06-duda.webp", "rating": 5, "relativeDate": "2 months ago", "text": "Genuinely 10/10 place, amazing people and well mannered. The pedicure felt amazing and looks amazing, LOVEEEE my finger nails down. 100% recommend this place. the only thing I did not enjoy was seeing a worker getting mistreated from a customer. Big thank you to Kris & Nicole for helping me and my mom :)", "photos": ["assets/images/reviews/review-06-duda-1.webp"], "photosOriginal": ["assets/images/reviews/review-06-duda-1.jpg"], "profileUrl": "https://www.google.com/maps/contrib/103719035680244570463?hl=en-US"}, {"reviewId": "Ci9DQUlRQUNvZENodHljRjlvT2psclUwSmZaMVJIUjJOa1FVRlRZbWxuYmpac2RWRRAB", "reviewerName": "Amanda Serafin", "badge": "2 reviews", "avatar": "assets/images/reviews/avatar-07-amanda-serafin.webp", "rating": 5, "relativeDate": "3 months ago", "text": "I had my nails done by Nicole, and she exceeded every expectation. She brought my vision to life with incredible precision! My nails are perfectly shaped, beautifully symmetrical, and impeccably clean. Her attention to detail and talent truly set her apart. On top of that, the entire staff was warm, welcoming, and genuinely friendly, making the experience even better. I highly recommend Nicole and the entire salon to anyone looking for exceptional service and flawless results.", "photos": ["assets/images/reviews/review-07-amanda-serafin-1.webp"], "photosOriginal": ["assets/images/reviews/review-07-amanda-serafin-1.jpg"], "profileUrl": "https://www.google.com/maps/contrib/110359749169480163783?hl=en-US"}, {"reviewId": "Ci9DQUlRQUNvZENodHljRjlvT2psck9VMXdVbmx2UzIxRVkzSm1SRmh0VEV0c2QyYxAB", "reviewerName": "B", "badge": "5 reviews", "avatar": "assets/images/reviews/avatar-09-b.webp", "rating": 5, "relativeDate": "3 months ago", "text": "Absolutely love my nails ! I had such a great experience getting my nails done here ! Brandon was patient & really took the time to make sure everything was exactly how I wanted it. The nail techs here are truly talented. Definitely my new go to spot ! :)", "photos": ["assets/images/reviews/review-09-b-1.webp"], "photosOriginal": ["assets/images/reviews/review-09-b-1.jpg"], "profileUrl": "https://www.google.com/maps/contrib/108668089714741291134?hl=en-US"}, {"reviewId": "Ci9DQUlRQUNvZENodHljRjlvT21ONlEyWjFiazFhYlVRdFVqYzVPR2RCVTFnNVUzYxAB", "reviewerName": "Mariana Alfaro", "badge": "Local Guide · 14 reviews", "avatar": "assets/images/reviews/avatar-10-mariana-alfaro.webp", "rating": 5, "relativeDate": "3 months ago", "text": "Love this place. Nicole did my pedi and it was perfect. Keila did my 6 year old nails for the 1st time and she was amazing!! Definitely recommend", "photos": ["assets/images/reviews/review-10-mariana-alfaro-1.webp"], "photosOriginal": ["assets/images/reviews/review-10-mariana-alfaro-1.jpg"], "profileUrl": "https://www.google.com/maps/contrib/111433790264817542395?hl=en-US"}, {"reviewId": "ChZDSUhNMG9nS0VJQ0FnSUNWak1QeGFREAE", "reviewerName": "Ana Montenegro", "badge": "7 opiniones", "avatar": "assets/images/reviews/avatar-11-ana-montenegro.webp", "rating": 5, "relativeDate": "Editado Hace 3 meses", "text": "La atención y la calidad del trabajo es excelente brandon", "photos": ["assets/images/reviews/review-11-ana-montenegro-1.webp"], "photosOriginal": ["assets/images/reviews/review-11-ana-montenegro-1.jpg"], "profileUrl": "https://www.google.com/maps/contrib/100208232576066169254?hl=es-419"}, {"reviewId": "Ci9DQUlRQUNvZENodHljRjlvT2s0elpVOXpkbEpuUVdoV1pteEtSV3h2ZFdSQlVrRRAB", "reviewerName": "Gaviota Rivera", "badge": "3 reviews", "avatar": "assets/images/reviews/avatar-12-gaviota-rivera.webp", "rating": 5, "relativeDate": "3 months ago", "text": "Ive had the opportunity to come here two times recently as anew client and im so happy i found a new quality nail tech! Nicole is amazing 👏🏽.", "photos": ["assets/images/reviews/review-12-gaviota-rivera-1.webp"], "photosOriginal": ["assets/images/reviews/review-12-gaviota-rivera-1.jpg"], "profileUrl": "https://www.google.com/maps/contrib/109215006806044607201?hl=en-US"}, {"reviewId": "Ci9DQUlRQUNvZENodHljRjlvT21sZlYxOVNXbDgzVERsSlNHSXhiVFpHZDFsaFltYxAB", "reviewerName": "Kathleen Osne", "badge": "3 reviews", "avatar": "assets/images/reviews/avatar-14-kathleen-osne.webp", "rating": 5, "relativeDate": "3 months ago", "text": "I had such a great experience with Chris! He was professional, detail-oriented, and took his time to make sure my nails came out exactly how I wanted. The shape is perfect, the application is flawless, and you can tell he genuinely cares about the quality of his work. The atmosphere was welcoming, and I never felt rushed. I’ve gotten so many compliments on my nails already! If you’re looking for a talented nail tech who pays attention to every detail, I highly recommend booking with Chris. I’ll definitely be back!", "photos": [], "photosOriginal": [], "profileUrl": "https://www.google.com/maps/contrib/114566775548968507833?hl=en-US"}, {"reviewId": "Ci9DQUlRQUNvZENodHljRjlvT2pKbVUyRktaekJOWVZCWFRuWjBOa1J6VkY5S1FrRRAB", "reviewerName": "Taylor Ellis", "badge": "6 reviews", "avatar": "assets/images/reviews/avatar-15-taylor-ellis.webp", "rating": 5, "relativeDate": "4 months ago", "text": "This was my first time going to Nicole and she was so kind! I came from another tech and didn’t have to do a soak off. I appreciate the traditional approach of doing nails that they offer here. Also, the salon is very clean. I have gone to several private nail techs and can say Nicole is the best thus far! They are reasonably priced and ensure you have a good experience.", "photos": ["assets/images/reviews/review-15-taylor-ellis-1.webp", "assets/images/reviews/review-15-taylor-ellis-2.webp"], "photosOriginal": ["assets/images/reviews/review-15-taylor-ellis-1.jpg", "assets/images/reviews/review-15-taylor-ellis-2.jpg"], "profileUrl": "https://www.google.com/maps/contrib/105638889255624724449?hl=en-US"}, {"reviewId": "Ci9DQUlRQUNvZENodHljRjlvT25oc1lUaFFRbVpYU1RocWNWQnFhM0ZZVUc1a2VGRRAB", "reviewerName": "Juliana Palmieri", "badge": "4 reviews", "avatar": "assets/images/reviews/avatar-16-juliana-palmieri.webp", "rating": 5, "relativeDate": "4 months ago", "text": "Tried this place for the first time today and got my nails done with Nicole. Not only was she super sweet but she is so talented and my nails came out exactly like the inspo pic I showed her. Very attentive to the little details! My nails are World Cup ready 🇧🇷⚽️ very pleased with the service and outcome.", "photos": ["assets/images/reviews/review-16-juliana-palmieri-1.webp"], "photosOriginal": ["assets/images/reviews/review-16-juliana-palmieri-1.jpg"], "profileUrl": "https://www.google.com/maps/contrib/112458393771603304334?hl=en-US"}, {"reviewId": "ChZDSUhNMG9nS0VJQ0FnSUNaekpIbGFREAE", "reviewerName": "Bettyema Rached", "badge": "Local Guide · 143 opiniones", "avatar": "assets/images/reviews/avatar-19-bettyema-rached.webp", "rating": 5, "relativeDate": "Hace 3 años", "text": "Este nuevo local para hacer mani y pedicure, es de lo más placentero. Venir a hacerme las uñas significa un momento de relax y paz. La atención es excelente. La calidad del trabajo difícil de encontrar en otro lugar, se destaca por su delicadeza y perfección. Además que puedes innovar cada vez que vienes porque tienen estilos diferentes y creativos. Lina y Kelly son especialistas en el arte de las uñas!
El ambiente es hermoso y acogedor. El trato es cálido , respetuoso y de amigable armonía.
Es una experiencia única! Agradecida por tanta atención!", "photos": [], "photosOriginal": [], "profileUrl": "https://www.google.com/maps/contrib/107720711007494002498?hl=es-419"}, {"reviewId": "ChZDSUhNMG9nS0VJQ0FnSUNaektHdVpnEAE", "reviewerName": "Judith Rached", "badge": "4 opiniones", "avatar": "assets/images/reviews/avatar-20-judith-rached.webp", "rating": 5, "relativeDate": "Hace 3 años", "text": "Me encanta el ambiente, la decoración, la atención y el personal. El local es iluminado y limpio, todo está en orden siempre..Amo el trabajo que hacen! Particularmente me atiendo con Lina y Kelly, conocen mis gustos, me atienden excelente…SON LO MÁXIMO!", "photos": ["assets/images/reviews/review-20-judith-rached-1.webp", "assets/images/reviews/review-20-judith-rached-2.webp"], "photosOriginal": ["assets/images/reviews/review-20-judith-rached-1.jpg", "assets/images/reviews/review-20-judith-rached-2.jpg"], "profileUrl": "https://www.google.com/maps/contrib/106632369386912893941?hl=es-419"}, {"reviewId": "ChZDSUhNMG9nS0VJQ0FnSUNSNy1LMENnEAE", "reviewerName": "Yoandra Villegas", "badge": "6 opiniones", "avatar": "assets/images/reviews/avatar-21-yoandra-villegas.webp", "rating": 5, "relativeDate": "Editado Hace 3 años", "text": "Recomiendo a Maria muy buen servicio", "photos": [], "photosOriginal": [], "profileUrl": "https://www.google.com/maps/contrib/114750355259373538562?hl=es-419"}, {"reviewId": "ChdDSUhNMG9nS0VJQ0FnSUR4bjVfZjVRRRAB", "reviewerName": "Francia Diaz", "badge": "6 opiniones", "avatar": "assets/images/reviews/avatar-22-francia-diaz.webp", "rating": 5, "relativeDate": "Hace 3 años", "text": "Excelente servicio! Lina y Kelly son muy atentas y hacen un trabajo impecable, siempre salgo feliz 😀", "photos": ["assets/images/reviews/review-22-francia-diaz-1.webp", "assets/images/reviews/review-22-francia-diaz-2.webp"], "photosOriginal": ["assets/images/reviews/review-22-francia-diaz-1.jpg", "assets/images/reviews/review-22-francia-diaz-2.jpg"], "profileUrl": "https://www.google.com/maps/contrib/114667802237805778351?hl=es-419"}];
  let activeRevFilter = 'all';

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderReviewsList() {
    if (!reviewsContainer) return;

    const filtered = allReviewsData.filter((r) => {
      if (activeRevFilter === 'all') return true;
      if (activeRevFilter === 'photos') return Array.isArray(r.photos) && r.photos.length > 0;
      return String(r.text || '').toLowerCase().includes(activeRevFilter.toLowerCase());
    });

    reviewsContainer.innerHTML = filtered.slice(0, 14).map((r) => {
      const stars = '★'.repeat(Math.max(1, Math.min(5, Number(r.rating || 5))));
      const photosHtml = Array.isArray(r.photos) && r.photos.length > 0
        ? `<div class="rev-attached-photos">
            ${r.photos.map((pUrl, idx) => {
              const origUrl = (Array.isArray(r.photosOriginal) && r.photosOriginal[idx]) ? r.photosOriginal[idx] : pUrl;
              return `
                <button
                  type="button"
                  class="rev-photo-btn"
                  data-lightbox-src="${escapeHtml(origUrl)}"
                  data-lightbox-caption="Google Review Photo by ${escapeHtml(r.reviewerName)}"
                  aria-label="View nail photo from ${escapeHtml(r.reviewerName)}"
                >
                  <img src="${escapeHtml(pUrl)}" alt="Client nail photo by ${escapeHtml(r.reviewerName)}" loading="lazy" width="84" height="84" />
                </button>
              `;
            }).join('')}
           </div>`
        : '';

      const avatarSrc = r.avatar || 'assets/images/logo-crest-only.webp';
      const newBadge = r.isLiveNew ? ' · <strong style="color:#8FF0AE">NEW ON GOOGLE</strong>' : '';

      return `
        <article class="review-slip ${r.isLiveNew ? 'is-live-new' : ''}">
          <div>
            <div class="rev-slip-head">
              <div class="rev-author-wrap">
                <img src="${escapeHtml(avatarSrc)}" alt="${escapeHtml(r.reviewerName)}" class="rev-avatar" loading="lazy" width="38" height="38" />
                <div>
                  <h3 class="rev-author-name">${escapeHtml(r.reviewerName)}</h3>
                  <div class="rev-meta-line">${escapeHtml(r.relativeDate)}${newBadge}</div>
                </div>
              </div>
              <div class="rev-stars" aria-label="${r.rating} stars">${stars}</div>
            </div>
            ${r.text ? `<p class="rev-body-text" style="margin-top:10px;">${escapeHtml(r.text)}</p>` : ''}
          </div>
          ${photosHtml}
        </article>
      `;
    }).join('');
  }

  function renderReviewPhotoStrip() {
    if (!reviewPhotoStrip) return;
    const collected = [];
    allReviewsData.forEach((r) => {
      if (Array.isArray(r.photos)) {
        r.photos.forEach((p, idx) => {
          const orig = (Array.isArray(r.photosOriginal) && r.photosOriginal[idx]) ? r.photosOriginal[idx] : p;
          collected.push({
            thumb: p,
            full: orig,
            author: r.reviewerName
          });
        });
      }
    });

    reviewPhotoStrip.innerHTML = collected.slice(0, 8).map((item) => `
      <button
        type="button"
        class="mini-rev-photo"
        data-lightbox-src="${escapeHtml(item.full)}"
        data-lightbox-caption="Verified Google Review Nail Photo by ${escapeHtml(item.author)}"
        aria-label="Client nail photo by ${escapeHtml(item.author)}"
      >
        <img src="${escapeHtml(item.thumb)}" alt="Client nails by ${escapeHtml(item.author)}" loading="lazy" width="80" height="80" />
      </button>
    `).join('');
  }

  async function loadGoogleReviews(forceLive = false) {
    if (googleSyncText && forceLive) {
      googleSyncText.textContent = 'Syncing with Google Maps...';
    }

    let payload = null;
    try {
      const apiUrl = forceLive ? 'api/google-reviews.php?force=1' : 'api/google-reviews.php';
      const res = await fetch(apiUrl, { cache: 'no-store' });
      if (res.ok) {
        const ct = res.headers.get('content-type') || '';
        if (ct.includes('application/json')) {
          payload = await res.json();
        }
      }
    } catch (_) {
      // Fallback to local JSON on static preview
    }

    if (!payload || !Array.isArray(payload.reviews)) {
      try {
        const fallbackRes = await fetch('data/google-reviews.json');
        if (fallbackRes.ok) {
          payload = await fallbackRes.json();
        }
      } catch (_) {}
    }

    if (payload && Array.isArray(payload.reviews)) {
      allReviewsData = payload.reviews;
      if (googleRatingNumber && payload.rating) {
        googleRatingNumber.textContent = Number(payload.rating).toFixed(1);
      }
      if (googleTotalReviews && payload.totalReviews) {
        googleTotalReviews.textContent = String(payload.totalReviews);
      }
      if (googleSyncText) {
        googleSyncText.textContent = payload.liveSync && payload.liveSync.status === 'connected'
          ? 'Live-Synced with Google Maps'
          : 'Google Maps Verified Feed';
      }
      renderReviewsList();
      renderReviewPhotoStrip();
    }
  }

  revFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      revFilterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeRevFilter = btn.getAttribute('data-rev-filter') || 'all';
      renderReviewsList();
    });
  });

  if (refreshGoogleReviewsBtn) {
    refreshGoogleReviewsBtn.addEventListener('click', () => {
      loadGoogleReviews(true);
    });
  }

  renderReviewsList();
  renderReviewPhotoStrip();
  loadGoogleReviews(false);
  // Auto-poll every 120 seconds for newly posted Google Maps reviews
  setInterval(() => loadGoogleReviews(false), 120000);

  /* ========================================================================
     4. LIVE LAKE NONA HOURS STATUS & TODAY HIGHLIGHT
     ======================================================================== */
  function updateLiveHoursStatus() {
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
      });
      const parts = formatter.formatToParts(now);
      const map = {};
      parts.forEach((p) => { map[p.type] = p.value; });

      const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      const dayIdx = dayMap[map.weekday] ?? now.getDay();
      const minutesNow = Number(map.hour || 0) * 60 + Number(map.minute || 0);

      // Highlight today's row in Hours table
      document.querySelectorAll('.hours-row').forEach((row) => {
        row.classList.toggle('is-today', Number(row.getAttribute('data-day')) === dayIdx);
      });

      const isSunday = dayIdx === 0;
      const openMin = isSunday ? 11 * 60 : 9 * 60 + 30;
      const closeMin = isSunday ? 17 * 60 : 19 * 60;
      const isOpen = minutesNow >= openMin && minutesNow < closeMin;

      const badge = document.getElementById('liveHoursBadge');
      if (badge) {
        const dot = badge.querySelector('.status-dot');
        const txt = badge.querySelector('.status-text');
        if (dot) {
          dot.style.background = isOpen ? '#4CD97B' : '#E5A952';
        }
        if (txt) {
          const rangeText = isSunday ? '11:00 AM – 5:00 PM' : '9:30 AM – 7:00 PM';
          txt.textContent = isOpen
            ? `Open Now · ${rangeText}`
            : `Lake Nona · ${rangeText}`;
        }
      }
    } catch (_) {}
  }

  updateLiveHoursStatus();

  /* ========================================================================
     5. HIGH-RES ORIGINAL PHOTO LIGHTBOX
     ======================================================================== */
  const lightbox = document.getElementById('photoLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-lightbox-src]');
    if (!trigger || !lightbox || !lightboxImg) return;
    const src = trigger.getAttribute('data-lightbox-src');
    const caption = trigger.getAttribute('data-lightbox-caption') || 'All Nails & Spa Lake Nona';
    if (!src) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption;
    if (lightboxCaption) lightboxCaption.textContent = caption;
    if (typeof lightbox.showModal === 'function') {
      lightbox.showModal();
    } else {
      lightbox.setAttribute('open', '');
    }
  });

  if (lightboxCloseBtn && lightbox) {
    lightboxCloseBtn.addEventListener('click', () => lightbox.close());
  }
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.close();
    });
  }
})();
