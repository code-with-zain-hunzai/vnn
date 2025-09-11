const satelliteImage = '/satellite.png';
import { ContentSection, BulletList, ContentText, SubSection } from '../ContentSection';

export function SatelliteContent() {
  return (
    <div className="space-y-8">
      <ContentSection 
        title="Satellite & IoT Solutions" 
        image={satelliteImage}
        imageAlt="Advanced satellite communication systems"
      >
        <div className="space-y-6">
          <SubSection title="Satellite Communication Services">
            <BulletList items={[
              "Global satellite coverage with multiple orbital positions.",
              "High-throughput satellites (HTS) for increased capacity.",
              "Mobile satellite services for remote locations.",
              "IoT connectivity solutions via satellite networks.",
              "Emergency communication systems and backup services."
            ]} />
          </SubSection>

          <SubSection title="Advanced Satellite Technology">
            <ContentText>
              Our satellite services leverage cutting-edge technology to provide reliable 
              connectivity and broadcast services worldwide. From traditional GEO satellites 
              to new LEO constellations, we offer comprehensive solutions for media distribution, 
              IoT connectivity, and emergency communications.
            </ContentText>
          </SubSection>
        </div>
      </ContentSection>

      <SubSection title="IoT Satellite Connectivity">
        <ContentText>
          Connect IoT devices in remote locations with our satellite-based IoT solutions. 
          Our low-power, cost-effective connectivity options enable monitoring and control 
          of assets anywhere in the world, from offshore platforms to rural installations.
        </ContentText>
      </SubSection>

      <SubSection title="Maritime & Aviation Services">
        <ContentText>
          Specialized satellite communication services for maritime and aviation industries. 
          Our solutions provide reliable connectivity for vessels and aircraft, enabling 
          real-time communication, tracking, and entertainment services.
        </ContentText>
      </SubSection>

      <SubSection title="Emergency & Disaster Recovery">
        <ContentText>
          Rapid deployment satellite systems for emergency response and disaster recovery scenarios. 
          Our portable solutions can be deployed quickly to restore communications in affected areas, 
          providing critical connectivity when terrestrial networks are compromised.
        </ContentText>
      </SubSection>
    </div>
  );
}