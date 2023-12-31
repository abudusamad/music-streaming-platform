
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface FormPopoverProps {
    children: React.ReactNode
    sideOffset?: number
    side?: "top" | "bottom" | "left" | "right"
	align?: "start" | "center" | "end"
	content:React.ReactNode
}


export const FormPopover = ({
    children,
    sideOffset = 0,
    side = "bottom",
	align = "end",
	content
}:FormPopoverProps) => {

    return (
			<Popover>
				<PopoverTrigger asChild>{children}</PopoverTrigger>
				<PopoverContent
					sideOffset={sideOffset}
					side={side}
					align={align}
					className="w-60 rounded-md outline-none border-0 bg-neutral-700 text-white ml-5"
			>
				{content}
					
				</PopoverContent>
			</Popover>
		);
}