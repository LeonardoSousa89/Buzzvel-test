'use client';

import { useReducer, useRef, type KeyboardEvent } from 'react';
import { menuReducer } from '../../application/navigation/menu-reducer';
import type { NavigationLink } from '../../domain/navigation';

type MobileMenuProps = {
  links: readonly NavigationLink[];
  startLearning: NavigationLink;
};

export function MobileMenu({ links, startLearning }: MobileMenuProps) {
  const [open, dispatch] = useReducer(menuReducer, false);
  const toggle = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    dispatch({ type: 'closed' });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape' && open) {
      closeMenu();
      toggle.current?.focus();
    }
  }

  return (
    <div className="mobile-menu hidden [@media(max-width:767px)]:block" onKeyDown={handleKeyDown}>
      <button ref={toggle} className="menu-toggle [@media(max-width:767px)]:min-w-[44px] [@media(max-width:767px)]:min-h-[44px] [@media(max-width:767px)]:text-[21px]" type="button" aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open} aria-controls="mobile-navigation" onClick={() => dispatch({ type: 'toggled' })}>
        <span aria-hidden="true">{open ? '×' : '☰'}</span>
      </button>
      <nav className="[@media(max-width:767px)]:absolute [@media(max-width:767px)]:right-[20px] [@media(max-width:767px)]:left-[20px] [@media(max-width:767px)]:[top:calc(100%_+_5px)] [@media(max-width:767px)]:[border:1px_solid_var(--line)] [@media(max-width:767px)]:bg-white [@media(max-width:767px)]:rounded-[9px] [@media(max-width:767px)]:p-[8px] [@media(max-width:767px)]:[box-shadow:0_6px_20px_#171b2c20]" id="mobile-navigation" aria-label="Mobile navigation" hidden={!open}>
        {links.map(({ label, href }) => <a className="[&:hover]:underline [@media(max-width:767px)]:block [@media(max-width:767px)]:p-[12px]" key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="[&:hover]:underline [@media(max-width:767px)]:block [@media(max-width:767px)]:p-[12px]" href={startLearning.href} onClick={closeMenu}>{startLearning.label}</a>
      </nav>
    </div>
  );
}
