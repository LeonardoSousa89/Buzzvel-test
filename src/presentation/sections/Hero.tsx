import Image from 'next/image';
import type { HeroContent } from '../../domain/hero';

export function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="hero cream" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 id="hero-title">{content.title}</h1>
          <p className="hero-description">{content.description}</p>
          <div className="actions">
            <a href={content.explore.href} className="button primary">{content.explore.label}</a>
            <a href={content.howItWorks.href} className="button secondary">{content.howItWorks.label}</a>
          </div>
          <div className="trust">
            <div className="avatars" aria-hidden="true">
              {content.avatars.map((src) => <Image key={src} src={src} alt="" width={32} height={32} />)}
            </div>
            <span><strong>{content.trust}</strong> {content.audience}</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo"><Image src={content.photo.src} alt={content.photo.alt} fill preload sizes="(max-width: 767px) 86vw, 40vw" /></div>
          <div className="badge course-count"><strong>{content.courseCount}</strong>{content.courseCountLabel}</div>
          <div className="badge rating">
            <span className="rating-stars" aria-hidden="true">{content.stars}</span>{' '}
            <span className="rating-value viewport-mobile">{content.rating}</span>
            <span className="rating-value viewport-desktop">{content.desktopRating}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
