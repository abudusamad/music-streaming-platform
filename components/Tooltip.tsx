
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipMenuProps {
    label: string;
}

export function TooltipMenu({ label }: TooltipMenuProps) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
				</TooltipTrigger>
				<TooltipContent>
				{label}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
