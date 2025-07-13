// Define TypeScript types for our art gallery app

export type ArtMedium =
  | 'Oil'
  | 'Acrylic'
  | 'Watercolor'
  | 'Digital'
  | 'Mixed Media'
  | 'Sculpture'
  | 'Photography'
  | 'Illustration'
  | 'Other';

export interface Artist {
  id: string;
  name: string;
  username: string;
  profileImage: string;
  bio: string;
  location?: string;
  website?: string;
  joinedDate: string;
  artworks?: Artwork[];
}

export interface Artwork {
  id: string;
  title: string;
  artistId: string;
  artist?: Artist;
  imageUrl: string;
  description: string;
  medium: ArtMedium;
  dimensions: {
    width: number;
    height: number;
    unit: 'cm' | 'in';
  };
  price: number;
  currency: string;
  dateCreated: string;
  datePosted: string;
  tags: string[];
  likes: number;
  isForSale: boolean;
}

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  profileImage: string;
  isArtist: boolean;
  artistProfile?: Artist;
  favorites: string[]; // Array of artwork IDs
}
