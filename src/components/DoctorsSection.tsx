'use client';

import { motion } from 'framer-motion';
import TextReveal from './TextReveal';

const DoctorsSection = () => {
    const doctors = [
        {
            name: "Dr. Sarah Mitchell",
            role: "Cosmetic Specialist",
            image: "/doctor-1.png",
            specialty: "Veneers & Whitening"
        },
        {
            name: "Dr. James Wilson",
            role: "Implant Surgeon",
            image: "/doctor-2.png",
            specialty: "Full Mouth Reconstruction"
        },
        {
            name: "Dr. Emily Chen",
            role: "Orthodontist",
            image: "/doctor-1.png", // Reusing for now
            specialty: "Invisalign & Braces"
        }
    ];

    return (
        <section id="doctors" className="relative h-screen flex items-center py-0 bg-black overflow-hidden snap-start">
            <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">

                {/* Section Header with "Story" Reveal */}
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-emerald-500 font-medium tracking-widest text-sm uppercase mb-4"
                    >
                        World-Class Specialists
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-3d">
                        <TextReveal>Meet the Experts</TextReveal>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-xl text-gray-400"
                    >
                        A curated team of industry leaders dedicated to the art of dentistry.
                    </motion.p>
                </div>

                {/* Cards with Staggered Scroll Entry */}
                <div className="grid md:grid-cols-3 gap-8">
                    {doctors.map((doc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                                delay: i * 0.2 // Stagger effect
                            }}
                            className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900"
                        >
                            {/* Image with Scale Effect */}
                            <motion.img
                                src={doc.image}
                                alt={doc.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-80" />

                            {/* Content appearing on hover/scroll */}
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-emerald-400 text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {doc.role}
                                </p>
                                <h3 className="text-3xl font-bold text-white mb-2">{doc.name}</h3>
                                <div className="h-0.5 w-0 group-hover:w-12 bg-emerald-500 transition-all duration-500 mb-2" />
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                    {doc.specialty}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DoctorsSection;
