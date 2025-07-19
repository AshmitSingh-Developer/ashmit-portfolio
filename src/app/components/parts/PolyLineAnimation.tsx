import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FooterLines = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);
  const path4Ref = useRef<SVGPathElement>(null);
  const path5Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const paths = [path1Ref.current, path2Ref.current, path3Ref.current, path4Ref.current, path5Ref.current];
    const pathLengths: number[] = [];

    paths.forEach((path, index) => {
      if (path) {
        const length = path.getTotalLength();
        pathLengths[index] = length;
        path.style.strokeDasharray = length.toString();
        path.style.strokeDashoffset = length.toString();
      }
    });

    const ctx = gsap.context(() => {
      gsap.to(paths, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: '+=1500',
          scrub: true,
          pin: true,
        },
        ease: 'none',
        onUpdate: function () {
          paths.forEach((path, index) => {
            if (path) {
              const length = pathLengths[index];
              const progress = this.progress();
              const drawAmount = length * progress;
              path.style.strokeDashoffset = (length - drawAmount).toString();
            }
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[130px] flex items-center justify-center z-[50]">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 10" preserveAspectRatio="none">
        <path
          ref={path1Ref}
          d="M0,8 C8,3 18,7 28,2 C38,8 48,3 58,7 C68,2 78,6 100,5"
          stroke="#00fff7"
          strokeWidth="0.15"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'url(#glow)' }}
        />
        <path
          ref={path2Ref}
          d="M0,2 C6,5 18,4 26,8 C34,2 48,6 58,4 C70,3 80,6 100,4"
          stroke="#00ffaa"
          strokeWidth="0.15"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'url(#glow)' }}
        />
        <path
          ref={path3Ref}
          d="M0,6 C10,2 20,8 30,3 C40,7 50,2 60,8 C70,3 80,7 100,6"
          stroke="#aaffff"
          strokeWidth="0.15"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'url(#glow)' }}
        />
        <path
          ref={path4Ref}
          d="M0,5 C10,4 20,6 30,4 C40,8 50,3 60,7 C70,4 80,6 100,5"
          stroke="#e805e0"
          strokeWidth="0.15"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'url(#glow)' }}
        />
        <path
          ref={path5Ref}
          d="M0,9 C10,6 22,2 34,7 C46,3 58,6 70,2 C82,4 92,3 100,2"
          stroke="#7de2ff"
          strokeWidth="0.15"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'url(#glow)' }}
        />

        <defs>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default FooterLines;

