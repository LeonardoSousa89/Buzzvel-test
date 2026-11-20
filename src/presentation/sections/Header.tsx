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
    <header className="site-header">
      <div className="shell header-row">
        <a href="#" className="wordmark" aria-label="Luma home">luma<span>.</span></a>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {links.map(({ href, label }) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <DetailsDialog id="login-title" title={login.title} label={login.title} className="text-link">
            <p>{login.message}</p>
          </DetailsDialog>
          <a className="button primary" href={startLearning.href}>{startLearning.label}</a>
        </div>
        <MobileMenu links={links} startLearning={startLearning} />
      </div>
    </header>
  );
}
