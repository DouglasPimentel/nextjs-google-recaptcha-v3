import React from "react";
import { cn } from "#/lib/utils";

type InputProps = React.ComponentProps<"input">;

function Input({ className, ...props }: InputProps): React.JSX.Element {
  return (
    <input
      className={cn("w-full h-12 px-4 border border-solid", className)}
      {...props}
    />
  );
}

export { Input };
