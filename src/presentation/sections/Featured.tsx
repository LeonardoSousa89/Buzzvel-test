import Image from 'next/image';
import type { Course } from '../../domain/catalog';
import { DetailsDialog } from '../shared/DetailsDialog';

export function Featured({ course }: { course: Course }) {
  return (
    <section id="featured" className="section featured" aria-labelledby="featured-title">
      <div className="shell featured-grid">
        <div className="featured-visual">
          <Image src={course.photo.src} alt={course.photo.alt} fill sizes="(max-width: 767px) 90vw, 43vw" />
          <span>{course.badge}</span>
        </div>
        <div>
          <p className="eyebrow">{course.eyebrow}</p>
          <h2 id="featured-title">{course.title}</h2>
          <p className="featured-description">{course.description}</p>
          <p className="byline">{course.instructorPrefix}{course.instructor}</p>
          <ul className="course-metadata">{course.metadata.map((value) => <li key={value}>{value}</li>)}</ul>
          <div className="actions">
            <DetailsDialog id="course-details" title={course.title} label={course.viewLabel} className="button yellow">
              <p>{course.description}</p><p>{course.instructor}</p>
              <p>{course.metadata.join(course.metadataSeparator)}</p>
            </DetailsDialog>
            <a className="text-link" href={course.browse.href}>{course.browse.label}{' '}<span aria-hidden="true">{course.browseIcon}</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
