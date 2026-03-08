

export const CookiePolicy = () => (
    <div className="space-y-6 text-slate-text">
        <div>
            <h1 className="text-3xl font-display font-bold mb-2">Cookie Policy</h1>
            <p className="text-slate-muted italic">Last updated: March 2026</p>
        </div>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">1. What Are Cookies?</h2>
            <p className="text-slate-muted">
                Cookies are small text files placed on your device when you visit a website. They help the site function properly, remember your preferences, and provide us with information about how the site is used.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">2. How We Use Cookies</h2>
            <p className="text-slate-muted mb-3">We use cookies to:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-muted">
                <li>Ensure the website functions correctly</li>
                <li>Understand how visitors use our site so we can improve it</li>
                <li>Remember your preferences during your visit</li>
                <li>Support the performance and security of the site</li>
            </ul>
            <p className="text-slate-muted mt-3 font-semibold">
                We do not use cookies to collect sensitive personal information or to serve targeted advertising.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">3. Types of Cookies We Use</h2>

            <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
            <p className="text-slate-muted mb-4">These are necessary for the website to function. Without them, certain features may not work. They cannot be disabled.</p>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse border border-white/10 mb-6">
                    <thead className="bg-white/10 uppercase text-xs font-bold font-display">
                        <tr>
                            <th className="p-3 border border-white/10">Cookie</th>
                            <th className="p-3 border border-white/10">Purpose</th>
                            <th className="p-3 border border-white/10">Duration</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-muted">
                        <tr>
                            <td className="p-3 border border-white/10">Session cookie</td>
                            <td className="p-3 border border-white/10">Maintains your session as you browse</td>
                            <td className="p-3 border border-white/10">Session</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-white/10">Security cookie</td>
                            <td className="p-3 border border-white/10">Helps protect against cross-site request forgery</td>
                            <td className="p-3 border border-white/10">Session</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 className="text-lg font-semibold mb-2">Analytics Cookies</h3>
            <p className="text-slate-muted mb-4">These help us understand how visitors interact with our website, allowing us to improve the user experience. All data collected is anonymous.</p>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse border border-white/10 mb-6">
                    <thead className="bg-white/10 uppercase text-xs font-bold font-display">
                        <tr>
                            <th className="p-3 border border-white/10">Cookie</th>
                            <th className="p-3 border border-white/10">Provider</th>
                            <th className="p-3 border border-white/10">Purpose</th>
                            <th className="p-3 border border-white/10">Duration</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-muted">
                        <tr>
                            <td className="p-3 border border-white/10">_ga</td>
                            <td className="p-3 border border-white/10">Google Analytics</td>
                            <td className="p-3 border border-white/10">Distinguishes unique users</td>
                            <td className="p-3 border border-white/10">2 years</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-white/10">ga*</td>
                            <td className="p-3 border border-white/10">Google Analytics</td>
                            <td className="p-3 border border-white/10">Tracks session state</td>
                            <td className="p-3 border border-white/10">2 years</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 className="text-lg font-semibold mb-2">Functional Cookies</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse border border-white/10">
                    <thead className="bg-white/10 uppercase text-xs font-bold font-display">
                        <tr>
                            <th className="p-3 border border-white/10">Cookie</th>
                            <th className="p-3 border border-white/10">Purpose</th>
                            <th className="p-3 border border-white/10">Duration</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-muted">
                        <tr>
                            <td className="p-3 border border-white/10">cookie_consent</td>
                            <td className="p-3 border border-white/10">Stores your cookie preferences</td>
                            <td className="p-3 border border-white/10">1 year</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">4. Third-Party Cookies</h2>
            <p className="text-slate-muted">
                Some cookies on our site are set by third-party services we use, such as Google Analytics. These third parties have their own privacy policies and we recommend reviewing them:
            </p>
            <p className="mt-2 text-coral hover:underline focus:outline-none">
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Analytics Privacy Policy</a>
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">5. Managing Your Cookie Preferences</h2>
            <p className="text-slate-muted mb-4">
                When you first visit our website, you will be asked to accept or decline non-essential cookies via our cookie banner.
            </p>
            <p className="text-slate-muted mb-4">
                You can also manage or delete cookies at any time through your browser settings. Please note that disabling cookies may affect how the website functions.
            </p>
            <p className="text-slate-muted mb-2 font-semibold font-display italic">Guidance on managing cookies in common browsers:</p>
            <ul className="space-y-1 text-slate-muted text-sm list-inside list-disc">
                <li>Google Chrome: Settings → Privacy and Security → Cookies</li>
                <li>Safari: Preferences → Privacy</li>
                <li>Firefox: Options → Privacy & Security</li>
                <li>Microsoft Edge: Settings → Cookies and Site Permissions</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">6. Changes to This Policy</h2>
            <p className="text-slate-muted">
                We may update this Cookie Policy from time to time to reflect changes in technology or legislation. The date at the top of this page will always show when it was last updated.
            </p>
        </section>

        <section className="pt-4 border-t border-white/10">
            <h2 className="text-xl font-bold mb-3 text-coral">7. Contact Us</h2>
            <p className="text-slate-muted font-display text-sm">
                If you have any questions about our use of cookies, please contact us:
                <br />Email: <span className="text-coral">support@recruit28.co.uk</span>
                <br />Address: London
            </p>
        </section>
    </div>
);

