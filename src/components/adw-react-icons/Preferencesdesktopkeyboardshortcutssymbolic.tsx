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
      <path d="M1.502 8C.67 8 0 8.669 0 9.5v4c0 .831.67 1.5 1.502 1.5h9.01c.832 0 1.502-.669 1.502-1.5v-4c0-.831-.67-1.5-1.502-1.5zm.062 1c3.186.269 6.116.23 8.885 0 .303-.025.564.26.564.563v2.874c0 .303-.262.529-.564.563-3.004.34-5.964.327-8.885 0-.301-.034-.563-.26-.563-.563V9.563c0-.303.261-.588.563-.563zM9.51 0c-.831 0-1.5.669-1.5 1.5v4c0 .831.669 1.5 1.5 1.5h4.005c.832 0 1.502-.669 1.502-1.5v-4c0-.831-.67-1.5-1.502-1.5zm.063 1a20.12 20.12 0 003.88 0c.302-.029.563.26.563.563v2.875c0 .302-.262.525-.563.562-1.255.154-2.542.18-3.88 0-.3-.04-.563-.26-.563-.563V1.563c0-.302.262-.592.563-.562zM1.502 1C.67 1 0 1.669 0 2.5v3C0 6.331.67 7 1.502 7h4.004c.832 0 1.502-.669 1.502-1.5v-3c0-.831-.67-1.5-1.502-1.5zm.062 1c1.692.2 2.848.13 3.88 0 .3-.038.563.26.563.563v2.874c0 .303-.262.524-.563.563a15.109 15.109 0 01-3.88 0c-.3-.038-.563-.26-.563-.563V2.563c0-.302.262-.597.563-.562z" style="marker:none" overflow="visible" color="#000" fill="#474747"/>
    </svg>
  );
};

const AdwPreferencesdesktopkeyboardshortcutssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencesdesktopkeyboardshortcutssymbolic;
