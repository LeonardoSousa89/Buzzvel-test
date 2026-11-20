import Image from 'next/image';
import { AnimatedMetric } from '../animation/AnimatedMetric';
import type { Metric, TestimonialContent } from '../../domain/testimonial';

export function Testimonial({ content, metrics }: { content: TestimonialContent; metrics: readonly Metric[] }) {
  return (
    <section className="section [padding-block:clamp(70px,7.8vw,128px)] [@media(max-width:767px)]:[padding-block:60px] min-[1024px]:[padding-block:clamp(95px,12vw_-_60.5px,112.32px)]" aria-label="Learner testimonial and Luma in numbers">
      <div className="shell testimonial-grid [width:min(87.5%,1440px)] mx-auto [@media(360px<width<=767px)]:[width:calc(100%_-_40px)] [@media(max-width:360px)]:[width:calc(100%_-_32px)] grid grid-cols-[1.6fr_.9fr] gap-[8%] items-center min-[1024px]:[padding-block:clamp(0px,6.25vw_-_80px,10px)] [@media(max-width:767px)]:grid-cols-[minmax(0,1fr)] [@media(max-width:767px)]:gap-[54px] [@media(max-width:767px)]:py-[18px]">
        <figure>
          <span className="quote-mark block text-brand text-[40px] leading-[1]" aria-hidden="true">
            <span className="viewport-mobile min-[768px]:hidden">❞</span>
            <span className="quote-strokes viewport-desktop min-[768px]:inline-flex min-[768px]:items-start min-[768px]:gap-[5px] min-[768px]:align-middle min-[768px]:before:content-[''] min-[768px]:before:w-[6px] min-[768px]:before:h-[18px] min-[768px]:before:bg-current min-[768px]:before:[clip-path:polygon(0_0,100%_0,78%_73%,34%_100%)] min-[768px]:after:content-[''] min-[768px]:after:w-[6px] min-[768px]:after:h-[18px] min-[768px]:after:bg-current min-[768px]:after:[clip-path:polygon(0_0,100%_0,78%_73%,34%_100%)] hidden min-[768px]:[display:revert]" />
          </span>
          <blockquote className="font-display [font-size:clamp(24px,2.5vw,36px)] leading-[1.42] font-semibold tracking-[-.035em] [@media(max-width:767px)]:text-[20px] [@media(max-width:767px)]:leading-[32px] [@media(max-width:767px)]:tracking-[-.02em]">{content.quote}</blockquote>
          <figcaption className="flex items-center gap-[14px] mt-[28px] text-[14px]">
            <Image className="object-cover rounded-[50%]" src={content.portrait} alt="" width={48} height={48} />
            <div>
              <strong>{content.name}</strong>
              <span className="testimonial-role viewport-mobile min-[768px]:hidden block text-[var(--subtle)]">{content.role}</span>
              <span className="testimonial-role viewport-desktop hidden min-[768px]:block block text-[var(--subtle)]">{content.desktopRole}</span>
            </div>
          </figcaption>
        </figure>
        <dl className="metrics grid gap-[22px] pl-[12%] [border-left:1px_solid_var(--line)] [@media(max-width:767px)]:grid-cols-[repeat(3,minmax(0,1fr))] [@media(max-width:767px)]:gap-[10px] [@media(max-width:767px)]:p-0 [@media(max-width:767px)]:[border:0] [@media(max-width:767px)]:text-center">
          {metrics.map(({ value, label, animation }) => <div key={label}><dt className="font-display [font-size:clamp(46px,5.25vw,76px)] font-[800] leading-[1.05] tracking-[-.06em] text-brand [@media(max-width:767px)]:[font-size:clamp(27px,9.1vw,43px)]"><AnimatedMetric value={value} label={label} animation={animation} /></dt><dd className="mt-[5px] text-[13px] text-[var(--subtle)] [@media(max-width:767px)]:text-[10px]">{label}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
