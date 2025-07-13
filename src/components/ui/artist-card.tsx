import { Artist } from '@/components/lib/types';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  const initials = artist.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className='flex flex-col items-center p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/50'>
      <Avatar className='h-24 w-24 mb-4 border-2 border-primary/30'>
        <AvatarImage src={artist.profileImage} alt={artist.name} />
        <AvatarFallback className='text-lg'>{initials}</AvatarFallback>
      </Avatar>
      <Link href={`/artists/${artist.id}`}>
        <h3 className='font-semibold text-lg hover:text-primary transition-colors'>
          {artist.name}
        </h3>
      </Link>
      <p className='text-sm text-muted-foreground mb-2'>@{artist.username}</p>
      <p className='text-sm text-center mb-4 line-clamp-2'>{artist.bio}</p>
      <Link href={`/artists/${artist.id}`}>
        <Button variant='outline' size='sm' className='rounded-full'>
          View Profile
        </Button>
      </Link>
    </div>
  );
}
