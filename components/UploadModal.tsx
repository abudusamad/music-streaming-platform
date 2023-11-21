import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import toast from "react-hot-toast";
import Button from "./Button";

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
    }
        const onSubmit: SubmitHandler<FieldValues> = async (values) => {
            try {
                setIsLoading(true);

                uploadModal.onClose();
                    
                }catch(error) {
                    toast.error("Something went wrong");
            }
            finally {
                setIsLoading(false);
            }
    }
	return (
		<Modal
			title="Add a song"
			description="Upload an mp3 file to add to your playlist."
			isOpen={uploadModal.isOpen}
			onChange={onChange}
		>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                <input
                    type="text"
                    placeholder="Author"
                    className="rounded-lg border border-gray-300 p-2"
                    {...register("author", { required: true })}
                />
                <input
                    type="text"
                    placeholder="Title"
                    className="rounded-lg border border-gray-300 p-2"
                    {...register("title", { required: true })}
                />
                <input
                    type="file"
                    className="rounded-lg border border-gray-300 p-2"
                    {...register("song", { required: true })}
                />
                <input
                    type="file"
                    className="rounded-lg border border-gray-300 p-2"
                    {...register("image", { required: true })}
                />
                <Button
                    type="submit"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white"
                    disabled={isLoading}
                >
                    Upload
                </Button>
            </form>
		</Modal>
	);
};

export default UploadModal;
