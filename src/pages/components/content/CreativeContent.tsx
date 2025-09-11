import { ContentSection, BulletList, ContentText, SubSection } from '../ContentSection';

export function CreativeContent() {
  return (
    <div className="space-y-8">
      <ContentSection title="Creative Services">
        <div className="space-y-6">
          <SubSection title="Creative Content Production">
            <BulletList items={[
              "End-to-end video production from concept to delivery.",
              "Professional studio and field production capabilities.",
              "Multi-camera live event coverage and streaming.",
              "Post-production services including editing and color correction.",
              "Motion graphics and visual effects integration."
            ]} />
          </SubSection>

          <SubSection title="Content Creation Solutions">
            <ContentText>
              Our creative team specializes in producing compelling content for broadcast, 
              digital platforms, and live events. From concept development to final delivery, 
              we provide comprehensive creative services that engage audiences and deliver 
              your message effectively.
            </ContentText>
          </SubSection>
        </div>
      </ContentSection>

      <SubSection title="Video Production Services">
        <ContentText>
          Professional video production services including scripting, filming, editing, and post-production. 
          Our experienced team handles everything from corporate videos to large-scale broadcast productions 
          with state-of-the-art equipment and creative expertise.
        </ContentText>
      </SubSection>

      <SubSection title="Live Event Production">
        <ContentText>
          Complete live event production services including multi-camera coverage, live streaming, 
          and real-time editing. We specialize in sports events, conferences, and entertainment 
          productions with seamless integration of graphics and audio.
        </ContentText>
      </SubSection>

      <SubSection title="Post-Production & Editing">
        <ContentText>
          Advanced post-production facilities with professional editing suites, color correction, 
          audio mixing, and visual effects capabilities. Our team delivers polished content 
          ready for any distribution platform or format.
        </ContentText>
      </SubSection>
    </div>
  );
}