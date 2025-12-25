'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
    value: number;
    suffix: string;
    label: string;
    delay: number;
}

const StatItem = ({ value, suffix, label, delay }: StatItemProps) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const timeout = setTimeout(() => {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const interval = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(interval);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [isVisible, value, delay]);

    return (
        <div
            ref={ref}
            className="text-center p-6 relative group"
        >
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {count}
                <span className="text-emerald-400">{suffix}</span>
            </div>
            <div className="text-slate-400 text-sm uppercase tracking-wider">{label}</div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
        </div>
    );
};

const StatsBar = () => {
    const stats = [
        { value: 25, suffix: '+', label: 'Years Experience', delay: 0 },
        { value: 15000, suffix: '+', label: 'Happy Patients', delay: 100 },
        { value: 50, suffix: '+', label: 'Expert Dentists', delay: 200 },
        { value: 98, suffix: '%', label: 'Success Rate', delay: 300 },
    ];

    return (
        <section className="relative py-16 z-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="relative">
                    {/* Glass effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10" />

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10 rounded-2xl" />

                    {/* Stats grid */}
                    <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
                        {stats.map((stat, index) => (
                            <StatItem key={index} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
