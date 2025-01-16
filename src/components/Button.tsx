import React,{ ReactElement } from "react";

interface ButtonProps   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: (e:any) => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantClasses = {
    "primary": "bg-gradient-to-tl from-zinc-800 via-zinc-700 to-transparent text-transparent font-semibold text-white/50",
    "secondary": "bg-gray-800/20 backdrop-blur-md border border-gray-700/50 shadow-lg text-white",
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, text, startIcon, onClick, fullWidth, loading, ...props }, ref) => {
      return (
        <button
          ref={ref} // Forwarding the ref to the button
          onClick={onClick}
          className={
            variantClasses[variant] +
            " " +
            defaultStyles +
            `${fullWidth ? " w-full flex justify-center items-center" : ""} ${
              loading ? "opacity-45" : ""
            }`
          }
          disabled={loading}
          {...props}
        >
          <div className="pr-2">{startIcon}</div>
          {text}
        </button>
      );
    }
  );