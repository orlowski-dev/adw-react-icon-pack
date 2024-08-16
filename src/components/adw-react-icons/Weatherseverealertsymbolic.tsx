"use client";

import { createElement, type HTMLAttributes, useId } from "react";

interface Props {
  title?: string;
  size?: number;
  wrapper?: "div" | "span";
  wrapperProps?:
    | HTMLAttributes<HTMLDivElement>
    | HTMLAttributes<HTMLSpanElement>;
}

const SvgTemplate = ({ title, size }: Props) => {
  const id = useId();
  const sizeEm = size ? `${size / 16}em` : "1.5em";

  return (
    <svg
      height={sizeEm}
      viewBox="0 0 16 16"
      width={sizeEm}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={title ? id : undefined}
    >
      {title ? <title id={id}>{title}</title> : undefined}
      <defs
     id="defs83969" />
  <path
     id="path124616-1"
     style="color:#000000;display:inline;fill:currentColor;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none"
     d="M 6.00781,2.06822 C 2.72619,2.06774 0.04445,4.74947 0.04492,8.03111 0.04445,11.31274 2.72619,13.99448 6.00781,13.994 L 7,14 V 12 L 6.01367,11.994 c -0.003,-10e-6 -0.005,-10e-6 -0.008,0 C 3.80513,11.99432 2.04442,10.23167 2.04473,8.03111 2.04442,5.83055 3.80513,4.0679 6.00567,4.06822 c 1.6155,9.6e-4 3.06291,0.97559 3.66992,2.47266 0.0814,0.18763 0.21846,0.34578 0.39258,0.45312 h 5.05664 c 0.048,0 0.0953,0.004 0.14258,0.008 -0.81266,-1.18728 -2.17688,-1.9707 -3.71485,-1.9707 -0.14861,0 -0.29047,0.0476 -0.4375,0.0625 C 10.06222,3.26798 8.15478,2.06968 6.00762,2.06841 Z" />
  <path
     class="warning"
     d="m 8.875 8 c -0.492188 0 -0.875 0.382812 -0.875 0.875 v 6.25 c 0 0.492188 0.382812 0.875 0.875 0.875 h 6.25 c 0.492188 0 0.875 -0.382812 0.875 -0.875 v -6.25 c 0 -0.492188 -0.382812 -0.875 -0.875 -0.875 z m 2.125 1 h 2 v 2.5 s 0 0.5 -0.5 0.5 h -1 c -0.5 0 -0.5 -0.5 -0.5 -0.5 z m 0.5 4 h 1 c 0.277344 0 0.5 0.222656 0.5 0.5 v 1 c 0 0.277344 -0.222656 0.5 -0.5 0.5 h -1 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 v -1 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0"
     fill="#ff7800"
     id="path83963" />
    </svg>
  );
};

const AdwWeatherseverealertsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWeatherseverealertsymbolic;
