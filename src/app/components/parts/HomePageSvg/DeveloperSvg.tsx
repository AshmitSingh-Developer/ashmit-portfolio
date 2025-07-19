import React from 'react';

const DeveloperSvg = () => {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[440px]"
    >
      <style>
        {`
          .blinking-cursor {
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            from, to { fill: transparent }
            50% { fill: #00ff0; }
          }
          .screen-glow {
            filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.6));
          }
          .pulsate {
            animation: pulsate 2s ease-in-out infinite;
          }
          @keyframes pulsate {
            0% { fill: #68d391; }
            50% { fill: #9ae6b4; }
            100% { fill: #68d391; }
          }
        `}
      </style>
      
      <g transform="translate(0, -8)">
        {/* Desk */}
        <rect x="0" y="240" width="400" height="15" fill="#718096" rx="3" />
        
        {/* Desk items */}
        <g>
          {/* CPU */}
          <g>
            <rect x="320" y="140" width="60" height="100" fill="#2d3748" rx="5" />
            {/* Front panel details */}
            <rect x="325" y="145" width="50" height="15" fill="#4a5568" rx="3" /> {/* Top section */}
            <rect x="325" y="165" width="50" height="5" fill="#1a202c" rx="1" /> {/* CD drive slot */}
            <rect x="325" y="175" width="50" height="55" fill="#4a5568" rx="3" /> {/* Main body section */}
            
            {/* USB Ports */}
            <rect x="330" y="180" width="15" height="5" fill="#a0aec0" rx="1" />
            <rect x="350" y="180" width="15" height="5" fill="#a0aec0" rx="1" />
            {/* Audio Jacks */}
            <circle cx="335" cy="190" r="2" fill="#a0aec0" />
            <circle cx="355" cy="190" r="2" fill="#a0aec0" />

            {/* More Lights */}
            <circle cx="330" cy="155" r="2" fill="#68d391" className="pulsate" /> {/* Power LED */}
            <circle cx="340" cy="155" r="2" fill="#ef4444" > {/* HDD LED */}
                <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite" />
            </circle>
            <rect x="330" y="200" width="40" height="2" fill="#4299e1" > {/* Bottom light strip */}
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="330" y="208" width="40" height="5" fill="#1a202c" rx="1" /> {/* CD drive slot */}
            <rect x="330" y="217" width="40" height="5" fill="#1a202c" rx="1" /> {/* CD drive slot */}
          </g>
          
          {/* Monitor */}
          <g transform="translate(0, -20)">
            <rect x="100" y="100" width="200" height="120" fill="#1a202c" rx="10" className="screen-glow" />
            <rect x="105" y="105" width="190" height="110" fill="#000" />
            <rect x="195" y="220" width="10" height="40" fill="#4a5568" />
            <rect x="160" y="255" width="80" height="5" fill="#718096" rx="2.5" />
            <text x="115" y="125" fontFamily="monospace" fontSize="10" fill="#4ade80">&lt;div&gt;</text>
            <text x="125" y="140" fontFamily="monospace" fontSize="10" fill="#f7fafc">Hello, World!</text>
            <text x="115" y="155" fontFamily="monospace" fontSize="10" fill="#4ade80">&lt;/div&gt;</text>
            <rect x="195" y="145" width="2" height="10" className="blinking-cursor" />
          </g>
        </g>
      </g>

      {/* Person (drawn after desk items to overlap them) */}
      <g transform="translate(0, 10)">
        {/* Person Body */}
        <rect x="60" y="190" width="60" height="95" fill="#4a5568" rx="10" />
        {/* Neck */}
        <rect x="85" y="177" width="10" height="14" fill="#d3a18d" rx="2" />
        {/* Head - top 20% circle, rest square */}
        <path d="M 70 158 A 20 20 0 0 1 110 158 L 110 178 L 70 178 Z" fill="#d3a18d" />
        {/* Hair */}
        <path d="M 65 143 Q 90 118, 115 143 L 115 178 L 65 178 Z" fill="#2d3748" />
        {/* Headphones */}
        <path d="M 70 138 A 30 30 0 0 1 113 138" stroke="#1a202c" strokeWidth="10" fill="none" strokeLinecap="round" />
        <rect x="60" y="138" width="15" height="32" fill="#1a202c" rx="5" />
        <rect x="108" y="138" width="15" height="32" fill="#1a202c" rx="5" />
        {/* Chair (drawn after person to overlap) */}
        <path d="M 125 190 L 125 290 L 55 290 L 55 240 C 55 220, 125 220, 125 240 Z" fill="#2d3748" />
      </g>

      {/* Floating Icons (moved to end for visibility) */}
      {/* <g className='absolute mt-44' transform="translate(50, 100)">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -15; 0 0" dur="3s" repeatCount="indefinite" />
        <text fontSize="28" fill="#f0e68c">JS</text>
      </g>
      <g  transform="translate(300, 400)">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 15; 0 0" dur="4s" repeatCount="indefinite" />
        <text fontSize="28" fill="#61dafb">⚛</text>
      </g> */}
    </svg>
  );
};

export default DeveloperSvg;