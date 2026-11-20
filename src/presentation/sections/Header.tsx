import type { NavigationLink } from '../../domain/navigation';
import { DetailsDialog } from '../shared/DetailsDialog';
import { MobileMenu } from '../navigation/MobileMenu';

type HeaderProps = {
  links: readonly NavigationLink[];
  startLearning: NavigationLink;
  login: { title: string; message: string };
};

export function Header({ links, startLearning, login }: HeaderProps) {
  return (
    <header className="site-header bg-[var(--cream)] [border-bottom:1px_solid_#e9e9ed] relative z-[3]">
      <div className="shell header-row [width:min(87.5%,1440px)] mx-auto [@media(360px<width<=767px)]:[width:calc(100%_-_40px)] [@media(max-width:360px)]:[width:calc(100%_-_32px)] grid grid-cols-[1fr_auto_1fr] items-center min-h-[76px] gap-[18px] [@media(max-width:767px)]:flex [@media(max-width:767px)]:justify-between [@media(max-width:767px)]:min-h-[70px]">
        <a href="#" className="wordmark font-display [justify-self:start] text-[25px] font-[800] tracking-[-.09em]" aria-label="Luma home">luma<span className="text-brand min-[768px]:text-inherit">.</span></a>
        <nav className="desktop-navigation flex items-center [gap:clamp(14px,2.1vw,32px)] text-[14px] [@media(max-width:1023px)]:gap-[15px] [@media(max-width:767px)]:hidden" aria-label="Main navigation">
          {links.map(({ href, label }) => <a className="[&:hover]:underline" key={label} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions flex items-center [gap:clamp(14px,2.1vw,32px)] text-[14px] [justify-self:end] [@media(max-width:1023px)]:gap-[15px] [@media(max-width:767px)]:hidden">
          <DetailsDialog id="login-title" title={login.title} label={login.title} className="text-link [&:hover]:underline">
            <p className="mb-[16px]">{login.message}</p>
          </DetailsDialog>
          <a className="button primary inline-flex items-center justify-center text-center font-bold min-h-[48px] py-[12px] px-[27px] [border-width:1px] border-solid border-transparent rounded-[7px] text-[14px] [&:hover]:[filter:brightness(.95)] bg-brand text-white [@media(max-width:1023px)]:px-[13px]" href={startLearning.href}>{startLearning.label}</a>
        </div>
        <MobileMenu links={links} startLearning={startLearning} />
      </div>
    </header>
  );
}