export const TermsOfUse = () => (
    <div className="space-y-6 text-slate-text">
        <div>
            <h1 className="text-3xl font-display font-bold mb-2">Website Terms of Use</h1>
            <p className="text-slate-muted italic">Last updated: March 2026</p>
        </div>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">1. About These Terms</h2>
            <p className="text-slate-muted">
                These Terms of Use govern your access to and use of the Recruit 28 website. By using our website, you agree to these terms in full. If you do not agree, please stop using the site.
            </p>
            <p className="text-slate-muted mt-3">
                Recruit 28 Ltd Company number 17026940 is a recruitment agency registered in England and Wales. Registered address: London. Email: <span className="text-coral">support@recruit28.co.uk</span>
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">2. Use of This Website</h2>
            <p className="text-slate-muted mb-3">You may use this website for lawful purposes only. You must not:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-muted">
                <li>Use the site in any way that violates applicable UK or international law</li>
                <li>Submit false, misleading, or fraudulent information via any form on the site</li>
                <li>Attempt to gain unauthorised access to any part of the site or its systems</li>
                <li>Transmit any harmful, offensive, or disruptive content</li>
                <li>Use automated tools to scrape, copy, or extract content from the site without our written permission</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">3. Intellectual Property</h2>
            <p className="text-slate-muted">
                All content on this website — including text, design, logos, and graphics — is owned by or licensed to Recruit 28. You may not reproduce, distribute, or use any content from this site without our prior written consent.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">4. Contact Form & Enquiries</h2>
            <p className="text-slate-muted mb-3">When you submit an enquiry via our contact form, you agree that:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-muted">
                <li>The information you provide is accurate and complete</li>
                <li>We may use your details to respond to your enquiry and for related follow-up</li>
                <li>Your data will be handled in accordance with our Privacy Policy</li>
                <li>We do not guarantee a specific response time to enquiries submitted through the website.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">5. Third-Party Links</h2>
            <p className="text-slate-muted">
                Our website may contain links to third-party websites for your convenience. We have no control over those sites and accept no responsibility for their content, availability, or privacy practices. A link does not imply our endorsement of that site.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">6. Disclaimer of Warranties</h2>
            <p className="text-slate-muted mb-3">This website is provided on an "as is" basis. While we take care to keep information accurate and up to date, we make no warranties — express or implied — regarding:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-muted">
                <li>The accuracy or completeness of any content on the site</li>
                <li>The availability or uninterrupted operation of the site</li>
                <li>That the site is free from errors, viruses, or other harmful components</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">7. Limitation of Liability</h2>
            <p className="text-slate-muted mb-3">To the fullest extent permitted by UK law, Recruit 28 shall not be liable for any direct, indirect, or consequential loss arising from:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-muted">
                <li>Your use of, or inability to use, this website</li>
                <li>Reliance on any content published on this website</li>
                <li>Unauthorised access to or alteration of your data</li>
            </ul>
            <p className="text-slate-muted mt-3">Nothing in these terms limits our liability for fraud, death, or personal injury caused by our negligence.</p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">8. Privacy & Cookies</h2>
            <p className="text-slate-muted">
                Your use of this website is also governed by our Privacy Policy and Cookie Policy, both of which are incorporated into these terms by reference. Please review them to understand how we handle your data.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">9. Changes to the Website or These Terms</h2>
            <p className="text-slate-muted">
                We reserve the right to modify or withdraw any part of the website at any time without notice, and to update these Terms of Use at any time. The date at the top of this page will reflect the most recent update. Continued use of the site after any changes constitutes your acceptance of the revised terms.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">10. Governing Law</h2>
            <p className="text-slate-muted">
                These Terms of Use are governed by the laws of England and Wales. Any disputes arising from your use of this website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
        </section>

        <section className="pt-4 border-t border-white/10">
            <h2 className="text-xl font-bold mb-3 text-coral">11. Contact Us</h2>
            <p className="text-slate-muted font-display text-sm">
                If you have any questions about these Terms of Use, please contact us at:
                <br />Email: <span className="text-coral">support@recruit28.co.uk</span>
                <br />Address: London
            </p>
        </section>
    </div>
);

