import React from 'react';

export const NotFoundAsset = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 680 400"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <style>
        {`
          @keyframes bop-left {
            0%, 100% { transform: rotate(0deg) translateY(0); }
            50% { transform: rotate(-4deg) translateY(-4px); }
          }
          @keyframes bop-right {
            0%, 100% { transform: rotate(0deg) translateY(0); }
            50% { transform: rotate(4deg) translateY(-4px); }
          }
          @keyframes q-bounce {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.05) rotate(3deg); }
          }
          @keyframes flash-scale {
            0%, 100% { opacity: 0.3; transform: scale(0.9); }
            50% { opacity: 1; transform: scale(1.1); }
          }
          @keyframes flash-opacity {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
          @keyframes pulse-text {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }

          .animate-bop-left {
            animation: bop-left 0.7s infinite ease-in-out;
            transform-origin: 232px 258px; /* Anchor at feet */
          }
          .animate-bop-right {
            animation: bop-right 0.7s infinite ease-in-out 0.1s; /* Slight delay for syncopation */
            transform-origin: 448px 258px;
          }
          .animate-q-bounce {
            animation: q-bounce 0.7s infinite ease-in-out 0.2s;
            transform-origin: 344px 166px;
          }
          .animate-radiate {
            animation: flash-scale 0.7s infinite ease-in-out 0.2s;
            transform-origin: 344px 148px;
          }
          .animate-stars {
            animation: flash-opacity 0.7s infinite step-end 0.35s;
          }
          .animate-motion-lines {
            animation: flash-opacity 0.7s infinite step-end;
          }
          .animate-text {
            animation: pulse-text 2.5s infinite ease-in-out;
          }
        `}
      </style>
      <title>Keith Haring style not found icon</title>
      <desc>
        Bold black outline figures in Keith Haring style with a question mark,
        indicating not found
      </desc>
      {/* Frame */}
      <rect
        x={240}
        y={68}
        width={200}
        height={264}
        rx={3}
        fill="none"
        stroke="#202020"
        strokeWidth={10}
      />
      <rect
        x={252}
        y={80}
        width={176}
        height={240}
        rx={1}
        fill="#202020"
        strokeWidth={1.5}
      />
      {/* ── KEITH HARING FIGURES ── */}
      {/* Figure LEFT — searching, leaning forward */}
      <g className="animate-bop-left">
        {/* head */}
        <circle
          cx={232}
          cy={155}
          r={18}
          fill="#C8132A"
          stroke="#1F1A18"
          strokeWidth={7}
        />
        {/* body */}
        <path
          d="M232 173 L232 225"
          fill="none"
          stroke="#1F1A18"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* left arm reaching forward */}
        <path
          d="M232 190 L268 178"
          fill="none"
          stroke="#1F1A18"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* right arm back */}
        <path
          d="M232 190 L210 200"
          fill="none"
          stroke="#1F1A18"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* left leg forward */}
        <path
          d="M232 225 L252 258"
          fill="none"
          stroke="#1F1A18"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* right leg back */}
        <path
          d="M232 225 L215 258"
          fill="none"
          stroke="#1F1A18"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* Question mark & Radiating Lines — centre */}
      <g className="animate-q-bounce">
        {/* ? arc */}
        <path
          d="M322 148 Q322 128 340 124 Q360 120 364 138 Q368 154 348 166 L344 185"
          fill="none"
          stroke="#C8132A"
          strokeWidth={12}
          strokeLinecap="round"
        />
        {/* ? dot */}
        <circle
          cx={344}
          cy={198}
          r={7}
          fill="#C8132A"
          stroke="#1a0a02"
          strokeWidth={5}
        />
      </g>
      {/* radiate lines around ? */}
      <g className="animate-radiate">
        <line
          x1={300}
          y1={130}
          x2={288}
          y2={122}
          stroke="#C8132A"
          strokeWidth={5}
          strokeLinecap="round"
        />
        <line
          x1={295}
          y1={152}
          x2={280}
          y2={152}
          stroke="#C8132A"
          strokeWidth={5}
          strokeLinecap="round"
        />
        <line
          x1={385}
          y1={130}
          x2={397}
          y2={122}
          stroke="#C8132A"
          strokeWidth={5}
          strokeLinecap="round"
        />
        <line
          x1={390}
          y1={152}
          x2={405}
          y2={152}
          stroke="#C8132A"
          strokeWidth={5}
          strokeLinecap="round"
        />
        <line
          x1={340}
          y1={112}
          x2={340}
          y2={98}
          stroke="#C8132A"
          strokeWidth={5}
          strokeLinecap="round"
        />
      </g>
      {/* Figure RIGHT — shrugging, arms up */}
      <g className="animate-bop-right">
        {/* head */}
        <circle
          cx={448}
          cy={155}
          r={18}
          fill="#f5c400"
          stroke="#1F1A18"
          strokeWidth={7}
        />
        {/* body */}
        <path
          d="M448 173 L448 225"
          fill="none"
          stroke="#1F1A18"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* left arm shrug up */}
        <path
          d="M448 188 L422 168"
          fill="none"
          stroke="#1F1A18"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* right arm shrug up */}
        <path
          d="M448 188 L474 168"
          fill="none"
          stroke="#1F1A18"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* left leg */}
        <path
          d="M448 225 L432 258"
          fill="none"
          stroke="#1F1A18"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* right leg */}
        <path
          d="M448 225 L464 258"
          fill="none"
          stroke="#1F1A18"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* small motion stars near right figure's hands */}
      <g className="animate-stars">
        <path
          d="M416 160 L410 154 M416 154 L410 160"
          fill="none"
          stroke="#1a0a02"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M478 160 L484 154 M478 154 L484 160"
          fill="none"
          stroke="#1a0a02"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* not found label */}
      <text
        className="animate-text"
        x={340}
        y={360}
        fontFamily="Georgia, serif"
        fontSize={14}
        fontStyle="italic"
        fill="#C8132A"
        textAnchor="middle"
      >
        not found
      </text>
    </svg>
  );
};
