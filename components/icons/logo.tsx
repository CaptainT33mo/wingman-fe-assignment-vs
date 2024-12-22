import * as React from "react"
import { SVGProps } from "react"
const WingmanLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
        fill="none"
    viewBox="0 0 34 34" 
    {...props}
  >
    <g filter="url(#a)">
      <rect width={33.2} height={33.2} x={0.4} fill="#fff" rx={5.2} />
      <rect width={33.2} height={33.2} x={0.4} fill="url(#b)" rx={5.2} />
      <rect width={33.2} height={33.2} x={0.4} fill="url(#c)" rx={5.2} />
      <rect
        width={32.8}
        height={32.8}
        x={0.6}
        y={0.2}
        stroke="url(#d)"
        strokeWidth={0.4}
        rx={5}
      />
      <path
        fill="#fff"
        d="M15.57 27.748c-1.359.287-3.077-1.04-1.919-1.806 1.086-.72 3.384-.615 4.316-1.506 4.367-4.075-6.854-.272 2.013-6.677.61-.441 1.237-.88 1.724-1.454 3.14-3.704-7.032 1.832-2.256-3.688 8.045-12.706-4.784-2.392-6.357 5.414-2.75 24.331-7.435-5.345 5.893-12.286 2.374-1.12 5.28-1.76 5.044 2.136-.245 3.06-2.164 3.464-.277 6 1.313 2.264-1.933 4.956-3.233 6.824 2.852 3.558-1.212 6.252-4.948 7.043Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={32.6}
        x2={1.6}
        y1={0.6}
        y2={34.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.81} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={32.6}
        x2={1.6}
        y1={0.6}
        y2={34.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3FDCCD" stopOpacity={0.81} />
        <stop offset={1} stopColor="#09544D" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={17}
        x2={17}
        y1={0}
        y2={33.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#33F7E4" />
        <stop offset={1} stopColor="#051D1B" stopOpacity={0} />
      </linearGradient>
      <filter
        id="a"
        width={33.2}
        height={36.8}
        x={0.4}
        y={-3.6}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={-3.6} />
        <feGaussianBlur stdDeviation={4.14} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.278576 0 0 0 0 0.591667 0 0 0 0 0.56213 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_4266_341" />
      </filter>
    </defs>
  </svg>
)
export default WingmanLogo
