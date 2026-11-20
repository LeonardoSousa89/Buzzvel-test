import type { ContactContent } from '../../domain/contact';
import { ContactForm } from '../contact/ContactForm';

export function Contact({ content }: { content: ContactContent }) {
  return (
    <section id="contact" className="section [padding-block:clamp(70px,7.8vw,128px)] [@media(max-width:767px)]:[padding-block:60px]" aria-labelledby="contact-title">
      <div className="shell contact-grid [width:min(87.5%,1440px)] mx-auto [@media(360px<width<=767px)]:[width:calc(100%_-_40px)] [@media(max-width:360px)]:[width:calc(100%_-_32px)] grid grid-cols-[minmax(0,1fr)_minmax(0,1.125fr)] gap-[9%] items-center [@media(max-width:767px)]:grid-cols-[minmax(0,1fr)] [@media(max-width:767px)]:gap-[40px]">
        <div className="contact-intro">
          <p className="eyebrow text-brand text-[12px] leading-[1.3] font-[800] uppercase tracking-[.14em] mb-[20px] [@media(max-width:767px)]:mb-[15px]">{content.eyebrow}</p>
          <h2 className="font-display font-[800] tracking-[-.045em] [font-size:clamp(34px,4vw,56px)] leading-[1.12] [@media(max-width:767px)]:text-[32px] [@media(max-width:767px)]:leading-[36px] [@media(max-width:767px)]:tracking-[-.04em]" id="contact-title">{content.title}</h2>
          <p className="contact-description mt-[20px] text-[var(--muted)] [font-size:clamp(16px,1.4vw,20px)] leading-[1.55] [@media(max-width:767px)]:mt-[16px] [@media(max-width:767px)]:leading-[1.5]">{content.description}</p>
          <dl className="contact-cards grid gap-[16px] mt-[44px] [@media(max-width:767px)]:mt-[32px]">
            <div className="contact-card relative [padding:22px_18px_22px_84px] bg-[var(--cream)] rounded-[12px] text-[15px] [@media(max-width:767px)]:[padding:17px_14px_17px_72px] [@media(max-width:767px)]:text-[14px]">
              <dt className="font-sans font-semibold min-[768px]:font-normal">
                <span className="contact-icon absolute left-[21px] top-[50%] [translate:0_-50%] grid place-items-center w-[44px] h-[44px] rounded-[8px] bg-[var(--blue-light)] text-brand [@media(max-width:767px)]:left-[16px] [@media(max-width:767px)]:w-[40px] [@media(max-width:767px)]:h-[40px]" aria-hidden="true">
                  <svg className="viewport-mobile min-[768px]:hidden w-[25px] h-[25px] [@media(max-width:767px)]:w-[22px] [@media(max-width:767px)]:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 10 12 4l9 6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="m3 11 9 6 9-6M8 10h8"/></svg>
                  <svg className="viewport-desktop hidden min-[768px]:[display:revert] w-[25px] h-[25px] [@media(max-width:767px)]:w-[22px] [@media(max-width:767px)]:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                    <path d="M21 11.5a9 8 0 0 1-9 8 10 10 0 0 1-3.4-.6L3 21l1.5-4.6A7.5 7.5 0 0 1 3 11.5a9 8 0 0 1 18 0Z" />
                    <path d="M8 11.5h.01m4 0h.01m4 0h.01" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </span>
                {content.emailLabel}
              </dt>
              <dd className="mt-[5px] text-[var(--muted)] [overflow-wrap:anywhere]"><a className="text-brand [&:hover]:underline" href={content.emailHref}>{content.email}</a></dd>
            </div>
            <div className="contact-card relative [padding:22px_18px_22px_84px] bg-[var(--cream)] rounded-[12px] text-[15px] [@media(max-width:767px)]:[padding:17px_14px_17px_72px] [@media(max-width:767px)]:text-[14px]">
              <dt className="font-sans font-semibold min-[768px]:font-normal">
                <span className="contact-icon absolute left-[21px] top-[50%] [translate:0_-50%] grid place-items-center w-[44px] h-[44px] rounded-[8px] bg-[var(--blue-light)] text-brand [@media(max-width:767px)]:left-[16px] [@media(max-width:767px)]:w-[40px] [@media(max-width:767px)]:h-[40px]" aria-hidden="true">
                  <svg className="w-[25px] h-[25px] [@media(max-width:767px)]:w-[22px] [@media(max-width:767px)]:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>
                </span>
                {content.responseTimeLabel}
              </dt>
              <dd className="mt-[5px] text-[var(--muted)] [overflow-wrap:anywhere]">{content.responseTime}</dd>
            </div>
          </dl>
        </div>
        <ContactForm title={content.formTitle} copy={content.form} />
      </div>
    </section>
  );
}
