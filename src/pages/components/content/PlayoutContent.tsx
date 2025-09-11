const broadcastImage = '/playout.png';
import { ContentSection, BulletList, ContentText, SubSection } from '../ContentSection';

export function PlayoutContent() {
  return (
    <div className="space-y-8">
      <ContentSection 
        title="Playout Services" 
        image={broadcastImage}
        imageAlt="Professional broadcast playout studio"
      >
        <div className="space-y-6">
          <SubSection title="Professional Broadcast Playout">
            <BulletList items={[
              "24/7 automated channel playout with manual override capabilities.",
              "Multi-format support including HD, 4K, and HDR content.",
              "Real-time graphics insertion and live event integration.",
              "Redundant systems ensuring 99.99% uptime reliability.",
              "Cloud-based and on-premise playout solutions available."
            ]} />
          </SubSection>

          <SubSection title="Advanced Playout Technologies">
            <ContentText>
              Our state-of-the-art playout facilities deliver seamless broadcast experiences 
              with integrated automation, graphics, and scheduling systems. From traditional 
              linear channels to modern streaming platforms, we provide comprehensive 
              playout solutions that scale with your needs.
            </ContentText>
          </SubSection>
        </div>
      </ContentSection>

      <SubSection title="Multi-Channel Management">
        <ContentText>
          Manage multiple channels from a single interface with our centralized playout system. 
          Our platform supports simultaneous channel operations with individual branding, 
          scheduling, and content management for each channel.
        </ContentText>
      </SubSection>

      <SubSection title="Graphics & Branding Integration">
        <ContentText>
          Seamlessly integrate real-time graphics, logos, and promotional content into your broadcast stream. 
          Our advanced keying and compositing capabilities ensure professional presentation standards 
          for live and automated programming.
        </ContentText>
      </SubSection>

      <SubSection title="Emergency Override Systems">
        <ContentText>
          Built-in emergency alert systems and manual override capabilities ensure you can respond 
          immediately to breaking news or critical situations. Our redundant architecture guarantees 
          continuous operation even during system maintenance.
        </ContentText>
      </SubSection>
    </div>
  );
}