"use client";

import { forwardRef, createContext, useContext, useState } from "react";
import { ChevronDown } from "lucide-react";

// Utility function to conditionally join classNames
const cn = (...classes) => classes.filter(Boolean).join(" ");

const SelectContext = createContext({});

const Select = ({ children, value, onValueChange, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState(
    value || defaultValue || ""
  );

  const handleValueChange = (newValue) => {
    setSelectedValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <SelectContext.Provider
      value={{ value: selectedValue, onValueChange: handleValueChange }}
    >
      {children}
    </SelectContext.Provider>
  );
};

const SelectTrigger = forwardRef(({ className, children, ...props }, ref) => {
  const { value } = useContext(SelectContext);

  return (
    <button
      ref={ref}
      className={cn(
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = ({ placeholder, className }) => {
  const { value } = useContext(SelectContext);

  return (
    <span className={cn("text-sm", className)}>
      {value ? value : placeholder}
    </span>
  );
};

const SelectContent = forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
          position === "popper" && "translate-y-1",
          className
        )}
        {...props}
      >
        <div className="p-1">{children}</div>
      </div>
    );
  }
);
SelectContent.displayName = "SelectContent";

const SelectItem = forwardRef(
  ({ className, children, value, ...props }, ref) => {
    const { onValueChange } = useContext(SelectContext);

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          className
        )}
        onClick={() => onValueChange?.(value)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SelectItem.displayName = "SelectItem";

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
