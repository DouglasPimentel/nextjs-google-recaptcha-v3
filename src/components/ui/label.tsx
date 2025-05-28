import React from "react";
import { cn } from "#/lib/utils";

type LabelProps = React.ComponentProps<"label">;

function Label({
  className,
  children,
  ...props
}: LabelProps): React.JSX.Element {
  return (
    <label className={cn("text-sm font-bold", className)} {...props}>
      {children}
    </label>
  );
}

export { Label };
