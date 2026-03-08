import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { CookiePolicy, TermsOfUse, PrivacyPolicy } from './LegalContent';

type LegalType = 'cookie' | 'terms' | 'privacy' | null;

interface LegalDialogProps {
    type: LegalType;
    isOpen: boolean;
    onClose: () => void;
}

export const LegalDialog: React.FC<LegalDialogProps> = ({ type, isOpen, onClose }) => {
    const getTitle = () => {
        switch (type) {
            case 'cookie': return 'Cookie Policy';
            case 'terms': return 'Terms of Use';
            case 'privacy': return 'Privacy Policy';
            default: return '';
        }
    };

    const getContent = () => {
        switch (type) {
            case 'cookie': return <CookiePolicy />;
            case 'terms': return <TermsOfUse />;
            case 'privacy': return <PrivacyPolicy />;
            default: return null;
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col bg-navy border-white/10 text-slate-text sm:rounded-card shadow-2xl">
                <DialogHeader className="border-b border-white/10 pb-4 mb-2">
                    <DialogTitle className="text-2xl font-display font-bold text-slate-text">
                        {getTitle()}
                    </DialogTitle>
                </DialogHeader>

                <ScrollArea className="flex-1 pr-4">
                    <div className="py-2">
                        {getContent()}
                    </div>
                </ScrollArea>

                <div className="mt-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-coral hover:bg-coral/90 text-navy font-bold rounded-btn transition-colors"
                    >
                        Close
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
