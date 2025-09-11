export interface ServiceData {
    id: string;
    title: string;
    image?: string;
    imageAlt?: string;
    mainBullets: string[];
    mainDescription: string;
    sections: {
        title: string;
        content: string;
    }[];
}

export const servicesData: ServiceData[] = [
    {
        id: 'distribution',
        title: 'Distribution',
        image: '/satellite.png',
        imageAlt: 'Professional satellite distribution equipment',
        mainBullets: [
            "99.9% uptime with 24/7 network monitoring.",
            "Access to global satellite, fiber, and IP infrastructure.",
            "Proven expertise in sports, live events, and broadcast networks.",
            "Flexible delivery across broadcast, OTT, and hybrid platforms.",
            "End-to-end service — from encoding to last-mile distribution."
        ],
        mainDescription: "At Video Vision Media, we ensure your content is delivered with speed, reliability, and global reach. Whether through satellite, fiber, IP, or OTT platforms, our distribution solutions guarantee that your audiences receive high-quality content — anywhere in the world, on any device.",
        sections: [
            {
                title: "Fiber & IP Distribution Networks",
                content: "Our managed fiber and IP backbone connects major broadcast hubs, ensuring low-latency, high-capacity delivery of live and on-demand content. From contribution feeds to multi-region distribution, we deliver content with speed, security, and carrier-grade performance."
            },
            {
                title: "Broadcast Contribution Services",
                content: "From sports events to breaking news, we specialize in contribution feeds and remote integration. Our solutions cover DSNG uplinks, IP contribution, and global distribution of live feeds—delivering your content where it's needed, with broadcast-grade quality and ultra-low latency."
            },
            {
                title: "Satellite Distribution",
                content: "We provide global uplink, downlink, and turnaround services for broadcasters, media networks, and live event organizers. With access to leading GEO, MEO, and LEO satellites, we deliver seamless coverage, resilient redundancy, and 24/7 monitored reliability."
            },
            {
                title: "OTT & Streaming Distribution",
                content: "We help content owners and platforms reach audiences directly via OTT and streaming services. Our workflows include encoding, adaptive bitrate (ABR) packaging, CDN integration, and multi-device delivery—ensuring your content scales smoothly across web, mobile, and smart TVs."
            },
            {
                title: "Remote Production",
                content: "We enable broadcasters and event organizers to produce live content remotely, reducing on-site costs while maintaining quality. By combining IP contribution, cloud integration, and remote switching, we help you cover events more efficiently, flexibly, and securely."
            }
        ]
    },
    {
        id: 'playout',
        title: 'Playout',
        image: '/playout.png',
        imageAlt: 'Professional broadcast playout studio',
        mainBullets: [
            "24/7 automated channel playout with manual override capabilities.",
            "Multi-format support including HD, 4K, and HDR content.",
            "Real-time graphics insertion and live event integration.",
            "Redundant systems ensuring 99.99% uptime reliability.",
            "Cloud-based and on-premise playout solutions available."
        ],
        mainDescription: "Our state-of-the-art playout facilities deliver seamless broadcast experiences with integrated automation, graphics, and scheduling systems. From traditional linear channels to modern streaming platforms, we provide comprehensive playout solutions that scale with your needs.",
        sections: [
            {
                title: "Multi-Channel Management",
                content: "Manage multiple channels from a single interface with our centralized playout system. Our platform supports simultaneous channel operations with individual branding, scheduling, and content management for each channel."
            },
            {
                title: "Graphics & Branding Integration",
                content: "Seamlessly integrate real-time graphics, logos, and promotional content into your broadcast stream. Our advanced keying and compositing capabilities ensure professional presentation standards for live and automated programming."
            },
            {
                title: "Emergency Override Systems",
                content: "Built-in emergency alert systems and manual override capabilities ensure you can respond immediately to breaking news or critical situations. Our redundant architecture guarantees continuous operation even during system maintenance."
            }
        ]
    },
    {
        id: 'creative',
        title: 'Creative',
        mainBullets: [
            "End-to-end video production from concept to delivery.",
            "Professional studio and field production capabilities.",
            "Multi-camera live event coverage and streaming.",
            "Post-production services including editing and color correction.",
            "Motion graphics and visual effects integration."
        ],
        mainDescription: "Our creative team specializes in producing compelling content for broadcast, digital platforms, and live events. From concept development to final delivery, we provide comprehensive creative services that engage audiences and deliver your message effectively.",
        sections: [
            {
                title: "Video Production Services",
                content: "Professional video production services including scripting, filming, editing, and post-production. Our experienced team handles everything from corporate videos to large-scale broadcast productions with state-of-the-art equipment and creative expertise."
            },
            {
                title: "Live Event Production",
                content: "Complete live event production services including multi-camera coverage, live streaming, and real-time editing. We specialize in sports events, conferences, and entertainment productions with seamless integration of graphics and audio."
            },
            {
                title: "Post-Production & Editing",
                content: "Advanced post-production facilities with professional editing suites, color correction, audio mixing, and visual effects capabilities. Our team delivers polished content ready for any distribution platform or format."
            }
        ]
    },
    {
        id: 'cloud',
        title: 'Cloud',
        mainBullets: [
            "Scalable cloud-based media processing and storage.",
            "Global content delivery networks (CDN) for optimal performance.",
            "Automated transcoding and format conversion services.",
            "Secure cloud storage with redundant backup systems.",
            "Real-time collaboration tools for remote teams."
        ],
        mainDescription: "Our comprehensive cloud platform provides scalable infrastructure for media workflows, from ingest to delivery. Built on enterprise-grade cloud services, we offer flexible, cost-effective solutions that grow with your business needs while ensuring security and reliability.",
        sections: [
            {
                title: "Cloud-Based Workflow Management",
                content: "Streamline your media workflows with our cloud-based management platform. From asset management to automated processing pipelines, our solutions reduce operational complexity while improving efficiency and collaboration across teams."
            },
            {
                title: "Hybrid Cloud Solutions",
                content: "Combine the benefits of on-premise and cloud infrastructure with our hybrid solutions. Maintain critical operations locally while leveraging cloud scalability for peak demands and disaster recovery scenarios."
            },
            {
                title: "API Integration & Automation",
                content: "Integrate our cloud services seamlessly into your existing workflows with comprehensive APIs and automation tools. Build custom solutions or use our pre-built integrations with popular media production platforms."
            }
        ]
    },
    {
        id: 'satellite',
        title: 'Satellite & IoT',
        image: '/satellite.png',
        imageAlt: 'Advanced satellite communication systems',
        mainBullets: [
            "Global satellite coverage with multiple orbital positions.",
            "High-throughput satellites (HTS) for increased capacity.",
            "Mobile satellite services for remote locations.",
            "IoT connectivity solutions via satellite networks.",
            "Emergency communication systems and backup services."
        ],
        mainDescription: "Our satellite services leverage cutting-edge technology to provide reliable connectivity and broadcast services worldwide. From traditional GEO satellites to new LEO constellations, we offer comprehensive solutions for media distribution, IoT connectivity, and emergency communications.",
        sections: [
            {
                title: "IoT Satellite Connectivity",
                content: "Connect IoT devices in remote locations with our satellite-based IoT solutions. Our low-power, cost-effective connectivity options enable monitoring and control of assets anywhere in the world, from offshore platforms to rural installations."
            },
            {
                title: "Maritime & Aviation Services",
                content: "Specialized satellite communication services for maritime and aviation industries. Our solutions provide reliable connectivity for vessels and aircraft, enabling real-time communication, tracking, and entertainment services."
            },
            {
                title: "Emergency & Disaster Recovery",
                content: "Rapid deployment satellite systems for emergency response and disaster recovery scenarios. Our portable solutions can be deployed quickly to restore communications in affected areas, providing critical connectivity when terrestrial networks are compromised."
            }
        ]
    },
    {
        id: 'network',
        title: 'Network',
        image: '/cable.svg',
        imageAlt: 'Advanced fiber optic network infrastructure',
        mainBullets: [
            "Ultra-low latency fiber optic networks for live broadcasting.",
            "Redundant network paths ensuring 99.99% uptime.",
            "Software-defined networking (SDN) for flexible routing.",
            "Network monitoring and traffic optimization services.",
            "Secure VPN and dedicated connection options."
        ],
        mainDescription: "Our advanced network infrastructure provides the foundation for reliable, high-speed media transmission. With strategically located points of presence and diverse routing options, we ensure your content reaches its destination with minimal latency and maximum reliability.",
        sections: [
            {
                title: "Fiber Optic Connectivity",
                content: "State-of-the-art fiber optic networks delivering unmatched speed and reliability for media transmission. Our dense fiber infrastructure supports high-bandwidth applications including 4K/8K video transport and real-time collaboration."
            },
            {
                title: "Network Security & Monitoring",
                content: "Comprehensive network security with 24/7 monitoring and threat detection. Our security operations center provides real-time protection against cyber threats while maintaining optimal network performance and availability."
            },
            {
                title: "Edge Computing Solutions",
                content: "Deploy edge computing resources closer to your audience for reduced latency and improved user experience. Our edge network supports content caching, stream processing, and real-time analytics at the network edge."
            }
        ]
    },
    {
        id: 'asset-mgmt',
        title: 'Asst Mgmt',
        mainBullets: [
            "Centralized media asset storage and organization.",
            "Advanced metadata tagging and search capabilities.",
            "Automated transcoding and format optimization.",
            "Rights management and compliance tracking.",
            "Integration with popular production and editing systems."
        ],
        mainDescription: "Our digital asset management platform provides a centralized hub for all your media content, from raw footage to finished productions. With intelligent cataloging, powerful search capabilities, and seamless integrations, we help you maximize the value of your media assets.",
        sections: [
            {
                title: "Media Archiving & Storage",
                content: "Professional media archiving solutions with multiple storage tiers for optimal cost and performance. Our systems automatically migrate content between hot, warm, and cold storage based on usage patterns and retention policies."
            },
            {
                title: "Rights & Compliance Management",
                content: "Track usage rights, licensing agreements, and compliance requirements across your entire media library. Automated alerts and reporting ensure you stay compliant with content licensing terms and regulatory requirements."
            },
            {
                title: "Workflow Integration",
                content: "Seamlessly integrate asset management into your existing production workflows. Our platform connects with major editing systems, MAM/PAM solutions, and broadcast automation systems for streamlined operations."
            }
        ]
    },
    {
        id: 'teleport',
        title: 'Teleport',
        image: '/teleport.png',
        imageAlt: 'Professional teleport facility with satellite dishes',
        mainBullets: [
            "Multiple teleport locations with global satellite access.",
            "Redundant uplink/downlink capabilities for maximum reliability.",
            "Real-time monitoring and technical support 24/7/365.",
            "Flexible bandwidth allocation and burst capacity options.",
            "Integration with terrestrial networks for hybrid solutions."
        ],
        mainDescription: "Our state-of-the-art teleport facilities provide reliable satellite communication services with global reach. Staffed by experienced engineers and equipped with the latest technology, we ensure seamless connectivity for broadcast, data, and voice communications worldwide.",
        sections: [
            {
                title: "Satellite Access & Coverage",
                content: "Access to multiple satellite fleets providing comprehensive global coverage. Our teleports connect to GEO, MEO, and LEO satellite constellations, offering flexible coverage options for any geographic requirement or application."
            },
            {
                title: "Mission-Critical Services",
                content: "Dedicated teleport services for mission-critical applications including government communications, emergency services, and enterprise connectivity. Our facilities meet the highest security and reliability standards with redundant systems and backup power."
            },
            {
                title: "Custom Teleport Solutions",
                content: "Tailored teleport services designed for your specific requirements. From dedicated satellite capacity to custom ground system configurations, we work with you to develop solutions that meet your unique operational and technical needs."
            }
        ]
    }
];
