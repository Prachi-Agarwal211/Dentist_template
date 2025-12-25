'use client';

import { useEffect, useRef, useState } from 'react';

const InteractiveBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Refs for animated elements to avoid state re-enders
    const orb1Ref = useRef<HTMLDivElement>(null);
    const orb2Ref = useRef<HTMLDivElement>(null);
    const orb3Ref = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        setIsMobile(window.innerWidth < 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        let animationFrameId: number;
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const updatePositions = () => {
            // Smooth lerp for mouse movement
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;

            if (orb1Ref.current) {
                orb1Ref.current.style.transform = `translate(${currentX * 0.02}px, ${currentY * 0.02}px)`;
            }
            if (orb2Ref.current) {
                orb2Ref.current.style.transform = `translate(${currentX * -0.03}px, ${currentY * -0.03}px)`;
            }
            if (orb3Ref.current) {
                orb3Ref.current.style.transform = `translate(${currentX * 0.025}px, ${currentY * 0.025}px)`;
            }
            if (glowRef.current) {
                glowRef.current.style.left = `${currentX}px`;
                glowRef.current.style.top = `${currentY}px`;
            }

            animationFrameId = requestAnimationFrame(updatePositions);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animationFrameId = requestAnimationFrame(updatePositions);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isMobile]);

    if (!mounted) return null;

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Animated flowing lines - Desktop Only */}
            {!isMobile && (
                <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                            <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {/* Flowing horizontal lines */}
                    {[...Array(5)].map((_, i) => (
                        <g key={i}>
                            <path
                                d={`M -100 ${150 + i * 180} Q ${300 + i * 50} ${100 + i * 50}, 600 ${200 + i * 150} T 1200 ${180 + i * 160} T 1800 ${150 + i * 180}`}
                                fill="none"
                                stroke="url(#lineGradient)"
                                strokeWidth="1.5"
                                style={{
                                    animation: `flowLine ${8 + i * 2}s ease-in-out infinite`,
                                    animationDelay: `${i * 0.5}s`,
                                }}
                            />
                        </g>
                    ))}
                </svg>
            )}

            {/* Floating orbs with parallax to mouse */}
            <div
                ref={orb1Ref}
                className="absolute w-[500px] h-[500px] rounded-full opacity-15"
                style={{
                    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
                    top: '10%',
                    left: '10%',
                    transition: 'transform 0.1s linear', // Changed for smoother JS driven movement
                    animation: 'floatOrb1 20s ease-in-out infinite',
                }}
            />

            <div
                ref={orb2Ref}
                className="absolute w-[400px] h-[400px] rounded-full opacity-10"
                style={{
                    background: 'radial-gradient(circle, rgba(153, 27, 27, 0.3) 0%, transparent 70%)',
                    top: '50%',
                    right: '5%',
                    transition: 'transform 0.1s linear',
                    animation: 'floatOrb2 18s ease-in-out infinite',
                }}
            />

            <div
                ref={orb3Ref}
                className="absolute w-[350px] h-[350px] rounded-full opacity-20"
                style={{
                    background: 'radial-gradient(circle, rgba(45, 212, 191, 0.3) 0%, transparent 70%)',
                    bottom: '15%',
                    left: '30%',
                    transition: 'transform 0.1s linear',
                    animation: 'floatOrb3 15s ease-in-out infinite',
                }}
            />

            {/* Mouse-following glow */}
            {!isMobile && (
                <div
                    ref={glowRef}
                    className="absolute w-96 h-96 rounded-full pointer-events-none"
                    style={{
                        top: '50%', // Initial center
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(45, 212, 191, 0.08) 40%, transparent 70%)',
                        filter: 'blur(30px)',
                    }}
                />
            )}

            {/* Floating particles */}
            {[...Array(isMobile ? 5 : 12)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: `${4 + Math.random() * 6}px`,
                        height: `${4 + Math.random() * 6}px`,
                        background: i % 3 === 0
                            ? 'rgba(16, 185, 129, 0.6)'
                            : i % 3 === 1
                                ? 'rgba(45, 212, 191, 0.5)'
                                : 'rgba(153, 27, 27, 0.4)',
                        top: `${10 + Math.random() * 80}%`,
                        left: `${5 + Math.random() * 90}%`,
                        animation: `ambientFloat ${10 + Math.random() * 10}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                        filter: 'blur(1px)',
                    }}
                />
            ))}

            {/* CSS Keyframes */}
            <style jsx>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(80px, 40px) scale(1.05); }
          50% { transform: translate(40px, 80px) scale(1); }
          75% { transform: translate(-40px, 40px) scale(0.95); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, -40px) scale(1.08); }
          66% { transform: translate(-30px, 60px) scale(0.95); }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(50px, -30px); }
          50% { transform: translate(100px, 20px); }
          75% { transform: translate(50px, 50px); }
        }
        @keyframes flowLine {
          0% { stroke-dashoffset: 1000; opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { stroke-dashoffset: 0; opacity: 0.3; }
        }
        @keyframes ambientFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-20px) rotate(5deg); opacity: 0.8; }
          50% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          75% { transform: translateY(-25px) rotate(-5deg); opacity: 0.7; }
        }
      `}</style>
        </div>
    );
};

export default InteractiveBackground;
