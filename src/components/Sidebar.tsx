import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLDivElement> {
  show: boolean;
  setShow: (show: boolean) => void;
}

export function Sidebar({ show, setShow, children, className }: Props) {
  return (
      <div
        className={` ${show == true ? "translate-x-0" : "-translate-x-full"} absolute transition-all duration-1000 left-0 top-0 bottom-0 w-1/2 ${className}`}
      >
        <button onClick={() => setShow(false)}>Close</button>
        {children}
      </div>
  );
}
