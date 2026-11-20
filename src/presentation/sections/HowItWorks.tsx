import type { Step, LearningContent } from '../../domain/learning';

const stepIconClasses: Record<Step['color'], string> = {
  "blue": "block relative w-[62px] h-[62px] after:content-[''] after:w-[26px] after:h-[26px] after:absolute [@media(max-width:767px)]:w-[54px] [@media(max-width:767px)]:h-[54px] bg-[var(--blue-light)] rounded-[50%] after:bg-brand after:top-[9px] after:left-[9px] after:rounded-[6px]",
  "orange": "block relative w-[62px] h-[62px] rounded-[15px] after:content-[''] after:w-[26px] after:h-[26px] after:absolute [@media(max-width:767px)]:w-[54px] [@media(max-width:767px)]:h-[54px] bg-[var(--orange)] [transform:rotate(12deg)] after:bg-[#ff724d] after:bottom-[6px] after:right-[6px] after:rounded-[50%]",
  "yellow": "block relative w-[62px] h-[62px] rounded-[15px] after:content-[''] after:absolute [@media(max-width:767px)]:w-[54px] [@media(max-width:767px)]:h-[54px] text-ink bg-[#fff1bf] after:bg-[#ebd351] after:bottom-[9px] after:left-[9px] after:rounded-[50%] after:w-[23px] after:h-[23px]"
};

export function HowItWorks({ steps, content }: { steps: readonly Step[]; content: LearningContent }) {
  return (
    <section id="how-it-works" className="section cream [padding-block:clamp(70px,7.8vw,128px)] [@media(max-width:767px)]:[padding-block:60px] bg-[var(--cream)] min-[1024px]:[padding-bottom:calc(clamp(70px,7.8vw,128px)_+_48px)] [@media(max-width:767px)]:pb-[91px]" aria-labelledby="steps-title">
      <div className="shell [width:min(87.5%,1440px)] mx-auto [@media(360px<width<=767px)]:[width:calc(100%_-_40px)] [@media(max-width:360px)]:[width:calc(100%_-_32px)]">
        <div className="steps-heading text-center">
          <p className="eyebrow text-brand text-[12px] leading-[1.3] font-[800] uppercase tracking-[.14em] mb-[20px] [@media(max-width:767px)]:mb-[15px]">{content.eyebrow}</p>
          <h2 className="font-display font-[800] tracking-[-.045em] [font-size:clamp(34px,4vw,56px)] leading-[1.12] [@media(max-width:767px)]:text-[32px] [@media(max-width:767px)]:leading-[36px] [@media(max-width:767px)]:tracking-[-.04em]" id="steps-title">{content.title}</h2>
        </div>
        <ol className="steps relative grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[7%] [margin-top:clamp(56px,8vw,112px)] before:content-[''] before:absolute before:top-[30px] before:left-[15px] before:w-[72%] before:[border-top:1px_solid_var(--line)] [@media(max-width:767px)]:grid-cols-[1fr] [@media(max-width:767px)]:gap-[51px] [@media(max-width:767px)]:mt-[53px] [@media(max-width:767px)]:before:hidden min-[1024px]:[margin-top:clamp(56px,20vw_-_164px,124px)]">
          {steps.map(({ title, description, color, mobileNumber, desktopNumber }) => (
            <li className="relative" key={title}>
              <span aria-hidden="true" className={`step-icon ${color} ${stepIconClasses[color]}`} />
              <p className="step-number text-[12px] uppercase tracking-[.12em] text-[var(--subtle)] mt-[24px] mb-[12px]">
                <span className="viewport-mobile min-[768px]:hidden">{mobileNumber.prefix}{mobileNumber.value}</span>
                <span className="viewport-desktop hidden min-[768px]:[display:revert]">{desktopNumber}</span>
              </p>
              <h3 className="font-display text-[22px] font-[800] leading-[1.3] [@media(max-width:767px)]:text-[19px]">{title}</h3>
              <p className="text-[var(--muted)] leading-[1.6] mt-[15px] max-w-[32ch] [@media(max-width:767px)]:max-w-none">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
