import { Button } from '@/components/ui/button';
import { ArrowRight, Satellite, Radio, Cloud, Network, Shield, Settings } from 'lucide-react';
import fiberImage from '@/assets/fiber-optic.jpg';
import controlRoomImage from '@/assets/control-room.jpeg';
import cloudImage from '@/assets/cloud-datacenter.jpeg';

const Services = () => {
  const services = [
    {
      icon: Satellite,
      title: 'Satellite Services',
      description: 'Global satellite capacity, teleport services, and IoT connectivity solutions.',
      image: fiberImage,
      features: ['C-band & Ku-band capacity', 'Global coverage', 'Redundant uplinks', 'Custom solutions']
    },
    {
      icon: Radio,
      title: 'Broadcast Solutions',
      description: 'End-to-end broadcast services including distribution, playout, and creative services.',
      image: controlRoomImage,
      features: ['HD/4K distribution', 'Live event coverage', 'Content management', 'Global reach']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for media processing, storage, and distribution.',
      image: cloudImage,
      features: ['Auto-scaling', 'CDN integration', 'Security compliance', '24/7 monitoring']
    },
    {
      icon: Network,
      title: 'Network Services',
      description: 'High-performance fiber and IP networks for reliable connectivity.',
      image: fiberImage,
      features: ['Fiber backbone', 'IP transit', 'MPLS networks', 'Bandwidth on demand']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions for media and enterprise applications.',
      image: cloudImage,
      features: ['End-to-end encryption', 'Secure transport', 'Compliance ready', 'Threat monitoring']
    },
    {
      icon: Settings,
      title: 'Asset Management',
      description: 'Digital asset management and workflow automation for media organizations.',
      image: controlRoomImage,
      features: ['Automated workflows', 'Content library', 'Metadata management', 'API integration']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-tech-blue/10 text-tech-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive Media & 
            <span className="text-primary block">Technology Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From satellite services to cloud infrastructure, we provide the complete technology stack 
            for modern media and enterprise communications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-primary/20 backdrop-blur-sm p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="group/btn">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="tech" size="xl">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;