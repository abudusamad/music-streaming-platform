import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

interface HintProps {
	children: React.ReactNode;
	description: string;
	side?: "left" | "right" | "top" | "bottom";
	sideOffset?: number;
}

export const Hint = ({
	children,
	description,
	side = "bottom",
	sideOffset = 0,
}: HintProps) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={0}>
				<TooltipTrigger>{children}</TooltipTrigger>

				<TooltipContent sideOffset={sideOffset} side={side} className="text-sm">
					{description}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
