'use client';
import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedArtworks } from '@/components/sections/FeaturedArtworks';
import { FeaturedArtists } from '@/components/sections/FeaturedArtists';
import { JoinCommunity } from '@/components/sections/JoinCommunity';
import { connectedData } from '@/components/lib/mockData';

export default function Home() {
  const [data, setData] = useState<any>({
    artists: [],
    artworks: [],
  });

  // Simulate data fetching
  useEffect(() => {
    // In a real app, this would be an API call
    const { artists, artworks } = connectedData();
    setData({ artists, artworks });
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedArtworks artworks={data.artworks} />
      <FeaturedArtists artists={data.artists} />
      <JoinCommunity />
    </>
  );
}
