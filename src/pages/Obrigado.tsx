import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Obrigado = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-reveal">
                    <CheckCircle size={48} className="text-secondary" />
                </div>
                <h1 className="text-4xl font-bold text-primary mb-4">Mensagem Enviada!</h1>
                <p className="text-gray-600 mb-10 text-lg">
                    Obrigado pelo seu interesse. Em breve, um de nossos especialistas entrará em contato para agendar seu orçamento gratuito.
                </p>
                <div className="flex flex-col gap-4">
                    <Button variant="whatsapp" onClick={() => window.open('https://wa.me/5571999999999', '_blank')}>
                        Falar agora no WhatsApp
                    </Button>
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center justify-center gap-2 text-primary font-medium hover:text-secondary transition-colors mt-4"
                    >
                        <ArrowLeft size={18} /> Voltar para o site
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Obrigado;
