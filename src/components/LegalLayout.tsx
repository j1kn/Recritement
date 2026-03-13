import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LegalLayoutProps {
    children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-navy text-slate-text pt-24 pb-16 px-6 lg:px-[6vw]">
            <div className="max-w-4xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-coral hover:text-coral-light mb-8 transition-colors group"
                >
                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>
                <div className="card-glass rounded-card p-8 lg:p-12 border border-white/10 shadow-2xl">
                    {children}
                </div>
            </div>
        </div>
    );
};
