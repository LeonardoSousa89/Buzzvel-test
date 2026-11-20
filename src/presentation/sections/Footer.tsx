import type { FooterContent } from '../../domain/footer';
import { DetailsDialog } from '../shared/DetailsDialog';

export function Footer({ content }: { content: FooterContent }) {
  return (
    <footer className="site-footer bg-ink text-white pt-[88px] pb-[44px] [@media(max-width:767px)]:pt-[54px] [@media(max-width:767px)]:pb-[24px]">
      <div className="shell [width:min(87.5%,1440px)] mx-auto [@media(360px<width<=767px)]:[width:calc(100%_-_40px)] [@media(max-width:360px)]:[width:calc(100%_-_32px)]">
        <div className="footer-grid grid grid-cols-[40%_minmax(0,1fr)] [@media(max-width:767px)]:grid-cols-[minmax(0,1fr)] [@media(max-width:767px)]:gap-[38px]">
          <div className="footer-brand">
            <a href="#" className="wordmark font-display [justify-self:start] text-[25px] font-[800] tracking-[-.09em]" aria-label="Luma home">luma<span className="text-inherit">.</span></a>
            <p className="max-w-[26ch] mt-[4px] text-[#adb1bd] text-[15px] leading-[1.6] [@media(max-width:767px)]:max-w-none">{content.tagline}</p>
          </div>
          <nav className="footer-navigation grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[25px] [@media(max-width:767px)]:grid-cols-[repeat(2,minmax(0,1fr))] [@media(max-width:767px)]:gap-x-[28px] [@media(max-width:767px)]:gap-y-[34px] min-[768px]:[column-gap:calc(100%/14)]" aria-label="Footer navigation">
            {content.groups.map(({ title, links }) => (
              <div key={title}>
                <h2 className="text-[#d9dbe1] [font:600_13px/1.5_var(--font-sans)] uppercase tracking-[.12em] mb-[19px] [@media(max-width:767px)]:mb-[14px]">{title}</h2>
                <ul>
                  {links.map((link) => (
                    <li className="text-[#adb1bd] text-[15px] leading-[1.6] [&+li]:mt-[15px] [@media(max-width:767px)]:[&+li]:mt-[12px]" key={link.label}>
                      {'unavailable' in link ? <span className="text-link inline-block" role="link" aria-disabled="true">{link.label}</span> : 'href' in link ? <a className="[&:hover]:underline" href={link.href}>{link.label}</a> : (
                        <DetailsDialog id={`footer-${link.label.toLowerCase()}`} label={link.label} title={link.label} className="text-link [&:hover]:underline">
                          <p className="mb-[16px]">{link.detail}</p>
                        </DetailsDialog>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <p className="footer-copyright [border-top:1px_solid_#ffffff38] mt-[72px] pt-[25px] text-[13px] leading-[1.5] [@media(max-width:767px)]:text-center [@media(max-width:767px)]:mt-[36px] [@media(max-width:767px)]:pt-[24px]">{content.copyright}</p>
      </div>
    </footer>
  );
}
