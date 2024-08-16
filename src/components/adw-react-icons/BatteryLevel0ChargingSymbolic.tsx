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
      <path d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.445312 0.355469 c -0.742188 0.371093 -1.554688 1.3125 -1.554688 2.644531 v 8 s -0.015625 0.707031 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 5 v -2 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 6 c 0.554688 0 1 0.445312 1 1 v 2 h 2 v -2 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.371094 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m 6 8 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -3 3 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 v 1 h 3.132812 l -0.964843 1.445312 c -0.105469 0.164063 -0.164063 0.359376 -0.160157 0.554688 h -0.007812 v 1 h 1 v -0.003906 c 0.265625 0 0.519531 -0.101563 0.707031 -0.289063 l 3 -3 c 0.1875 -0.1875 0.289063 -0.441406 0.289063 -0.707031 h 0.003906 v -1 h -3.128906 l 0.960937 -1.445312 c 0.109375 -0.164063 0.167969 -0.359376 0.167969 -0.554688 v -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBatteryLevel0ChargingSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBatteryLevel0ChargingSymbolic;
