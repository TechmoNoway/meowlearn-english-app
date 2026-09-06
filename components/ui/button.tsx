import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-extrabold transition duration-200 disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        locked: "border bg-[#eee8de] text-[#9c9a95]",
        default: "border bg-white text-[#18344f] shadow-sm hover:-translate-y-0.5 hover:border-[#18344f]/30 hover:shadow-md",
        primary: "bg-[#18344f] text-white shadow-[0_7px_18px_rgba(24,52,79,0.2)] hover:-translate-y-0.5 hover:bg-[#214766]",
        primaryOutline: "border border-[#18344f]/15 bg-white text-[#18344f] hover:border-[#18344f]/35 hover:bg-[#f8f4ec]",
        secondary: "bg-[#ff6b4a] text-white shadow-[0_7px_18px_rgba(255,107,74,0.22)] hover:-translate-y-0.5 hover:bg-[#f45c3a]",
        secondaryOutline: "border border-[#ff6b4a]/25 bg-[#fff1ec] text-[#dc4a2b] hover:bg-[#ffe7df]",
        danger: "bg-[#cf4050] text-white hover:bg-[#b93243]",
        dangerOutline: "border border-[#cf4050]/20 bg-white text-[#b93243] hover:bg-[#fff0f2]",
        super: "bg-[#2f9d92] text-white hover:bg-[#27877e]",
        superOutline: "border border-[#2f9d92]/20 bg-[#e9f7f4] text-[#237c73] hover:bg-[#ddf2ee]",
        ghost: "bg-transparent text-[#53697d] hover:bg-[#18344f]/[0.06] hover:text-[#18344f]",
        sidebar: "bg-transparent text-white/70 hover:bg-white/10 hover:text-white",
        sidebarOutline: "bg-white text-[#18344f] shadow-lg",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-[52px] px-7",
        icon: "h-10 w-10 p-0",
        rounded: "h-12 w-12 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean; }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
