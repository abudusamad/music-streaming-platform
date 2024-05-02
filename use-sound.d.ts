declare module "use-sound" {
	import { Howl } from "howler";

	interface HookOptions {
		volume?: number;
		playbackRate?: number;
		interrupt?: boolean;
		soundEnabled?: boolean;
		sprite?: { [key: string]: [number, number] };
		onplay?: () => void;
		onpause?: () => void;
		onend?: () => void;
		onload?: () => void;
		format?: string[];
	}

	interface ExposedData extends HookOptions {
		// Add any additional properties specific to ExposedData here
	}

	type PlayFunction = (options?: PlayOptions) => void;

	interface PlayOptions {
		id?: string;
		forceSoundEnabled?: boolean;
		playbackRate?: number;
		// Add any additional properties specific to PlayOptions here
	}

	interface PlayExposedData extends ExposedData {
		stop: (id?: string) => void;
		pause: (id?: string) => void;
		duration: number | null;
		sound: Howl | null;
	}

	type UseSoundTuple = [PlayFunction, PlayExposedData];

	const useSound: (src: string, options?: HookOptions) => UseSoundTuple;

	export default useSound;
}
