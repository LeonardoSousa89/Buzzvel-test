import Image from 'next/image';
import type { HeroContent } from '../../domain/hero';

export function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="hero cream [padding-block:clamp(72px,7.8vw,128px)] overflow-clip [@media(max-width:767px)]:pt-[60px] [@media(max-width:767px)]:pb-[84px] bg-[var(--cream)]" aria-labelledby="hero-title">
      <div className="shell hero-grid [width:min(87.5%,1440px)] mx-auto [@media(360px<width<=767px)]:[width:calc(100%_-_40px)] [@media(max-width:360px)]:[width:calc(100%_-_32px)] grid grid-cols-[1.12fr_1fr] items-center gap-[5%] [@media(max-width:767px)]:grid-cols-[minmax(0,1fr)] [@media(max-width:767px)]:gap-[34px]">
        <div className="hero-copy">
          <p className="eyebrow text-brand text-[12px] leading-[1.3] font-[800] uppercase tracking-[.14em] mb-[20px] [@media(max-width:767px)]:mb-[15px]">{content.eyebrow}</p>
          <h1 className="font-display font-[800] tracking-[-.045em] [font-size:clamp(42px,5.25vw,76px)] leading-[1.04] [@media(360px<width<=767px)]:text-[40px] [@media(360px<width<=767px)]:leading-[44px] [@media(max-width:767px)]:tracking-[-1px] [@media(max-width:360px)]:text-[36px] [@media(max-width:360px)]:leading-[40px]" id="hero-title">{content.title}</h1>
          <p className="hero-description text-[var(--muted)] [font-size:clamp(16px,1.47vw,22px)] leading-[1.5] max-w-[36ch] mt-[25px] mb-[32px] [@media(max-width:767px)]:max-w-none [@media(max-width:767px)]:mt-[20px] [@media(max-width:767px)]:mb-[30px] min-[1024px]:max-w-[43ch]">{content.description}</p>
          <div className="actions flex flex-wrap items-center gap-[14px] [@media(max-width:767px)]:flex-col [@media(max-width:767px)]:items-stretch">
            <a href={content.explore.href} className="button primary inline-flex items-center justify-center text-center font-bold min-h-[48px] py-[12px] px-[27px] [border-width:1px] border-solid border-transparent rounded-[7px] text-[14px] [&:hover]:[filter:brightness(.95)] bg-brand text-white min-[1024px]:min-h-[60px] min-[1024px]:px-[31px] [@media(max-width:767px)]:min-h-[52px]">{content.explore.label}</a>
            <a href={content.howItWorks.href} className="button secondary inline-flex items-center justify-center text-center font-bold min-h-[48px] py-[12px] px-[27px] [border-width:1px] border-solid rounded-[7px] text-[14px] [&:hover]:[filter:brightness(.95)] bg-white border-[var(--line)] text-ink min-[1024px]:min-h-[60px] min-[1024px]:px-[31px] [@media(max-width:767px)]:min-h-[52px]">{content.howItWorks.label}</a>
          </div>
          <div className="trust flex items-center gap-[12px] mt-[36px] text-[14px] text-[var(--muted)] [@media(max-width:767px)]:justify-center [@media(max-width:767px)]:mt-[28px] [@media(max-width:767px)]:text-[12px]">
            <div className="avatars flex items-center" aria-hidden="true">
              {content.avatars.map((src) => <Image className="object-cover rounded-[50%] [border:2px_solid_var(--cream)] bg-[var(--blue-light)] [&+img]:ml-[-6px]" key={src} src={src} alt="" width={32} height={32} />)}
            </div>
            <span><strong className="text-ink">{content.trust}</strong> {content.audience}</span>
          </div>
        </div>
        <div className="hero-visual relative isolate before:content-[''] before:absolute before:-z-[1] before:[inset:5%_-7.5%_5%_6%] before:bg-[var(--orange)] before:rounded-[18px] after:content-[''] after:absolute after:-z-[1] after:w-[25%] after:aspect-[1] after:left-[-9%] after:bottom-[2%] after:bg-[var(--blue-light)] after:rounded-[50%] [@media(max-width:767px)]:row-[1] [@media(max-width:767px)]:mx-[8px] [@media(max-width:767px)]:max-w-[440px] [@media(max-width:767px)]:[width:calc(100%_-_16px)] [@media(max-width:767px)]:justify-self-center [@media(max-width:767px)]:before:right-[-5.5%] [@media(max-width:767px)]:before:rounded-[12px] [@media(max-width:767px)]:after:left-[-5%]">
          <div className="hero-photo relative w-full aspect-[.96] overflow-hidden rounded-[29px] [@media(max-width:767px)]:aspect-[346/380] [@media(max-width:767px)]:rounded-[19px]"><Image className="object-cover" src={content.photo.src} alt={content.photo.alt} fill preload sizes="(max-width: 767px) 86vw, 40vw" /></div>
          <div className="badge course-count flex items-center absolute gap-[9px] py-[12px] px-[15px] bg-white rounded-[11px] [box-shadow:0_6px_22px_#171b2c15] whitespace-nowrap [font-size:clamp(10px,1vw,14px)] font-semibold [@media(max-width:767px)]:text-[10px] [@media(max-width:767px)]:py-[9px] [@media(max-width:767px)]:px-[10px] [@media(max-width:767px)]:rounded-[8px] left-[-4.5%] top-[3%] [@media(max-width:767px)]:left-[-2%]"><strong className="py-[5px] px-[7px] text-brand bg-[var(--blue-light)] rounded-[5px]">{content.courseCount}</strong>{content.courseCountLabel}</div>
          <div className="badge rating flex items-center absolute gap-[9px] py-[12px] px-[15px] bg-white rounded-[11px] [box-shadow:0_6px_22px_#171b2c15] whitespace-nowrap [font-size:clamp(10px,1vw,14px)] font-semibold [@media(max-width:767px)]:text-[10px] [@media(max-width:767px)]:py-[9px] [@media(max-width:767px)]:px-[10px] [@media(max-width:767px)]:rounded-[8px] right-[-11%] bottom-[7%] [@media(max-width:767px)]:right-[-6%] [@media(max-width:767px)]:bottom-[11%]">
            <span className="rating-stars text-[#e7b934] tracking-[.09em] min-[768px]:text-[var(--yellow)]" aria-hidden="true">{content.stars}</span>{' '}
            <span className="rating-value viewport-mobile min-[768px]:hidden">{content.rating}</span>
            <span className="rating-value viewport-desktop hidden min-[768px]:[display:revert]">{content.desktopRating}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
