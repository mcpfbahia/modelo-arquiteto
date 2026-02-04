import React from 'react';
import { Home, PenTool, Layout, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Home className="w-10 h-10" />,
        title: "Projetos Residenciais",
        description: "Do conceito inicial à planta executiva detalhada. Criamos a casa dos seus sonhos com precisão técnica.",
    },
    {
        icon: <PenTool className="w-10 h-10" />,
        title: "Design de Interiores",
        description: "Mobiliário, iluminação e decoração personalizada para transformar ambientes comuns em espaços extraordinários.",
    },
    {
        icon: <Layout className="w-10 h-10" />,
        title: "Consultoria de Obra",
        description: "Acompanhamento técnico para garantir que a execução seja 100% fiel ao projeto aprovado.",
    }
];

export const Services = () => {
    return (
        <section id="servicos" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Nossa Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-primary">Serviços que unem estética e funcionalidade</h3>
                    </div>
                    <div className="hidden md:block">
                        <a href="https://wa.me/5571999999999" target="_blank" className="flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                            Solicitar Orçamento <ChevronRight />
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-12 border-b-4 border-transparent hover:border-secondary transition-all group shadow-sm hover:shadow-xl"
                        >
                            <div className="text-secondary mb-8 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-primary mb-4">{service.title}</h4>
                            <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
                            <div className="w-10 h-1 bg-gray-200 group-hover:w-full transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
