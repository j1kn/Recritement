import { LegalLayout } from '../components/LegalLayout';
import { CookiePolicy as CookiePolicyContent } from '../components/LegalContent';

export default function CookiePolicyPage() {
    return (
        <LegalLayout>
            <CookiePolicyContent />
        </LegalLayout>
    );
}
