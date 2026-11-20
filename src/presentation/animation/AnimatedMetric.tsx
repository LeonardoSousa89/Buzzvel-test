'use client';

import { useEffect, useReducer, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';
import type { Metric } from '../../domain/testimonial';
import { countReducer, initialCountState } from '../../application/animation/count-reducer';

const completedMetrics = new Set<string>();

export function AnimatedMetric({ value, label, animation }: Metric) {
  const container = useRef<HTMLSpanElement>(null);
  const visual = useRef<HTMLSpanElement>(null);
  const visible = useInView(container, { once: true });
  const reducedMotion = useReducedMotion();
  const [state, dispatch] = useReducer(countReducer, initialCountState);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    function finish() { dispatch({ type: 'completed' }); }
    function handlePreference() { if (preference.matches) finish(); }
    if (!animation || preference.matches || reducedMotion || completedMetrics.has(label)) finish();
    preference.addEventListener('change', handlePreference);
    return () => preference.removeEventListener('change', handlePreference);
  }, [animation, label, reducedMotion]);

  useEffect(() => {
    if (visible) dispatch({ type: 'visible' });
  }, [visible]);

  useEffect(() => {
    const node = visual.current;
    if (!node) return;
    if (state.phase === 'completed') {
      completedMetrics.add(label);
      node.textContent = value;
      return;
    }
    if (state.phase !== 'running' || !animation) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || completedMetrics.has(label)) {
      dispatch({ type: 'completed' });
      return;
    }
    let active = true;
    function finish() {
      if (!active) return;
      node!.textContent = value;
      completedMetrics.add(label);
      dispatch({ type: 'completed' });
    }
    node.textContent = '0';
    const controls = animate(0, animation.target, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (current) => {
        if (!active) return;
        const count = Math.floor(current / animation.divisor);
        node.textContent = `${count}${animation.suffix}`;
      },
      onComplete: finish,
    });
    function handlePreference() {
      if (preference.matches) { controls.stop(); finish(); }
    }
    preference.addEventListener('change', handlePreference);
    return () => {
      active = false;
      controls.stop();
      preference.removeEventListener('change', handlePreference);
      node.textContent = value;
      // Cleanup of a started count preserves completion across remounts/Strict Mode.
      completedMetrics.add(label);
    };
  }, [animation, label, state.phase, value]);

  return (
    <span ref={container} data-metric-animation className="relative inline-block">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="invisible">{value}</span>
      <span ref={visual} aria-hidden="true" className="absolute inset-0">{value}</span>
    </span>
  );
}
