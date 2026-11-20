import Image from 'next/image';
import type { Metric, TestimonialContent } from '../../domain/testimonial';

export function Testimonial({ content, metrics }: { content: TestimonialContent; metrics: readonly Metric[] }) {
  return (
    <section className="section" aria-label="Learner testimonial and Luma in numbers">
      <div className="shell testimonial-grid">
        <figure>
          <span className="quote-mark" aria-hidden="true">
            <span className="viewport-mobile">❞</span>
            <span className="quote-strokes viewport-desktop" />
          </span>
          <blockquote>{content.quote}</blockquote>
          <figcaption>
            <Image src={content.portrait} alt="" width={48} height={48} />
            <div>
              <strong>{content.name}</strong>
              <span className="testimonial-role viewport-mobile">{content.role}</span>
              <span className="testimonial-role viewport-desktop">{content.desktopRole}</span>
            </div>
          </figcaption>
        </figure>
        <dl className="metrics">
          {metrics.map(({ value, label }) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
