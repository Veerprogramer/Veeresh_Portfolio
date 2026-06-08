"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .hero {
          position: relative;
          width: 100%;
          min-height: 100svh;
          background-color: #F5F7F2;
          font-family: 'Satoshi', sans-serif;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* ── Gradient layers ── */
        .hero__gradient-primary {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(79,122,90,0.18), transparent 50%),
            radial-gradient(circle at 85% 70%, rgba(79,122,90,0.12), transparent 40%);
          pointer-events: none;
          z-index: 0;
        }

        .hero__gradient-blob {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(79,122,90,0.07) 0%, transparent 70%);
          top: -120px;
          left: -120px;
          filter: blur(40px);
          pointer-events: none;
          z-index: 0;
        }

        .hero__gradient-blob--secondary {
          width: 480px;
          height: 480px;
          top: auto;
          left: auto;
          bottom: 60px;
          right: -80px;
          background: radial-gradient(circle, rgba(79,122,90,0.09) 0%, transparent 70%);
        }

        /* ── Nav ── */
        .hero__nav {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 36px 64px;
        }

        .hero__logo {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: #23302A;
          text-transform: uppercase;
        }

        .hero__nav-links {
          display: flex;
          align-items: center;
          gap: 40px;
          list-style: none;
        }

        .hero__nav-link {
          font-size: 14px;
          font-weight: 400;
          color: #5D6D63;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .hero__nav-link:hover {
          color: #23302A;
        }

        /* ── Main content ── */
        .hero__content {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 64px 120px;
          max-width: 1400px;
        }

        .hero__eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 40px;
          opacity: 0;
          animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s forwards;
        }

        .hero__eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4F7A5A;
          flex-shrink: 0;
        }

        .hero__eyebrow-text {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: #4F7A5A;
          text-transform: uppercase;
        }

        /* ── Heading ── */
        .hero__heading {
          font-size: clamp(56px, 7vw, 92px);
          font-weight: 700;
          line-height: 1.02;
          letter-spacing: -0.03em;
          color: #23302A;
          max-width: 780px;
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s forwards;
        }

        .hero__heading em {
          font-style: normal;
          color: #4F7A5A;
        }

        /* ── Sub heading ── */
        .hero__subheading {
          margin-top: 36px;
          font-size: clamp(16px, 1.4vw, 20px);
          font-weight: 400;
          line-height: 1.65;
          color: #5D6D63;
          max-width: 480px;
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s forwards;
        }

        /* ── CTAs ── */
        .hero__ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 56px;
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s forwards;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 4px;
          font-family: 'Satoshi', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
        }

        .btn--primary {
          background: #23302A;
          color: #F5F7F2;
        }

        .btn--primary:hover {
          background: #4F7A5A;
          transform: translateY(-1px);
        }

        .btn--primary svg {
          transition: transform 0.25s cubic-bezier(0.16,1,0.3,1);
        }

        .btn--primary:hover svg {
          transform: translate(2px, -2px);
        }

        .btn--ghost {
          background: transparent;
          color: #23302A;
          border: 1px solid rgba(35,48,42,0.25);
        }

        .btn--ghost:hover {
          border-color: rgba(35,48,42,0.5);
          transform: translateY(-1px);
        }

        /* ── Scroll indicator ── */
        .hero__scroll {
          position: absolute;
          bottom: 48px;
          left: 64px;
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 0;
          animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.9s forwards;
          z-index: 10;
        }

        .hero__scroll-line {
          width: 32px;
          height: 1px;
          background: #5D6D63;
        }

        .hero__scroll-text {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #5D6D63;
          font-weight: 500;
        }

        /* ── Portrait ── */
        .hero__portrait-wrapper {
          position: absolute;
          right: 80px;
          bottom: 64px;
          z-index: 10;
          opacity: 0;
          animation: portraitReveal 1.1s cubic-bezier(0.16,1,0.3,1) 0.5s forwards;
        }

        .hero__portrait-ring {
          position: relative;
          width: 360px;
          height: 360px;
        }

        /* Subtle decorative arc around the portrait */
        .hero__portrait-arc {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 1px solid rgba(79,122,90,0.2);
          pointer-events: none;
        }

        .hero__portrait-arc::before {
          content: '';
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          border: 1px dashed rgba(79,122,90,0.12);
        }

        .hero__portrait-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
          box-shadow:
            0 0 0 1px rgba(79,122,90,0.15),
            0 32px 80px -16px rgba(35,48,42,0.22),
            0 8px 24px -8px rgba(35,48,42,0.12);
        }
        
        .hero__portrait-img:hover {
          filter: grayscale(0%);
        }

        /* Fallback avatar when no real image is used */
        .hero__portrait-fallback {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #D4E3D9 0%, #B8CFC0 50%, #9DBDAA 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 0 0 1px rgba(79,122,90,0.15),
            0 32px 80px -16px rgba(35,48,42,0.22),
            0 8px 24px -8px rgba(35,48,42,0.12);
          overflow: hidden;
        }

        .hero__portrait-fallback svg {
          width: 55%;
          height: 55%;
          opacity: 0.5;
        }

        /* Small badge beside portrait */
        .hero__portrait-badge {
          position: absolute;
          top: 24px;
          left: -24px;
          background: #F5F7F2;
          border: 1px solid rgba(79,122,90,0.2);
          border-radius: 100px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 16px rgba(35,48,42,0.08);
        }

        .hero__portrait-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4F7A5A;
          flex-shrink: 0;
          animation: pulse 2.4s ease-in-out infinite;
        }

        .hero__portrait-badge-text {
          font-size: 12px;
          font-weight: 500;
          color: #23302A;
          white-space: nowrap;
          letter-spacing: 0.02em;
        }

        /* ── Divider line ── */
        .hero__divider {
          position: absolute;
          left: 64px;
          right: 64px;
          bottom: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(35,48,42,0.1) 20%, rgba(35,48,42,0.1) 80%, transparent);
          z-index: 10;
        }

        /* ── Keyframes ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes portraitReveal {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .hero__portrait-wrapper {
            right: 48px;
          }
          .hero__portrait-ring {
            width: 300px;
            height: 300px;
          }
        }

        @media (max-width: 900px) {
          .hero__nav {
            padding: 28px 32px;
          }

          .hero__content {
            padding: 0 32px 200px;
          }

          .hero__portrait-wrapper {
            right: 50%;
            transform: translateX(50%);
            bottom: 40px;
          }

          .hero__portrait-ring {
            width: 240px;
            height: 240px;
          }

          .hero__scroll {
            left: 32px;
            bottom: auto;
            top: auto;
          }

          .hero__divider {
            left: 32px;
            right: 32px;
          }

          .hero__portrait-badge {
            top: 0;
            left: -8px;
          }
        }

        @media (max-width: 600px) {
          .hero__nav-links {
            display: none;
          }

          .hero__heading {
            font-size: clamp(44px, 12vw, 64px);
          }

          .hero__content {
            padding: 0 24px 220px;
          }

          .hero__nav {
            padding: 24px;
          }

          .hero__scroll {
            left: 24px;
          }

          .hero__divider {
            left: 24px;
            right: 24px;
          }
        }
      `}</style>

      <section className="hero" aria-label="Hero">
        {/* Gradient layers */}
        <div className="hero__gradient-primary" aria-hidden="true" />
        <div className="hero__gradient-blob" aria-hidden="true" />
        <div className="hero__gradient-blob hero__gradient-blob--secondary" aria-hidden="true" />

        {/* Nav */}
        <nav className="hero__nav">
          <span className="hero__logo">V</span>
          <ul className="hero__nav-links">
            {["Work", "About", "Writing", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hero__nav-link">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main content */}
        <main className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            <span className="hero__eyebrow-text">Software Engineer &amp; Web Developer</span>
          </div>

          <h1 className="hero__heading" ref={headingRef}>
            I build software<br />
            people choose to<br />
            come <em>back to.</em>
          </h1>

          <p className="hero__subheading">
            Creating software that feels simple because the engineering isn't.
          </p>

          <div className="hero__ctas">
            <a href="#work" className="btn btn--primary">
              View Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get In Touch
            </a>
          </div>
        </main>

        {/* Portrait */}
        <div className="hero__portrait-wrapper" aria-hidden="true">
          <div className="hero__portrait-ring">
            <div className="hero__portrait-arc" />
              <img
                src="./Veeresh.png"
                alt="Veeresh"
                className="hero__portrait-img"
              />

            <div className="hero__portrait-fallback">
              <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="100" cy="80" rx="44" ry="48" fill="rgba(35,48,42,0.18)" />
                <ellipse cx="100" cy="180" rx="72" ry="52" fill="rgba(35,48,42,0.14)" />
              </svg>
            </div>

            <div className="hero__portrait-badge">
              <span className="hero__portrait-badge-dot" />
              <span className="hero__portrait-badge-text">Open to work</span>
            </div>
          </div>
        </div>

        <div className="hero__divider" aria-hidden="true" />
      </section>
    </>
  );
}