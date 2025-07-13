import { Button } from '@/components/ui/button';
import { Palette, User, Upload } from 'lucide-react';
import Link from 'next/link';

export function JoinCommunity() {
  return (
    <section className='container mx-auto px-4 py-16'>
      <div className='py-16 px-8 rounded-3xl funky-gradient text-white'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Join Our Growing Art Community
          </h2>
          <p className='text-lg mb-10 text-white/90'>
            Connect with fellow art enthusiasts, showcase your collection, or
            start selling your own creations.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
            <div className='bg-white/20 backdrop-blur-sm p-6 rounded-xl'>
              <div className='bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto'>
                <Palette size={24} />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Discover Art</h3>
              <p className='text-sm text-white/80'>
                Explore unique pieces from emerging and established artists
                worldwide
              </p>
            </div>

            <div className='bg-white/20 backdrop-blur-sm p-6 rounded-xl'>
              <div className='bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto'>
                <User size={24} />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Create Profile</h3>
              <p className='text-sm text-white/80'>
                Build your collection, follow artists, and get personalized
                recommendations
              </p>
            </div>

            <div className='bg-white/20 backdrop-blur-sm p-6 rounded-xl'>
              <div className='bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto'>
                <Upload size={24} />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Sell Artwork</h3>
              <p className='text-sm text-white/80'>
                Showcase your talent and sell directly href art enthusiasts
                around the globe
              </p>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link href='/signup'>
              <Button
                size='lg'
                className='bg-white text-primary hover:bg-white/90 rounded-full px-8'
              >
                Sign Up
              </Button>
            </Link>
            <Link href='/about'>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-black hover:bg-white/10 rounded-full px-8'
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
