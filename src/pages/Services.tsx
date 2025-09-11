import { useState } from 'react';
import { MediaSidebar, NavItem } from './components/MediaSidebar';
import { DistributionContent } from './components/content/DistributionContent';
import { PlayoutContent } from './components/content/PlayoutContent';
import { CreativeContent } from './components/content/CreativeContent';
import { CloudContent } from './components/content/CloudContent';
import { SatelliteContent } from './components/content/SatelliteContent';
import { NetworkContent } from './components/content/NetworkContent';
import { AssetManagementContent } from './components/content/AssetManagementContent';
import { TeleportContent } from './components/content/TeleportContent';

export default function Services() {
    const [activeItem, setActiveItem] = useState('distribution');

    const navItems: NavItem[] = [
        {
            id: 'distribution',
            title: 'Distribution',
            content: <DistributionContent />
        },
        {
            id: 'playout',
            title: 'Playout',
            content: <PlayoutContent />
        },
        {
            id: 'creative',
            title: 'Creative',
            content: <CreativeContent />
        },
        {
            id: 'cloud',
            title: 'Cloud',
            content: <CloudContent />
        },
        {
            id: 'satellite',
            title: 'Satellite & IoT',
            content: <SatelliteContent />
        },
        {
            id: 'network',
            title: 'Network',
            content: <NetworkContent />
        },
        {
            id: 'asset-mgmt',
            title: 'Asst Mgmt',
            content: <AssetManagementContent />
        },
        {
            id: 'teleport',
            title: 'Teleport',
            content: <TeleportContent />
        }
    ];

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

                    <main className="flex-1 overflow-y-auto">
                        <div className="max-w-6xl mx-auto p-8">
                            <article className="bg-background rounded-lg shadow-sm p-8">
                                {currentContent}
                            </article>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}