import IFeaturedCategories from '../interfaces/IFeaturedCategories';

const FeaturedCategories: IFeaturedCategories[] = [
  {
    category: {
      name: 'New',
      slug: 'fiction',
      categoryId: 1,
    },
    products: [
      {
        author: 'Chinua Achebe',
        country: 'Nigeria',
        photos: [
          {
            url: 'images/things-fall-apart.jpg',
            order: 0,
          },
        ],
        language: 'English',
        pages: 209,
        title: 'Things Fall Apart',
        year: 1958,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 4,
        slug: 'chinua-achebe-things-fall-apart',
      },
      {
        author: 'Hans Christian Andersen',
        country: 'Denmark',
        photos: [
          {
            url: 'images/fairy-tales.jpg',
            order: 0,
          },
        ],
        language: 'Danish',
        pages: 784,
        title: 'Fairy tales',
        year: 1836,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 4,
        slug: 'hans-christian-andersen-fairy-tales',
      },
      {
        author: 'Dante Alighieri',
        country: 'Italy',
        photos: [
          {
            url: 'images/the-divine-comedy.jpg',
            order: 0,
          },
        ],
        language: 'Italian',
        pages: 928,
        title: 'The Divine Comedy',
        year: 1315,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 4,
        slug: 'dante-alighieri-the-divine-comedy',
      },
    ],
  },
  {
    category: {
      name: 'Best Sellers',
      slug: 'fiction',
      categoryId: 2,
    },
    products: [
      {
        author: 'Samuel Beckett',
        country: 'Republic of Ireland',
        photos: [
          {
            url: 'images/molloy-malone-dies-the-unnamable.jpg',
            order: 0,
          },
        ],
        language: 'French, English',
        pages: 256,
        title: 'Molloy, Malone Dies, The Unnamable, the trilogy',
        year: 1952,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 4,
        slug: 'samuel-beckett-molloy,-malone-dies,-the-unnamable,-the-trilogy',
      },
      {
        author: 'Giovanni Boccaccio',
        country: 'Italy',
        photos: [
          {
            url: 'images/the-decameron.jpg',
            order: 0,
          },
        ],
        language: 'Italian',
        pages: 1024,
        title: 'The Decameron',
        year: 1351,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 4,
        slug: 'giovanni-boccaccio-the-decameron',
      },
      {
        author: 'Jorge Luis Borges',
        country: 'Argentina',
        photos: [
          {
            url: 'images/ficciones.jpg',
            order: 0,
          },
        ],
        language: 'Spanish',
        pages: 224,
        title: 'Ficciones',
        year: 1965,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 4,
        slug: 'jorge-luis-borges-ficciones',
      },
      {
        author: 'Emily Brontë',
        country: 'United Kingdom',
        photos: [
          {
            url: 'images/wuthering-heights.jpg',
            order: 0,
          },
        ],
        language: 'English',
        pages: 342,
        title: 'Wuthering Heights',
        year: 1847,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 4,
        slug: 'emily-brontë-wuthering-heights',
      },
      {
        author: 'Albert Camus',
        country: 'Algeria, French Empire',
        photos: [
          {
            url: 'images/l-etranger.jpg',
            order: 0,
          },
        ],
        language: 'French',
        pages: 185,
        title: 'The Stranger',
        year: 1942,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 4,
        slug: 'albert-camus-the-stranger',
      },
      {
        author: 'Paul Celan',
        country: 'Romania, France',
        photos: [
          {
            url: 'images/poems-paul-celan.jpg',
            order: 0,
          },
        ],
        language: 'German',
        pages: 320,
        title: 'Poems',
        year: 1952,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 4,
        slug: 'paul-celan-poems',
      },
      {
        author: 'Louis-Ferdinand Céline',
        country: 'France',
        photos: [
          {
            url: 'images/voyage-au-bout-de-la-nuit.jpg',
            order: 0,
          },
        ],
        language: 'French',
        pages: 505,
        title: 'Journey to the End of the Night',
        year: 1932,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 4,
        slug: 'louis-ferdinand-céline-journey-to-the-end-of-the-night',
      },
      {
        author: 'Miguel de Cervantes',
        country: 'Spain',
        photos: [
          {
            url: 'images/don-quijote-de-la-mancha.jpg',
            order: 0,
          },
        ],
        language: 'Spanish',
        pages: 1056,
        title: 'Don Quijote De La Mancha',
        year: 1610,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 4,
        slug: 'miguel-de-cervantes-don-quijote-de-la-mancha',
      },
      {
        author: 'Fyodor Dostoevsky',
        country: 'Russia',
        photos: [
          {
            url: 'images/the-idiot.jpg',
            order: 0,
          },
        ],
        language: 'Russian',
        pages: 656,
        title: 'The Idiot',
        year: 1869,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 3,
        slug: 'fyodor-dostoevsky-the-idiot',
      },
      {
        author: 'Fyodor Dostoevsky',
        country: 'Russia',
        photos: [
          {
            url: 'images/the-possessed.jpg',
            order: 0,
          },
        ],
        language: 'Russian',
        pages: 768,
        title: 'The Possessed',
        year: 1872,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 3,
        slug: 'fyodor-dostoevsky-the-possessed',
      },
      {
        author: 'Fyodor Dostoevsky',
        country: 'Russia',
        photos: [
          {
            url: 'images/the-brothers-karamazov.jpg',
            order: 0,
          },
        ],
        language: 'Russian',
        pages: 824,
        title: 'The Brothers Karamazov',
        year: 1880,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'fiction',
          'detective',
        ],
        rating: 3,
        slug: 'fyodor-dostoevsky-the-brothers-karamazov',
      },
    ],
  },
  {
    category: {
      name: 'Best in Fiction',
      slug: 'fiction',
      categoryId: 3,
    },
    products: [
      {
        author: 'Euripides',
        country: 'Greece',
        photos: [
          {
            url: 'images/medea.jpg',
            order: 0,
          },
        ],
        language: 'Greek',
        pages: 104,
        title: 'Medea',
        year: -431,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'euripides-medea',
      },
      {
        author: 'William Faulkner',
        country: 'United States',
        photos: [
          {
            url: 'images/absalom-absalom.jpg',
            order: 0,
          },
        ],
        language: 'English',
        pages: 313,
        title: 'Absalom, Absalom!',
        year: 1936,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'william-faulkner-absalom,-absalom!',
      },
      {
        author: 'William Faulkner',
        country: 'United States',
        photos: [
          {
            url: 'images/the-sound-and-the-fury.jpg',
            order: 0,
          },
        ],
        language: 'English',
        pages: 326,
        title: 'The Sound and the Fury',
        year: 1929,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'william-faulkner-the-sound-and-the-fury',
      },
      {
        author: 'Gustave Flaubert',
        country: 'France',
        photos: [
          {
            url: 'images/madame-bovary.jpg',
            order: 0,
          },
        ],
        language: 'French',
        pages: 528,
        title: 'Madame Bovary',
        year: 1857,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'gustave-flaubert-madame-bovary',
      },
      {
        author: 'Gustave Flaubert',
        country: 'France',
        photos: [
          {
            url: 'images/l-education-sentimentale.jpg',
            order: 0,
          },
        ],
        language: 'French',
        pages: 606,
        title: 'Sentimental Education',
        year: 1869,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'gustave-flaubert-sentimental-education',
      },
      {
        author: 'Federico García Lorca',
        country: 'Spain',
        photos: [
          {
            url: 'images/gypsy-ballads.jpg',
            order: 0,
          },
        ],
        language: 'Spanish',
        pages: 218,
        title: 'Gypsy Ballads',
        year: 1928,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'federico-garcía-lorca-gypsy-ballads',
      },
      {
        author: 'Gabriel García Márquez',
        country: 'Colombia',
        photos: [
          {
            url: 'images/one-hundred-years-of-solitude.jpg',
            order: 0,
          },
        ],
        language: 'Spanish',
        pages: 417,
        title: 'One Hundred Years of Solitude',
        year: 1967,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'gabriel-garcía-márquez-one-hundred-years-of-solitude',
      },
    ],
  },
  {
    category: {
      name: 'Fantastic',
      slug: 'fiction',
      categoryId: 4,
    },
    products: [
      {
        author: 'Gabriel García Márquez',
        country: 'Colombia',
        photos: [
          {
            url: 'images/love-in-the-time-of-cholera.jpg',
            order: 0,
          },
        ],
        language: 'Spanish',
        pages: 368,
        title: 'Love in the Time of Cholera',
        year: 1985,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'gabriel-garcía-márquez-love-in-the-time-of-cholera',
      },
      {
        author: 'Johann Wolfgang von Goethe',
        country: 'Saxe-Weimar',
        photos: [
          {
            url: 'images/faust.jpg',
            order: 0,
          },
        ],
        language: 'German',
        pages: 158,
        title: 'Faust',
        year: 1832,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'johann-wolfgang-von-goethe-faust',
      },
      {
        author: 'Nikolai Gogol',
        country: 'Russia',
        photos: [
          {
            url: 'images/dead-souls.jpg',
            order: 0,
          },
        ],
        language: 'Russian',
        pages: 432,
        title: 'Dead Souls',
        year: 1842,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'nikolai-gogol-dead-souls',
      },
      {
        author: 'Günter Grass',
        country: 'Germany',
        photos: [
          {
            url: 'images/the-tin-drum.jpg',
            order: 0,
          },
        ],
        language: 'German',
        pages: 600,
        title: 'The Tin Drum',
        year: 1959,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'günter-grass-the-tin-drum',
      },
      {
        author: 'João Guimarães Rosa',
        country: 'Brazil',
        photos: [
          {
            url: 'images/the-devil-to-pay-in-the-backlands.jpg',
            order: 0,
          },
        ],
        language: 'Portuguese',
        pages: 494,
        title: 'The Devil to Pay in the Backlands',
        year: 1956,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'joão-guimarães-rosa-the-devil-to-pay-in-the-backlands',
      },
      {
        author: 'Knut Hamsun',
        country: 'Norway',
        photos: [
          {
            url: 'images/hunger.jpg',
            order: 0,
          },
        ],
        language: 'Norwegian',
        pages: 176,
        title: 'Hunger',
        year: 1890,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'knut-hamsun-hunger',
      },
      {
        author: 'Ernest Hemingway',
        country: 'United States',
        photos: [
          {
            url: 'images/the-old-man-and-the-sea.jpg',
            order: 0,
          },
        ],
        language: 'English',
        pages: 128,
        title: 'The Old Man and the Sea',
        year: 1952,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'ernest-hemingway-the-old-man-and-the-sea',
      },
      {
        author: 'Homer',
        country: 'Greece',
        photos: [
          {
            url: 'images/the-iliad-of-homer.jpg',
            order: 0,
          },
        ],
        language: 'Greek',
        pages: 608,
        title: 'Iliad',
        year: -735,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'homer-iliad',
      },
      {
        author: 'Homer',
        country: 'Greece',
        photos: [
          {
            url: 'images/the-odyssey-of-homer.jpg',
            order: 0,
          },
        ],
        language: 'Greek',
        pages: 374,
        title: 'Odyssey',
        year: -800,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: 'homer-odyssey',
      },
      {
        author: 'Henrik Ibsen',
        country: 'Norway',
        photos: [
          {
            url: 'images/a-Dolls-house.jpg',
            order: 0,
          },
        ],
        language: 'Norwegian',
        pages: 68,
        title: "A Doll's House",
        year: 1879,
        price: 10,
        currency: '$',
        stockAmount: 100,
        category: [
          'Best Sellers',
        ],
        rating: 3,
        slug: "henrik-ibsen-a-doll's-house",
      },
    ],
  },
];

export default FeaturedCategories;
