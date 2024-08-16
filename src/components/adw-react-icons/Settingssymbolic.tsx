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
      <path d="m 7.5 1.019531 c -0.550781 0 -0.996094 0.445313 -0.996094 0.996094 v 0.453125 c -0.472656 0.128906 -0.929687 0.320312 -1.355468 0.566406 l -0.324219 -0.324218 c -0.390625 -0.390626 -1.019531 -0.390626 -1.410157 0 l -0.703124 0.707031 c -0.390626 0.390625 -0.390626 1.019531 0 1.410156 l 0.320312 0.320313 c -0.246094 0.425781 -0.433594 0.882812 -0.5625 1.355468 h -0.453125 c -0.550781 0 -0.996094 0.445313 -0.996094 0.996094 v 1 c 0 0.550781 0.445313 0.996094 0.996094 0.996094 h 0.449219 c 0.132812 0.472656 0.320312 0.929687 0.566406 1.355468 l -0.320312 0.320313 c -0.390626 0.390625 -0.390626 1.019531 0 1.410156 l 0.703124 0.707031 c 0.390626 0.390626 1.019532 0.390626 1.410157 0 l 0.320312 -0.320312 c 0.429688 0.242188 0.882813 0.433594 1.359375 0.558594 v 0.457031 c 0 0.550781 0.445313 0.996094 0.996094 0.996094 h 0.996094 c 0.554687 0 1 -0.445313 1 -0.996094 v -0.453125 c 0.472656 -0.128906 0.929687 -0.320312 1.355468 -0.566406 l 0.320313 0.324218 c 0.390625 0.390626 1.019531 0.390626 1.410156 0 l 0.707031 -0.707031 c 0.390626 -0.390625 0.390626 -1.019531 0 -1.410156 l -0.320312 -0.320313 c 0.242188 -0.425781 0.433594 -0.882812 0.558594 -1.355468 h 0.453125 c 0.554687 0 1 -0.445313 1 -0.996094 v -1 c 0 -0.550781 -0.445313 -0.996094 -1 -0.996094 h -0.449219 c -0.128906 -0.472656 -0.320312 -0.929687 -0.566406 -1.355468 l 0.324218 -0.320313 c 0.390626 -0.390625 0.390626 -1.019531 0 -1.410156 l -0.707031 -0.707031 c -0.390625 -0.390626 -1.019531 -0.390626 -1.410156 0 l -0.320313 0.320312 c -0.425781 -0.242188 -0.882812 -0.429688 -1.355468 -0.558594 v -0.457031 c 0 -0.550781 -0.445313 -0.996094 -1 -0.996094 z m 0.515625 3.976563 c 1.660156 0 3 1.34375 3 3 s -1.339844 3 -3 3 c -1.65625 0 -3 -1.34375 -3 -3 s 1.34375 -3 3 -3 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSettingssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSettingssymbolic;
