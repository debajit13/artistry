import Link from 'next/link';

export function Footer() {
  return (
    <footer className='border-t mt-16'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='flex flex-col space-y-4'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-primary rounded-full'></div>
              <span className='text-xl font-bold text-gradient'>Artistry</span>
            </Link>
            <p className='text-sm text-muted-foreground'>
              Discover and collect unique artworks from emerging and established
              artists around the world.
            </p>
          </div>

          <div className='flex flex-col space-y-3'>
            <h3 className='text-lg font-medium'>Discover</h3>
            <Link
              href='/explore'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Explore Art
            </Link>
            <Link
              href='/artists'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Artists
            </Link>
            <Link
              href='/collections'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Collections
            </Link>
            <Link
              href='/auctions'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Upcoming Releases
            </Link>
          </div>

          <div className='flex flex-col space-y-3'>
            <h3 className='text-lg font-medium'>Join Us</h3>
            <Link
              href='/signup'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Create Account
            </Link>
            <Link
              href='/artist-signup'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Become an Artist
            </Link>
            <Link
              href='/support'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Support
            </Link>
            <Link
              href='/faq'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              FAQ
            </Link>
          </div>

          <div className='flex flex-col space-y-3'>
            <h3 className='text-lg font-medium'>Legal</h3>
            <Link
              href='/terms'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Terms of Service
            </Link>
            <Link
              href='/privacy'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Privacy Policy
            </Link>
            <Link
              href='/copyright'
              className='text-sm text-muted-foreground hover:text-foreground'
            >
              Copyright Policy
            </Link>
          </div>
        </div>

        <div className='border-t mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm text-muted-foreground'>
              © 2023 Artistry. All rights reserved.
            </p>
            <div className='flex space-x-4 mt-4 md:mt-0'>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                </svg>
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                  <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
                </svg>
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
