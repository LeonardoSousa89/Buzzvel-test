import Image from 'next/image';
import type { CommunityContent } from '../../domain/community';
import { DetailsDialog } from '../shared/DetailsDialog';

export function Community({ content }: { content: CommunityContent }) {
  return (
    <section id="community" className="section cream" aria-labelledby="community-title">
      <div className="shell community-grid">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="community-title">{content.title}</h2>
          <p className="community-description">{content.description}</p>
          <DetailsDialog id="community-details" title={content.dialogTitle} label={content.exploreLabel} className="button secondary">
            <p>{content.details}</p>
          </DetailsDialog>
        </div>
        <div className="collage" aria-hidden="true">
          {content.collage.map((column) => <div key={column[0].id} className="collage-column">
            {column.map(({ id, src }) => <div key={id} className={`tile tile-${id}`}><Image src={src} alt="" fill sizes="(max-width: 767px) 25vw, 11vw" /></div>)}
          </div>)}
        </div>
      </div>
    </section>
  );
}
