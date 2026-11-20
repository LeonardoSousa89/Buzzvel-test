import Image from 'next/image';
import type { FinalCtaContent } from '../../domain/final-cta';

export function FinalCta({ content }: { content: FinalCtaContent }) {
  return (
    <section className="section final-cta [padding-block:clamp(70px,7.8vw,128px)] [@media(max-width:767px)]:[padding-block:60px] relative isolate overflow-clip bg-[#fff1c2] text-center" aria-labelledby="final-cta-title">
      <div className="cta-shapes absolute inset-0 -z-[1] text-[var(--orange)] pointer-events-none [@media(max-width:767px)]:hidden" aria-hidden="true">
        <i className="cta-ring absolute [border:2px_solid] rounded-[50%] w-[8.5%] aspect-[1] top-[3.5%] left-[1.7%]" /><i className="cta-square absolute w-[4.7%] aspect-[1] top-[10%] left-[25%] [border:1px_dashed] rounded-[14%] [rotate:14deg] min-[768px]:border-solid" /><i className="cta-ring-small absolute [border:2px_solid] rounded-[50%] w-[2.5%] aspect-[1] top-[9%] left-[68.5%]" />
        <i className="cta-corner absolute bg-current right-[.5%] top-[-6%] w-[9%] aspect-[1] [rotate:13deg] rounded-[8%]" /><i className="cta-edge absolute bg-current left-[-1.9%] top-[50%] w-[4.2%] aspect-[1] [rotate:15deg] rounded-[13%]" /><i className="cta-dot absolute bg-current left-[11.2%] top-[46%] w-[2.2%] aspect-[1] rounded-[50%] min-[768px]:after:content-[''] min-[768px]:after:absolute min-[768px]:after:left-[7%] min-[768px]:after:bottom-[-4%] min-[768px]:after:w-[36%] min-[768px]:after:h-[36%] min-[768px]:after:bg-current min-[768px]:after:[clip-path:polygon(28%_0,100%_48%,0_100%)]" />
        <i className="cta-disc absolute bg-current left-[4.3%] bottom-[-5%] w-[9.4%] aspect-[1] rounded-[50%]" /><i className="cta-petals absolute bg-current left-[24%] bottom-[8%] w-[2.1%] h-[11%] [border-radius:12%_80%_80%_12%] [rotate:15deg] min-[768px]:bg-transparent min-[768px]:flex min-[768px]:flex-col min-[768px]:before:content-[''] min-[768px]:before:flex-1 min-[768px]:before:bg-current min-[768px]:before:[border-radius:14%_58%_58%_14%/16%_52%_52%_16%] min-[768px]:after:content-[''] min-[768px]:after:flex-1 min-[768px]:after:bg-current min-[768px]:after:[border-radius:14%_58%_58%_14%/16%_52%_52%_16%] min-[768px]:after:w-[90%] min-[768px]:after:mt-[-9%]" /><i className="cta-ring-bottom absolute [border:2px_solid] rounded-[50%] w-[2.5%] aspect-[1] bottom-[2%] right-[3%]" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 530" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="m1310 260 35 25-35 25-35-25z m-35 25v18l35 23 35-23v-18 m-35 25v16 m-20-51 35 24 m5-24-36 24 M1090 442h46v34h-46z m16 0v34 m14-34v34 m-23-22v9 m31-9v9" />
          <path d="M1178 122v-19 m-16 23-12-11 m43 12 12-11 m-41 27h-15 m43 0h15" strokeWidth="2" />
          <path d="M1178 120c0 0-11 14-11 19a11 11 0 0 0 22 0c0-5-11-19-11-19Z" fill="currentColor" />
        </svg>
      </div>
      <div className="shell final-cta-content [width:min(87.5%,1440px)] mx-auto [@media(360px<width<=767px)]:[width:calc(100%_-_40px)] [@media(max-width:360px)]:[width:calc(100%_-_32px)]">
        <div className="avatars flex items-center justify-center mb-[40px] [@media(max-width:767px)]:mb-[32px]" aria-hidden="true">
          {content.avatars.map((src) => <Image className="object-cover rounded-[50%] [border-width:2px] border-solid bg-[var(--blue-light)] [&+img]:ml-[-6px] border-[var(--yellow)] w-[44px] h-[44px] [&+img]:ml-[-8px] [@media(max-width:767px)]:w-[40px] [@media(max-width:767px)]:h-[40px]" key={src} src={src} alt="" width={44} height={44} />)}
        </div>
        <h2 className="font-display font-[800] tracking-[-.045em] leading-[1.12] [@media(max-width:767px)]:leading-[36px] [@media(max-width:767px)]:tracking-[-.04em] [font-size:clamp(40px,4.5vw,64px)] [@media(max-width:767px)]:text-[36px] [@media(max-width:767px)]:leading-[40px]" id="final-cta-title">{content.title}</h2>
        <p className="mt-[17px] text-[var(--muted)] text-[18px] [@media(max-width:767px)]:mt-[16px] [@media(max-width:767px)]:text-[16px]">{content.subtitle}</p>
        <div className="actions flex flex-wrap items-center gap-[14px] justify-center mt-[44px] [@media(max-width:767px)]:mt-[36px] [@media(max-width:767px)]:flex-col [@media(max-width:767px)]:items-stretch [@media(max-width:767px)]:gap-[12px]">
          <a className="button primary inline-flex items-center justify-center text-center font-bold py-[12px] [border-width:1px] border-solid border-transparent rounded-[7px] text-[14px] [&:hover]:[filter:brightness(.95)] bg-brand text-white min-h-[58px] px-[32px] [@media(max-width:767px)]:min-h-[52px]" href={content.explore.href}>{content.explore.label}</a>
          <a className="button secondary inline-flex items-center justify-center text-center font-bold py-[12px] [border-width:1px] border-solid rounded-[7px] text-[14px] [&:hover]:[filter:brightness(.95)] bg-white border-[var(--line)] text-ink min-h-[58px] px-[32px] [@media(max-width:767px)]:min-h-[52px]" href={content.join.href}>{content.join.label}</a>
        </div>
      </div>
    </section>
  );
}
