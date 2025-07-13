import { Button } from '@/components/ui/button';
import { Palette, Search } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className='relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3'></div>
      <div className='absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'></div>

      <div className='container mx-auto px-4 py-16 md:py-24 relative z-10'>
        <div className='flex flex-col items-center text-center max-w-3xl mx-auto'>
          <div className='inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6'>
            <Palette size={14} className='mr-1' />
            <span>Discover unique artworks from emerging artists</span>
          </div>

          <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tighter'>
            <span className='text-gradient'>Discover</span> and{' '}
            <span className='text-gradient'>Collect</span> Extraordinary
            Artworks
          </h1>

          <p className='text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl'>
            Artistry connects art enthusiasts with talented artists from around
            the world. Explore our curated collection of original pieces across
            various mediums and styles.
          </p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <Link href='/explore'>
              <Button size='lg' className='rounded-full px-8'>
                Explore Artworks
              </Button>
            </Link>
            <Link href='/signup'>
              <Button size='lg' variant='outline' className='rounded-full px-8'>
                Join as Artist
              </Button>
            </Link>
          </div>

          <div className='mt-16 md:mt-24 glass-panel py-6 px-8 max-w-lg w-full'>
            <div className='flex items-center'>
              <Search size={18} className='text-muted-foreground mr-3' />
              <input
                type='text'
                placeholder='Search for artists, styles or mediums...'
                className='bg-transparent flex-1 outline-none text-foreground placeholder:text-muted-foreground'
              />
              <Button size='sm' className='rounded-full'>
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
