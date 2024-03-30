import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  setShow: (show: boolean) => void;
}

export function Sidebar({ show, setShow, children, className, ...props }: Props) {
  return (
    <div
      className={` ${show == true ? "translate-x-0" : "-translate-x-full"} absolute transition-all duration-1000 left-0 top-0 bottom-0 w-1/2 ${className}`}
      {...props}
    >
      <div className="flex">
        <button className="ml-auto mr-4 mt-4 text-gray-400" onClick={() => setShow(false)}>X</button>
      </div>
      {children}
    </div>
  );
}
