import React from "react";
import { cn } from "#/lib/utils";

type TextareaProps = React.ComponentProps<"textarea">;

function Textarea({ className, ...props }: TextareaProps): React.JSX.Element {
  return (
    <textarea
      className={cn("p-4 border border-solid", className)}
      rows={4}
      cols={4}
      {...props}
    />
  );
}

export { Textarea };
