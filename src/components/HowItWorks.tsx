import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Briefing",
        description: "Entendemos seus desejos, necessidades e estilo de vida para criar algo único."
    },
    {
        number: "02",
        title: "Criação",
        description: "Desenvolvemos o conceito em 3D realista para que você visualize cada detalhe do projeto."
    },
    {
        number: "03",
        title: "Execução",
        description: "Entregamos todos os detalhamentos técnicos necessários para que sua obra comece com segurança."
    },
    {
        number: "04",
        title: "Entrega",
        description: "Acompanhamos a finalização para garantir que o resultado supere todas as suas expectativas."
    }
];

export const HowItWorks = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Processo</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-primary">Como damos vida ao seu sonho</h3>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-100 -z-10" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center px-4"
                            >
                                <div className="relative inline-block mb-8">
                                    <div className="text-8xl font-black text-gray-50 absolute -top-10 left-1/2 -translate-x-1/2 select-none">
                                        {step.number}
                                    </div>
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-secondary relative z-10 mx-auto">
                                        <span className="text-xl font-bold">{step.number}</span>
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold text-primary mb-4">{step.title}</h4>
                                <p className="text-gray-600 max-w-xs mx-auto">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
