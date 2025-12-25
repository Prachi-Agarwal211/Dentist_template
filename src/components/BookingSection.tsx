'use client';

import React, { useState, useRef, useEffect, FormEvent } from 'react';
import Footer from './Footer';

const BookingSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        service: '',
        message: '',
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                service: '',
                message: '',
            });
        }, 3000);
    };

    const services = [
        'Cosmetic Dentistry',
        'Dental Implants',
        'Orthodontics',
        'Teeth Whitening',
        'Emergency Care',
        'General Checkup',
        'Pediatric Dentistry',
    ];

    return (
        <section id="booking" ref={sectionRef} className="relative h-screen bg-neutral-900 snap-start flex flex-col overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-grow flex items-center justify-center py-4 relative z-10">
                <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Info */}
                    <div
                        className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    >
                        <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
                            Book Online
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6 text-3d">
                            Schedule Your <br />
                            <span className="text-emerald-400">Perfect Smile</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-md">
                            Take the first step towards optimal oral health. Our friendly team
                            is ready to welcome you.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            {[
                                { icon: '📍', label: 'Visit Us', value: '123 Dental Avenue, Medical District' },
                                { icon: '📞', label: 'Call Us', value: '+1 (555) 123-4567' },
                                { icon: '🕒', label: 'Hours', value: 'Mon-Fri: 8AM-7PM, Sat: 9AM-5PM' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-colors duration-300"
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <p className="text-emerald-400 text-sm font-medium">{item.label}</p>
                                        <p className="text-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div
                        className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    >
                        <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 max-h-[70vh] overflow-y-auto custom-scrollbar">
                            {/* Success overlay */}
                            {isSubmitted && (
                                <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center z-20">
                                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 animate-pulse">
                                        <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Appointment Requested!</h3>
                                    <p className="text-slate-400 text-center">We'll contact you shortly.</p>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-white mb-4">Request Appointment</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name & Email */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-slate-400 text-sm mb-1">Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-emerald-500 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-slate-400 text-sm mb-1">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-emerald-500 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Phone & Date */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-slate-400 text-sm mb-1">Phone *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-emerald-500 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-slate-400 text-sm mb-1">Preferred Date *</label>
                                        <input
                                            type="date"
                                            required
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-emerald-500 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Service */}
                                <div>
                                    <label className="block text-slate-400 text-sm mb-1">Service *</label>
                                    <select
                                        required
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-slate-800">Select a service...</option>
                                        {services.map((service) => (
                                            <option key={service} value={service} className="bg-slate-800">
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-slate-400 text-sm mb-1">Additional Notes</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={2}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                                        placeholder="Any specific concerns..."
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full py-4 btn-embossed text-white font-semibold rounded-xl relative overflow-hidden group ripple"
                                >
                                    <span className="relative z-10">Book Appointment</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default BookingSection;
