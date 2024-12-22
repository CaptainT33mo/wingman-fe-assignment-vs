import * as React from "react"
import { SVGProps } from "react"
const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
        fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <path
      fill="#CCFBEF"
      d="M16.125 7.888A7.821 7.821 0 0 1 8.312 15.7H1.724A1.226 1.226 0 0 1 .5 14.476V7.888a7.812 7.812 0 0 1 15.625 0Z"
    />
  </svg>
)
export default ChatIcon
