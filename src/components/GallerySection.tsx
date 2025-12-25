'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextReveal from './TextReveal';

const galleryImages = [
    '/hero-bg.png', // Reusing available assets
    '/doctor-1.png',
    '/doctor-2.png',
    '/hero-bg.png',
    '/doctor-1.png',
    '/doctor-2.png',
];

const GallerySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax transforms for 3 columns
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <section ref={containerRef} id="gallery" className="relative h-screen flex flex-col justify-center py-0 bg-neutral-950 overflow-hidden snap-start">
            <div className="max-w-7xl mx-auto px-4 mb-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-emerald-500 font-medium tracking-widest text-sm uppercase mb-4"
                >
                    Our Environment
                </motion.div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    <TextReveal>State of the Art</TextReveal>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto text-lg">
                    Immerse yourself in a facility designed for comfort, precision, and tranquility.
                </p>
            </div>

            <div className="h-[80vh] overflow-hidden flex justify-center gap-6 md:gap-8 px-4">
                {/* Column 1 - Moves Up */}
                <motion.div style={{ y: y1 }} className="flex flex-col gap-8 w-1/3 md:w-1/4">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900">
                        <img src={galleryImages[0]} alt="Clinic" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-800">
                        <img src={galleryImages[1]} alt="Clinic" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </motion.div>

                {/* Column 2 - Moves Down (slower) */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-800">
                    <img src={galleryImages[2]} alt="Dental implant consultation room" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900">
                    <img src={galleryImages[3]} alt="Clinic" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500" />
                </div>
            </motion.div>

            {/* Column 3 - Moves Up (fast) */}
            <motion.div style={{ y: y3 }} className="flex flex-col gap-8 w-1/3 md:w-1/4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900">
                    <img src={galleryImages[4]} alt="Clinic" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-800">
                    <img src={galleryImages[5]} alt="Clinic" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500" />
                </div>
            </motion.div>
        </div>
        </section >
    );
};

export default GallerySection;
