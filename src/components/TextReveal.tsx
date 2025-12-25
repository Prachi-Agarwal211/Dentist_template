'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextRevealProps {
    children: string;
    className?: string;
}

export const TextReveal = ({ children, className }: TextRevealProps) => {
    const defaultText = children || "";
    const words = defaultText.split(" ");

    // We need a ref for the container to track when it enters viewport
    // But for a simple immediate effect, we'll use motion.span with layout

    return (
        <span className={`inline-block whitespace-pre-wrap ${className}`}>
            {words.map((word, i) => (
                <Word key={i} index={i}>{word}</Word>
            ))}
        </span>
    );
};

const Word = ({ children, index }: { children: string, index: number }) => {
    const spanRef = useRef<HTMLSpanElement>(null);
    const { scrollYProgress } = useScroll({
        target: spanRef,
        offset: ['start 0.9', 'start 0.6'] // Triggers when top of word hits 90% of screen height
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

    // Alternatively, just use whileInView for simpler triggered animation
    return (
        <span ref={spanRef} className="inline-block overflow-hidden align-top mr-[0.25em] last:mr-0">
            <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                    duration: 0.5,
                    ease: [0.33, 1, 0.68, 1],
                    delay: 0.02 * index
                }}
            >
                {children}
            </motion.span>
        </span>
    );
};

export default TextReveal;
