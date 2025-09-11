import { useState } from 'react';
import { MediaSidebar, NavItem } from './components/MediaSidebar';
import { ContentSection, BulletList, ContentText, SubSection } from './components/ContentSection';
import { servicesData, ServiceData } from '@/lib/servicesData';

export default function Services() {
    const [activeItem, setActiveItem] = useState('distribution');

    const renderServiceContent = (serviceData: ServiceData) => {
        return (
            <div className="space-y-8">
                <ContentSection 
                    title={serviceData.title}
                    image={serviceData.image}
                    imageAlt={serviceData.imageAlt}
                >
                    <div className="space-y-6">
                        <SubSection title={`Why Choose Our ${serviceData.title} Services`}>
                            <BulletList items={serviceData.mainBullets} />
                        </SubSection>
                        <SubSection title={`${serviceData.title} Services`}>
                            <ContentText>
                                {serviceData.mainDescription}
                            </ContentText>
                        </SubSection>
                    </div>
                </ContentSection>

                {serviceData.sections.map((section, index) => (
                    <SubSection key={index} title={section.title}>
                        <ContentText>
                            {section.content}
                        </ContentText>
                    </SubSection>
                ))}
            </div>
        );
    };

    const navItems: NavItem[] = servicesData.map(service => ({
        id: service.id,
        title: service.title,
        content: renderServiceContent(service)
    }));

    const currentContent = navItems.find(item => item.id === activeItem)?.content;

    return (
        <section id="services" className="">
            <div className="relative w-full">
                <img src="/abouthero.png" alt="Coverage area" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold">
                    <h1>Our Services</h1>
                </div>
            </div>

            <div className='py-10'>
                <div className="min-h-screen flex w-full">
                    <MediaSidebar
                        items={navItems}
                        activeItem={activeItem}
                        onItemChange={setActiveItem}
                        className="flex-shrink-0"
                    />

                    <main className="flex-1 overflow-y-auto border-l border-media-gray-400">
                        <div className="max-w-7xl mx-auto px-8">
                            <article className="bg-background rounded-lg p-8">
                                {currentContent}
                            </article>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}