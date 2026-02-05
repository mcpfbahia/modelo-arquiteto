import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Residência Lauro de Freitas",
        category: "Arquitetura Residencial",
        image: "/assets/portfolio/facade.png",
        className: "md:col-span-2 md:row-span-2"
    },
    {
        title: "Apartamento Vilas",
        category: "Design de Interiores",
        image: "/assets/portfolio/kitchen.png",
        className: "md:col-span-2 md:row-span-1"
    },
    {
        title: "Suíte Master Clean",
        category: "Interiores",
        image: "/assets/portfolio/bedroom.png",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Área Gourmet & Pool",
        category: "Lazer",
        image: "/assets/portfolio/pool.png",
        className: "md:col-span-1 md:row-span-1"
    }
];

export const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4 text-reveal py-1">Portfólio Exclusivo</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">Projetos que Inspiram</h3>
                    <div className="w-20 h-1 bg-secondary mx-auto"></div>
                </div>

                <div className="bento-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative overflow-hidden group cursor-pointer ${project.className}`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                                <h4 className="text-white text-2xl font-bold">{project.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
