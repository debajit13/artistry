import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, User, Menu, X, Upload, Heart, LogIn } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import Link from 'next/link';

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className='sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b'>
      <div className='container mx-auto px-4 flex items-center justify-between h-16'>
        <div className='flex items-center'>
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-primary rounded-full'></div>
            <span className='text-2xl font-bold text-gradient'>Artistry</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className='hidden md:flex items-center space-x-8'>
          <Link
            href='/explore'
            className='text-foreground hover:text-primary transition-colors'
          >
            Explore
          </Link>
          <Link
            href='/artists'
            className='text-foreground hover:text-primary transition-colors'
          >
            Artists
          </Link>
          <Link
            href='/about'
            className='text-foreground hover:text-primary transition-colors'
          >
            About
          </Link>
        </div>

        <div className='hidden md:flex items-center space-x-4'>
          <Button variant='outline' size='icon' className='rounded-full'>
            <Search size={20} />
          </Button>

          {isLoggedIn ? (
            <>
              <Button variant='outline' size='icon' className='rounded-full'>
                <Heart size={20} />
              </Button>
              <Link href='/upload'>
                <Button className='rounded-full'>
                  <Upload size={18} className='mr-2' />
                  Upload Art
                </Button>
              </Link>
              <Link href='/profile'>
                <Button variant='ghost' size='icon' className='rounded-full'>
                  <User size={20} />
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href='/login'>
                <Button variant='ghost' className='rounded-full'>
                  <LogIn size={18} className='mr-2' />
                  Log In
                </Button>
              </Link>
              <Link href='/signup'>
                <Button className='rounded-full'>Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu */}
        <div className='md:hidden flex items-center'>
          <Button variant='outline' size='icon' className='rounded-full mr-2'>
            <Search size={20} />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon' className='rounded-full'>
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className='flex flex-col h-full'>
                <div className='flex items-center justify-between mb-8'>
                  <Link href='/' className='flex items-center space-x-2'>
                    <div className='w-8 h-8 bg-primary rounded-full'></div>
                    <span className='text-xl font-bold text-gradient'>
                      Artistry
                    </span>
                  </Link>
                  <SheetClose asChild>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='rounded-full'
                    >
                      <X size={20} />
                    </Button>
                  </SheetClose>
                </div>

                <div className='flex flex-col space-y-6'>
                  <SheetClose asChild>
                    <Link href='/explore' className='text-lg font-medium'>
                      Explore
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href='/artists' className='text-lg font-medium'>
                      Artists
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href='/about' className='text-lg font-medium'>
                      About
                    </Link>
                  </SheetClose>

                  <div className='h-px bg-border my-4'></div>

                  {isLoggedIn ? (
                    <>
                      <SheetClose asChild>
                        <Link href='/favorites' className='text-lg font-medium'>
                          Favorites
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href='/upload' className='text-lg font-medium'>
                          Upload Art
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href='/profile' className='text-lg font-medium'>
                          Profile
                        </Link>
                      </SheetClose>
                    </>
                  ) : (
                    <>
                      <SheetClose asChild>
                        <Link href='/login' className='text-lg font-medium'>
                          Log In
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href='/signup' className='text-lg font-medium'>
                          Sign Up
                        </Link>
                      </SheetClose>
                    </>
                  )}
                </div>

                <div className='mt-auto mb-8'>
                  <p className='text-sm text-muted-foreground'>
                    © 2024 Artistry. All rights reserved.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
