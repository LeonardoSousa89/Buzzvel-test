'use client';

import { useSyncExternalStore } from 'react';

const mobileQuery = '(max-width: 767px)';

function subscribeToViewport(update: () => void) {
  const viewport = window.matchMedia(mobileQuery);
  viewport.addEventListener('change', update);
  return () => viewport.removeEventListener('change', update);
}

function isMobileViewport() {
  return window.matchMedia(mobileQuery).matches;
}

function getServerSnapshot() {
  return false;
}

export function useMobileViewport() {
  return useSyncExternalStore(subscribeToViewport, isMobileViewport, getServerSnapshot);
}
