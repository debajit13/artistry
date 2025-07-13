import { Artist } from '@/components/lib/types';
import { Button } from '@/components/ui/button';
import { ArtistCard } from '@/components/ui/artist-card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FeaturedArtistsProps {
  artists: Artist[];
}

export function FeaturedArtists({ artists }: FeaturedArtistsProps) {
  return (
    <section className='container mx-auto px-4 py-16'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8'>
        <div>
          <h2 className='text-3xl font-bold mb-2'>Featured Artists</h2>
          <p className='text-muted-foreground'>
            Meet the talented creators behind the art
          </p>
        </div>

        <Link href='/artists'>
          <Button variant='ghost' className='mt-4 md:mt-0 group'>
            View All Artists
            <ArrowRight
              size={16}
              className='ml-2 group-hover:translate-x-1 transition-transform'
            />
          </Button>
        </Link>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </section>
  );
}
