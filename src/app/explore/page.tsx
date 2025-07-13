'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArtworkCard } from '@/components/ui/artwork-card';
import { Artwork } from '@/components/lib/types';
import { connectedData } from '@/components/lib/mockData';
import { Search } from 'lucide-react';

const Explore = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [priceRange, setPriceRange] = useState<string>('all');

  // Filters
  const mediumFilters = [
    { id: 'all', label: 'All Mediums' },
    { id: 'Oil', label: 'Oil' },
    { id: 'Acrylic', label: 'Acrylic' },
    { id: 'Digital', label: 'Digital' },
    { id: 'Watercolor', label: 'Watercolor' },
    { id: 'Mixed Media', label: 'Mixed Media' },
    { id: 'Photography', label: 'Photography' },
  ];

  const priceFilters = [
    { id: 'all', label: 'All Prices' },
    { id: 'under500', label: 'Under $500' },
    { id: '500to1000', label: '$500 - $1,000' },
    { id: '1000to2500', label: '$1,000 - $2,500' },
    { id: 'over2500', label: 'Over $2,500' },
  ];

  // Simulate fetching data
  useEffect(() => {
    const { artworks } = connectedData();
    setArtworks(artworks);
    setFilteredArtworks(artworks);
  }, []);

  // Apply filters
  useEffect(() => {
    let result = [...artworks];

    // Apply medium filter
    if (activeFilter !== 'all') {
      result = result.filter((artwork) => artwork.medium === activeFilter);
    }

    // Apply price filter
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under500':
          result = result.filter((artwork) => artwork.price < 500);
          break;
        case '500to1000':
          result = result.filter(
            (artwork) => artwork.price >= 500 && artwork.price <= 1000
          );
          break;
        case '1000to2500':
          result = result.filter(
            (artwork) => artwork.price > 1000 && artwork.price <= 2500
          );
          break;
        case 'over2500':
          result = result.filter((artwork) => artwork.price > 2500);
          break;
      }
    }

    // Apply sorting
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return (
            new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
          );
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'popular':
          return b.likes - a.likes;
        default:
          return 0;
      }
    });

    setFilteredArtworks(result);
  }, [artworks, activeFilter, priceRange, sortBy]);

  return (
    <>
      {/* Hero Section */}
      <div className='bg-muted py-12'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>
            Explore Artworks
          </h1>
          <p className='text-lg text-muted-foreground max-w-2xl'>
            Discover unique pieces from talented artists around the world.
            Filter by medium, price range, or sort to find your perfect artwork.
          </p>

          {/* Search Bar */}
          <div className='mt-8 max-w-xl'>
            <div className='relative'>
              <Search
                className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground'
                size={18}
              />
              <input
                type='text'
                placeholder='Search for artworks, artists, or styles...'
                className='w-full bg-background border border-input rounded-full py-2 pl-10 pr-4'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Content */}
      <div className='container mx-auto px-4 py-10'>
        <div className='flex flex-col md:flex-row gap-6 md:items-center mb-10'>
          {/* Medium Filters */}
          <div className='flex overflow-x-auto pb-2 md:pb-0 gap-2 md:mr-4'>
            {mediumFilters.map((filter) => (
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

          <div className='flex items-center gap-2 ml-auto'>
            {/* Price Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className='w-[180px] rounded-lg'>
                <SelectValue placeholder='Select price range' />
              </SelectTrigger>
              <SelectContent>
                {priceFilters.map((filter) => (
                  <SelectItem key={filter.id} value={filter.id}>
                    {filter.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort Options */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className='w-[180px] rounded-lg'>
                <SelectValue placeholder='Sort by' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='newest'>Newest First</SelectItem>
                <SelectItem value='price-low'>Price: Low to High</SelectItem>
                <SelectItem value='price-high'>Price: High to Low</SelectItem>
                <SelectItem value='popular'>Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className='mb-8'>
          <p className='text-muted-foreground'>
            Showing {filteredArtworks.length}{' '}
            {filteredArtworks.length === 1 ? 'artwork' : 'artworks'}
          </p>
        </div>

        {/* Artwork Grid */}
        {filteredArtworks.length > 0 ? (
          <div className='art-grid'>
            {filteredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center py-16'>
            <p className='text-xl text-muted-foreground mb-4'>
              No artworks match your filters
            </p>
            <Button
              variant='outline'
              onClick={() => {
                setActiveFilter('all');
                setPriceRange('all');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Explore;
