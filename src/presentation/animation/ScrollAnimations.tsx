'use client';

import { useEffect } from 'react';
import { animate, cancelFrame, frame as motionFrame, inView, useReducedMotion } from 'motion/react';

const finishedBlocks = new WeakSet<HTMLElement>();

// One existing content container per section; backgrounds, Header and Hero stay stable.
const blockSelectors = [
  '#courses > .shell', '.featured > .shell', '#how-it-works > .shell',
  '.testimonial-grid', '.community-grid', '.contact-grid',
  '.final-cta-content', '.site-footer > .shell',
].join(', ');

export function ScrollAnimations() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const blocks = Array.from(document.querySelectorAll<HTMLElement>(blockSelectors));
    const controls = new Map<HTMLElement, ReturnType<typeof animate>>();
    const saved = new Map<HTMLElement, { opacity: string; transform: string }>();
    const observers: (() => void)[] = [];
    const restoreCallbacks = new Map<HTMLElement, () => void>();
    let frame = 0;
    let disposed = false;

    function restore(block: HTMLElement) {
      const original = saved.get(block);
      if (original) {
        block.style.opacity = original.opacity;
        block.style.transform = original.transform;
      }
    }

    function settle(block: HTMLElement) {
      restore(block);
      let callback = restoreCallbacks.get(block);
      if (!callback) {
        callback = () => restore(block);
        restoreCallbacks.set(block, callback);
      }
      // Restore after Motion's queued render as well as immediately, avoiding a frozen transform.
      motionFrame.postRender(callback);
    }

    function finish(block: HTMLElement) {
      finishedBlocks.add(block);
      controls.get(block)?.cancel();
      controls.delete(block);
      settle(block);
    }

    function finishAll() {
      cancelAnimationFrame(frame);
      observers.forEach((stop) => stop());
      blocks.forEach(finish);
    }

    function revealTarget(target: Element | null) {
      if (!target) return;
      blocks.forEach((block) => {
        if (block.contains(target) || target.contains(block)) finish(block);
      });
    }

    function revealHash() {
      try {
        revealTarget(document.getElementById(decodeURIComponent(location.hash.slice(1))));
      } catch {
        // An invalid hash must never prevent content from remaining available.
      }
    }

    function handleFocus(event: FocusEvent) {
      if (event.target instanceof Element) revealTarget(event.target);
    }

    function handleAnchor(event: MouseEvent) {
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const url = new URL(anchor.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      try {
        revealTarget(document.getElementById(decodeURIComponent(url.hash.slice(1))));
      } catch {
        // Leave navigation to the browser when a hash is malformed.
      }
    }

    function handlePreference() {
      if (preference.matches) finishAll();
    }

    document.addEventListener('focusin', handleFocus, true);
    document.addEventListener('click', handleAnchor, true);
    window.addEventListener('hashchange', revealHash);
    preference.addEventListener('change', handlePreference);

    // Deferring preparation also makes the Strict Mode setup/cleanup rehearsal inert.
    frame = requestAnimationFrame(() => {
      if (disposed) return;
      if (preference.matches || reducedMotion) {
        finishAll();
        return;
      }
      revealHash();
      if (document.activeElement !== document.body && document.activeElement !== document.documentElement) {
        revealTarget(document.activeElement);
      }
      try {
        for (const block of blocks) {
          if (finishedBlocks.has(block)) continue;
          const bounds = block.getBoundingClientRect();
          // Never hide content already available in the first viewport.
          if (bounds.top < window.innerHeight && bounds.bottom > 0) {
            finish(block);
            continue;
          }
          saved.set(block, { opacity: block.style.opacity, transform: block.style.transform });
          observers.push(inView(block, () => {
            if (disposed || finishedBlocks.has(block)) return;
            // No leave callback: Motion unobserves this element after the first entry.
            finishedBlocks.add(block);
            const control = animate(block, { opacity: [0, 1], y: [16, 0] }, {
              duration: 0.52,
              ease: [0.22, 1, 0.36, 1],
              onComplete: () => finish(block),
            });
            controls.set(block, control);
          }));
          block.style.opacity = '0';
          block.style.transform = 'translateY(16px)';
        }
      } catch {
        finishAll();
      }
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observers.forEach((stop) => stop());
      controls.forEach((control, block) => { control.cancel(); finishedBlocks.add(block); });
      restoreCallbacks.forEach((callback) => cancelFrame(callback));
      blocks.forEach(restore);
      document.removeEventListener('focusin', handleFocus, true);
      document.removeEventListener('click', handleAnchor, true);
      window.removeEventListener('hashchange', revealHash);
      preference.removeEventListener('change', handlePreference);
    };
  }, [reducedMotion]);

  return null;
}
