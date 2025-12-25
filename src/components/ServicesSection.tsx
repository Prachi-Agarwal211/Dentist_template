'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServicesSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    const services = [
        {
            title: "Cosmetic Design",
            desc: "Complete smile makeovers meticulously planned using 3D digital simulation.",
            image: "/service-cosmetic.jpg"
        },
        {
            title: "Implantology",
            desc: "Restore function and aesthetics with premium titanium and ceramic implants.",
            image: "/service-implant.jpg"
        },
        {
            title: "Orthodontics",
            desc: "Invisible aligners and precision correction for perfect alignment.",
            image: "/service-ortho.jpg"
        },
        {
            title: "Laser Therapy",
            desc: "Minimally invasive treatments for faster healing and superior comfort.",
            image: "/service-laser.jpg"
        }
    ];

    return (
        <section ref={targetRef} id="services" className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Section Header - Fades out as you scroll horizontally */}
                <motion.div
                    className="absolute left-10 top-20 z-10 max-w-sm"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                >
                    <h2 className="text-5xl font-bold text-white mb-4">Our <span className="text-emerald-500">Expertise</span></h2>
                    <p className="text-gray-400">Scroll to explore our specialized treatments.</p>
                </motion.div>

                {/* Internal Snap Points for Stepping through Animation */}
                <div className="absolute top-0 w-full h-1 snap-start" />
                <div className="absolute top-[100vh] w-full h-1 snap-start" />
                <div className="absolute top-[200vh] w-full h-1 snap-start" />

                <motion.div style={{ x }} className="flex gap-16 px-16 w-full">

                    {/* Intro Card */}
                    <div className="flex-shrink-0 w-[80vw] md:w-[600px] h-full flex flex-col justify-center">
                        {/* Spacing filler to start content later */}
                    </div>

                    {services.map((service, i) => (
                        <div key={i} className="group relative flex-shrink-0 w-[85vw] md:w-[600px] h-[70vh] rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-emerald-500/30">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

                            {/* Image would come here from props/assets */}
                            <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700 ease-out" />

                            <div className="absolute bottom-0 left-0 p-10 z-20 max-w-lg">
                                <span className="text-6xl font-bold text-white/5 absolute -top-20 -left-4 pointer-events-none select-none">
                                    0{i + 1}
                                </span>
                                <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    {service.desc}
                                </p>
                                <button className="mt-8 px-6 py-2 rounded-full border border-white/30 text-white hover:bg-emerald-500 hover:border-emerald-500 hover:text-black transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
