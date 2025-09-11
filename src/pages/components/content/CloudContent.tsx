import { ContentSection, BulletList, ContentText, SubSection } from '../ContentSection';

export function CloudContent() {
  return (
    <div className="space-y-8">
      <ContentSection title="Cloud Services">
        <div className="space-y-6">
          <SubSection title="Cloud Infrastructure Solutions">
            <BulletList items={[
              "Scalable cloud-based media processing and storage.",
              "Global content delivery networks (CDN) for optimal performance.",
              "Automated transcoding and format conversion services.",
              "Secure cloud storage with redundant backup systems.",
              "Real-time collaboration tools for remote teams."
            ]} />
          </SubSection>

          <SubSection title="Media Cloud Platform">
            <ContentText>
              Our comprehensive cloud platform provides scalable infrastructure for media 
              workflows, from ingest to delivery. Built on enterprise-grade cloud services, 
              we offer flexible, cost-effective solutions that grow with your business needs 
              while ensuring security and reliability.
            </ContentText>
          </SubSection>
        </div>
      </ContentSection>

      <SubSection title="Cloud-Based Workflow Management">
        <ContentText>
          Streamline your media workflows with our cloud-based management platform. 
          From asset management to automated processing pipelines, our solutions reduce 
          operational complexity while improving efficiency and collaboration across teams.
        </ContentText>
      </SubSection>

      <SubSection title="Hybrid Cloud Solutions">
        <ContentText>
          Combine the benefits of on-premise and cloud infrastructure with our hybrid solutions. 
          Maintain critical operations locally while leveraging cloud scalability for peak demands 
          and disaster recovery scenarios.
        </ContentText>
      </SubSection>

      <SubSection title="API Integration & Automation">
        <ContentText>
          Integrate our cloud services seamlessly into your existing workflows with comprehensive 
          APIs and automation tools. Build custom solutions or use our pre-built integrations 
          with popular media production platforms.
        </ContentText>
      </SubSection>
    </div>
  );
}