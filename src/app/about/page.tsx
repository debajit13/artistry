import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Users, Award, Heart, Sparkles, Globe } from 'lucide-react';
import Link from 'next/link';

const About = () => {
  const stats = [
    { icon: Users, label: 'Artists', value: '2,500+' },
    { icon: Palette, label: 'Artworks', value: '15,000+' },
    { icon: Globe, label: 'Countries', value: '80+' },
    { icon: Heart, label: 'Art Lovers', value: '50,000+' },
  ];

  const features = [
    {
      icon: Palette,
      title: 'Discover Amazing Art',
      description:
        'Explore thousands of unique artworks from talented artists worldwide',
    },
    {
      icon: Users,
      title: 'Connect with Artists',
      description:
        'Follow your favorite artists and discover new creative voices',
    },
    {
      icon: Award,
      title: 'Support Creators',
      description:
        'Purchase original artworks directly from artists and support their journey',
    },
    {
      icon: Sparkles,
      title: 'Funky Experience',
      description:
        'Enjoy a vibrant, interactive platform designed for art enthusiasts',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 funky-gradient opacity-20'></div>
        <div className='relative container mx-auto px-4 py-24'>
          <div className='text-center max-w-4xl mx-auto'>
            <div className='floating mb-8'>
              <Palette size={80} className='mx-auto text-primary' />
            </div>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Where <span className='text-gradient'>Creativity</span> Meets{' '}
              <span className='text-gradient'>Community</span>
            </h1>
            <p className='text-xl text-muted-foreground mb-8 leading-relaxed'>
              Artisty is the ultimate destination for art lovers, collectors,
              and creators. We're building a vibrant community where artistic
              expression flourishes and meaningful connections are formed
              through the power of visual storytelling.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Button size='lg' className='rounded-full px-8'>
                Start Exploring
              </Button>
              <Button variant='outline' size='lg' className='rounded-full px-8'>
                Join as Artist
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='py-16 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='glass-panel p-6 rounded-2xl hover:scale-105 transition-transform duration-300'>
                  <stat.icon size={40} className='mx-auto text-primary mb-4' />
                  <div className='text-3xl font-bold text-gradient mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-muted-foreground'>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Why Choose <span className='text-gradient'>Artistry</span>?
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              We're more than just a marketplace - we're a creative ecosystem
              designed to inspire, connect, and empower.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className='art-card border-2 border-primary/20 hover:border-primary/50'
              >
                <CardContent className='p-8 text-center'>
                  <div className='w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center'>
                    <feature.icon size={32} className='text-primary' />
                  </div>
                  <h3 className='text-xl font-bold mb-4'>{feature.title}</h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className='py-20 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Our <span className='text-gradient'>Mission</span>
              </h2>
              <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                We believe that art has the power to transform lives, spark
                conversations, and build bridges between cultures. Our mission
                is to democratize access to art while ensuring that creators are
                fairly compensated for their work.
              </p>
              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                Whether you're a seasoned collector, an emerging artist, or
                someone who simply appreciates beautiful things, ArtHub is your
                gateway to a world of endless creative possibilities.
              </p>
              <Button size='lg' className='rounded-full'>
                Learn More About Us
              </Button>
            </div>
            <div className='relative'>
              <div className='aspect-square rounded-3xl bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 p-8'>
                <div className='w-full h-full rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center'>
                  <div className='text-center'>
                    <Sparkles
                      size={80}
                      className='mx-auto text-primary mb-4 spin-slow'
                    />
                    <h3 className='text-2xl font-bold text-gradient'>
                      Creativity Unleashed
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='glass-panel rounded-3xl p-12 text-center relative overflow-hidden'>
            <div className='absolute inset-0 funky-gradient opacity-10'></div>
            <div className='relative'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Ready to <span className='text-gradient'>Dive In</span>?
              </h2>
              <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
                Join thousands of art enthusiasts who have already discovered
                their next favorite piece. Your artistic journey starts here.
              </p>
              <div className='flex flex-wrap justify-center gap-4'>
                <Link href={'/explore'}>
                  <Button size='lg' className='rounded-full px-8'>
                    Explore Artworks
                  </Button>
                </Link>
                <Button
                  variant='outline'
                  size='lg'
                  className='rounded-full px-8'
                >
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
