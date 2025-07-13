'use client';
import { useState, useEffect } from 'react';
import { ArtistCard } from '@/components/ui/artist-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Users, Palette, Award, MapPin } from 'lucide-react';
import { connectedData } from '@/components/lib/mockData';
import { Artist } from '@/components/lib/types';

const Artists = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    const { artists: mockArtists } = connectedData();
    setArtists(mockArtists);
    setFilteredArtists(mockArtists);
  }, []);

  useEffect(() => {
    let filtered = artists;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (artist) =>
          artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.bio.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category (could be expanded based on artist specialties)
    if (selectedFilter !== 'all') {
      // For now, we'll just show all since we don't have specific categories
      // This can be expanded when you add categories to your Artist type
    }

    setFilteredArtists(filtered);
  }, [searchTerm, selectedFilter, artists]);

  const filterOptions = [
    { value: 'all', label: 'All Artists' },
    { value: 'featured', label: 'Featured' },
    { value: 'new', label: 'New Artists' },
    { value: 'verified', label: 'Verified' },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        <div className='h-60 relative'>
          <div className='absolute inset-0 funky-gradient'></div>
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>

          {/* Floating decorative elements */}
          <div className='absolute top-16 left-16 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm floating'></div>
          <div
            className='absolute top-32 right-24 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm floating'
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className='absolute bottom-16 left-1/3 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm floating'
            style={{ animationDelay: '4s' }}
          ></div>
        </div>

        <div className='container mx-auto px-4'>
          <div className='relative -mt-32 mb-8 text-center'>
            <div className='glass-panel rounded-3xl p-8 max-w-4xl mx-auto'>
              <div className='mb-6'>
                <h1 className='text-4xl md:text-6xl font-bold mb-4 text-gradient'>
                  Discover Artists
                </h1>
                <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                  Meet the talented creators behind extraordinary artworks from
                  around the world
                </p>
              </div>

              <div className='flex flex-wrap justify-center gap-4 mb-8'>
                <Badge variant='secondary' className='rounded-full px-4 py-2'>
                  <Users size={16} className='mr-2' />
                  {artists.length}+ Artists
                </Badge>
                <Badge variant='outline' className='rounded-full px-4 py-2'>
                  <Palette size={16} className='mr-2' />
                  Multiple Mediums
                </Badge>
                <Badge variant='outline' className='rounded-full px-4 py-2'>
                  <Award size={16} className='mr-2' />
                  Verified Creators
                </Badge>
                <Badge variant='outline' className='rounded-full px-4 py-2'>
                  <MapPin size={16} className='mr-2' />
                  Worldwide
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className='container mx-auto px-4 py-8'>
        <div className='glass-panel rounded-2xl p-6 mb-8'>
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            {/* Search */}
            <div className='relative flex-1'>
              <Search
                className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground'
                size={20}
              />
              <input
                type='text'
                placeholder='Search artists by name, username, or bio...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all'
              />
            </div>

            {/* Filter */}
            <div className='flex items-center gap-2'>
              <Filter size={20} className='text-muted-foreground' />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className='px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all'
              >
                {filterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h2 className='text-2xl font-bold mb-2'>
              {filteredArtists.length} Artist
              {filteredArtists.length !== 1 ? 's' : ''} Found
            </h2>
            <p className='text-muted-foreground'>
              {searchTerm
                ? `Results for "${searchTerm}"`
                : 'Showing all artists'}
            </p>
          </div>
        </div>

        {/* Artists Grid */}
        {filteredArtists.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filteredArtists.map((artist) => (
              <div key={artist.id} className='art-card hover-scale'>
                <ArtistCard artist={artist} />
              </div>
            ))}
          </div>
        ) : (
          <div className='text-center py-20'>
            <div className='glass-panel rounded-3xl p-12 max-w-md mx-auto'>
              <div className='w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center'>
                <Users size={40} className='text-muted-foreground' />
              </div>
              <h3 className='text-2xl font-bold mb-4'>No Artists Found</h3>
              <p className='text-lg text-muted-foreground mb-6'>
                {searchTerm
                  ? `No artists match your search for "${searchTerm}"`
                  : 'No artists available at the moment'}
              </p>
              {searchTerm && (
                <Button
                  onClick={() => setSearchTerm('')}
                  className='rounded-full px-6'
                >
                  Clear Search
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className='container mx-auto px-4 py-16'>
        <div className='glass-panel rounded-3xl p-12 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gradient'>
            Are You an Artist?
          </h2>
          <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Join our community of talented artists and showcase your work to art
            lovers worldwide
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Button size='lg' className='rounded-full px-8 hover-scale'>
              Create Artist Profile
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='rounded-full px-8 hover-scale'
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artists;
