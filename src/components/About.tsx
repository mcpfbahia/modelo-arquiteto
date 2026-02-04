import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section id="sobre" className="py-24 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 relative"
                    >
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/5 -z-10 rounded-full" />
                        <div className="relative border-[20px] border-white shadow-2xl">
                            <img
                                src="/src/assets/portfolio/facade.png"
                                alt="Arquiteto Pro Office"
                                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-primary text-white p-10 hidden lg:block">
                                <p className="text-5xl font-bold text-secondary mb-2">15+</p>
                                <p className="text-xs uppercase tracking-widest font-medium">Anos de Experiência</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Sobre Nós</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">Excelência técnica e paixão pelo design.</h3>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Na Arquiteto Pro, acreditamos que cada traço conta uma história. Localizados no coração de Lauro de Freitas, nos dedicamos a transformar o comum em extraordinário através de projetos que equilibram criatividade e rigor técnico.
                            </p>
                            <p>
                                Nossa abordagem é centrada no cliente: ouvimos seus desejos, entendemos suas necessidades e entregamos soluções que valorizam seu patrimônio e elevam sua qualidade de vida.
                            </p>
                            <p className="font-bold text-primary italic">
                                "Não projetamos apenas prédios; projetamos refúgios e palcos para a vida acontecer."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
