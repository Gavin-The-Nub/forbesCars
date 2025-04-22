import { forwardRef } from "react";

// Utility function to conditionally join classNames
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Badge = forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          variant === "default" &&
            "border-transparent bg-primary text-primary-foreground",
          variant === "secondary" &&
            "border-transparent bg-secondary text-secondary-foreground",
          variant === "destructive" &&
            "border-transparent bg-destructive text-destructive-foreground",
          variant === "outline" && "text-foreground",
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
