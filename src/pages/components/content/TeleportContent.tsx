const satelliteImage = '/teleport.png';
import { ContentSection, BulletList, ContentText, SubSection } from '../ContentSection';

export function TeleportContent() {
  return (
    <div className="space-y-8">
      <ContentSection 
        title="Teleport Services" 
        image={satelliteImage}
        imageAlt="Professional teleport facility with satellite dishes"
      >
        <div className="space-y-6">
          <SubSection title="World-Class Teleport Facilities">
            <BulletList items={[
              "Multiple teleport locations with global satellite access.",
              "Redundant uplink/downlink capabilities for maximum reliability.",
              "Real-time monitoring and technical support 24/7/365.",
              "Flexible bandwidth allocation and burst capacity options.",
              "Integration with terrestrial networks for hybrid solutions."
            ]} />
          </SubSection>

          <SubSection title="Professional Teleport Operations">
            <ContentText>
              Our state-of-the-art teleport facilities provide reliable satellite 
              communication services with global reach. Staffed by experienced engineers 
              and equipped with the latest technology, we ensure seamless connectivity 
              for broadcast, data, and voice communications worldwide.
            </ContentText>
          </SubSection>
        </div>
      </ContentSection>

      <SubSection title="Satellite Access & Coverage">
        <ContentText>
          Access to multiple satellite fleets providing comprehensive global coverage. 
          Our teleports connect to GEO, MEO, and LEO satellite constellations, offering 
          flexible coverage options for any geographic requirement or application.
        </ContentText>
      </SubSection>

      <SubSection title="Mission-Critical Services">
        <ContentText>
          Dedicated teleport services for mission-critical applications including government 
          communications, emergency services, and enterprise connectivity. Our facilities 
          meet the highest security and reliability standards with redundant systems and backup power.
        </ContentText>
      </SubSection>

      <SubSection title="Custom Teleport Solutions">
        <ContentText>
          Tailored teleport services designed for your specific requirements. From dedicated 
          satellite capacity to custom ground system configurations, we work with you to 
          develop solutions that meet your unique operational and technical needs.
        </ContentText>
      </SubSection>
    </div>
  );
}