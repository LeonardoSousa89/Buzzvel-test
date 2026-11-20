import type { ContactContent } from '../../domain/contact';
import { ContactForm } from '../contact/ContactForm';

export function Contact({ content }: { content: ContactContent }) {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="contact-title">{content.title}</h2>
          <p className="contact-description">{content.description}</p>
          <dl className="contact-cards">
            <div className="contact-card">
              <dt>
                <span className="contact-icon" aria-hidden="true">
                  <svg className="viewport-mobile" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 10 12 4l9 6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="m3 11 9 6 9-6M8 10h8"/></svg>
                  <svg className="viewport-desktop" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                    <path d="M21 11.5a9 8 0 0 1-9 8 10 10 0 0 1-3.4-.6L3 21l1.5-4.6A7.5 7.5 0 0 1 3 11.5a9 8 0 0 1 18 0Z" />
                    <path d="M8 11.5h.01m4 0h.01m4 0h.01" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </span>
                {content.emailLabel}
              </dt>
              <dd><a href={content.emailHref}>{content.email}</a></dd>
            </div>
            <div className="contact-card">
              <dt>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>
                </span>
                {content.responseTimeLabel}
              </dt>
              <dd>{content.responseTime}</dd>
            </div>
          </dl>
        </div>
        <ContactForm title={content.formTitle} copy={content.form} />
      </div>
    </section>
  );
}
