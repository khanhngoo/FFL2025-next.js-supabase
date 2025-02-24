// components/ui/radio-group.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface RadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, children, value, onValueChange, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col space-y-2", className)} {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement<RadioGroupItemProps>(child)) {
            return React.cloneElement(child, {
              checked: child.props.value === value,
              onChange: () => onValueChange(child.props.value as string),
            });
          }
          return child;
        })}
      </div>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, checked, children, ...props }, ref) => {
    return (
      <label className="flex items-start space-x-3 py-2">
        <input 
          type="radio" 
          ref={ref} 
          className={cn(
            "mt-1 h-4 w-4 rounded-full border border-[#d9d9d9] text-[#2529ff]",
            "focus:ring-[#2529ff] focus:ring-offset-0",
            className
          )} 
          checked={checked} 
          {...props} 
        />
        <span className="text-sm text-[#61646b]">{children}</span>
      </label>
    );
  }
);

RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };