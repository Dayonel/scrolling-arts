import React from 'react';

export const Error = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 680 400"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <style>
        {`
          @keyframes split-left {
            0%, 10% { transform: translate(0, 0) rotate(0deg); }
            15%, 85% { transform: translate(-12px, 3px) rotate(-2deg); }
            95%, 100% { transform: translate(0, 0) rotate(0deg); }
          }
          @keyframes split-right {
            0%, 10% { transform: translate(0, 0) rotate(0deg); }
            15%, 85% { transform: translate(12px, 6px) rotate(2.5deg); }
            95%, 100% { transform: translate(0, 0) rotate(0deg); }
          }
          @keyframes draw-crack {
            0%, 11% { stroke-dashoffset: 1; opacity: 0; }
            12% { opacity: 1; }
            15%, 85% { stroke-dashoffset: 0; opacity: 1; }
            90%, 100% { stroke-dashoffset: 1; opacity: 0; }
          }
          @keyframes fade-in-error {
            0%, 15% { opacity: 0; transform: translateY(-4px); }
            20%, 85% { opacity: 0.8; transform: translateY(0); }
            95%, 100% { opacity: 0; transform: translateY(-4px); }
          }
          .animate-split-left {
            animation: split-left 5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
            transform-origin: 240px 310px;
          }
          .animate-split-right {
            animation: split-right 5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
            transform-origin: 440px 310px;
          }
          .animate-crack {
            animation: draw-crack 5s ease-out infinite;
            stroke-dashoffset: 1;
          }
          .animate-error-text {
            animation: fade-in-error 5s ease-in-out infinite;
          }
        `}
      </style>

      <title>Rembrandt art gallery error — broken painting</title>
      <desc>
        The loading painting split into two pieces that drift apart, indicating
        an error
      </desc>

      <defs>
        {/* Clip left half of everything */}
        <clipPath id="cl">
          <rect x={0} y={0} width={340} height={400} />
        </clipPath>
        {/* Clip right half */}
        <clipPath id="cr">
          <rect x={340} y={0} width={340} height={400} />
        </clipPath>

        <mask id="crack-mask" maskUnits="userSpaceOnUse">
          <rect x={0} y={0} width={680} height={400} fill="white" />
          {/* Mask gaps to hide the crack line behind text blocks */}
          <rect x={309} y={227} width={62} height={20} fill="black" rx={2} />
          <rect x={241} y={127} width={44} height={15} fill="black" rx={2} />
          <rect x={388} y={127} width={58} height={15} fill="black" rx={2} />
          <rect x={303} y={321} width={73} height={19} fill="black" rx={2} />
        </mask>
      </defs>

      {/* LEFT PIECE */}
      <g className="animate-split-left" clipPath="url(#cl)">
        {/* Outer Frame */}
        <rect
          x={240}
          y={90}
          width={200}
          height={220}
          rx={3}
          fill="none"
          stroke="#202020"
          strokeWidth={10}
        />
        {/* inner background fill */}
        <rect
          x={252}
          y={102}
          width={176}
          height={196}
          rx={1}
          fill="#202020"
          strokeWidth={1.5}
        />
        {/* R */}
        <path
          d="M272 145 L272 215 M272 145 Q298 145 298 163 Q298 180 272 180 M278 180 L304 215"
          fill="none"
          stroke="#C8132A"
          strokeWidth={9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* E */}
        <path
          d="M314 145 L314 215 M314 145 L342 145 M314 180 L337 180 M314 215 L342 215"
          fill="none"
          stroke="#C8132A"
          strokeWidth={9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* M */}
        <path
          d="M350 215 L350 145 L368 185 L386 145 L386 215"
          fill="none"
          stroke="#C8132A"
          strokeWidth={9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* van Rijn */}
        <text
          x={340}
          y={242}
          fontFamily="Georgia, serif"
          fontSize={14}
          fontStyle="italic"
          fill="#C8132A"
          textAnchor="middle"
        >
          van Rijn
        </text>
      </g>

      {/* RIGHT PIECE */}
      <g className="animate-split-right" clipPath="url(#cr)">
        {/* Outer Frame */}
        <rect
          x={240}
          y={90}
          width={200}
          height={220}
          rx={3}
          fill="none"
          stroke="#202020"
          strokeWidth={10}
        />
        {/* Inner Frame Box */}
        <rect
          x={252}
          y={102}
          width={176}
          height={196}
          rx={1}
          fill="#202020"
          strokeWidth={1.5}
        />
        {/* R */}
        <path
          d="M272 145 L272 215 M272 145 Q298 145 298 163 Q298 180 272 180 M278 180 L304 215"
          fill="none"
          stroke="#C8132A"
          strokeWidth={9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* E */}
        <path
          d="M314 145 L314 215 M314 145 L342 145 M314 180 L337 180 M314 215 L342 215"
          fill="none"
          stroke="#C8132A"
          strokeWidth={9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* M */}
        <path
          d="M350 215 L350 145 L368 185 L386 145 L386 215"
          fill="none"
          stroke="#C8132A"
          strokeWidth={9}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* van Rijn */}
        <text
          x={340}
          y={242}
          fontFamily="Georgia, serif"
          fontSize={14}
          fontStyle="italic"
          fill="#C8132A"
          textAnchor="middle"
        >
          van Rijn
        </text>
      </g>

      {/* Crack line down the middle */}
      <path
        className="animate-crack"
        pathLength={1}
        strokeDasharray={1}
        d="M340 90 L336 130 L344 165 L337 200 L343 235 L338 270 L340 310"
        fill="none"
        stroke="#1a0a02"
        strokeWidth={2}
        strokeLinecap="round"
        mask="url(#crack-mask)"
      />

      {/* Error label */}
      <g className="animate-error-text">
        <text
          x={340}
          y={335}
          fontFamily="Georgia, serif"
          fontSize={13}
          fontStyle="italic"
          fill="#C8132A"
          textAnchor="middle"
        >
          lost in time
        </text>
      </g>
    </svg>
  );
};
