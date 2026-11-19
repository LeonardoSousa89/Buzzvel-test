import Image from 'next/image';
import type { FinalCtaContent } from '../../domain/final-cta';

export function FinalCta({ content }: { content: FinalCtaContent }) {
  return (
    <section className="section final-cta" aria-labelledby="final-cta-title">
      <div className="cta-shapes" aria-hidden="true">
        <i className="cta-ring" /><i className="cta-square" /><i className="cta-ring-small" />
        <i className="cta-corner" /><i className="cta-edge" /><i className="cta-dot" />
        <i className="cta-disc" /><i className="cta-petals" /><i className="cta-ring-bottom" />
        <svg viewBox="0 0 1440 530" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="m1310 260 35 25-35 25-35-25z m-35 25v18l35 23 35-23v-18 m-35 25v16 m-20-51 35 24 m5-24-36 24 M1090 442h46v34h-46z m16 0v34 m14-34v34 m-23-22v9 m31-9v9" />
          <path d="M1178 122v-19 m-16 23-12-11 m43 12 12-11 m-41 27h-15 m43 0h15" strokeWidth="2" />
          <path d="M1178 120c0 0-11 14-11 19a11 11 0 0 0 22 0c0-5-11-19-11-19Z" fill="currentColor" />
        </svg>
      </div>
      <div className="shell final-cta-content">
        <div className="avatars" aria-hidden="true">
          {content.avatars.map((src) => <Image key={src} src={src} alt="" width={44} height={44} />)}
        </div>
        <h2 id="final-cta-title">{content.title}</h2>
        <p>{content.subtitle}</p>
        <div className="actions">
          <a className="button primary" href={content.explore.href}>{content.explore.label}</a>
          <a className="button secondary" href={content.join.href}>{content.join.label}</a>
        </div>
      </div>
    </section>
  );
}
