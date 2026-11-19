import type { FooterContent } from '../../domain/footer';
import { DetailsDialog } from '../shared/DetailsDialog';

export function Footer({ content }: { content: FooterContent }) {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="wordmark" aria-label="Luma home">luma<span>.</span></a>
            <p>{content.tagline}</p>
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            {content.groups.map(({ title, links }) => (
              <div key={title}>
                <h2>{title}</h2>
                <ul>
                  {links.map((link) => (
                    <li key={link.label}>
                      {'href' in link ? <a href={link.href}>{link.label}</a> : (
                        <DetailsDialog id={`footer-${link.label.toLowerCase()}`} label={link.label} title={link.label} className="text-link">
                          <p>{link.detail}</p>
                        </DetailsDialog>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <p className="footer-copyright">{content.copyright}</p>
      </div>
    </footer>
  );
}
