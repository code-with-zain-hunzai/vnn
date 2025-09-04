import { Satellite, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        'Satellite Services',
        'Broadcast Solutions',
        'Cloud Infrastructure',
        'Network Services',
        'Enterprise Security',
        'Asset Management'
      ]
    },
    {
      title: 'Solutions',
      links: [
        'Broadcast',
        'Sports',
        'Telecom',
        'Enterprise',
        'Maritime/Aviation',
        'Government/Defence'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Careers',
        'Partners',
        'Case Studies',
        'News & Insights',
        'Contact'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Documentation',
        'Support Center',
        'Compliance',
        'Security',
        'API Reference',
        'Downloads'
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Satellite className="h-8 w-8 text-primary mr-3" />
              <div className="text-2xl font-heading font-bold">
                <span className="text-primary">Video Vision</span> Media
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Global leader in satellite services, broadcast solutions, and media technology. 
              Connecting the world through advanced communication infrastructure.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-background/80">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                info@videovisionmedia.com
              </div>
              <div className="flex items-center text-background/80">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-background/80">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                Silicon Valley, CA
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-heading font-semibold text-background mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-background/70 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-background/70 mb-4 lg:mb-0">
              © {currentYear} Video Vision Media. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center space-x-4 ml-6">
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;