import { forwardRef } from "react";

// Utility function to conditionally join classNames
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Label = forwardRef(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  );
});

Label.displayName = "Label";

export { Label };
