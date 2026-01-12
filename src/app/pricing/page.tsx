export default function PricingPage() {
    return (
        <div className="container flex-center" style={{ minHeight: '100vh', flexDirection: 'column', textAlign: 'center', padding: '4rem 1rem' }}>
            <h1 className="text-gradient" style={{ marginBottom: '1rem', fontSize: '3rem' }}>Unlock Full Access</h1>
            <p style={{ marginBottom: '3rem', opacity: 0.8, fontSize: '1.25rem' }}>Join the elite circle of AI Builders.</p>

            <div className="glass-panel" style={{ padding: '3rem', maxWidth: '500px', width: '100%', border: '1px solid var(--primary)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Yearly Membership</div>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary)' }}>$299<span style={{ fontSize: '1rem', opacity: 0.6, color: 'var(--foreground)' }}>/year</span></div>
                <p style={{ marginBottom: '2rem', opacity: 0.7 }}>Commit to your mastery. Get certified.</p>

                <ul style={{ textAlign: 'left', marginBottom: '2rem', display: 'grid', gap: '1rem' }}>
                    {['Full Access to All Modules', 'Weekly Live Workshops', 'Certification upon Completion', 'Private Discord Community', 'Source Code for All Agents'].map(item => (
                        <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span> {item}
                        </li>
                    ))}
                </ul>

                <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.125rem' }}>Get Started</button>
                <p style={{ marginTop: '1rem', fontSize: '0.875rem', opacity: 0.5 }}>14-day money-back guarantee.</p>
            </div>
        </div>
    );
}
