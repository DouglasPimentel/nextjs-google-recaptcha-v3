import React from "react";
import { cn } from "#/lib/utils";

type ContainerProps = React.ComponentProps<"div">;

function Container({
  className,
  children,
  ...props
}: ContainerProps): React.JSX.Element {
  return (
    <div className={cn("max-w-5xl mx-auto px-8", className)} {...props}>
      {children}
    </div>
  );
}

export { Container };
