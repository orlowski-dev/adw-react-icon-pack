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
      <path d="M3 5.012v2h1.92c-.055 0 .084.159.084.082v.924H4c-1.716 0-3.03 1.125-3.055 2.484-.012.68.306 1.363.862 1.822.555.46 1.315.7 2.193.7h3.004v-5.93c0-1.171-.887-2.082-2.084-2.082zm1 5.006h1.004v1.005H4c-.52 0-.794-.137-.92-.242-.126-.104-.136-.172-.135-.244.003-.144.085-.52 1.055-.52zM7.996 4v9.023H11c.939 0 1.769-.372 2.299-.959.53-.586.766-1.336.756-2.066a3.079 3.079 0 00-.791-2.043C12.737 7.378 11.92 7 11 7H9.996V4zm2 5H11c.422 0 .626.126.787.303.162.177.264.447.268.722.004.276-.089.53-.24.698-.152.167-.356.3-.815.3H9.996z" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none" overflow="visible" color="#000" font-weight="400" font-family="sans-serif" fill="#474747"/>
    </svg>
  );
};

const AdwPreferencesdesktopfontsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencesdesktopfontsymbolic;
