import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero */}
      <section style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '6rem 2rem 3rem'
      }}>
        <div className="glass-panel" style={{
          padding: '0.5rem 1rem',
          marginBottom: '2rem',
          borderRadius: '9999px',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--primary)'
        }}>
          v1.0 Now Available
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
          marginBottom: '1.5rem',
          letterSpacing: '-0.05em'
        }}>
          The <span className="text-gradient">AI Mastery</span> Manual
        </h1>

        <p style={{
          fontSize: '1.25rem',
          color: 'var(--foreground)',
          opacity: 0.8,
          maxWidth: '42rem',
          marginBottom: '2.5rem',
          lineHeight: 1.6
        }}>
          From simple apps to autonomous agents. The complete interactive guide to building, deploying, and monetizing AI technology.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/manual" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
            Start Reading
          </Link>
          <Link href="/pricing" className="btn btn-secondary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
            View Syllabus
          </Link>
        </div>
      </section>

      {/* Quick Index / "Jump to Goods" */}
      <section className="container" style={{ paddingBottom: '5rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Jump Straight In</h2>
            <p style={{ opacity: 0.7 }}>Direct access to high-value implementations.</p>
          </div>
          <Link href="/manual" style={{ color: 'var(--primary)', fontWeight: 600 }}>View Full Index →</Link>
        </div>

        <div className="grid-cols-3">
          {[
            { title: "Building n8n Agents", desc: "Complete workflow for autonomous task handling.", tag: "Agents" },
            { title: "Consulting Roadmap", desc: "How to structure your first $10k AI contract.", tag: "Business" },
            { title: "Custom Model Tuning", desc: "Fine-tuning basics for specialized tasks.", tag: "Technical" },
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{
              padding: '1.5rem',
              cursor: 'pointer',
              transition: 'border-color 0.2s'
            }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--primary)',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>{item.tag}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
