'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const yText = useTransform(scrollY, [0, 500], [0, 150]);
    const yBg = useTransform(scrollY, [0, 500], [0, 50]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
    const scaleImg = useTransform(scrollY, [0, 500], [1, 1.1]);

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-black">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background with Parallax Scale */}
                <motion.div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        y: yBg,
                        scale: scaleImg,
                        backgroundImage: "url('/hero-bg.png')", // Updated to existing asset
                        filter: "brightness(0.3)"
                    }}
                />

                {/* Floating Elements (Orbs/Decorations) - Independent Scroll Speed */}
                <motion.div
                    className="absolute top-1/4 left-10 w-32 h-32 rounded-full blur-3xl bg-emerald-500/20 z-10"
                    style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
                />

                {/* Content Container */}
                <motion.div
                    className="relative z-20 text-center px-4 max-w-5xl mx-auto"
                    style={{ y: yText, opacity: opacityText }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block py-2 px-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-emerald-400 font-medium tracking-wider mb-6">
                            PREMIUM DENTAL STUDIO
                        </span>
                    </motion.div>

                    <motion.div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 120 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tighter text-3d"
                        >
                            Redefining <br />
                            <span className="text-emerald-500 italic relative inline-block">
                                Smile Care
                                <motion.svg
                                    className="absolute -bottom-2 left-0 w-full h-3 text-emerald-500"
                                    viewBox="0 0 100 10"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                >
                                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                                </motion.svg>
                            </span>
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        Experience dentistry reimagined. Where advanced technology meets artistic precision in a serene, luxury environment.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <a
                            href="#booking"
                            className="group px-8 py-4 btn-embossed text-white font-semibold rounded-full overflow-hidden relative"
                        >
                            <span className="relative z-10">Book Consultation</span>
                        </a>

                        <a href="#services" className="text-white border-b border-transparent hover:border-white transition-colors pb-1 flex items-center gap-2 group">
                            View Treatments
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
