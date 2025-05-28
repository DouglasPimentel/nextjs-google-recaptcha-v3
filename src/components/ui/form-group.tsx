import React from "react";
import { cn } from "#/lib/utils";

type FormGroupProps = React.ComponentProps<"div">;

function FormGroup({
  className,
  children,
  ...props
}: FormGroupProps): React.JSX.Element {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      {children}
    </div>
  );
}

export { FormGroup };
