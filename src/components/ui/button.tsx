import React from "react";
import { cn } from "#/lib/utils";

type ButtonProps = React.ComponentProps<"button">;

function Button({
  className,
  children,
  ...props
}: ButtonProps): React.JSX.Element {
  return (
    <button
      className={cn(
        "h-12 px-8 text-base text-white font-bold bg-black border border-black cursor-pointer",
        "transition-colors duration-300 ease-in-out hover:bg-white hover:text-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
