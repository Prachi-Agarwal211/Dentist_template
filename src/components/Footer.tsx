'use client';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            'Cosmetic Dentistry',
            'Dental Implants',
            'Orthodontics',
            'Teeth Whitening',
            'Emergency Care',
        ],
        company: [
            'About Us',
            'Our Doctors',
            'Careers',
            'Blog',
            'Contact',
        ],
        support: [
            'FAQs',
            'Insurance',
            'Patient Forms',
            'Privacy Policy',
            'Terms of Service',
        ],
    };

    return (
        <footer className="relative pt-24 pb-8 overflow-hidden">
            {/* Top decoration */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <a href="#home" className="inline-flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                <span className="text-xl font-bold text-white">DS</span>
                            </div>
                            <span className="text-2xl font-semibold text-white">
                                Dental<span className="text-emerald-400">Studio</span>
                            </span>
                        </a>
                        <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
                            Creating beautiful smiles with cutting-edge technology and compassionate care.
                            Your journey to optimal oral health starts here.
                        </p>

                        {/* Social links */}
                        <div className="flex gap-3">
                            {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-300"
                                >
                                    {social === 'facebook' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    )}
                                    {social === 'instagram' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="18" cy="6" r="1" />
                                        </svg>
                                    )}
                                    {social === 'twitter' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    )}
                                    {social === 'linkedin' && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link}>
                                    <a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                        <div>
                            <h4 className="text-white font-semibold mb-1">Subscribe to our newsletter</h4>
                            <p className="text-slate-400 text-sm">Get dental tips and exclusive offers delivered to your inbox.</p>
                        </div>
                        <form className="flex gap-3 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-64 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-emerald-500/50 focus:outline-none transition-all duration-300"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 btn-embossed text-white rounded-r-xl font-medium"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} DentalStudio. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-xs">
                        Designed with 💚 for healthy smiles
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
