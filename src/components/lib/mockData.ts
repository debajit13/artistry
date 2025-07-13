import { Artist, Artwork, User, ArtMedium } from './types';

// Mock Artists
export const artists: Artist[] = [
  {
    id: '1',
    name: 'Luna Wirtz',
    username: 'cosmicbrush',
    profileImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'Abstract expressionist with a focus on cosmic themes and vibrant colors.',
    location: 'Berlin, Germany',
    website: 'cosmicbrush.art',
    joinedDate: '2023-01-15',
  },
  {
    id: '2',
    name: 'Miguel Santiago',
    username: 'urbanmuse',
    profileImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    bio: 'Street artist exploring the intersection of urban life and nature.',
    location: 'Barcelona, Spain',
    joinedDate: '2022-11-03',
  },
  {
    id: '3',
    name: 'Zara Chen',
    username: 'digitalzara',
    profileImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    bio: 'Digital artist creating surreal landscapes and futuristic portraits.',
    location: 'Seoul, South Korea',
    website: 'zara.digital',
    joinedDate: '2023-03-22',
  },
  {
    id: '4',
    name: 'Theo Williams',
    username: 'soulcanvas',
    profileImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    bio: 'Self-taught painter specializing in emotive portraiture and bold colors.',
    location: 'New Orleans, USA',
    joinedDate: '2022-08-17',
  },
];

// Mock Artworks
export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Cosmic Harmony',
    artistId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d',
    description:
      'An exploration of celestial bodies and their dance through the cosmos.',
    medium: 'Oil' as ArtMedium,
    dimensions: {
      width: 120,
      height: 80,
      unit: 'cm',
    },
    price: 2500,
    currency: 'USD',
    dateCreated: '2023-02-15',
    datePosted: '2023-02-20',
    tags: ['abstract', 'space', 'cosmos', 'vibrant'],
    likes: 156,
    isForSale: true,
  },
  {
    id: '2',
    title: 'Urban Jungle',
    artistId: '2',
    imageUrl: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07',
    description:
      'The juxtaposition of concrete cityscape with wild, organic forms.',
    medium: 'Acrylic' as ArtMedium,
    dimensions: {
      width: 100,
      height: 150,
      unit: 'cm',
    },
    price: 1800,
    currency: 'EUR',
    dateCreated: '2023-01-10',
    datePosted: '2023-01-15',
    tags: ['urban', 'nature', 'contrast', 'street art'],
    likes: 89,
    isForSale: true,
  },
  {
    id: '3',
    title: 'Digital Dreamscape',
    artistId: '3',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5',
    description:
      'A surreal landscape blending organic forms with digital artifacts.',
    medium: 'Digital' as ArtMedium,
    dimensions: {
      width: 30,
      height: 40,
      unit: 'in',
    },
    price: 750,
    currency: 'USD',
    dateCreated: '2023-03-25',
    datePosted: '2023-03-27',
    tags: ['digital', 'surreal', 'landscape', 'futuristic'],
    likes: 215,
    isForSale: true,
  },
  {
    id: '4',
    title: 'Soul Mirror',
    artistId: '4',
    imageUrl: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5',
    description:
      'An expressive portrait exploring the depths of human emotion.',
    medium: 'Oil' as ArtMedium,
    dimensions: {
      width: 90,
      height: 120,
      unit: 'cm',
    },
    price: 3200,
    currency: 'USD',
    dateCreated: '2023-01-05',
    datePosted: '2023-01-12',
    tags: ['portrait', 'expressive', 'emotional', 'bold'],
    likes: 178,
    isForSale: true,
  },
  {
    id: '5',
    title: 'Neon Nostalgia',
    artistId: '3',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
    description: 'A retro-futuristic cityscape bathed in neon lights.',
    medium: 'Digital' as ArtMedium,
    dimensions: {
      width: 36,
      height: 24,
      unit: 'in',
    },
    price: 850,
    currency: 'USD',
    dateCreated: '2023-04-10',
    datePosted: '2023-04-12',
    tags: ['digital', 'neon', 'retro', 'cityscape'],
    likes: 132,
    isForSale: true,
  },
  {
    id: '6',
    title: 'Concrete Garden',
    artistId: '2',
    imageUrl: 'https://images.unsplash.com/photo-1605106702734-205df224ecce',
    description: 'Flora breaking through urban decay, symbolizing resilience.',
    medium: 'Mixed Media' as ArtMedium,
    dimensions: {
      width: 80,
      height: 120,
      unit: 'cm',
    },
    price: 2200,
    currency: 'EUR',
    dateCreated: '2023-02-28',
    datePosted: '2023-03-05',
    tags: ['mixed media', 'urban', 'flora', 'decay'],
    likes: 94,
    isForSale: true,
  },
  {
    id: '7',
    title: 'Stardust Memories',
    artistId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab',
    description: 'Abstract representation of cosmic dust forming new worlds.',
    medium: 'Oil' as ArtMedium,
    dimensions: {
      width: 100,
      height: 100,
      unit: 'cm',
    },
    price: 2800,
    currency: 'USD',
    dateCreated: '2023-03-15',
    datePosted: '2023-03-18',
    tags: ['abstract', 'cosmos', 'stardust', 'formation'],
    likes: 167,
    isForSale: true,
  },
  {
    id: '8',
    title: 'Emotional Spectrum',
    artistId: '4',
    imageUrl: 'https://images.unsplash.com/photo-1549887534-1541e9326642',
    description:
      'A portrait series exploring the full range of human emotions.',
    medium: 'Acrylic' as ArtMedium,
    dimensions: {
      width: 110,
      height: 85,
      unit: 'cm',
    },
    price: 2900,
    currency: 'USD',
    dateCreated: '2023-02-01',
    datePosted: '2023-02-10',
    tags: ['portrait', 'emotions', 'series', 'expressive'],
    likes: 145,
    isForSale: true,
  },
];

// Connect artists to their artworks
export const connectedData = () => {
  const connectedArtworks = artworks.map((artwork) => {
    const artist = artists.find((a) => a.id === artwork.artistId);
    return {
      ...artwork,
      artist,
    };
  });

  const connectedArtists = artists.map((artist) => {
    const artistWorks = connectedArtworks.filter(
      (a) => a.artistId === artist.id
    );
    return {
      ...artist,
      artworks: artistWorks,
    };
  });

  return {
    artists: connectedArtists,
    artworks: connectedArtworks,
  };
};

// Mock Users
export const users: User[] = [
  {
    id: '1',
    username: 'artlover123',
    name: 'Jamie Smith',
    email: 'jamie@example.com',
    profileImage:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    isArtist: false,
    favorites: ['1', '3', '5'],
  },
  {
    id: '2',
    username: 'cosmicbrush',
    name: 'Luna Wirtz',
    email: 'luna@example.com',
    profileImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    isArtist: true,
    artistProfile: artists[0],
    favorites: ['2', '4'],
  },
  {
    id: '3',
    username: 'gallery_explorer',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    profileImage:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    isArtist: false,
    favorites: ['6', '7', '8'],
  },
];
