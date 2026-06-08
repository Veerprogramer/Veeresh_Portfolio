"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { label: "Role", value: "Software Engineer" },
  { label: "Location", value: "Chennai, India" },
  { label: "Craft", value: "Full Stack Development" },
  { label: "Status", value: "Open to Opportunities" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("about--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap');

        *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }

        .about {
          position: relative;
          width: 100%;
          min-height: 92vh;
          font-family: 'Satoshi', sans-serif;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        /* ── Background image ── */
        .about__bg {
          position: absolute;
          inset: 0;
          background-image: url('./Madras.jpeg');
          background-size: cover;
          background-position: center 30%;
          filter: saturate(0.55) brightness(0.72);
          transform: scale(1);
          transition: transform 8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .about--visible .about__bg {
          transform: scale(1);
        }

        /* ── Cinematic overlay ── */
        .about__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(8,12,10,0.92) 0%,
            rgba(8,12,10,0.80) 28%,
            rgba(8,12,10,0.45) 58%,
            rgba(8,12,10,0.10) 100%
          );
          z-index: 1;
        }

        /* Vignette — top/bottom fade to black */
        .about__vignette {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.30) 0%, transparent 18%, transparent 78%, rgba(0,0,0,0.35) 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* ── Grain texture overlay ── */
        .about__grain {
          position: absolute;
          inset: 0;
          z-index: 3;
          opacity: 0.028;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }

        /* ── Content ── */
        .about__content {
          position: relative;
          z-index: 10;
          padding: 120px 80px;
          max-width: 700px;
        }

        /* Eyebrow */
        .about__eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 44px;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease 0.15s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s;
        }

        .about--visible .about__eyebrow {
          opacity: 1;
          transform: translateY(0);
        }

        .about__eyebrow-line {
          width: 28px;
          height: 1px;
          background: #A8C0AE;
          flex-shrink: 0;
        }

        .about__eyebrow-text {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          color: #A8C0AE;
          text-transform: uppercase;
        }

        /* Heading */
        .about__heading {
          font-size: clamp(48px, 5.5vw, 72px);
          font-weight: 700;
          line-height: 1.04;
          letter-spacing: -0.03em;
          color: #FFFFFF;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.85s ease 0.28s, transform 0.85s cubic-bezier(0.16,1,0.3,1) 0.28s;
        }

        .about--visible .about__heading {
          opacity: 1;
          transform: translateY(0);
        }

        .about__heading em {
          font-style: normal;
          color: #A8C0AE;
        }

        /* Divider */
        .about__rule {
          width: 48px;
          height: 1px;
          background: rgba(168,192,174,0.4);
          margin-bottom: 40px;
          opacity: 0;
          transition: opacity 0.7s ease 0.42s;
        }

        .about--visible .about__rule {
          opacity: 1;
        }

        /* Body text */
        .about__body {
          display: flex;
          flex-direction: column;
          gap: 22px;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.9s ease 0.48s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.48s;
        }

        .about--visible .about__body {
          opacity: 1;
          transform: translateY(0);
        }

        .about__body p {
          font-size: clamp(15px, 1.5vw, 18px);
          font-weight: 400;
          line-height: 1.75;
          color: rgba(255,255,255,0.72);
          max-width: 560px;
        }

        .about__body p:first-child {
          font-size: clamp(17px, 1.7vw, 20px);
          color: rgba(255,255,255,0.88);
          font-weight: 400;
        }

        /* Stats row */
        .about__stats {
          display: grid;
          grid-template-columns: repeat(2, auto);
          gap: 0;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.8s ease 0.68s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.68s;
          width: fit-content;
        }

        .about--visible .about__stats {
          opacity: 1;
          transform: translateY(0);
        }

        .about__stat {
          padding: 20px 48px 20px 0;
          border-top: 1px solid rgba(168,192,174,0.18);
        }

        .about__stat:nth-child(odd) {
          padding-right: 64px;
        }

        .about__stat-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: rgba(168,192,174,0.7);
          margin-bottom: 6px;
        }

        .about__stat-value {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.90);
          letter-spacing: 0.01em;
        }

        /* Section number — editorial detail, top-right */
        .about__section-num {
          position: absolute;
          top: 48px;
          right: 64px;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          opacity: 0;
          transition: opacity 0.7s ease 0.9s;
        }

        .about--visible .about__section-num {
          opacity: 1;
        }

        .about__section-num-text {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          color: rgba(168,192,174,0.55);
          text-transform: uppercase;
        }

        .about__section-num-line {
          width: 1px;
          height: 40px;
          background: rgba(168,192,174,0.25);
          align-self: flex-end;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .about__content {
            padding: 100px 48px;
          }
          .about__section-num {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .about__content {
            padding: 80px 28px;
          }
          .about__stats {
            grid-template-columns: 1fr;
          }
          .about__stat {
            padding: 16px 0;
          }
          .about__stat:nth-child(odd) {
            padding-right: 0;
          }
        }
      `}</style>

      <section className="about" id="about" ref={sectionRef} aria-label="About">
        {/* Background photo */}
        <div className="about__bg" aria-hidden="true" />

        {/* Overlays */}
        <div className="about__overlay" aria-hidden="true" />
        <div className="about__vignette" aria-hidden="true" />
        <div className="about__grain" aria-hidden="true" />

        {/* Editorial section number */}
        <div className="about__section-num" aria-hidden="true">
          <span className="about__section-num-text">02 / About</span>
          <span className="about__section-num-line" />
        </div>

        {/* Main content */}
        <div className="about__content">

          {/* Heading */}
          <h2 className="about__heading">
            Building products<br />
            with <em>purpose.</em>
          </h2>

          {/* Horizontal rule */}
          <div className="about__rule" aria-hidden="true" />

          {/* Body copy */}
          <div className="about__body">
            <p>
              I'm a software engineer focused on building thoughtful digital experiences.
            </p>
            <p>
              Over the years, I've worked across frontend, backend, and product development,
              transforming ideas into reliable and scalable applications.
            </p>
            <p>
              I enjoy solving complex problems, simplifying user experiences, and creating
              software that delivers real value. Whether it's crafting intuitive interfaces
              or architecting robust systems, my goal remains the same: build products people
              genuinely enjoy using.
            </p>
          </div>

          {/* Stats */}
          {/* <dl className="about__stats">
            {STATS.map(({ label, value }) => (
              <div className="about__stat" key={label}>
                <dt className="about__stat-label">{label}</dt>
                <dd className="about__stat-value">{value}</dd>
              </div>
            ))}
          </dl> */}
        </div>
      </section>
    </>
  );
}