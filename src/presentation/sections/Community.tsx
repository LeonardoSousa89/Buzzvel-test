import Image from 'next/image';
import type { CommunityContent } from '../../domain/community';
import { DetailsDialog } from '../shared/DetailsDialog';

const tileClasses: Record<string, string> = {
  classroom: 'w-[75%] [justify-self:end] aspect-[3/4]',
  group: 'aspect-[.69]',
  campus: 'aspect-[.69]',
  studio: 'aspect-[.69]',
  reading: 'aspect-[.85]',
  'community-student': 'w-[82%] aspect-[82/106]',
};

const tileImageClasses: Record<string, string> = {
  classroom: 'object-[57%_center]',
  campus: 'object-[53%_center]',
  'community-student': 'object-[center_45%]',
};

export function Community({ content }: { content: CommunityContent }) {
  return (
    <section id="community" className="section cream [padding-block:clamp(70px,7.8vw,128px)] [@media(max-width:767px)]:[padding-block:60px] bg-[var(--cream)] [@media(max-width:767px)]:py-[44px]" aria-labelledby="community-title">
      <div className="shell community-grid [width:min(87.5%,1440px)] mx-auto [@media(360px<width<=767px)]:[width:calc(100%_-_40px)] [@media(max-width:360px)]:[width:calc(100%_-_32px)] grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[5.25%] items-center [@media(max-width:767px)]:grid-cols-[minmax(0,1fr)] [@media(max-width:767px)]:gap-[34px]">
        <div>
          <p className="eyebrow text-brand text-[12px] leading-[1.3] font-[800] uppercase tracking-[.14em] mb-[20px] [@media(max-width:767px)]:mb-[15px]">{content.eyebrow}</p>
          <h2 className="font-display font-[800] tracking-[-.045em] [font-size:clamp(34px,4vw,56px)] leading-[1.12] [@media(max-width:767px)]:text-[32px] [@media(max-width:767px)]:leading-[36px] [@media(max-width:767px)]:tracking-[-.04em]" id="community-title">{content.title}</h2>
          <p className="community-description mt-[18px] mb-[28px] text-ink [font-size:clamp(16px,1.35vw,20px)] leading-[1.55] [@media(max-width:767px)]:text-[16px] [@media(max-width:767px)]:leading-[26px] min-[768px]:text-[var(--muted)]">{content.description}</p>
          <DetailsDialog id="community-details" title={content.dialogTitle} label={content.exploreLabel} className="button secondary inline-flex items-center justify-center text-center font-bold min-h-[48px] py-[12px] px-[27px] [border-width:1px] border-solid rounded-[7px] text-[14px] [&:hover]:[filter:brightness(.95)] bg-white border-[var(--line)] text-ink min-[1024px]:min-h-[60px] min-[1024px]:px-[31px]">
            <p className="mb-[16px]">{content.details}</p>
          </DetailsDialog>
        </div>
        <div className="collage relative isolate grid grid-cols-[1.15fr_.9fr_.9fr_1.1fr] [align-items:start] gap-[2.5%] aspect-[1.02] before:content-[''] before:w-[94%] before:aspect-[1] before:rounded-[50%] before:bg-[var(--blue-light)] before:absolute before:left-[3%] before:top-0 before:-z-[1] [@media(max-width:767px)]:[width:min(100%,352px)] [@media(max-width:767px)]:justify-self-center" aria-hidden="true">
          {content.collage.map((column) => <div key={column[0].id} className="collage-column grid [gap:clamp(5px,.7vw,14px)] [align-content:start] [&:nth-child(1)]:mt-[68%] [&:nth-child(2)]:mt-[9%] [&:nth-child(3)]:mt-[18%] [&:nth-child(4)]:mt-[58%] min-[768px]:[&:nth-child(4)]:mt-[38%]">
            {column.map(({ id, src }) => <div key={id} className={`tile tile-${id} relative overflow-hidden rounded-[5px] [box-shadow:0_3px_9px_#171b2c17] ${tileClasses[id] ?? 'aspect-[3/4]'}`}><Image className={`object-cover ${tileImageClasses[id] ?? ''}`} src={src} alt="" fill sizes="(max-width: 767px) 25vw, 11vw" /></div>)}
          </div>)}
        </div>
      </div>
    </section>
  );
}
