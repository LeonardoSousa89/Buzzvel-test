import type { Step, LearningContent } from '../../domain/learning';

export function HowItWorks({ steps, content }: { steps: readonly Step[]; content: LearningContent }) {
  return (
    <section id="how-it-works" className="section cream" aria-labelledby="steps-title">
      <div className="shell">
        <div className="steps-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="steps-title">{content.title}</h2>
        </div>
        <ol className="steps">
          {steps.map(({ title, description, color, mobileNumber, desktopNumber }) => (
            <li key={title}>
              <span aria-hidden="true" className={`step-icon ${color}`} />
              <p className="step-number">
                <span className="viewport-mobile">{mobileNumber.prefix}{mobileNumber.value}</span>
                <span className="viewport-desktop">{desktopNumber}</span>
              </p>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
