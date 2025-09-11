const satelliteImage = '/satellite.png';
import { ContentSection, BulletList, ContentText, SubSection } from '@/pages/components/ContentSection';

export function DistributionContent() {
  return (
    <div className="space-y-8">
      <ContentSection 
        title="Distribution" 
        image={satelliteImage}
        imageAlt="Professional satellite distribution equipment"
      >
        <div className="space-y-6">
          <SubSection title="Why Choose Our Distribution Services">
            <BulletList items={[
              "99.9% uptime with 24/7 network monitoring.",
              "Access to global satellite, fiber, and IP infrastructure.",
              "Proven expertise in sports, live events, and broadcast networks.",
              "Flexible delivery across broadcast, OTT, and hybrid platforms.",
              "End-to-end service — from encoding to last-mile distribution."
            ]} />
          </SubSection>

          <SubSection title="Distribution Services">
            <ContentText>
              At Video Vision Media, we ensure your content is delivered with speed, 
              reliability, and global reach. Whether through satellite, fiber, IP, or OTT 
              platforms, our distribution solutions guarantee that your audiences 
              receive high-quality content — anywhere in the world, on any device.
            </ContentText>
          </SubSection>
        </div>
      </ContentSection>

      <SubSection title="Fiber & IP Distribution Networks">
        <ContentText>
          Our managed fiber and IP backbone connects major broadcast hubs, ensuring low-latency, high-capacity delivery of 
          live and on-demand content. From contribution feeds to multi-region distribution, we deliver content with speed, 
          security, and carrier-grade performance.
        </ContentText>
      </SubSection>

      <SubSection title="Broadcast Contribution Services">
        <ContentText>
          From sports events to breaking news, we specialize in contribution feeds and remote integration. Our solutions cover 
          DSNG uplinks, IP contribution, and global distribution of live feeds—delivering your content where it's needed, with 
          broadcast-grade quality and ultra-low latency.
        </ContentText>
      </SubSection>

      <SubSection title="Satellite Distribution">
        <ContentText>
          We provide global uplink, downlink, and turnaround services for broadcasters, media networks, and live event 
          organizers. With access to leading GEO, MEO, and LEO satellites, we deliver seamless coverage, resilient redundancy, 
          and 24/7 monitored reliability.
        </ContentText>
      </SubSection>

      <SubSection title="OTT & Streaming Distribution">
        <ContentText>
          We help content owners and platforms reach audiences directly via OTT and streaming services. Our workflows 
          include encoding, adaptive bitrate (ABR) packaging, CDN integration, and multi-device delivery—ensuring your 
          content scales smoothly across web, mobile, and smart TVs.
        </ContentText>
      </SubSection>

      <SubSection title="Remote Production">
        <ContentText>
          We enable broadcasters and event organizers to produce live content remotely, reducing on-site costs while 
          maintaining quality. By combining IP contribution, cloud integration, and remote switching, we help you cover events 
          more efficiently, flexibly, and securely.
        </ContentText>
      </SubSection>
    </div>
  );
}