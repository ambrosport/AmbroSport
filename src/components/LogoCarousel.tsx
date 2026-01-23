import React, { useEffect, useMemo, useRef, useState } from 'react';

const asw = '/img/ASW-LOGO.png';
const ch = '/img/CHRLDR-LOGO.png';
const fila = '/img/Fila-logo.png';
const swb = '/img/SWB-logo.png';
const coastal = '/img/coastal-cotton.png';
const onward = '/img/onward-logo.png';
const southern = '/img/southern-proper-logo.png';
const simmons = '/img/stewartsimmons.png';
const KC = '/img/KC.png';

const logos = [asw, ch, fila, swb, coastal, onward, southern, simmons, KC];

export function LogoCarousel(): JSX.Element {
  const original = useMemo(() => logos, []);
  const items = useMemo(() => [...original, ...original], [original]); // duplicated for seamless loop

  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const transitionRef = useRef(true);

  const GAP = 30; // px gap between logos

  // measure item width (pixel)
  useEffect(() => {
    const measure = () => {
      const el = itemRef.current;
      if (el) {
        const w = el.getBoundingClientRect().width;
        setItemWidth(w);
      }
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => i + 1);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // when transition ends and we've moved through one original set, snap back
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTransitionEnd = () => {
      if (index >= original.length) {
        transitionRef.current = false;
        setIndex((i) => i - original.length);
      }
    };

    track.addEventListener('transitionend', onTransitionEnd);
    return () => track.removeEventListener('transitionend', onTransitionEnd);
  }, [index, original.length]);

  // re-enable transitions after snapping
  useEffect(() => {
    if (transitionRef.current === false) {
      requestAnimationFrame(() => {
        transitionRef.current = true;
      });
    }
  }, [index]);

  const step = itemWidth ? itemWidth + GAP : 0;
  const transform = `translateX(-${index * step}px)`;
  const transitionStyle = transitionRef.current ? { transition: 'transform 500ms ease' } : { transition: 'none' };

  return (
    <section className="w-full  py-8">
    <h2 className="text-4xl font-bold text-gray-900 mb-4 carousel-title">Our Clients </h2>
      <div className="w-full overflow-hidden">
        <div style={{ width: '100%' }}>
          <div
            ref={trackRef}
            className="flex items-center"
            style={{ gap: GAP, transform, ...transitionStyle }}
          >
            {items.map((src, i) => (
              <div
                key={i}
                ref={i === 0 ? itemRef : null}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: `25%`, padding: '8px 12px' }}
              >
                <img src={src} alt={`logo-${i}`} className="max-h-[60px] w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoCarousel;
