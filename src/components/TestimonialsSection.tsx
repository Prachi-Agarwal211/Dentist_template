'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from './TextReveal';

const testimonials = [
    {
        name: 'Jennifer Martinez',
        rating: 5,
        text: 'Absolutely amazing experience! The staff was incredibly professional and made me feel comfortable throughout my entire treatment.',
        treatment: 'Cosmetic Dentistry',
        avatar: 'JM',
    },
    {
        name: 'Michael Thompson',
        rating: 5,
        text: 'I was terrified of dentists until I came here. Dr. Chen and his team completely changed my perspective.',
        treatment: 'Dental Implants',
        avatar: 'MT',
    },
    {
        name: 'Sarah Williams',
        rating: 5,
        text: 'The Invisalign treatment was seamless. In just 8 months, my teeth are perfectly aligned.',
        treatment: 'Orthodontics',
        avatar: 'SW',
    },
];

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="relative h-screen flex items-center py-0 bg-black overflow-hidden snap-start">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-emerald-500 font-medium tracking-widest text-sm uppercase mb-4"
                    >
                        Patient Stories
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-3d">
                        <TextReveal>Transformations</TextReveal>
                    </h2>
                </div>

                {/* Interactive Carousel */}
                <div className="relative max-w-4xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -50, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 md:p-14 text-center md:text-left relative"
                        >
                            <div className="absolute top-10 right-10 text-8xl text-emerald-500/10 font-serif leading-none">"</div>

                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                {/* Avatar */}
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-2xl font-bold text-white shrink-0 shadow-lg shadow-emerald-900/50">
                                    {testimonials[activeIndex].avatar}
                                </div>

                                <div>
                                    <div className="flex gap-1 mb-4 justify-center md:justify-start">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <p className="text-2xl md:text-3xl text-white font-light leading-snug mb-8">
                                        {testimonials[activeIndex].text}
                                    </p>

                                    <div>
                                        <h4 className="text-xl font-bold text-white">{testimonials[activeIndex].name}</h4>
                                        <p className="text-emerald-400">{testimonials[activeIndex].treatment}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button onClick={prev} className="p-4 rounded-full btn-embossed text-white">←</button>
                        <button onClick={next} className="p-4 rounded-full btn-embossed text-white">→</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
