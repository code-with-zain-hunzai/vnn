import { Button } from '@/components/ui/button';
import { Card, CardHeader } from './ui/card';

const Solution = () => {
    const services = [
        {
            title: "Broadcast & Media",
            image: "/broadCast.png",
            features: [
                "TV studio",
                "film cameras",
                "content production"
            ]
        },
        {
            title: "Sports & Live Events",
            image: "/liveEvent.png",
            features: [
                "packed stadium",
                "live event camera ops"
            ]
        },
        {
            title: "Telecom & ISPs",
            image: "/telecom.png",
            features: [
                "fiber cables",
                "mobile tower"
            ]
        },
        {
            title: "Maritime & Aviation",
            image: "/maritime.png",
            features: [
                "banking office",
                "energy",
                "mining site with satellite dish"
            ]
        },
        {
            title: "Government & Defence",
            image: "/defence.png",
            features: [
                "ship deck with VSAT dome",
                "airplane cabin Wi-Fi usage"
            ]
        },
        {
            title: "Enterprise & Corporate",
            image: "/ground.png",
            features: [
                "government command center",
                "secure comms room"
            ]
        },
    ];

    return (
        <section id="services" className="py-20 bg-background relative z-0">
            <div className="relative pt-20">
                <div className='absolute inset-0 left-0 bottom-10 z-10' style={{
                    backgroundImage: `url('/cable.svg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '983px 438px',
                    backgroundPosition: 'center',
                    right: '1000px',
                    bottom: '1000px',
                }}>

                    <div className='relative z-10 container pt-32 space-y-2'>
                        <h2 className='text-5xl max-w-3xl mx-auto font-bold leading-20 text-white font-railway'>Our Solutions</h2>
                        <p className='text-lg max-w-3xl mx-auto text-white font-poppins'>At Video Vision Media, we deliver solutions tailored to the industries we serve. From live sports to government communications, our expertise ensures content and connectivity are always reliable, always secure, and always ready for global audiences.</p>
                    </div>
                </div>

                <div className='py-40'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container pt-20 relative z-50 ">
                        {services.map((service, index) => (
                            <Card key={index} className="shadow-lg flex flex-col h-full">
                                <CardHeader className="relative rounded-lg overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </CardHeader>
                                <div className='px-6 py-4 flex-1 flex flex-col'>
                                    <h3 className="text-lg font-bold text-foreground mb-3 font-base-neue">
                                        {service.title}
                                    </h3>
                                    <ul className="space-y-2 mb-6 flex-1">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm font-poppins text-muted-foreground">
                                                <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto">
                                        <Button variant="outline" className="text-custom-red border-custom-red border-none underline gap-2">
                                            Read More
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;