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
    <div className="mobile-menu" onKeyDown={handleKeyDown}>
      <button ref={toggle} className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open} aria-controls="mobile-navigation" onClick={() => dispatch({ type: 'toggled' })}>
        <span aria-hidden="true">{open ? '×' : '☰'}</span>
      </button>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open}>
        {links.map(({ label, href }) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a href={startLearning.href} onClick={closeMenu}>{startLearning.label}</a>
      </nav>
    </div>
  );
}
