import { LegalLayout } from '../components/LegalLayout';
import { PrivacyPolicy as PrivacyPolicyContent } from '../components/LegalContent';

export default function PrivacyPolicyPage() {
    return (
        <LegalLayout>
            <PrivacyPolicyContent />
        </LegalLayout>
    );
}
