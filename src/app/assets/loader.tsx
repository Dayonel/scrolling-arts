export const Loader = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 680 400"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <style>
        {`
          @keyframes draw {
            0% { stroke-dashoffset: 1; opacity: 0; }
            10% { opacity: 1; }
            70% { stroke-dashoffset: 0; opacity: 1; }
            90% { stroke-dashoffset: 0; opacity: 0; }
            100% { stroke-dashoffset: 1; opacity: 0; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          .animate-draw {
            /* Removed 'alternate' so it only draws forward */
            animation: draw 2.5s ease-out infinite;
            stroke-dashoffset: 1;
          }
          .animate-pulse-1 {
            animation: pulse 1.5s infinite ease-in-out;
            transform-origin: 325px 276px;
          }
          .animate-pulse-2 {
            animation: pulse 1.5s infinite ease-in-out 0.3s;
            transform-origin: 340px 276px;
          }
          .animate-pulse-3 {
            animation: pulse 1.5s infinite ease-in-out 0.6s;
            transform-origin: 355px 276px;
          }
        `}
      </style>

      <title>Rembrandt art gallery loading icon</title>
      <desc>
        Minimal stylized loading animation with a painting frame and brush
        stroke reveal
      </desc>

      {/* Frame rectangle — thick, bold */}
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
        className="animate-draw"
        pathLength={1}
        strokeDasharray={1}
        d="M272 145 L272 215 M272 145 Q298 145 298 163 Q298 180 272 180 M278 180 L304 215"
        fill="none"
        stroke="#C8132A"
        strokeWidth={9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* E */}
      <path
        className="animate-draw"
        pathLength={1}
        strokeDasharray={1}
        d="M314 145 L314 215 M314 145 L342 145 M314 180 L337 180 M314 215 L342 215"
        fill="none"
        stroke="#C8132A"
        strokeWidth={9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* M */}
      <path
        className="animate-draw"
        pathLength={1}
        strokeDasharray={1}
        d="M350 215 L350 145 L368 185 L386 145 L386 215"
        fill="none"
        stroke="#C8132A"
        strokeWidth={9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* van Rijn — italic small below */}
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

      {/* Loading dots */}
      <circle
        cx={325}
        cy={276}
        r={4}
        fill="#B9B9B9"
        className="animate-pulse-1"
      />
      <circle
        cx={340}
        cy={276}
        r={4}
        fill="#B9B9B9"
        className="animate-pulse-2"
      />
      <circle
        cx={355}
        cy={276}
        r={4}
        fill="#B9B9B9"
        className="animate-pulse-3"
      />
    </svg>
  );
};
