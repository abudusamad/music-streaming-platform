import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

const UploadModal = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const uploadModal = useUploadModal();
	const supabaseClient = useSupabaseClient();
	const { user } = useUser();

	const { register, handleSubmit, reset } = useForm<FieldValues>({
		defaultValues: {
			author: "",
			title: "",
			song: null,
			image: null,
		},
	});

	const onChange = (open: boolean) => {
		if (!open) {
			reset();
			uploadModal.onClose();
		}
	};
	const onSubmit: SubmitHandler<FieldValues> = async (values) => {
		try {
			setIsLoading(true);

			uploadModal.onClose();
		} catch (error) {
			toast.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<Modal
			title="Add a song"
			description="Upload an mp3 file to add to your playlist."
			isOpen={uploadModal.isOpen}
			onChange={onChange}
		>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
				<Input
					id="title"
					disabled={isLoading}
					placeholder="Song Title"
					{...register("title", { required: true })}
				/>
				<Input
					id="author"
					disabled={isLoading}
					placeholder="Author"
					{...register("author", { required: true })}
				/>
				<div>
					<div className="pb-1 font-semibold">Select a song file</div>
					<Input
						placeholder="test"
						disabled={isLoading}
						type="file"
						accept=".mp3"
						id="song"
						{...register("song", { required: true })}
					/>
				</div>
				<div>
					<div className="pb-1 font-semibold">Select an image</div>
					<Input
						placeholder="test"
						disabled={isLoading}
						type="file"
						accept="image/*"
						id="image"
						{...register("image", { required: true })}
					/>
				</div>
                <Button type="submit" disabled={isLoading}
                    className="bg-gradient-to-r from-emerald-800 t0-emerald-500"
                
                >
					Create
				</Button>
			</form>
		</Modal>
	);
};

export default UploadModal;
