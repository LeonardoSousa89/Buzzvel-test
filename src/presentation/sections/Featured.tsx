import Image from 'next/image';
import type { Course } from '../../domain/catalog';
import { DetailsDialog } from '../shared/DetailsDialog';

export function Featured({ course }: { course: Course }) {
  return (
    <section id="featured" className="section featured [padding-block:clamp(70px,7.8vw,128px)] [@media(max-width:767px)]:[padding-block:60px] text-white bg-brand [@media(max-width:767px)]:pb-[76px]" aria-labelledby="featured-title">
      <div className="shell featured-grid [width:min(87.5%,1440px)] mx-auto [@media(360px<width<=767px)]:[width:calc(100%_-_40px)] [@media(max-width:360px)]:[width:calc(100%_-_32px)] grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[5.25%] items-center [@media(max-width:767px)]:grid-cols-[minmax(0,1fr)] [@media(max-width:767px)]:gap-[34px] min-[1024px]:grid-cols-[48%_1fr] min-[1024px]:gap-[5.3%]">
        <div className="featured-visual relative aspect-[1.317]">
          <Image className="object-cover rounded-[18px]" src={course.photo.src} alt={course.photo.alt} fill sizes="(max-width: 767px) 90vw, 43vw" />
          <span className="absolute top-[-12px] left-[-12px] rounded-[5px] bg-[var(--yellow)] text-ink py-[6px] px-[12px] text-[12px] font-[800] tracking-[.12em] uppercase [@media(max-width:767px)]:left-[-9px]">{course.badge}</span>
        </div>
        <div>
          <p className="eyebrow text-[12px] leading-[1.3] font-[800] uppercase tracking-[.14em] mb-[20px] [@media(max-width:767px)]:mb-[15px] text-white">{course.eyebrow}</p>
          <h2 className="font-display font-[800] tracking-[-.045em] [font-size:clamp(34px,4vw,56px)] leading-[1.12] [@media(max-width:767px)]:text-[32px] [@media(max-width:767px)]:leading-[36px] [@media(max-width:767px)]:tracking-[-.04em]" id="featured-title">{course.title}</h2>
          <p className="featured-description text-[#f1f3ff] leading-[1.6] mt-[18px] min-[1024px]:text-[18px]">{course.description}</p>
          <p className="byline text-[#f1f3ff] leading-[1.6] mt-[18px]">{course.instructorPrefix}{course.instructor}</p>
          <ul className="course-metadata flex flex-wrap gap-[10px] mt-[24px] mb-[30px] [@media(max-width:360px)]:gap-[6px]">{course.metadata.map((value) => <li className="[border:1px_solid_#ffffff80] rounded-[5px] py-[7px] px-[12px] text-[13px] [@media(max-width:360px)]:px-[7px]" key={value}>{value}</li>)}</ul>
          <div className="actions flex flex-wrap items-center gap-[14px] [@media(max-width:767px)]:flex-col [@media(max-width:767px)]:items-stretch">
            <DetailsDialog id="course-details" title={course.title} label={course.viewLabel} className="button yellow inline-flex items-center justify-center text-center font-bold min-h-[48px] py-[12px] px-[27px] [border-width:1px] border-solid border-transparent rounded-[7px] text-[14px] [&:hover]:[filter:brightness(.95)] bg-[var(--yellow)] text-ink min-[1024px]:min-h-[60px] min-[1024px]:px-[31px] [@media(max-width:767px)]:min-h-[52px]">
              <p className="mb-[16px]">{course.description}</p><p className="mb-[16px]">{course.instructor}</p>
              <p className="mb-[16px]">{course.metadata.join(course.metadataSeparator)}</p>
            </DetailsDialog>
            <a className="text-link [&:hover]:underline text-[14px] font-semibold [@media(max-width:767px)]:text-center [@media(max-width:767px)]:p-[10px]" href={course.browse.href}>{course.browse.label}{' '}<span aria-hidden="true">{course.browseIcon}</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
