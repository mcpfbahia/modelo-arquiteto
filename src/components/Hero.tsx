import React from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 bg-white overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2 z-0 hidden lg:block" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <span className="inline-block px-4 py-1 bg-secondary/10 border border-secondary text-secondary text-sm font-bold uppercase tracking-widest mb-8">
                            Lauro de Freitas - BA
                        </span>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-8">
                            Arquitetura que reflete sua <span className="text-secondary italic">identidade</span> e valoriza seu imóvel.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
                            Criamos projetos exclusivos e inteligentes focados em transformar espaços com elegância, funcionalidade e total viabilidade técnica.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Button
                                variant="primary"
                                size="lg"
                                className="bg-primary hover:bg-black text-white group"
                                onClick={() => window.open('https://wa.me/5571999999999', '_blank')}
                            >
                                Falar com Especialista
                                <span className="group-hover:translate-x-1 transition-transform inline-block ml-2">→</span>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-gray-200 hover:border-secondary hover:text-secondary"
                                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Ver Portfólio
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative background for image */}
                        <div className="absolute -inset-4 bg-secondary/10 -rotate-2 rounded-2xl -z-10" />

                        <div className="relative h-[350px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                            <img
                                src="/src/assets/portfolio/facade.png"
                                alt="Luxury Architecture"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Social Proof Badge floating over the image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="absolute -bottom-6 -left-6 md:-left-12 flex items-center gap-4 bg-white p-5 shadow-2xl border-l-4 border-secondary rounded-lg z-20"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden ring-2 ring-transparent">
                                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-primary whitespace-nowrap">+250 Projetos Entregues</p>
                                <p className="text-xs text-gray-500 whitespace-nowrap">Qualidade e exclusividade</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
