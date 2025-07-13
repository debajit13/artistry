import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArtworkCard } from '@/components/ui/artwork-card';
import { Artwork } from '@/components/lib/types';

interface FeaturedArtworksProps {
  artworks: Artwork[];
}

export function FeaturedArtworks({ artworks }: FeaturedArtworksProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'Oil', label: 'Oil Painting' },
    { id: 'Digital', label: 'Digital Art' },
    { id: 'Mixed Media', label: 'Mixed Media' },
  ];

  const filteredArtworks =
    activeFilter === 'all'
      ? artworks
      : artworks.filter((artwork) => artwork.medium === activeFilter);

  return (
    <section className='container mx-auto px-4 py-16'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8'>
        <div>
          <h2 className='text-3xl font-bold mb-2'>Featured Artworks</h2>
          <p className='text-muted-foreground'>
            Explore our curated collection of extraordinary pieces
          </p>
        </div>

        <div className='flex space-x-2 mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0'>
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              size='sm'
              onClick={() => setActiveFilter(filter.id)}
              className='rounded-full whitespace-nowrap'
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      <div className='art-grid'>
        {filteredArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </section>
  );
}
