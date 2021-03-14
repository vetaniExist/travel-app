export interface ICountry {
  name: string;
  capital: string;
  mainImage: string;
  // info: string;
  // sights: ISights[];
  // video: IVideo[];
  // map: any;
}

interface ISights {
  id: string;
  images: any;
  title: string;
  description: string;
}

interface IVideo {
  id: string;
  video: any;
}

export const storeExample: ICountry[] = [
  { name: 'Italy',
    capital: 'Rome',
    mainImage: 'https://picsum.photos/id/1018/1000/600/',
    // info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    // 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    // 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
    // 'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
    // 'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ' +
    // 'occaecat cupidatat non proident, ' +
    // 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  { name: 'France',
    capital: 'Paris',
    mainImage: 'https://picsum.photos/id/1018/1000/600/',
  },
  { name: 'France',
    capital: 'Paris',
    mainImage: 'https://picsum.photos/id/1018/1000/600/',
  },
  { name: 'France',
    capital: 'Paris',
    mainImage: 'https://picsum.photos/id/1018/1000/600/',
  },
  { name: 'France',
    capital: 'Paris',
    mainImage: 'https://picsum.photos/id/1018/1000/600/',
  },
  { name: 'France',
    capital: 'Paris',
    mainImage: 'https://picsum.photos/id/1018/1000/600/',
  },
  { name: 'France',
    capital: 'Paris',
    mainImage: 'https://picsum.photos/id/1018/1000/600/',
  },
  { name: 'France',
    capital: 'Paris',
    mainImage: 'https://picsum.photos/id/1018/1000/600/',
  },
  { name: 'France',
    capital: 'Paris',
    mainImage: 'https://picsum.photos/id/1018/1000/600/',
  },
  { name: 'France',
    capital: 'Paris',
    mainImage: 'https://picsum.photos/id/1018/1000/600/',
  },
  { name: 'France',
    capital: 'Paris',
    mainImage: 'https://picsum.photos/id/1018/1000/600/',
  },
  { name: 'France',
    capital: 'Paris',
    mainImage: 'https://picsum.photos/id/1018/1000/600/',
  },
];
