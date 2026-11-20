'use client';

import { useRef, type ReactNode } from 'react';

export function DetailsDialog({ id, label, title, children, className }: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button" className={className} onClick={() => dialog.current?.showModal()}>{label}</button>
      <dialog className="w-[min(34rem,calc(100%_-_40px))] m-auto bg-white text-ink [border:1px_solid_var(--line)] rounded-[16px] [padding:clamp(20px,5vw,36px)] backdrop:bg-[#171b2c88]" ref={dialog} aria-labelledby={id}>
        <h2 className="font-display font-[800] tracking-[-.045em] leading-[1.12] [@media(max-width:767px)]:leading-[36px] [@media(max-width:767px)]:tracking-[-.04em] text-[30px] mb-[16px] [.footer-navigation_&]:text-[#d9dbe1] [.footer-navigation_&]:[font:600_13px/1.5_var(--font-sans)] [.footer-navigation_&]:uppercase [.footer-navigation_&]:tracking-[.12em] [.footer-navigation_&]:mb-[19px] [.footer-navigation_&]:[@media(max-width:767px)]:mb-[14px]" id={id}>{title}</h2>
        {children}
        <form method="dialog"><button className="button secondary inline-flex items-center justify-center text-center font-bold min-h-[48px] py-[12px] px-[27px] [border-width:1px] border-solid rounded-[7px] text-[14px] [&:hover]:[filter:brightness(.95)] bg-white border-[var(--line)] text-ink [.featured_&]:min-[1024px]:min-h-[60px] [.featured_&]:min-[1024px]:px-[31px] [.featured_&]:[@media(max-width:767px)]:min-h-[52px] [.community-grid_&]:min-[1024px]:min-h-[60px] [.community-grid_&]:min-[1024px]:px-[31px] [.header-actions_&]:[@media(max-width:1023px)]:px-[13px]">Close</button></form>
      </dialog>
    </>
  );
}
