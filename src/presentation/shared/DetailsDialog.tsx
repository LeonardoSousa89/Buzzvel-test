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
      <dialog ref={dialog} aria-labelledby={id}>
        <h2 id={id}>{title}</h2>
        {children}
        <form method="dialog"><button className="button secondary">Close</button></form>
      </dialog>
    </>
  );
}
