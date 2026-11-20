import type { CategoriesContent } from '../../domain/catalog';
import type { CategoryCard } from '../../application/catalog/category-cards';
import { DetailsDialog } from '../shared/DetailsDialog';

export function Categories({ cards, content }: { cards: readonly CategoryCard[]; content: CategoriesContent }) {
  return (
    <section id="courses" className="section [padding-block:clamp(70px,7.8vw,128px)] [@media(max-width:767px)]:[padding-block:60px]" aria-labelledby="courses-title">
      <div className="shell [width:min(87.5%,1440px)] mx-auto [@media(360px<width<=767px)]:[width:calc(100%_-_40px)] [@media(max-width:360px)]:[width:calc(100%_-_32px)]">
        <div className="section-intro max-w-[600px]">
          <p className="eyebrow text-brand text-[12px] leading-[1.3] font-[800] uppercase tracking-[.14em] mb-[20px] [@media(max-width:767px)]:mb-[15px]">{content.eyebrow}</p>
          <h2 className="font-display font-[800] tracking-[-.045em] [font-size:clamp(34px,4vw,56px)] leading-[1.12] [@media(max-width:767px)]:text-[32px] [@media(max-width:767px)]:leading-[36px] [@media(max-width:767px)]:tracking-[-.04em]" id="courses-title">{content.title}</h2>
          <p className="text-[var(--muted)] mt-[18px] [font-size:clamp(16px,1.35vw,20px)] leading-[1.55]">{content.description}</p>
        </div>
        <div className="category-grid grid grid-cols-[repeat(4,minmax(0,1fr))] gap-[20px] mt-[40px] [@media(max-width:1023px)]:grid-cols-[repeat(2,minmax(0,1fr))] [@media(max-width:767px)]:grid-cols-[1fr] [@media(max-width:767px)]:gap-[14px] min-[1024px]:mt-[46px]">
          {cards.map(({ id, name, description, featuredCourseTitle }, index) => (
            <article className="category flex flex-col items-start [border:1px_solid_var(--line)] rounded-[19px] [padding:clamp(20px,2.25vw,36px)] min-h-[260px] [@media(max-width:1023px)]:min-h-[220px] [@media(max-width:767px)]:min-h-0 [@media(max-width:767px)]:px-[24px] [@media(max-width:767px)]:py-[29px] min-[1024px]:min-h-[295px]" key={id}>
              <span className="category-number py-[5px] px-[7px] text-brand bg-[var(--blue-light)] rounded-[5px] text-[12px] font-bold mb-[22px] [@media(max-width:767px)]:mb-[15px]">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-[22px] font-[800] leading-[1.3] [@media(max-width:767px)]:text-[19px]">{name}</h3>
              <p className="mt-[12px] mb-[22px] text-[var(--subtle)] text-[15px] leading-[1.6]">{description}</p>
              <DetailsDialog id={`category-${index}`} title={name} label={content.exploreLabel} className="text-link category-link [&:hover]:underline mt-auto text-[14px] font-[800]">
                <p className="mt-[12px] mb-[22px] text-[var(--subtle)] text-[15px] leading-[1.6]">{description}</p>
                {featuredCourseTitle && <p className="mt-[12px] mb-[22px] text-[var(--subtle)] text-[15px] leading-[1.6]">{content.featuredCoursePrefix}{featuredCourseTitle}</p>}
              </DetailsDialog>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
