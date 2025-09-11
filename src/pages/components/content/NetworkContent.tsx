const fiberImage = '/cable.svg';
import { ContentSection, BulletList, ContentText, SubSection } from '../ContentSection';

export function NetworkContent() {
  return (
    <div className="space-y-8">
      <ContentSection 
        title="Network Infrastructure" 
        image={fiberImage}
        imageAlt="Advanced fiber optic network infrastructure"
      >
        <div className="space-y-6">
          <SubSection title="High-Performance Network Solutions">
            <BulletList items={[
              "Ultra-low latency fiber optic networks for live broadcasting.",
              "Redundant network paths ensuring 99.99% uptime.",
              "Software-defined networking (SDN) for flexible routing.",
              "Network monitoring and traffic optimization services.",
              "Secure VPN and dedicated connection options."
            ]} />
          </SubSection>

          <SubSection title="Next-Generation Network Infrastructure">
            <ContentText>
              Our advanced network infrastructure provides the foundation for reliable, 
              high-speed media transmission. With strategically located points of presence 
              and diverse routing options, we ensure your content reaches its destination 
              with minimal latency and maximum reliability.
            </ContentText>
          </SubSection>
        </div>
      </ContentSection>

      <SubSection title="Fiber Optic Connectivity">
        <ContentText>
          State-of-the-art fiber optic networks delivering unmatched speed and reliability 
          for media transmission. Our dense fiber infrastructure supports high-bandwidth 
          applications including 4K/8K video transport and real-time collaboration.
        </ContentText>
      </SubSection>

      <SubSection title="Network Security & Monitoring">
        <ContentText>
          Comprehensive network security with 24/7 monitoring and threat detection. 
          Our security operations center provides real-time protection against cyber threats 
          while maintaining optimal network performance and availability.
        </ContentText>
      </SubSection>

      <SubSection title="Edge Computing Solutions">
        <ContentText>
          Deploy edge computing resources closer to your audience for reduced latency 
          and improved user experience. Our edge network supports content caching, 
          stream processing, and real-time analytics at the network edge.
        </ContentText>
      </SubSection>
    </div>
  );
}