import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Mariana Silva",
        text: "O projeto superou todas as expectativas. Cada detalhe foi pensado no nosso conforto.",
        role: "Proprietária Residencial"
    },
    {
        name: "Ricardo Oliveira",
        text: "Profissionalismo impecável e entrega dentro do prazo. Recomendo muito em Lauro de Freitas.",
        role: "Empresário"
    },
    {
        name: "Camila Souza",
        text: "Transformaram meu apartamento em um refúgio. Design moderno e muito bom gosto.",
        role: "Digital Influencer"
    },
    {
        name: "André Santos",
        text: "Consultoria técnica de alto nível. Evitamos muitos gastos desnecessários na obra.",
        role: "Investidor Imobiliário"
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 bg-primary text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Depoimentos</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">A Confiança de quem já realizou</h3>
                    <div className="flex justify-center gap-1">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-secondary text-secondary w-5 h-5" />)}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className="mb-6">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="inline-block fill-secondary text-secondary w-4 h-4 mr-1" />)}
                            </div>
                            <p className="text-gray-300 italic mb-8 italic">"{t.text}"</p>
                            <div>
                                <p className="font-bold text-secondary">{t.name}</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
