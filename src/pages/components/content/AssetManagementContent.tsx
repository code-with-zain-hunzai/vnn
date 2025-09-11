import { ContentSection, BulletList, ContentText, SubSection } from '../ContentSection';

export function AssetManagementContent() {
  return (
    <div className="space-y-8">
      <ContentSection title="Asset Management">
        <div className="space-y-6">
          <SubSection title="Digital Asset Management Services">
            <BulletList items={[
              "Centralized media asset storage and organization.",
              "Advanced metadata tagging and search capabilities.",
              "Automated transcoding and format optimization.",
              "Rights management and compliance tracking.",
              "Integration with popular production and editing systems."
            ]} />
          </SubSection>

          <SubSection title="Comprehensive Asset Solutions">
            <ContentText>
              Our digital asset management platform provides a centralized hub for all your 
              media content, from raw footage to finished productions. With intelligent 
              cataloging, powerful search capabilities, and seamless integrations, we help 
              you maximize the value of your media assets.
            </ContentText>
          </SubSection>
        </div>
      </ContentSection>

      <SubSection title="Media Archiving & Storage">
        <ContentText>
          Professional media archiving solutions with multiple storage tiers for optimal 
          cost and performance. Our systems automatically migrate content between hot, warm, 
          and cold storage based on usage patterns and retention policies.
        </ContentText>
      </SubSection>

      <SubSection title="Rights & Compliance Management">
        <ContentText>
          Track usage rights, licensing agreements, and compliance requirements across 
          your entire media library. Automated alerts and reporting ensure you stay 
          compliant with content licensing terms and regulatory requirements.
        </ContentText>
      </SubSection>

      <SubSection title="Workflow Integration">
        <ContentText>
          Seamlessly integrate asset management into your existing production workflows. 
          Our platform connects with major editing systems, MAM/PAM solutions, and 
          broadcast automation systems for streamlined operations.
        </ContentText>
      </SubSection>
    </div>
  );
}