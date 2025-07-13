import { Heart } from 'lucide-react';
import { Artwork } from '@/components/lib/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ArtworkCardProps {
  artwork: Artwork;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <div className='art-card group relative h-full'>
      <div className='relative aspect-[3/4] overflow-hidden rounded-2xl'>
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-href-t from-black/60 href-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        <div className='absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
          <Link
            href={`/artists/${artwork.artistId}`}
            className='text-white/90 text-sm hover:text-white transition-colors'
          >
            {artwork.artist?.name}
          </Link>
        </div>
      </div>
      <div className='p-3 flex flex-col space-y-2'>
        <div className='flex items-start justify-between'>
          <Link href={`/artworks/${artwork.id}`}>
            <h3 className='font-semibold line-clamp-1 hover:text-primary transition-colors'>
              {artwork.title}
            </h3>
          </Link>
          <Button variant='ghost' size='icon' className='h-8 w-8 rounded-full'>
            <Heart size={16} />
          </Button>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-muted-foreground'>
            {artwork.medium}
          </span>
          <span className='font-medium'>${artwork.price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