export const PrivacyPolicy = () => (
    <div className="space-y-6 text-slate-text">
        <div>
            <h1 className="text-3xl font-display font-bold mb-2">Privacy Policy</h1>
            <p className="text-slate-muted italic">Last updated: March 2026</p>
        </div>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">1. Who We Are</h2>
            <p className="text-slate-muted">
                Recruit 28 is a recruitment agency based in the United Kingdom. We are committed to protecting your personal data and handling it responsibly in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <p className="text-slate-muted mt-3">
                For the purposes of data protection law, Recruit 28 Ltd Company number 17026940 is the data controller of your personal information.
                <br /><br />
                Contact:
                <br />Email: <span className="text-coral">support@recruit28.com</span>
                <br />Address: London
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">2. What Data We Collect</h2>

            <h3 className="text-lg font-semibold mb-2">Candidates:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-muted mb-4">
                <li>Full name, contact details (email, phone, address)</li>
                <li>CV, work history, qualifications, and skills</li>
                <li>Right to work documentation</li>
                <li>References and employment history</li>
                <li>Diversity and equal opportunities information (where voluntarily provided)</li>
                <li>Communication records between you and our team</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Clients (Hiring Companies):</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-muted mb-4">
                <li>Contact name, job title, business email, and phone number</li>
                <li>Company name and address</li>
                <li>Details of roles and hiring requirements</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Website Visitors:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-muted">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on site</li>
                <li>Contact form submissions</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">3. How We Collect Your Data</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-muted">
                <li>Directly from you via our website contact form, email, or phone</li>
                <li>From your CV or application submitted to us</li>
                <li>From third-party job boards or professional networking platforms (e.g. LinkedIn)</li>
                <li>From referrals by other candidates or clients</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">4. Why We Use Your Data (Legal Basis)</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse border border-white/10">
                    <thead className="bg-white/10 uppercase text-xs font-bold font-display">
                        <tr>
                            <th className="p-3 border border-white/10">Purpose</th>
                            <th className="p-3 border border-white/10">Legal Basis</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-muted">
                        <tr>
                            <td className="p-3 border border-white/10">Matching candidates to suitable roles</td>
                            <td className="p-3 border border-white/10">Legitimate interests / Contract</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-white/10">Communicating with clients about vacancies</td>
                            <td className="p-3 border border-white/10">Legitimate interests / Contract</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-white/10">Responding to enquiries via our contact form</td>
                            <td className="p-3 border border-white/10">Legitimate interests</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-white/10">Sending relevant job opportunities to candidates</td>
                            <td className="p-3 border border-white/10">Legitimate interests / Consent</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-white/10">Complying with legal obligations</td>
                            <td className="p-3 border border-white/10">Legal obligation</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-white/10">Improving our website and services</td>
                            <td className="p-3 border border-white/10">Legitimate interests</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">5. How We Share Your Data</h2>
            <p className="text-slate-muted mb-3">We will only share your personal data with third parties where necessary:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-muted">
                <li><span className="font-bold text-slate-text">Client companies</span> – candidate profiles are shared with hiring clients only with your knowledge and for the purposes of a specific role</li>
                <li><span className="font-bold text-slate-text">IT and software providers</span> – who support our systems and are bound by data processing agreements</li>
                <li><span className="font-bold text-slate-text">Legal or regulatory authorities</span> – where required by law</li>
            </ul>
            <p className="text-slate-muted mt-3 font-semibold italic">We do not sell your personal data to any third party.</p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">6. International Transfers</h2>
            <p className="text-slate-muted">
                We do not routinely transfer your personal data outside of the UK. If we ever do, we will ensure appropriate safeguards are in place in accordance with UK GDPR requirements.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">7. How Long We Keep Your Data</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-muted">
                <li><span className="font-bold text-slate-text">Active candidates:</span> For the duration of our working relationship and up to 2 years after last contact</li>
                <li><span className="font-bold text-slate-text">Placed candidates:</span> For up to 6 years following placement, in line with legal requirements</li>
                <li><span className="font-bold text-slate-text">Client contacts:</span> For the duration of the business relationship and up to 3 years after last contact</li>
                <li><span className="font-bold text-slate-text">Website enquiries:</span> Up to 12 months</li>
            </ul>
            <p className="text-slate-muted mt-3">You can request deletion of your data at any time (see Your Rights below).</p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">8. Your Rights</h2>
            <p className="text-slate-muted mb-3">Under UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-muted">
                <li>Right to access – Request a copy of the personal data we hold about you</li>
                <li>Right to rectification – Ask us to correct inaccurate or incomplete data</li>
                <li>Right to erasure – Request that we delete your personal data</li>
                <li>Right to restrict processing – Ask us to limit how we use your data</li>
                <li>Right to data portability – Receive your data in a structured, commonly used format</li>
                <li>Right to object – Object to processing based on legitimate interests</li>
                <li>Right to withdraw consent – Where processing is based on consent, you may withdraw it at any time</li>
            </ul>
            <p className="text-slate-muted mt-4">
                To exercise any of these rights, please contact us at <span className="text-coral">support@recruit28.co.uk</span>. We will respond within one month of receiving your request.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">9. Cookies</h2>
            <p className="text-slate-muted">
                Our website uses cookies to improve your browsing experience. For full details on what cookies we use and how to manage them, please refer to our Cookie Policy.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">10. How We Protect Your Data</h2>
            <p className="text-slate-muted">
                We take the security of your personal data seriously and have appropriate technical and organisational measures in place to prevent unauthorised access, loss, or disclosure.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">11. Complaints</h2>
            <p className="text-slate-muted mb-3">
                If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the UK's data protection regulator:
            </p>
            <p className="text-slate-muted mb-4">
                Information Commissioner's Office (ICO)
                <br />Website: <a href="https://www.ico.org.uk" target="_blank" className="text-coral hover:underline">www.ico.org.uk</a>
                <br />Helpline: 0303 123 1113
            </p>
            <p className="text-slate-muted font-semibold">
                We would, however, appreciate the opportunity to address your concerns directly before you contact the ICO. Please reach out to us first at <span className="text-coral">support@recruit28.com</span>
            </p>
        </section>

        <section>
            <h2 className="text-xl font-bold mb-3 text-coral">12. Changes to This Policy</h2>
            <p className="text-slate-muted">
                We may update this Privacy Policy from time to time. The latest version will always be available on our website, with the date of the most recent update shown at the top of this page.
            </p>
        </section>
    </div>
);
