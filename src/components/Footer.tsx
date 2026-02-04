import React from 'react';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-primary pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-10 h-10 bg-secondary flex items-center justify-center">
                                <span className="text-primary font-bold text-xl">AP</span>
                            </div>
                            <span className="text-white font-bold text-xl tracking-tighter uppercase whitespace-nowrap">
                                ARQUITETO <span className="text-secondary">PRO</span>
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Referência em arquitetura de alto padrão e design de interiores em Lauro de Freitas e região.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/arquitetopro_ficticio" target="_blank" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Navegação</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#portfolio" className="hover:text-secondary transition-colors">Portfólio</a></li>
                            <li><a href="#servicos" className="hover:text-secondary transition-colors">Serviços</a></li>
                            <li><a href="#sobre" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
                            <li><a href="https://wa.me/5571999999999" target="_blank" className="hover:text-secondary transition-colors text-accent">Orçamento via WhatsApp</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Contato</h4>
                        <ul className="space-y-6 text-gray-400">
                            <li className="flex gap-4">
                                <MapPin className="text-secondary shrink-0" size={20} />
                                <span>Rua Principal, 123 - Centro, Lauro de Freitas - BA, 42702-000</span>
                            </li>
                            <li className="flex gap-4">
                                <Phone className="text-secondary shrink-0" size={20} />
                                <span>(71) 99999-9999</span>
                            </li>
                            <li className="flex gap-4">
                                <Mail className="text-secondary shrink-0" size={20} />
                                <span>contato@arquitetopro.com.br</span>
                            </li>
                            <li className="flex gap-4">
                                <Clock className="text-secondary shrink-0" size={20} />
                                <span>Seg - Sex: 09h às 18h</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="lg:col-span-1 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 h-64 border border-white/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15557.447551062402!2d-38.3304561!3d-12.8850614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716164f9e61c773%3A0x6d97c0b02f0672e8!2sLauro%20de%20Freitas%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs">
                    <p>© 2024 Arquiteto Pro - Projetos & Interiores. Todos os direitos reservados.</p>
                    <div className="tracking-widest text-center md:text-right">
                        <span>
                            Desenvolvido com tecnologia e performance por <br className="md:hidden" />
                            <a href="https://agilizedev.site?utm_source=rodape&utm_medium=site_arquitetopro" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-all duration-300 font-semibold">AgilizeDev</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
