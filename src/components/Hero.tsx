import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import satellite from '@/assets/satellite.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={satellite} 
          alt="Satellite communication facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-4xl">
          <div className="fade-up">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Global Satellite & Media Technology
            </div>
          </div>

          <div className="fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              Connecting the World Through 
              <span className="text-primary block">Advanced Media Technology</span>
            </h1>
          </div>

          <div className="fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Video Vision Media delivers cutting-edge satellite services, broadcast solutions, 
              and enterprise connectivity for telecom, government, and commercial sectors worldwide.
            </p>
          </div>

          <div className="fade-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline-white" size="xl">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="fade-up grid grid-cols-3 gap-8 mt-16 max-w-2xl" style={{ animationDelay: '0.4s' }}>
            <div>
              <div className="text-3xl font-heading font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Global Support</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;