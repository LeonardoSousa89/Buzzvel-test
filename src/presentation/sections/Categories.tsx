import type { CategoriesContent } from '../../domain/catalog';
import type { CategoryCard } from '../../application/catalog/category-cards';
import { DetailsDialog } from '../shared/DetailsDialog';

export function Categories({ cards, content }: { cards: readonly CategoryCard[]; content: CategoriesContent }) {
  return (
    <section id="courses" className="section" aria-labelledby="courses-title">
      <div className="shell">
        <div className="section-intro">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="courses-title">{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <div className="category-grid">
          {cards.map(({ id, name, description, featuredCourseTitle }, index) => (
            <article className="category" key={id}>
              <span className="category-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <DetailsDialog id={`category-${index}`} title={name} label={content.exploreLabel} className="text-link category-link">
                <p>{description}</p>
                {featuredCourseTitle && <p>{content.featuredCoursePrefix}{featuredCourseTitle}</p>}
              </DetailsDialog>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
