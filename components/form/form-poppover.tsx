
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Button from "../Button"

interface FormPopoverProps {
    children: React.ReactNode
    sideOffset?: number
    side?: "top" | "bottom" | "left" | "right"
    align?: "start" | "center" | "end"
}


export const FormPopover = ({
    children,
    sideOffset = 0,
    side = "top",
    align = "center",
}:FormPopoverProps) => {

    return (
			<Popover>
				<PopoverTrigger asChild>{children}</PopoverTrigger>
				<PopoverContent
					sideOffset={sideOffset}
					side={side}
					align={align}
					className="bg-neutral-600 p-4 rounded-lg shadow-lg border-neutral-900"
				>
					
				</PopoverContent>
			</Popover>
		);
}