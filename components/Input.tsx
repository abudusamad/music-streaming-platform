import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";


export interface InputProps 
    extends React.InputHTMLAttributes<HTMLInputElement> {}


const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type,
    disabled,
    ...props
}, ref) => {
    return (
        <input
            type={type}
            className={twMerge(
                `
                flex
                w-full 
                rounded-2xl 
                bg-neutral-700
                border
                border-transparent
                px-3 
                py-3
                text-sm
                file:border-0
                file:bg-transparent
                file:font-medium
                file:text-sm
                placeholder-neutral-400
                disabled:cursor-not-allowed 
                disabled:opacity-50
                focus:outline-none
              `,
                disabled && "opacity-75 cursor-not-allowed",
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        
        
        />

    )

})

Input.displayName = "Input";

export default Input;